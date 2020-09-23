<template>
    <ion-row>
        <ion-list class='app-mob-portlet ibzmyterritory-dashboard_container2 '>
            <ion-list-header class='app-mob-portlet__header'>
                <ion-input v-if="isEditTitle" :value="editTitle" @ionChange="titleChange"></ion-input>
                <span v-if="!isEditTitle"><span v-if="customizeTitle">{{customizeTitle}}</span><span v-else></span></span>
                <div class="portlet__header_right">
                    <ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon>
                </div>
            </ion-list-header>
            <div class="edit_title_btn" :style="edit_title_btn"><ion-button @click="onConfirmClick(false)">取消</ion-button><ion-button @click="onConfirmClick(true)">确认</ion-button></div>
                <div>dashboard_container2类型CONTAINER不提供内容输出</div>
        </ion-list>
        <ion-select ref="select" v-show="false"  @ionChange="actionBarClick" interface="action-sheet" :cancel-text="$t('app.button.cancel')">
            <ion-select-option  v-for="option of actionBarModelData" :key="option.viewlogicname"  :value="option.viewlogicname">{{option.actionName}}</ion-select-option>
        </ion-select>
    </ion-row>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import IbzMyTerritoryService from '@/app-core/service/ibz-my-territory/ibz-my-territory-service';
import MobDashboardViewdashboard_container2Service from '@/app-core/ctrl-service/ibz-my-territory/mob-dashboard-viewdashboard-container2-portlet-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzMyTerritoryUIService from '@/ui-service/ibz-my-territory/ibz-my-territory-ui-action';



@Component({
    components: {
    }
})
export default class MobDashboardViewdashboard_container2Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MobDashboardViewdashboard_container2
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MobDashboardViewdashboard_container2
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MobDashboardViewdashboard_container2
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MobDashboardViewdashboard_container2
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MobDashboardViewdashboard_container2
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MobDashboardViewdashboard_container2Base
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
     * @type {MobDashboardViewdashboard_container2Service}
     * @memberof MobDashboardViewdashboard_container2
     */
    protected service: MobDashboardViewdashboard_container2Service = new MobDashboardViewdashboard_container2Service({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MobDashboardViewdashboard_container2
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MobDashboardViewdashboard_container2Base
     */  
    public deUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MobDashboardViewdashboard_container2
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MobDashboardViewdashboard_container2
     */    
    protected counterServiceArray:Array<any> = [];


    /**
     * 是否为定制门户
     *
     * @type {string}
     * @memberof MyTaskMob
     */
    @Prop({default:false}) protected isCustomize?: boolean;

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MOBMyFavoriteStory
     */
    @Prop() protected customizeTitle?: string;

    /**
     * 操作栏模型数据
     *
     * @protected
     * @type {any[]}
     * @memberof MobDashboardViewdashboard_container2
     */
    protected actionBarModelData: any[] = [
    ];

    /**
     * 触发界面行为
     *
     * @protected
     * @param {*} $event
     * @memberof MobDashboardViewdashboard_container2
     */
    protected handleItemClick($event: any) {
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MobDashboardViewdashboard_container2
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MobDashboardViewdashboard_container2
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MobDashboardViewdashboard_container2
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MobDashboardViewdashboard_container2
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
     * @memberof MobDashboardViewdashboard_container2
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MobDashboardViewdashboard_container2
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof MobDashboardViewdashboard_container2
     */
    public isEditTitle = false;

    /**
     * 内置门户行为组
     *
     * @memberof MyTaskMob
     */
    public builtinItemS = [{actionName:'重命名',viewlogicname:'rename'},{actionName:"删除",viewlogicname:"delete"}]

    /**
     * 门户点击行为菜单
     *
     * @memberof MobDashboardViewdashboard_container2
     */
    public open() {
        let select :any= this.$refs['select'];
        if(select){
            setTimeout(() => {
                select.open();
            }, 1);
        }
    }

    get edit_title_btn(){
        return this.isEditTitle?'padding-bottom: 30px':'padding:0'
    }
    
    /**
     * 门户点击行为
     *
     * @memberof MobDashboardViewdashboard_container2
     */
    public actionBarClick(value:any) {
        if(value.detail.value){
            if(value.detail.value == 'rename' ){
                this.isEditTitle = true;
            }else if(value.detail.value == 'delete' ){
                this.$emit("enableCustomizedEvent",'delete',this.item)
            }
            else{
                this.handleItemClick(value.detail.value);
            }
        }
        let select :any = this.$refs['select'];
        if (select) {
            select.value = null;
        }
    }

    /**
     * 生命周期
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    public mounted() {
        if(this.isCustomize){
            this.actionBarModelData.push(...this.builtinItemS);
        }
    }

    /**
     * 定制项数据
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    @Prop() protected item: any;

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    get editTitle(){
        if(this.customizeTitle){
            return this.customizeTitle
        }
        return ''
    }

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    public reTitleValue = "";

    /**
     * 标题变更
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    titleChange(value:any){
        this.reTitleValue = value.detail.value;
    }

    /**
     * 重命名确认按钮
     *
     * @type {string}
     * @memberof MobDashboardViewdashboard_container2
     */
    public onConfirmClick(val:boolean) {
        if(val){
            this.$emit("enableCustomizedEvent",'rename',Object.assign(this.item,{customizeTitle:this.reTitleValue?this.reTitleValue:this.editTitle}),this.reTitleValue?this.reTitleValue:this.editTitle)
        }
        this.isEditTitle = false;
    }

}
</script>

<style lang='less'>
@import './mob-dashboard-viewdashboard-container2-portlet.less';
</style>