import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import ProjectTabExpViewtabexppanelService from './project-tab-exp-viewtabexppanel-tabexppanel-service';
import TestReportUIService from '@/uiservice/test-report/test-report-ui-service';
import TestReportAuthService from '@/authservice/test-report/test-report-auth-service';
import { Environment } from '@/environments/environment';


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
     * @memberof ProjectTabExpViewtabexppanelBase
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
     * @memberof ProjectTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 实体权限服务对象
     *
     * @type TestReportAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    public appAuthService: TestReportAuthService = new TestReportAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @public
     * @type {*}
     * @memberof ProjectTabExpViewtabexppanelBase
     */
    public authResourceObject:any = {'tabviewpanel':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel2':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel4':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel5':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel6':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel8':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel3':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel7':{resourcetag:null,visabled: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof ProjectTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.testreport) {
            Object.assign(this.context, { srfparentdename: 'TestReport', srfparentkey: this.context.testreport });
        }
        super.ctrlCreated();
    }

    /**
     * 计算分页面板权限
     *
     * @memberof ProjectTabExpViewtabexppanelBase
     */
    public computedAuthPanel(data:any){
        if(!data || Object.keys(data).length === 0){
            return;
        }
        if(this.authResourceObject && Object.keys(this.authResourceObject).length >0){
            Object.keys(this.authResourceObject).forEach((key:string) =>{
                if(this.authResourceObject[key] && this.authResourceObject[key]['dataaccaction']){
                    let tempUIAction:any = Util.deepCopy(this.authResourceObject[key]);
                    let result: any[] = ViewTool.calcActionItemAuthState(data,[tempUIAction],this.appUIService);
                    this.authResourceObject[key].visabled = this.computedPanelWithResource(key,tempUIAction.visabled);
                    this.authResourceObject[key].disabled = this.computedPanelWithResource(key,tempUIAction.disabled);
                }
            })
            const keys:any = Object.keys(this.authResourceObject);
            for(let i=0;i<keys.length;i++){
                if(this.authResourceObject[keys[i]].visabled){
                    this.tabPanelClick(keys[i]);
                    return;
                }
            }
        }
    }

    /**
     * 合入统一资源权限
     *
     * @memberof ProjectTabExpViewtabexppanelBase
     */
    public computedPanelWithResource(name:string,mainState:boolean){
        if(!this.$store.getters['authresource/getEnablePermissionValid'])
            return mainState === false?false:true;
        if(!this.authResourceObject[name]) 
            return mainState === false?false:true;
        const resouceAuth:boolean = this.appAuthService.getResourcePermission(this.authResourceObject[name]['resourcetag']);
        return !resouceAuth?false:mainState?true:false;
    }
}