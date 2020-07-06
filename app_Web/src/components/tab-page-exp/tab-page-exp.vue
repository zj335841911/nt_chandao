<template>
    <div class="ibiz-page-tag" v-if="appService.navHistory.historyList.length > 0">
        <div class="move-btn move-left" @click="leftMove">
            <icon type="ios-arrow-back" />
        </div>
        <div ref="scrollBody" class="tags-body">
            <div ref="scrollChild" class="tags-container" :style="{left: styleLeft + 'px'}">
                <transition-group name="tags-transition">
                    <template v-for="(item, index) of appService.navHistory.historyList">
                        <Tag ref="tagElement" :key="index" :class="isActive(item) ? 'tag-is-active' : ''" :name="index" closable @click.native="changePage(item)" @on-close="onClose(item)">
                            <div class="tag-text">
                                <div :title="getCaption(item.meta.caption, item.meta.info)" style="max-width: 300px;">
                                    <i v-if="item.meta.iconCls && !Object.is(item.meta.iconCls, '')" :class="item.meta.iconCls"></i>
                                    <img v-else :src="item.meta.imgPath" class="text-icon" />
                                    &nbsp;{{getCaption(item.meta.caption, item.meta.info)}}
                                </div>
                            </div>
                        </Tag>
                    </template>
                </transition-group>
            </div>
        </div>
        <div class="move-btn move-right" @click="rightMove">
            <icon type="ios-arrow-forward" />
        </div>
        <Dropdown @on-click="doTagAction" placement="bottom-end" transfer-class-name="app-page-more">
            <div class="move-btn">
                <icon type="ios-more" />
            </div>
            <DropdownMenu slot="list">
                <template v-for="(action, index) of actions">
                    <DropdownItem :key="index" :name="action.value">{{$t(action.text)}}</DropdownItem>
                </template>
            </DropdownMenu>
        </Dropdown >
    </div >
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop, Watch } from 'vue-property-decorator';
import { Environment } from '../../environments/environment';
import { AppService } from '../../studio-core/service/app-service/AppService';
import { HistoryItem } from '../../studio-core/service/app-nav-history/AppNavHistoryBase';

@Component({})
export default class TabPageExp extends Vue {

    protected appService: AppService = new AppService();

    @Provide()
    public styleLeft: number = 0;

    @Provide()
    public actions: any[] = [{ text: 'app.tabpage.closeall', value: 'closeAll' }, { text: 'app.tabpage.closeother', value: 'closeOther' }];

    @Watch("$route")
    public onRouteChange(newVal: any) {
        this.moveToView(newVal);
        this.$emit('change', newVal);
    }

    public created() {
        Vue.prototype.$tabPageExp = this;
    }

    public getCaption(caption: any, info: any):any {
        return  info && !Object.is(info, '') ? `${this.$t(caption)} - ${info}` : this.$t(caption);
    }

    /**
     * 向左移动
     *
     * @memberof TabPageExp
     */
    public leftMove() {
        const scrollBody: any = this.$refs.scrollBody;
        const scrollChild: any = this.$refs.scrollChild;
        if (scrollBody && scrollChild && scrollChild.offsetWidth > scrollBody.offsetWidth) {
            if ((scrollChild.offsetWidth - scrollBody.offsetWidth + this.styleLeft) > 100) {
                this.styleLeft -= 100;
            } else {
                this.styleLeft = scrollBody.offsetWidth - scrollChild.offsetWidth;
            }
        }
    }

    /**
     * 向右移动
     *
     * @memberof TabPageExp
     */
    public rightMove() {
        if (this.styleLeft < 0) {
            if (this.styleLeft + 100 > 0) {
                this.styleLeft = 0;
            } else {
                this.styleLeft += 100;
            }
        }
    }

    /**
     * 是否选中
     *
     * @param {HistoryItem} item
     * @returns {boolean}
     * @memberof TabPageExp
     */
    public isActive(item: HistoryItem): boolean {
        if (Object.is(item.to.fullPath, this.$route.fullPath)) {
            return true;
        }
        return false;
    }

