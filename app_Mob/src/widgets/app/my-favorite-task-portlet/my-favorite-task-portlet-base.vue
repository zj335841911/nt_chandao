<template>
    <ion-row>
        <ion-list class='app-mob-portlet task-dashboard_sysportlet4 '>
            <ion-list-header class='app-mob-portlet__header'><ion-input v-if="isEditTitle" value="我收藏的任务"></ion-input>我收藏的任务 <div class="portlet__header_right"><ion-icon v-if="!isEditTitle" name="ellipsis-horizontal-outline" @click="open"></ion-icon></div></ion-list-header>
            <div class="edit_title_btn" v-if="isEditTitle"><ion-button>确认</ion-button><ion-button>取消</ion-button></div>
                <task-favorite-mob-mdview9 :_context="JSON.stringify(context)" :isChildView="true" :_viewparams="JSON.stringify(viewparams)" viewDefaultUsage="includedView" ></task-favorite-mob-mdview9>
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
import TaskService from '@/app-core/service/task/task-service';
import MyFavoriteTaskService from '@/app-core/ctrl-service/task/my-favorite-task-portlet-service';

import TaskUIService from '@/ui-service/task/task-ui-action';



@Component({
    components: {
    }
})
export default class MyFavoriteTaskBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyFavoriteTask
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MyFavoriteTask
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyFavoriteTask
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyFavoriteTask
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyFavoriteTask
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyFavoriteTask
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyFavoriteTask
     */
    protected getControlType(): string {
        return 'PORTLET'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MyFavoriteTask
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MyFavoriteTaskBase
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
     * @type {MyFavoriteTaskService}
     * @memberof MyFavoriteTask
     */
    protected service: MyFavoriteTaskService = new MyFavoriteTaskService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof MyFavoriteTask
     */
    protected appEntityService: TaskService = new TaskService();

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof MyFavoriteTaskBase
     */  
    public deUIService:TaskUIService = new TaskUIService(this.$store);
    

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof Dashboard_sysportlet4Base
     */
    protected async dashboard_sysportlet4_u02f0175_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('task_ui_action');
        if (curUIService) {
            curUIService.Task_MyFavMore(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MyFavoriteTask
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MyFavoriteTask
     */    
    protected counterServiceArray:Array<any> = [];


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MyFavoriteTask
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MyFavoriteTask
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MyFavoriteTask
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MyFavoriteTask
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
     * @memberof MyFavoriteTask
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyFavoriteTask
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 门户名称编辑状态
     *
     * @memberof MyFavoriteTask
     */
    public isEditTitle = false;

    /**
     * 门户行为组
     *
     * @memberof MyFavoriteTask
     */
    public items = [{text:'重命名',value:'rename'},{text:"删除",value:"delete",style:"color: red;"}]

    /**
     * 门户点击行为菜单
     *
     * @memberof MyFavoriteTask
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
     * @memberof MyFavoriteTask
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
@import './my-favorite-task-portlet.less';
</style>