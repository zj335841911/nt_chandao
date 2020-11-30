import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbzDailyService from '@/service/ibz-daily/ibz-daily-service';
import IbzDailyAuthService from '@/authservice/ibz-daily/ibz-daily-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbzDailyUIService from '@/uiservice/ibz-daily/ibz-daily-ui-service';

/**
 * 日报编辑视图视图基类
 *
 * @export
 * @class IbzDailyDailyEditViewBase
 * @extends {EditViewBase}
 */
export class IbzDailyDailyEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyDailyEditViewBase
     */
    protected appDeName: string = 'ibzdaily';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyDailyEditViewBase
     */
    protected appDeKey: string = 'ibz_dailyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyDailyEditViewBase
     */
    protected appDeMajor: string = 'ibz_dailyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyDailyEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzDailyService}
     * @memberof IbzDailyDailyEditViewBase
     */
    protected appEntityService: IbzDailyService = new IbzDailyService;

    /**
     * 实体权限服务对象
     *
     * @type IbzDailyUIService
     * @memberof IbzDailyDailyEditViewBase
     */
    public appUIService: IbzDailyUIService = new IbzDailyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzDailyDailyEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzDailyDailyEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzdaily.views.dailyeditview.caption',
        srfTitle: 'entities.ibzdaily.views.dailyeditview.title',
        srfSubTitle: 'entities.ibzdaily.views.dailyeditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzDailyDailyEditViewBase
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
     * @memberof IbzDailyDailyEditViewBase
     */
	protected viewtag: string = '1edacc9f865e00cd6cd2ea0475e8dd26';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzDailyDailyEditViewBase
     */ 
    protected viewName: string = 'IbzDailyDailyEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzDailyDailyEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzDailyDailyEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzDailyDailyEditViewBase
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
     * @memberof IbzDailyDailyEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyDailyEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzDailyDailyEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}