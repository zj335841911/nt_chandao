import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ProjectAuthService from '@/authservice/project/project-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import ProjectUIService from '@/uiservice/project/project-ui-service';

/**
 * 项目分页导航视图（测试）视图基类
 *
 * @export
 * @class ProjectTestTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class ProjectTestTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTestTabExpViewBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProjectTestTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProjectTestTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectTestTabExpViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;

    /**
     * 实体权限服务对象
     *
     * @type ProjectUIService
     * @memberof ProjectTestTabExpViewBase
     */
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectTestTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.testtabexpview.caption',
        srfTitle: 'entities.project.views.testtabexpview.title',
        srfSubTitle: 'entities.project.views.testtabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectTestTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '19641dcdbd1f1973c9693859003e1f60';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectTestTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectTestTabExpViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectTestTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}