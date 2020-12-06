import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbzDailyService from '@/service/ibz-daily/ibz-daily-service';
import IbzDailyAuthService from '@/authservice/ibz-daily/ibz-daily-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbzDailyUIService from '@/uiservice/ibz-daily/ibz-daily-ui-service';

/**
 * 日报编辑视图（主数据）视图基类
 *
 * @export
 * @class IbzDailymainEditViewBase
 * @extends {EditViewBase}
 */
export class IbzDailymainEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailymainEditViewBase
     */
    protected appDeName: string = 'ibzdaily';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzDailymainEditViewBase
     */
    protected appDeKey: string = 'ibz_dailyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzDailymainEditViewBase
     */
    protected appDeMajor: string = 'ibz_dailyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailymainEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzDailyService}
     * @memberof IbzDailymainEditViewBase
     */
    protected appEntityService: IbzDailyService = new IbzDailyService;

    /**
     * 实体权限服务对象
     *
     * @type IbzDailyUIService
     * @memberof IbzDailymainEditViewBase
     */
    public appUIService: IbzDailyUIService = new IbzDailyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzDailymainEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzDailymainEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzdaily.views.maineditview.caption',
        srfTitle: 'entities.ibzdaily.views.maineditview.title',
        srfSubTitle: 'entities.ibzdaily.views.maineditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzDailymainEditViewBase
     */
    protected containerModel: any = {
        view_form: {
            name: 'form',
            type: 'FORM',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzDailymainEditViewBase
     */
	protected viewtag: string = '6b63300dfe7c9f777eda7627fc02d822';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailymainEditViewBase
     */ 
    protected viewName: string = 'IbzDailymainEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzDailymainEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzDailymainEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzDailymainEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzdaily',
            majorPSDEField: 'ibzdailyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailymainEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailymainEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailymainEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}