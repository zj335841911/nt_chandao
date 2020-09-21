import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

/**
 * 确认Bug视图基类
 *
 * @export
 * @class BugConfirmViewBase
 * @extends {OptionViewBase}
 */
export class BugConfirmViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugConfirmViewBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugConfirmViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugConfirmViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugConfirmViewBase
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugConfirmViewBase
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugConfirmViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'bug' },
        'SRFPARENTKEY': { isRawValue: false, value: 'bug' }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof BugConfirmViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugConfirmViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.confirmview.caption',
        srfTitle: 'entities.bug.views.confirmview.title',
        srfSubTitle: 'entities.bug.views.confirmview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugConfirmViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_okbtn: { name: 'okbtn', type: 'button', text: '确定', disabled: true },
        view_cancelbtn: { name: 'cancelbtn', type: 'button', text: '取消', disabled: false },
        view_leftbtn: { name: 'leftbtn', type: 'button', text: '左移', disabled: true },
        view_rightbtn: { name: 'rightbtn', type: 'button', text: '右移', disabled: true },
        view_allleftbtn: { name: 'allleftbtn', type: 'button', text: '全部左移', disabled: true },
        view_allrightbtn: { name: 'allrightbtn', type: 'button', text: '全部右移', disabled: true },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '7c6956b0c4bcc773697adb506d3ce5e9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugConfirmViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BugConfirmViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugConfirmViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugConfirmViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugConfirmViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugConfirmViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}