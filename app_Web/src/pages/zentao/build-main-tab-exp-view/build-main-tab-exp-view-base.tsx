import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';

/**
 * 版本分页导航视图视图基类
 *
 * @export
 * @class BuildMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class BuildMainTabExpViewBase extends TabExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof BuildMainTabExpViewBase
     */
    protected appEntityService: BuildService = new BuildService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof BuildMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BuildMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.build.views.maintabexpview.caption',
        srfTitle: 'entities.build.views.maintabexpview.title',
        srfSubTitle: 'entities.build.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BuildMainTabExpViewBase
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
	protected viewtag: string = 'fffe78c32fb25b287d0c5165d46f8dd2';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BuildMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BuildMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'build',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     *
     * @protected
     * @memberof BuildMainTabExpViewBase
     */
    protected async loadModel(): Promise<any> {
        if(this.context.build){
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