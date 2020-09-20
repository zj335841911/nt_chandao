import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
import ReleaseAuthService from '@/authservice/release/release-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import ReleaseUIService from '@/uiservice/release/release-ui-service';

/**
 * 发布选项操作视图视图基类
 *
 * @export
 * @class ReleaseOptionViewBase
 * @extends {OptionViewBase}
 */
export class ReleaseOptionViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReleaseOptionViewBase
     */
    protected appDeName: string = 'release';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ReleaseOptionViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ReleaseOptionViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof ReleaseOptionViewBase
     */
    protected appEntityService: ReleaseService = new ReleaseService;

    /**
     * 实体权限服务对象
     *
     * @type ReleaseUIService
     * @memberof ReleaseOptionViewBase
     */
    public appUIService: ReleaseUIService = new ReleaseUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof ReleaseOptionViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ReleaseOptionViewBase
     */
    protected model: any = {
        srfCaption: 'entities.release.views.optionview.caption',
        srfTitle: 'entities.release.views.optionview.title',
        srfSubTitle: 'entities.release.views.optionview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ReleaseOptionViewBase
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
	protected viewtag: string = '0f44800c5178aa53932ef08d0fc88590';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ReleaseOptionViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ReleaseOptionViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ReleaseOptionViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'release',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseOptionViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseOptionViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseOptionViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}