    /**
     * 关闭
     *
     * @param {HistoryItem} item
     * @memberof TabPageExp
     */
    public onClose(item: HistoryItem) {
        const appview = this.$store.getters['viewaction/getAppView'](item.tag);
        if (appview && appview.viewdatachange) {
            const title: any = this.$t('app.tabpage.sureclosetip.title');
            const content: any = this.$t('app.tabpage.sureclosetip.content');
            this.$Modal.confirm({
                title: title,
                content: content,
                onOk: () => {
                    this.appService.navHistory.remove(item);
                    if (this.appService.navHistory.historyList.length > 0) {
                        if (this.appService.navHistory.isRouteSame(item.to, this.$route)) {
                            this.$router.back();
                        }
                    } else {
                        this.$router.push('/');
                    }
                }
            });
        } else {
            this.appService.navHistory.remove(item);
            if (this.appService.navHistory.historyList.length > 0) {
                if (this.appService.navHistory.isRouteSame(item.to, this.$route)) {
                    this.$router.back();
                }
            } else {
                this.$router.push('/');
            }
        }
    }

    /**
     * 是否显示关闭
     *
     * @returns
     * @memberof TabPageExp
     */
    public isClose() {
        if (this.appService.navHistory.historyList.length > 1) {
            return true;
        }
        return false;
    }

    /**
     * 切换分页
     *
     * @param {*} item
     * @memberof TabPageExp
     */
    public changePage(item: HistoryItem) {
        this.gotoPage(item.to);
    }

    /**
     * 跳转页面
     *
     * @returns
     * @memberof TabPageExp
     */
    public gotoPage(page?: any) {
        if (page && this.appService.navHistory.historyList.length > 0) {
            if (Object.is(page.fullPath, this.$route.fullPath)) {
                return;
            }
            this.$router.push({ path: page.path, params: page.params, query: page.query });
        } else {
            const path: string | null = window.sessionStorage.getItem(Environment.AppName);
            if(path) {
                this.$router.push({ path: path });
            } else {
                this.$router.push('/');
            }
        }
    }

    /**
     * 设置当前页标题
     *
     * @param {*} caption
     * @memberof TabPageExp
     */
    public setCurPageCaption(caption: string, title: any, info: string) {
        if(this.$route.meta && (!Object.is(this.$route.meta.caption, caption))) {
            return;
        }
        this.appService.navHistory.setCaption({ route: this.$route, caption: title, info: info });
        setTimeout(() => {
            this.moveToView(this.$route);
        }, 1);
    }

    /**
     * 移动至指定页面标签
     *
     * @param {*} page
     * @memberof TabPageExp
     */
    public moveToView(page: any) {
        const pages: any[] = this.appService.navHistory.historyList;
        let leftWidth: number = 0;
        this.$nextTick(() => {
            pages.forEach((page, index) => {
                const tag: any = this.$refs.tagElement;
                if (!tag) {
                    return ;
                }
                const el = tag[index].$el;
                if (Object.is(page.fullPath, page.fullPath)) {
                    this.setLeft(el, leftWidth);
                } else {
                    leftWidth += el.offsetWidth;
                }
            });
        });
    }

    /**
     * 设置左侧边距
     *
     * @param {{ offsetWidth: number; }} tag
     * @param {number} leftWidth
     * @memberof TabPageExp
     */
    public setLeft(tag: { offsetWidth: number; }, leftWidth: number) {
        if (tag) {
            const scrollBody: any = this.$refs.scrollBody;
            if (leftWidth < -this.styleLeft) {
                this.styleLeft = -leftWidth;
            } else if ((leftWidth + tag.offsetWidth) > (scrollBody.offsetWidth - this.styleLeft)) {
                this.styleLeft -= (leftWidth + tag.offsetWidth) - (scrollBody.offsetWidth - this.styleLeft);
            }
        }
    }

    /**
     * 执行行为操作
     *
     * @param {string} name
     * @memberof TabPageExp
     */
    public doTagAction(name: string) {
        if (Object.is(name, 'closeAll')) {
            this.appService.navHistory.reset();
            this.gotoPage();
        } else if (Object.is(name, 'closeOther')) {
            this.appService.navHistory.removeOther({ to: this.$route });
            this.moveToView(this.$route);
        }
    }  
}
</script>

<style lang="less">
@import './tab-page-exp.less';
</style>