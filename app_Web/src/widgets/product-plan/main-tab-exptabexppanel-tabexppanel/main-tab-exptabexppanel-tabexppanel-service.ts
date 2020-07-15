import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductPlanService from '@/service/product-plan/product-plan-service';
import MainTabExptabexppanelModel from './main-tab-exptabexppanel-tabexppanel-model';


/**
 * MainTabExptabexppanel 部件服务对象
 *
 * @export
 * @class MainTabExptabexppanelService
 */
export default class MainTabExptabexppanelService extends ControlService {

    /**
     * 产品计划服务对象
     *
     * @type {ProductPlanService}
     * @memberof MainTabExptabexppanelService
     */
    public appEntityService: ProductPlanService = new ProductPlanService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MainTabExptabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MainTabExptabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof MainTabExptabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MainTabExptabexppanelModel();
    }

    
}