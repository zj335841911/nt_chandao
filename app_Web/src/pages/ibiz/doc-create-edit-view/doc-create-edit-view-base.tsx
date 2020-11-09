import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import DocService from '@/service/doc/doc-service';
import DocAuthService from '@/authservice/doc/doc-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import DocUIService from '@/uiservice/doc/doc-ui-service';

/**
 * doc编辑视图视图基类
 *
 * @export
 * @class DocCreateEditViewBase
 * @extends {EditViewBase}
 */
export class DocCreateEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocCreateEditViewBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocCreateEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocCreateEditViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DocCreateEditViewBase
     */ 
    protected dataControl:string = "form";

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof DocCreateEditViewBase
     */
    protected appEntityService: DocService = new DocService;

    /**
     * 实体权限服务对象
     *
     * @type DocUIService
     * @memberof DocCreateEditViewBase
     */
    public appUIService: DocUIService = new DocUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof DocCreateEditViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocCreateEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doc.views.createeditview.caption',
        srfTitle: 'entities.doc.views.createeditview.title',
        srfSubTitle: 'entities.doc.views.createeditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocCreateEditViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof DocCreateEditViewBase
     */
	protected viewtag: string = '7b8d03598e32aa0f535758927a17b98e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocCreateEditViewBase
     */ 
    protected viewName:string = "DocCreateEditView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocCreateEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocCreateEditViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocCreateEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'doc',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocCreateEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocCreateEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocCreateEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}