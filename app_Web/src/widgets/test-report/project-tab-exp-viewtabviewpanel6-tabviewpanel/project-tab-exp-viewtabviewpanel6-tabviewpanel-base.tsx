import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import ProjectTabExpViewtabviewpanel6Service from './project-tab-exp-viewtabviewpanel6-tabviewpanel-service';
import TestReportUIService from '@/uiservice/test-report/test-report-ui-service';


/**
 * tabviewpanel6部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ProjectTabExpViewtabviewpanel6TabviewpanelBase}
 */
export class ProjectTabExpViewtabviewpanel6TabviewpanelBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProjectTabExpViewtabviewpanel6TabviewpanelBase
     */
    protected controlType: string = 'TABVIEWPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {ProjectTabExpViewtabviewpanel6Service}
     * @memberof ProjectTabExpViewtabviewpanel6TabviewpanelBase
     */
    public service: ProjectTabExpViewtabviewpanel6Service = new ProjectTabExpViewtabviewpanel6Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof ProjectTabExpViewtabviewpanel6TabviewpanelBase
     */
    public appEntityService: TestReportService = new TestReportService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTabExpViewtabviewpanel6TabviewpanelBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTabExpViewtabviewpanel6TabviewpanelBase
     */
    protected appDeLogicName: string = '测试报告';

    /**
     * 界面UI服务对象
     *
     * @type {TestReportUIService}
     * @memberof ProjectTabExpViewtabviewpanel6Base
     */  
    public appUIService:TestReportUIService = new TestReportUIService(this.$store);

    /**
     * 导航模式下项是否激活
     *
     * @type {*}
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    @Prop()
    public expActive!: any;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否被激活
     *
     * @type {boolean}
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public isActivied: boolean = true;

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public localContext: any = null;

    /**
     * 局部视图参数
     *
     * @type {*}
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public localViewParam: any = null;

    /**
     * 传入上下文
     *
     * @type {string}
     * @memberof TabExpViewtabviewpanel
     */
    public viewdata: string = JSON.stringify(this.context);

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof PickupViewpickupviewpanel
     */
    public viewparam: string = JSON.stringify(this.viewparams);

    /**
     * 视图面板过滤项
     *
     * @type {string}
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public navfilter: string = "";
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProjectTabExpViewtabviewpanel6
     */    
    public afterCreated(){
        this.initNavParam();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.context.clearAll();
                Object.assign(this.context, data);
                this.$forceUpdate();
                this.initNavParam();
            });
        }
    }

    /**
     * 初始化导航参数
     *
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public initNavParam(){
        if(!Object.is(this.navfilter,"")){
            Object.assign(this.viewparams,{[this.navfilter]:this.context['majorentity']})
        }
        if(this.localContext && Object.keys(this.localContext).length >0){
            let _context:any = this.$util.computedNavData({},this.context,this.viewparams,this.localContext);
            Object.assign(this.context,_context);
        }
        if(this.localViewParam && Object.keys(this.localViewParam).length >0){
            let _param:any = this.$util.computedNavData({},this.context,this.viewparams,this.localViewParam);
            Object.assign(this.viewparams,_param);
        }
        this.viewdata =JSON.stringify(this.context);
        this.viewparam = JSON.stringify(this.viewparams);
    }

    /**
     * 视图数据变化
     *
     * @memberof  ProjectTabExpViewtabviewpanel6
     */
    public viewDatasChange($event:any){
        this.$emit('viewpanelDatasChange',$event);
    }

    /**
     * vue 生命周期
     *
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProjectTabExpViewtabviewpanel6
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }
}