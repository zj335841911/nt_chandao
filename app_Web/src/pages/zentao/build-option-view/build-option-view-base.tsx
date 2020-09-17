import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
import BuildAuthService from '@/authservice/build/build-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import BuildUIService from '@/uiservice/build/build-ui-service';

/**
 * 版本选项操作视图视图基类
 *
 * @export
 * @class BuildOptionViewBase
 * @extends {OptionViewBase}
 */
export class BuildOptionViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BuildOptionViewBase
     */
    protected appDeName: string = 'build';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BuildOptionViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BuildOptionViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof BuildOptionViewBase
     */
    protected appEntityService: BuildService = new BuildService;

    /**
     * 实体权限服务对象
     *
     * @type BuildUIService
     * @memberof BuildOptionViewBase
     */
    public appUIService: BuildUIService = new BuildUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof BuildOptionViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BuildOptionViewBase
     */
    protected model: any = {
        srfCaption: 'entities.build.views.optionview.caption',
        srfTitle: 'entities.build.views.optionview.title',
        srfSubTitle: 'entities.build.views.optionview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BuildOptionViewBase
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
	protected viewtag: string = '64dda8bee495e9713c61310a3fea2df9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BuildOptionViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BuildOptionViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BuildOptionViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'build',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildOptionViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildOptionViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildOptionViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}