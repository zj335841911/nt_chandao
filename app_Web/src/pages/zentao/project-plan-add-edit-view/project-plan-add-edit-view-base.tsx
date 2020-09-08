import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ProjectAuthService from '@/authservice/project/project-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import ProjectUIService from '@/uiservice/project/project-ui-service';

/**
 * 项目编辑视图（计划添加）视图基类
 *
 * @export
 * @class ProjectPlanAddEditViewBase
 * @extends {EditViewBase}
 */
export class ProjectPlanAddEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectPlanAddEditViewBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProjectPlanAddEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProjectPlanAddEditViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectPlanAddEditViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;

    /**
     * 实体权限服务对象
     *
     * @type ProjectUIService
     * @memberof ProjectPlanAddEditViewBase
     */
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectPlanAddEditViewBase
	 */
    protected customViewNavContexts: any = {
        'PLAN': { isRawValue: false, value: 'planid' },
        'END': { isRawValue: false, value: 'end' },
        'PRODUCT': { isRawValue: false, value: 'product' },
        'BEGIN': { isRawValue: false, value: 'begin' },
        'BRANCH': { isRawValue: false, value: 'branch' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectPlanAddEditViewBase
	 */
    protected customViewParams: any = {
        'product': { isRawValue: false, value: 'product' },
        'plan': { isRawValue: false, value: 'planid' },
        'branch': { isRawValue: false, value: 'branch' },
        'end': { isRawValue: false, value: 'end' },
        'begin': { isRawValue: false, value: 'begin' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectPlanAddEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.planaddeditview.caption',
        srfTitle: 'entities.project.views.planaddeditview.title',
        srfSubTitle: 'entities.project.views.planaddeditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectPlanAddEditViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_form: { name: 'form', type: 'FORM' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProjectPlanAddEditView
     */
    public toolBarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: '保存并关闭', 'isShowCaption': true, 'isShowIcon': true, tooltip: '保存并关闭', iconcls: 'sx-tb-saveandclose', icon: '../sasrfex/images/default/icon_saveandclose.png', disabled: false, type: 'DEUIACTION', visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALSAVE', uiaction: { tag: 'SaveAndExit', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '396ab8c5ef500f859d6591e77f094ecd';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectPlanAddEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectPlanAddEditViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectPlanAddEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPlanAddEditViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.toolbar_deuiaction1_click(null, '', $event2);
        }
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPlanAddEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPlanAddEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectPlanAddEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.SaveAndExit(datas, contextJO,paramJO,  $event, xData,this,"Project");
    }

    /**
     * 保存并关闭
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProjectPlanAddEditViewBase
     */
    public SaveAndExit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.saveAndExit instanceof Function) {
            xData.saveAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        } else if (_this.saveAndExit && _this.saveAndExit instanceof Function) {
            _this.saveAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        }
    }

}