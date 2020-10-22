import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
import MainTabExpViewtabexppanelService from './main-tab-exp-viewtabexppanel-tabexppanel-service';
import ReleaseUIService from '@/uiservice/release/release-ui-service';
import ReleaseAuthService from '@/authservice/release/release-auth-service';
import { Environment } from '@/environments/environment';


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
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabexppanelService}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    public service: MainTabExpViewtabexppanelService = new MainTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: ReleaseService = new ReleaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'release';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '发布';

    /**
     * 界面UI服务对象
     *
     * @type {ReleaseUIService}
     * @memberof MainTabExpViewtabexppanelBase
     */  
    public appUIService:ReleaseUIService = new ReleaseUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MainTabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 实体权限服务对象
     *
     * @type ReleaseAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    public appAuthService: ReleaseAuthService = new ReleaseAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @public
     * @type {*}
     * @memberof MainTabExpViewtabexppanelBase
     */
    public authResourceObject:any = {'tabviewpanel':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel2':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel3':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel4':{resourcetag:null,visabled: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MainTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.release) {
            Object.assign(this.context, { srfparentdename: 'Release', srfparentkey: this.context.release });
        }
        super.ctrlCreated();
    }

    /**
     * 计算分页面板权限
     *
     * @memberof MainTabExpViewtabexppanelBase
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
     * @memberof MainTabExpViewtabexppanelBase
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