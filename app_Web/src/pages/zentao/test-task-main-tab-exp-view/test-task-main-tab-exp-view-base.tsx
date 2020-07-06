import { Subject } from 'rxjs';
import { TabExpViewBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';

/**
 * 测试版本分页导航视图视图基类
 *
 * @export
 * @class TestTaskMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class TestTaskMainTabExpViewBase extends TabExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected appEntityService: TestTaskService = new TestTaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestTaskMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testtask.views.maintabexpview.caption',
        srfTitle: 'entities.testtask.views.maintabexpview.title',
        srfSubTitle: 'entities.testtask.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestTaskMainTabExpViewBase
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
	protected viewtag: string = '5273dc442a49b8c4d37ba9ff008531e7';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestTaskMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestTaskMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'testtask',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     *
     * @protected
     * @memberof TestTaskMainTabExpViewBase
     */
    protected async loadModel(): Promise<any> {
        if(this.context.testtask){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                if (_data.name) {
                    Object.assign(this.model, { dataInfo: _data.name });
                    if(this.$route){
                        this.$route.meta.info = this.model.dataInfo;
                    }
                    Object.assign(this.model, { srfTitle: `${this.$t(this.model.srfTitle)} - ${this.model.dataInfo}` });
                    this.$appService.navHistory.setCaption({ tag: this.viewtag, info: this.model.dataInfo });
                }
            })
        }
    }


}