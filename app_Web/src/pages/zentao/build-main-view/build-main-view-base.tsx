import { Subject } from 'rxjs';
import { EditViewBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
import EditViewEngine from '@engine/view/edit-view-engine';

/**
 * 版本编辑视图视图基类
 *
 * @export
 * @class BuildMainViewBase
 * @extends {EditViewBase}
 */
export class BuildMainViewBase extends EditViewBase {

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof BuildMainViewBase
     */
    protected appEntityService: BuildService = new BuildService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BuildMainViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BuildMainViewBase
     */
    protected model: any = {
        srfCaption: 'entities.build.views.mainview.caption',
        srfTitle: 'entities.build.views.mainview.title',
        srfSubTitle: 'entities.build.views.mainview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BuildMainViewBase
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
	protected viewtag: string = 'a6d8bd7fa388f638832b33dddaa6df86';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BuildMainViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BuildMainViewBase
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
     * @memberof BuildMainViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildMainViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildMainViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}