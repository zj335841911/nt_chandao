import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import TodoAuthService from '@/authservice/todo/todo-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import TodoUIService from '@/uiservice/todo/todo-ui-service';

/**
 * 关闭表单视图视图基类
 *
 * @export
 * @class TodoCloseViewBase
 * @extends {OptionViewBase}
 */
export class TodoCloseViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TodoCloseViewBase
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TodoCloseViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TodoCloseViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof TodoCloseViewBase
     */
    protected appEntityService: TodoService = new TodoService;

    /**
     * 实体权限服务对象
     *
     * @type TodoUIService
     * @memberof TodoCloseViewBase
     */
    public appUIService: TodoUIService = new TodoUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TodoCloseViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TodoCloseViewBase
     */
    protected model: any = {
        srfCaption: 'entities.todo.views.closeview.caption',
        srfTitle: 'entities.todo.views.closeview.title',
        srfSubTitle: 'entities.todo.views.closeview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TodoCloseViewBase
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
	protected viewtag: string = '734c2c8a05995eaad9f9a0028e9b9def';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TodoCloseViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TodoCloseViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'todo',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TodoCloseViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TodoCloseViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TodoCloseViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}