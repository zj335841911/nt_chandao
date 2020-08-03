import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 任务预计服务对象基类
 *
 * @export
 * @class IBZTASKESTIMATEServiceBase
 * @extends {EntityServie}
 */
export default class IBZTASKESTIMATEServiceBase extends EntityService {

    /**
     * Creates an instance of  IBZTASKESTIMATEServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZTASKESTIMATEServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBZTASKESTIMATEServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibztaskestimate';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'ibztaskestimates';
        this.APPDETEXT = 'id';
        this.APPNAME = 'web';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBZTASKESTIMATEServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }
}