import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import  ProjectCounterCounterService  from '@/counter/project-counter/project-counter-counter';
import ProjectService from '@/service/project/project-service';
import MainTabExpViewtabexppanelService from './main-tab-exp-viewtabexppanel-tabexppanel-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {MainTabExpViewtabexppanelTabexppanelBase}
 */
export class MainTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';
    
    /**
     * ProjectCounterCounterService计数器服务对象
     *
     * @type {ProjectCounterCounterService}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    public projectcountercounterservice: ProjectCounterCounterService = new ProjectCounterCounterService({$store: this.$store,context:this.context,viewparams:this.viewparams});

    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */    
    public counterServiceArray:Array<any> = [this.projectcountercounterservice];

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabexppanelService}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    public service: MainTabExpViewtabexppanelService = new MainTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof MainTabExpViewtabexppanelBase
     */  
    public appUIService:ProjectUIService = new ProjectUIService(this.$store);
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MainTabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel6:  false ,
        tabviewpanel11:  false ,
        tabviewpanel5:  false ,
        tabviewpanel4:  false ,
        tabviewpanel7:  false ,
        tabviewpanel8:  false ,
        tabviewpanel3:  false ,
        tabviewpanel10:  false ,
        tabviewpanel12:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanel
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MainTabExpViewtabexppanel
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.project) {
            Object.assign(this.context, { srfparentdename: 'Project', srfparentkey: this.context.project });
        }
        super.ctrlCreated();
    }
}