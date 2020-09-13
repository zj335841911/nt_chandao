<template>
    <ion-row>
        <ion-list class='app-mob-portlet  '>
            <ion-list-header class='app-mob-portlet__header'><ion-input v-if="isEditTitle" value="图片滑动"></ion-input>图片滑动 <div class="portlet__header_right"><ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon></div></ion-list-header>
            <div class="edit_title_btn" v-if="isEditTitle"><ion-button>确认</ion-button><ion-button>取消</ion-button></div>
                <view_db_appmenu1_appmenu
    :viewState="viewState"
    viewName="AppPortalView"  
    :viewparams="viewparams" 
    :context="context" 
    :showBusyIndicator="true" 
    controlStyle="SWIPERVIEW"   
    name="db_appmenu1_appmenu"  
    ref='db_appmenu1_appmenu' 
    @closeview="closeView($event)">
</view_db_appmenu1_appmenu>
        </ion-list>
        <ion-select ref="select" v-show="false"  @ionChange="change" interface="action-sheet" :cancel-text="$t('app.button.cancel')">
            <ion-select-option  v-for="option of items" :key="option.value"  :value="option.value">{{option.text}}</ion-select-option>
        </ion-select>
    </ion-row>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ImgswipeStyleMenuService from '@/app-core/ctrl-service/app/imgswipe-style-menu-portlet-service';




@Component({
    components: {
    }
})
export default class ImgswipeStyleMenuBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ImgswipeStyleMenu
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ImgswipeStyleMenu
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ImgswipeStyleMenu
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ImgswipeStyleMenu
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ImgswipeStyleMenu
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ImgswipeStyleMenu
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ImgswipeStyleMenu
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ImgswipeStyleMenu
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();



    /**
     * 建构部件服务对象
     *
     * @type {ImgswipeStyleMenuService}
     * @memberof ImgswipeStyleMenu
     */
    protected service: ImgswipeStyleMenuService = new ImgswipeStyleMenuService({$store:this.$store});
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ImgswipeStyleMenu
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ImgswipeStyleMenu
     */    
    protected counterServiceArray:Array<any> = [];


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ImgswipeStyleMenu
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ImgswipeStyleMenu
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ImgswipeStyleMenu
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ImgswipeStyleMenu
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((name: string) => {
                    this.viewState.next({ tag: name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ImgswipeStyleMenu
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ImgswipeStyleMenu
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof ImgswipeStyleMenu
     */
    public isEditTitle = false;

    /**
     * 门户行为组
     *
     * @memberof ImgswipeStyleMenu
     */
    public items = [{text:'重命名',value:'rename'},{text:"删除",value:"delete",style:"color: red;"}]

    /**
     * 门户点击行为菜单
     *
     * @memberof ImgswipeStyleMenu
     */
    public open() {
        let select :any= this.$refs['select'];
        if(select){
            setTimeout(() => {
                select.open();
            }, 1);
        }
    }

    /**
     * 门户点击行为
     *
     * @memberof ImgswipeStyleMenu
     */
    public change(value:any) {
        if(value.detail.value){
            if(value.detail.value == 'rename' ){
                this.isEditTitle = true;
            }
        }
        setTimeout(() => {
                let select :any = this.$refs['select'];
            if (select) {
                select.value = null;
            }
        }, 1);
    }

}
</script>

<style lang='less'>
@import './imgswipe-style-menu-portlet.less';
</style>