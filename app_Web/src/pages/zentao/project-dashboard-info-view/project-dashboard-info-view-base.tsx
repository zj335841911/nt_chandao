import { Subject } from 'rxjs';
import { EditView9Base } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import EditView9Engine from '@engine/view/edit-view9-engine';

/**
 * 项目信息视图基类
 *
 * @export
 * @class ProjectDashboardInfoViewBase
 * @extends {EditView9Base}
 */
export class ProjectDashboardInfoViewBase extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectDashboardInfoViewBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProjectDashboardInfoViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProjectDashboardInfoViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectDashboardInfoViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectDashboardInfoViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectDashboardInfoViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.dashboardinfoview.caption',
        srfTitle: 'entities.project.views.dashboardinfoview.title',
        srfSubTitle: 'entities.project.views.dashboardinfoview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectDashboardInfoViewBase
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
	protected viewtag: string = 'ef1a8c8701140368af895304274c602a';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectDashboardInfoViewBase
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectDashboardInfoViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectDashboardInfoViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectDashboardInfoViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectDashboardInfoViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof ProjectDashboardInfoViewBase
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