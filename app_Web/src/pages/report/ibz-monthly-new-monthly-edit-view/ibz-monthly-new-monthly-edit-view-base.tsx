import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbzMonthlyService from '@/service/ibz-monthly/ibz-monthly-service';
import IbzMonthlyAuthService from '@/authservice/ibz-monthly/ibz-monthly-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbzMonthlyUIService from '@/uiservice/ibz-monthly/ibz-monthly-ui-service';

/**
 * 月报编辑视图视图基类
 *
 * @export
 * @class IbzMonthlyNewMonthlyEditViewBase
 * @extends {EditViewBase}
 */
export class IbzMonthlyNewMonthlyEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    protected appDeName: string = 'ibzmonthly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    protected appDeKey: string = 'ibz_monthlyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    protected appDeMajor: string = 'ibz_monthlyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzMonthlyService}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    protected appEntityService: IbzMonthlyService = new IbzMonthlyService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMonthlyUIService
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    public appUIService: IbzMonthlyUIService = new IbzMonthlyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzmonthly.views.newmonthlyeditview.caption',
        srfTitle: 'entities.ibzmonthly.views.newmonthlyeditview.title',
        srfSubTitle: 'entities.ibzmonthly.views.newmonthlyeditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
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
     * @memberof IbzMonthlyNewMonthlyEditView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
	protected viewtag: string = 'c5aad5f12820569b3a1e8903d243aade';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */ 
    protected viewName: string = 'IbzMonthlyNewMonthlyEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzmonthly',
            majorPSDEField: 'ibzmonthlyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzMonthlyNewMonthlyEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}