import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditView9Base } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ProjectAuthService from '@/authservice/project/project-auth-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';

/**
 * 项目多表单编辑视图（需求相关）视图基类
 *
 * @export
 * @class ProjectStoryMEditView9Base
 * @extends {EditView9Base}
 */
export class ProjectStoryMEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectStoryMEditView9Base
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProjectStoryMEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProjectStoryMEditView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectStoryMEditView9Base
     */
    protected appEntityService: ProjectService = new ProjectService;

    /**
     * 实体权限服务对象
     *
     * @type ProjectUIService
     * @memberof ProjectStoryMEditView9Base
     */
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectStoryMEditView9Base
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectStoryMEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.project.views.storymeditview9.caption',
        srfTitle: 'entities.project.views.storymeditview9.title',
        srfSubTitle: 'entities.project.views.storymeditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectStoryMEditView9Base
     */
    protected containerModel: any = {
        view_meditviewpanel: { name: 'meditviewpanel', type: 'MULTIEDITVIEWPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '0626fb8e7d46da2437209b658d8f51c2';


    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectStoryMEditView9Base
     */
    public engineInit(): void {
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProjectStoryMEditView9
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProjectStoryMEditView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }




    /**
     * 视图上下文变化
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ProjectStoryMEditView9Base
     */
    protected viewDataChange(newVal: any, oldVal: any): void {
        this.viewState.next({ tag: 'meditviewpanel', action: 'load', data: this.context });
    }


}