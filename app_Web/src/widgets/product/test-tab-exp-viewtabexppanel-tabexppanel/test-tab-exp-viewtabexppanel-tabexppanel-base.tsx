import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, TabExpPanelControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import TestTabExpViewtabexppanelService from './test-tab-exp-viewtabexppanel-tabexppanel-service';
import ProductUIService from '@/uiservice/product/product-ui-service';
import ProductAuthService from '@/authservice/product/product-auth-service';
import { Environment } from '@/environments/environment';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanelControlBase
 * @extends {TestTabExpViewtabexppanelTabexppanelBase}
 */
export class TestTabExpViewtabexppanelTabexppanelBase extends TabExpPanelControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestTabExpViewtabexppanelTabexppanelBase
     */
    protected controlType: string = 'TABEXPPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {TestTabExpViewtabexppanelService}
     * @memberof TestTabExpViewtabexppanelTabexppanelBase
     */
    public service: TestTabExpViewtabexppanelService = new TestTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TestTabExpViewtabexppanelTabexppanelBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TestTabExpViewtabexppanelTabexppanelBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof TestTabExpViewtabexppanelBase
     */  
    public appUIService:ProductUIService = new ProductUIService(this.$store);

    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof TestTabExpViewtabexppanelBase
     */
    protected isInit: any = {
        tabviewpanel2:  true ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
        tabviewpanel5:  false ,
        tabviewpanel6:  false ,
        tabviewpanel7:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof TestTabExpViewtabexppanelBase
     */
    protected activatedTabViewPanel: string = 'tabviewpanel2';

    /**
     * 实体权限服务对象
     *
     * @type ProductAuthServiceBase
     * @memberof TabExpViewtabexppanelBase
     */
    public appAuthService: ProductAuthService = new ProductAuthService();

    /**
     * 分页面板权限标识存储对象
     *
     * @public
     * @type {*}
     * @memberof TestTabExpViewtabexppanelBase
     */
    public authResourceObject:any = {'tabviewpanel2':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel3':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel4':{resourcetag:'TEST_TESTTASK',visabled: true,disabled: false},'tabviewpanel5':{resourcetag:'TEST_TESTREPORT',visabled: true,disabled: false},'tabviewpanel6':{resourcetag:null,visabled: true,disabled: false},'tabviewpanel7':{resourcetag:null,visabled: true,disabled: false}};

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof TestTabExpViewtabexppanelBase
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.product) {
            Object.assign(this.context, { srfparentdename: 'Product', srfparentkey: this.context.product });
        }
        super.ctrlCreated();
    }

    /**
     * 计算分页面板权限
     *
     * @memberof TestTabExpViewtabexppanelBase
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
     * @memberof TestTabExpViewtabexppanelBase
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