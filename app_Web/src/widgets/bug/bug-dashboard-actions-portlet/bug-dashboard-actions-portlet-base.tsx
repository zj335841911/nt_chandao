import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugDashboardActionsService from './bug-dashboard-actions-portlet-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet5部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {BugDashboardActionsPortletBase}
 */
export class BugDashboardActionsPortletBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {BugDashboardActionsService}
     * @memberof BugDashboardActionsPortletBase
     */
    public service: BugDashboardActionsService = new BugDashboardActionsService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugDashboardActionsPortletBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u1d352f4_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:BugUIService  = new BugUIService();
        curUIService.Bug_MainEdit(datas,contextJO, paramJO,  $event, xData,this,"Bug");
    }

    /**
     * 长度
     *
     * @type {number}
     * @memberof BugDashboardActions
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof BugDashboardActions
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof BugDashboardActionsBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet5_u1d352f4_click",
        actionName:"编辑",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof BugDashboardActionsBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet5_u1d352f4_click')){
            this.dashboard_sysportlet5_u1d352f4_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof BugDashboardActionsBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof BugDashboardActionsBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof BugDashboardActionsBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof BugDashboardActionsBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof BugDashboardActionsBase
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
     * @memberof BugDashboardActionsBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof BugDashboardActionsBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
