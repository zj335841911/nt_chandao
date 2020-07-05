import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ProjectMainToolbarService from './project-main-toolbar-portlet-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet5部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ProjectMainToolbarPortletBase}
 */
export class ProjectMainToolbarPortletBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {ProjectMainToolbarService}
     * @memberof ProjectMainToolbarPortletBase
     */
    public service: ProjectMainToolbarService = new ProjectMainToolbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectMainToolbarPortletBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectMainToolbarPortletBase
     */
    protected appDeName: string = 'project';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_uad3d648_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectUIService  = new ProjectUIService();
        curUIService.Project_ProjectPutoff(datas,contextJO, paramJO,  $event, xData,this,"Project");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u6e94857_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectUIService  = new ProjectUIService();
        curUIService.Project_ProjectSuspend(datas,contextJO, paramJO,  $event, xData,this,"Project");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u2db4a08_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectUIService  = new ProjectUIService();
        curUIService.Project_ProjectActivate(datas,contextJO, paramJO,  $event, xData,this,"Project");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u698efc2_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectUIService  = new ProjectUIService();
        curUIService.Project_ProjectClose(datas,contextJO, paramJO,  $event, xData,this,"Project");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u209627c_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectUIService  = new ProjectUIService();
        curUIService.Project_ProjectEdit(datas,contextJO, paramJO,  $event, xData,this,"Project");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u098e0df_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RemoveAndExit(datas, contextJO,paramJO,  $event, xData,this,"Project");
    }

    /**
     * 删除
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProjectMainDashboardViewBase
     */
    public RemoveAndExit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.removeAndExit instanceof Function) {
            xData.removeAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        } else if (_this.removeAndExit && _this.removeAndExit instanceof Function) {
            _this.removeAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        }
    }

    /**
     * 长度
     *
     * @type {number}
     * @memberof ProjectMainToolbar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ProjectMainToolbar
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof ProjectMainToolbarBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet5_uad3d648_click",
        text: "延期",
        iconcls: "fa fa-calendar-o",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet5_u6e94857_click",
        text: "挂起",
        iconcls: "fa fa-pause",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet5_u2db4a08_click",
        text: "激活",
        iconcls: "fa fa-plug",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet5_u698efc2_click",
        text: "关闭",
        iconcls: "fa fa-power-off",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet5_u209627c_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet5_u098e0df_click",
        text: "删除",
        iconcls: "fa fa-remove",
        icon: "",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof ProjectMainToolbarBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet5_uad3d648_click')){
            this.dashboard_sysportlet5_uad3d648_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u6e94857_click')){
            this.dashboard_sysportlet5_u6e94857_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u2db4a08_click')){
            this.dashboard_sysportlet5_u2db4a08_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u698efc2_click')){
            this.dashboard_sysportlet5_u698efc2_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u209627c_click')){
            this.dashboard_sysportlet5_u209627c_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet5_u098e0df_click')){
            this.dashboard_sysportlet5_u098e0df_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ProjectMainToolbarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProjectMainToolbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProjectMainToolbarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof ProjectMainToolbarBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return 'auto';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ProjectMainToolbarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProjectMainToolbarBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ProjectMainToolbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProjectMainToolbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
