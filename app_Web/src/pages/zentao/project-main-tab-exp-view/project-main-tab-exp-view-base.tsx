import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';

/**
 * 项目导航视图视图基类
 *
 * @export
 * @class ProjectMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class ProjectMainTabExpViewBase extends TabExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectMainTabExpViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProjectMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectMainTabExpViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': { isRawValue: true, value: 'project' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.maintabexpview.caption',
        srfTitle: 'entities.project.views.maintabexpview.title',
        srfSubTitle: 'entities.project.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectMainTabExpViewBase
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
	protected viewtag: string = 'fd0b8748ff96edcde009d39903a9f211';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     *
     * @protected
     * @memberof ProjectMainTabExpViewBase
     */
    protected async loadModel(): Promise<any> {
        if(this.context.project){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                if (_data.name) {
                    Object.assign(this.model, { dataInfo: _data.name });
                    if (this.$tabPageExp) {
                        this.$tabPageExp.setCurPageCaption(this.model.srfTitle, this.model.srfTitle, this.model.dataInfo);
                    }
                    if(this.$route){
                        this.$route.meta.info = this.model.dataInfo;
                    }
                    Object.assign(this.model, { srfTitle: `${this.$t(this.model.srfTitle)} - ${this.model.dataInfo}` });
                }
            })
        }
    }


}