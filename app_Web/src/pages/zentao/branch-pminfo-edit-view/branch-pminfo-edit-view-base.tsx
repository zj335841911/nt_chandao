import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import BranchService from '@/service/branch/branch-service';
import BranchAuthService from '@/authservice/branch/branch-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import BranchUIService from '@/uiservice/branch/branch-ui-service';

/**
 * 平台管理视图基类
 *
 * @export
 * @class BranchPMInfoEditViewBase
 * @extends {EditViewBase}
 */
export class BranchPMInfoEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BranchPMInfoEditViewBase
     */
    protected appDeName: string = 'branch';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BranchPMInfoEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BranchPMInfoEditViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof BranchPMInfoEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {BranchService}
     * @memberof BranchPMInfoEditViewBase
     */
    protected appEntityService: BranchService = new BranchService;

    /**
     * 实体权限服务对象
     *
     * @type BranchUIService
     * @memberof BranchPMInfoEditViewBase
     */
    public appUIService: BranchUIService = new BranchUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof BranchPMInfoEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BranchPMInfoEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.branch.views.pminfoeditview.caption',
        srfTitle: 'entities.branch.views.pminfoeditview.title',
        srfSubTitle: 'entities.branch.views.pminfoeditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BranchPMInfoEditViewBase
     */
    protected containerModel: any = {
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
        view_form: {
            name: 'form',
            type: 'FORM',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof BranchPMInfoEditView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof BranchPMInfoEditViewBase
     */
	protected viewtag: string = 'e1a0e6c29939260ead53dcd3beb8b736';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BranchPMInfoEditViewBase
     */ 
    protected viewName: string = 'BranchPMInfoEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BranchPMInfoEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BranchPMInfoEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BranchPMInfoEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'branch',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPMInfoEditViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction7')) {
            this.toolbar_deuiaction7_click(null, '', $event2);
        }
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPMInfoEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPMInfoEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BranchPMInfoEditViewBase
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
    public toolbar_deuiaction7_click(params: any = {}, tag?: any, $event?: any) {
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
        this.ToggleFilter(datas, contextJO,paramJO,  $event, xData,this,"Branch");
    }

    /**
     * 过滤
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof BranchPMInfoEditViewBase
     */
    public ToggleFilter(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (_this.hasOwnProperty('isExpandSearchForm')) {
            _this.isExpandSearchForm = !_this.isExpandSearchForm;
        }
    }

}