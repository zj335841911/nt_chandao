import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import IbzFavoritesService from '@/service/ibz-favorites/ibz-favorites-service';
import TabExpViewtabexppanelService from './tab-exp-viewtabexppanel-tabexppanel-service';
import IbzFavoritesUIService from '@/uiservice/ibz-favorites/ibz-favorites-ui-service';
import IbzFavoritesAuthService from '@/authservice/ibz-favorites/ibz-favorites-auth-service';
import { Environment } from '@/environments/environment';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {TabExpViewtabexppanelTabexppanelBase}
 */
export class TabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {TabExpViewtabexppanelService}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    public service: TabExpViewtabexppanelService = new TabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzFavoritesService}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: IbzFavoritesService = new IbzFavoritesService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'ibzfavorites';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '收藏';

    /**
     * 界面UI服务对象
     *
     * @type {IbzFavoritesUIService}
     * @memberof TabExpViewtabexppanelBase
     */  
    public appUIService:IbzFavoritesUIService = new IbzFavoritesUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof TabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel4:  false ,
        tabviewpanel3:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof TabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 实体权限服务对象
     *
     * @type IbzFavoritesAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    public appAuthService: IbzFavoritesAuthService = new IbzFavoritesAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @public
     * @type {*}
     * @memberof TabExpViewtabexppanelBase
     */
    public authResourceObject:any = {'tabviewpanel':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel2':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel4':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel3':{resourcetag:null,visabled: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof TabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.ibzfavorites) {
            Object.assign(this.context, { srfparentdename: 'IbzFavorites', srfparentkey: this.context.ibzfavorites });
        }
        super.ctrlCreated();
    }

    /**
     * 计算分页面板权限
     *
     * @memberof TabExpViewtabexppanelBase
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
     * @memberof TabExpViewtabexppanelBase
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