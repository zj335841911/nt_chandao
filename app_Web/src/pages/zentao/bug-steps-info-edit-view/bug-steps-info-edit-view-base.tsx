import { Subject } from 'rxjs';
import { EditViewBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import EditViewEngine from '@engine/view/edit-view-engine';

/**
 * Bug编辑视图视图基类
 *
 * @export
 * @class BugStepsInfoEditViewBase
 * @extends {EditViewBase}
 */
export class BugStepsInfoEditViewBase extends EditViewBase {

    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugStepsInfoEditViewBase
     */
    protected appDeName: string = 'bug';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugStepsInfoEditViewBase
     */
    protected appEntityService: BugService = new BugService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BugStepsInfoEditViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugStepsInfoEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.stepsinfoeditview.caption',
        srfTitle: 'entities.bug.views.stepsinfoeditview.title',
        srfSubTitle: 'entities.bug.views.stepsinfoeditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugStepsInfoEditViewBase
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
	protected viewtag: string = '6558930042f15c2297572f51d7e77df5';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugStepsInfoEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugStepsInfoEditViewBase
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
     * @memberof BugStepsInfoEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugStepsInfoEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugStepsInfoEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}