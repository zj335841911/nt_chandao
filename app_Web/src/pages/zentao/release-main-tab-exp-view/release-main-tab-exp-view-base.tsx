import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';

/**
 * 发布分页导航视图视图基类
 *
 * @export
 * @class ReleaseMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class ReleaseMainTabExpViewBase extends TabExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected appEntityService: ReleaseService = new ReleaseService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ReleaseMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.release.views.maintabexpview.caption',
        srfTitle: 'entities.release.views.maintabexpview.title',
        srfSubTitle: 'entities.release.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainTabExpViewBase
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
	protected viewtag: string = 'ceb630b252aac50781a373e0bef90eb2';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ReleaseMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ReleaseMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'release',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     *
     * @protected
     * @memberof ReleaseMainTabExpViewBase
     */
    protected async loadModel(): Promise<any> {
        if(this.context.release){
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