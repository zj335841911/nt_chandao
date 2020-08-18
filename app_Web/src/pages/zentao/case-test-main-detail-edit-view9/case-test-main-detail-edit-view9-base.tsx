import { Subject } from 'rxjs';
import { EditView9Base } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import CaseAuthService from '@/authservice/case/case-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import CaseUIService from '@/uiservice/case/case-ui-service';

/**
 * 测试用例编辑视图视图基类
 *
 * @export
 * @class CaseTestMainDetailEditView9Base
 * @extends {EditView9Base}
 */
export class CaseTestMainDetailEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseTestMainDetailEditView9Base
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CaseTestMainDetailEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CaseTestMainDetailEditView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof CaseTestMainDetailEditView9Base
     */
    protected appEntityService: CaseService = new CaseService;

    /**
     * 实体权限服务对象
     *
     * @type CaseUIService
     * @memberof CaseTestMainDetailEditView9Base
     */
    public appUIService: CaseUIService = new CaseUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof CaseTestMainDetailEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CaseTestMainDetailEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.case.views.testmaindetaileditview9.caption',
        srfTitle: 'entities.case.views.testmaindetaileditview9.title',
        srfSubTitle: 'entities.case.views.testmaindetaileditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseTestMainDetailEditView9Base
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
	protected viewtag: string = '507c88b3f8f66c00a44443748f68125d';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseTestMainDetailEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseTestMainDetailEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'case',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTestMainDetailEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTestMainDetailEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTestMainDetailEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof CaseTestMainDetailEditView9Base
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