import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import ProjectTabExpViewtabexppanelService from './project-tab-exp-viewtabexppanel-tabexppanel-service';
import TestReportUIService from '@/uiservice/test-report/test-report-ui-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {ProjectTabExpViewtabexppanelTabexppanelBase}
 */
export class ProjectTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProjectTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {ProjectTabExpViewtabexppanelService}
     * @memberof ProjectTabExpViewtabexppanelTabexppanelBase
     */
    public service: ProjectTabExpViewtabexppanelService = new ProjectTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof ProjectTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: TestReportService = new TestReportService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '测试报告';

    /**
     * 界面UI服务对象
     *
     * @type {TestReportUIService}
     * @memberof ProjectTabExpViewtabexppanelBase
     */  
    public appUIService:TestReportUIService = new TestReportUIService(this.$store);
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof ProjectTabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel4:  false ,
        tabviewpanel5:  false ,
        tabviewpanel6:  false ,
        tabviewpanel8:  false ,
        tabviewpanel3:  false ,
        tabviewpanel7:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof ProjectTabExpViewtabexppanel
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof ProjectTabExpViewtabexppanel
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.testreport) {
            Object.assign(this.context, { srfparentdename: 'TestReport', srfparentkey: this.context.testreport });
        }
        super.ctrlCreated();
    }
}