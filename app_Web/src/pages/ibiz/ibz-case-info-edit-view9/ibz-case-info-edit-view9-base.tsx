import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditView9Base } from '@/studio-core';
import IbzCaseService from '@/service/ibz-case/ibz-case-service';
import IbzCaseAuthService from '@/authservice/ibz-case/ibz-case-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import IbzCaseUIService from '@/uiservice/ibz-case/ibz-case-ui-service';

/**
 * 用例库用例编辑视图（基本信息）视图基类
 *
 * @export
 * @class IbzCaseInfoEditView9Base
 * @extends {EditView9Base}
 */
export class IbzCaseInfoEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseInfoEditView9Base
     */
    protected appDeName: string = 'ibzcase';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseInfoEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseInfoEditView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {IbzCaseService}
     * @memberof IbzCaseInfoEditView9Base
     */
    protected appEntityService: IbzCaseService = new IbzCaseService;

    /**
     * 实体权限服务对象
     *
     * @type IbzCaseUIService
     * @memberof IbzCaseInfoEditView9Base
     */
    public appUIService: IbzCaseUIService = new IbzCaseUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof IbzCaseInfoEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzCaseInfoEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.ibzcase.views.infoeditview9.caption',
        srfTitle: 'entities.ibzcase.views.infoeditview9.title',
        srfSubTitle: 'entities.ibzcase.views.infoeditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzCaseInfoEditView9Base
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
	protected viewtag: string = 'a0a25524d16a413d7e020c0af2cc9c9b';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzCaseInfoEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzCaseInfoEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzcase',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzCaseInfoEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzCaseInfoEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzCaseInfoEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof IbzCaseInfoEditView9Base
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