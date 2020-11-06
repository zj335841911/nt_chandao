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
 * @class DocEditViewBase
 * @extends {EditViewBase}
 */
export class DocEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocEditViewBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DocEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DocEditViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DocEditViewBase
     */ 
    protected dataControl:string = "form";

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof DocEditViewBase
     */
    protected appEntityService: DocService = new DocService;

    /**
     * 实体权限服务对象
     *
     * @type DocUIService
     * @memberof DocEditViewBase
     */
    public appUIService: DocUIService = new DocUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof DocEditViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DocEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.doc.views.editview.caption',
        srfTitle: 'entities.doc.views.editview.title',
        srfSubTitle: 'entities.doc.views.editview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DocEditViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof DocEditViewBase
     */
	protected viewtag: string = 'b6e02216d1e5c69d79b32342d8b67c7a';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DocEditViewBase
     */ 
    protected viewName:string = "DocEditView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DocEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DocEditViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DocEditViewBase
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
     * @memberof DocEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}