<template>
    <ion-row>
        <ion-list class='app-mob-portlet action-dashboard_sysportlet7 '>
            <ion-list-header class='app-mob-portlet__header'>
                <ion-input v-if="isEditTitle" :value="editTitle" @ionChange="titleChange"></ion-input>
                <span v-if="!isEditTitle"><span v-if="customizeTitle">{{customizeTitle}}</span><span v-else>动态</span></span>
                <div class="portlet__header_right">
                    <ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon>
                </div>
            </ion-list-header>
            <div class="edit_title_btn" style="edit_title_btn"><ion-button @click="onConfirmClick(false)">取消</ion-button><ion-button @click="onConfirmClick(true)">确认</ion-button></div>
            <action-allmob-mdview9 :_context="JSON.stringify(context)" :isChildView="true" :_viewparams="JSON.stringify(viewparams)" viewDefaultUsage="includedView" ></action-allmob-mdview9>
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
import ActionService from '@/app-core/service/action/action-service';
import AllTrendsMobService from '@/app-core/ctrl-service/action/all-trends-mob-portlet-service';

import ActionUIService from '@/ui-service/action/action-ui-action';



@Component({
    components: {
    }
})
export default class AllTrendsMobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AllTrendsMob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof AllTrendsMob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof AllTrendsMob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AllTrendsMob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AllTrendsMob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof AllTrendsMob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof AllTrendsMob
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof AllTrendsMob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  AllTrendsMobBase
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
     * @type {AllTrendsMobService}
     * @memberof AllTrendsMob
     */
    protected service: AllTrendsMobService = new AllTrendsMobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof AllTrendsMob
     */
    protected appEntityService: ActionService = new ActionService();

    /**
     * 界面UI服务对象
     *
     * @type {ActionUIService}
     * @memberof AllTrendsMobBase
     */  
    public deUIService:ActionUIService = new ActionUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AllTrendsMob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof AllTrendsMob
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
     * @memberof AllTrendsMob
     */
    protected actionBarModelData: any[] = [
    ];

    /**
     * 触发界面行为
     *
     * @protected
     * @param {*} $event
     * @memberof AllTrendsMob
     */
    protected handleItemClick($event: any) {
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AllTrendsMob
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AllTrendsMob
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof AllTrendsMob
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof AllTrendsMob
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
     * @memberof AllTrendsMob
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AllTrendsMob
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof AllTrendsMob
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
     * @memberof AllTrendsMob
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
     * @memberof AllTrendsMob
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
     * @memberof AllTrendsMob
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
     * @memberof AllTrendsMob
     */
    @Prop() protected item: any;

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof AllTrendsMob
     */
    get editTitle(){
        if(this.customizeTitle){
            return this.customizeTitle
        }
        return '动态'
    }

    /**
     * 定制标题
     *
     * @type {string}
     * @memberof AllTrendsMob
     */
    public reTitleValue = "";

    /**
     * 标题变更
     *
     * @type {string}
     * @memberof AllTrendsMob
     */
    titleChange(value:any){
        this.reTitleValue = value.detail.value;
    }

    /**
     * 重命名确认按钮
     *
     * @type {string}
     * @memberof AllTrendsMob
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
@import './all-trends-mob-portlet.less';
</style>