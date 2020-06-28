import { Subject } from 'rxjs';
import { OptionViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import OptionViewEngine from '@engine/view/option-view-engine';

/**
 * 解决Bug视图基类
 *
 * @export
 * @class BugResolveViewBase
 * @extends {OptionViewBase}
 */
export class BugResolveViewBase extends OptionViewBase {

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugResolveViewBase
     */
    protected appEntityService: BugService = new BugService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BugResolveViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugResolveViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'bug' },
        'SRFPARENTKEY': { isRawValue: false, value: 'bug' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugResolveViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.resolveview.caption',
        srfTitle: 'entities.bug.views.resolveview.title',
        srfSubTitle: 'entities.bug.views.resolveview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugResolveViewBase
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
	protected viewtag: string = 'c1e9611b6972b1877b75fa5d2c67aad6';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugResolveViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugResolveViewBase
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
     * @memberof BugResolveViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugResolveViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugResolveViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}