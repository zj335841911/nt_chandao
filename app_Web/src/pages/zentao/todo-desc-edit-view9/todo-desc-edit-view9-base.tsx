import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditView9Base } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import TodoAuthService from '@/authservice/todo/todo-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import TodoUIService from '@/uiservice/todo/todo-ui-service';

/**
 * 待办事宜表编辑视图视图基类
 *
 * @export
 * @class TodoDescEditView9Base
 * @extends {EditView9Base}
 */
export class TodoDescEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TodoDescEditView9Base
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TodoDescEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TodoDescEditView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof TodoDescEditView9Base
     */
    protected appEntityService: TodoService = new TodoService;

    /**
     * 实体权限服务对象
     *
     * @type TodoUIService
     * @memberof TodoDescEditView9Base
     */
    public appUIService: TodoUIService = new TodoUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TodoDescEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TodoDescEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.todo.views.desceditview9.caption',
        srfTitle: 'entities.todo.views.desceditview9.title',
        srfSubTitle: 'entities.todo.views.desceditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TodoDescEditView9Base
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '7c7a1fdf074c475a128c920a952762fa';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TodoDescEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TodoDescEditView9Base
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
     * @memberof TodoDescEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TodoDescEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TodoDescEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof TodoDescEditView9Base
     */
    protected viewMounted(): void {
        if (this.panelState) {
            this.panelState.subscribe((res:any) => {
                if (Object.is(res.tag,'meditviewpanel')) {
                    if (Object.is(res.action,'save')) {
                        this.viewState.next({ tag:'form', action: 'save', data:res.data});
                    }
                    if (Object.is(res.action,'remove')) {
                        this.viewState.next({ tag:'form', action: 'remove', data:res.data});
                    }
                }
            });
        }
    }


}