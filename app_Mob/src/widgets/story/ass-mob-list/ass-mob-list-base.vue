<template>
    <div  class="app-mob-mdctrl story-dashboard_sysportlet1_list ">
        <div v-if="listMode==='LISTEXPBAR'">
            <van-sidebar v-model="listItem" @change="switchView">
                <van-sidebar-item class="app-mob-list-item" v-for="item in items" :key="item.srfkey" :title='item.srfmajortext'/>
            </van-sidebar>
        </div>
        <div v-else class="app-mob-mdctrl-dashboard_sysportlet1_list">
            <ion-list class="items">
                <template v-if="controlStyle != 'SWIPERVIEW' ">
                    <ion-item-sliding v-for="(item, index) in items" :key="index" class="app-mob-mdctrl-item">
                        <div style="width:100%;">
                        <layout_dashboard_sysportlet1_list_itempanel :context="{}" :viewparams="{}" :item="item"></layout_dashboard_sysportlet1_list_itempanel>
                        </div>
                    </ion-item-sliding>
                </template>
                <template v-else-if="controlStyle != 'LISTVIEW' ">
                        <ion-item-sliding v-for="(item, index) in items" :key="index" class="app-mob-mdctrl-item">
                            <div style="width:100%;">
                            <layout_dashboard_sysportlet1_list_itempanel :context="{}" :viewparams="{}" :item="item"></layout_dashboard_sysportlet1_list_itempanel>
                            </div>
                        </ion-item-sliding>
                    </template>
                    <template v-else-if="controlStyle === 'SWIPERVIEW'">
                        <app-list-swipe :items="items"></app-list-swipe>
                    </template>
            </ion-list>
        </div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import StoryService from '@/app-core/service/story/story-service';
import AssMOBService from '@/app-core/ctrl-service/story/ass-mob-list-service';

import StoryUIService from '@/ui-service/story/story-ui-action';



@Component({
    components: {
    }
})
export default class AssMOBBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AssMOB
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof AssMOB
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof AssMOB
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AssMOB
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AssMOB
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof AssMOB
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof AssMOB
     */
    protected getControlType(): string {
        return 'LIST'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof AssMOB
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  AssMOBBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args)['data'];
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {AssMOBService}
     * @memberof AssMOB
     */
    protected service: AssMOBService = new AssMOBService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof AssMOB
     */
    protected appEntityService: StoryService = new StoryService();

    /**
     * 界面UI服务对象
     *
     * @type {StoryUIService}
     * @memberof AssMOBBase
     */  
    public deUIService:StoryUIService = new StoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AssMOB
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AssMOBBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AssMOBBase
     */
    public getData(): any {
        return null;
    }

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof AssMOB
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof AssMOB
     */
    @Prop() protected fetchAction!: string;

    /**
     * 列表数组
     *
     * @type {Array<any>}
     * @memberof AssMOB
     */
    public items: Array<any> = [];

    /**
     * 列表类型
     *
     * @type {string}
     * @memberof AssMOB
     */
    @Prop({default:'LIST'}) protected listMode?: 'LISTEXPBAR' | 'LIST' | string;

    /**
     * 列表选中项的索引
     *
     * @type {string}
     * @memberof AssMOB
     */
    public listItem: number = 0;

    /**
     * 分页大小
     *
     * @type {number}
     * @memberof AssMOB
     */
    public pageSize: number = 25;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof AssMOB
     */
    public pageTotal: number = 0;

    /**
     * 当前页数
     *
     * @type {number}
     * @memberof AssMOB
     */
    public pageNumber: number = 0;

    /**
     * 部件样式
     *
     * @type {string}
     * @memberof AssMOB
     */
    @Prop({default: ''}) protected controlStyle!: string;

    /**
     * vue生命周期created
     *
     * @memberof AssMOB
     */
    public created() {
        this.handleCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof AssMOB
     */
    public handleCreated() {
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.load(Object.assign(data, { page: this.pageNumber, size: this.pageSize }), "");
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof AssMOB
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AssMOB
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 列表切换回调
     * @param {number} listIndex
     * @memberof AssMOB
     */
    public switchView(listIndex:number){
        this.items.findIndex((item,index)=>{
            if(index === listIndex){
                this.$emit('selectionchange', item);
            }
        })
    }

    /**
     * 数据加载
     *
     * @protected
     * @param {*} data
     * @param {*} type
     * @returns {Promise<any>}
     * @memberof AssMOB
     */
    protected async load(data: any, type: any): Promise<any> {
        const response: any = await this.service.search(this.fetchAction, this.context, data, this.showBusyIndicator);
        if (response && response.status === 200) {
            let datelist = response.data.records;
            this.formatdate(datelist);
            this.$emit("load",this.items);
        } else if (response && response.status !== 401) {
            const { data: _data } = response;
            this.$notice.error(_data.message)
        }
    }

    /**
     * 格式化数据
     *
     * @param {*} datelist
     * @memberof IBizChartViewController
     */
    public formatdate(datelist: any) {
        this.items = datelist;
    }

}
</script>

<style lang='less'>
@import './ass-mob-list.less';
</style>