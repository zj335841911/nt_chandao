import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import CompanyService from '@/service/company/company-service';
import MainTabExpViewtabexppanelModel from './main-tab-exp-viewtabexppanel-tabexppanel-model';


/**
 * MainTabExpViewtabexppanel 部件服务对象
 *
 * @export
 * @class MainTabExpViewtabexppanelService
 */
export default class MainTabExpViewtabexppanelService extends ControlService {

    /**
     * 公司服务对象
     *
     * @type {CompanyService}
     * @memberof MainTabExpViewtabexppanelService
     */
    public appEntityService: CompanyService = new CompanyService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MainTabExpViewtabexppanelService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MainTabExpViewtabexppanelService.
     * 
     * @param {*} [opts={}]
     * @memberof MainTabExpViewtabexppanelService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MainTabExpViewtabexppanelModel();
    }

    
}