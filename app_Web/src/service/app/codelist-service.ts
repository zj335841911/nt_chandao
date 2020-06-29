import ProductBranch_Cache from '@/codelist/product-branch-cache';   
import UserRealName from '@/codelist/user-real-name';   
import ProductBranch from '@/codelist/product-branch';   
import ProductBuild from '@/codelist/product-build';   
import Role from '@/codelist/role';   
import TestTask from '@/codelist/test-task';   
import Product from '@/codelist/product';   
import CurProductPlan from '@/codelist/cur-product-plan';   
import CurStory from '@/codelist/cur-story';   
import { Store } from 'vuex';

/**
 * 动态代码表服务类
 *
 * @export
 * @class CodeListService
 */
export default class CodeListService {

    /**
     * Vue 状态管理器
     *
     * @private
     * @type {(any | null)}
     * @memberof CodeListService
     */
    private $store: Store<any> | null = null;

    constructor(opts: any = {}) {
        this.$store = opts.$store;
    }

    /**
     * 获取状态管理器
     *
     * @returns {(any | null)}
     * @memberof CodeListService
     */
    public getStore(): Store<any> | null {
        return this.$store;
    }


    /**
     * 动态代码表缓存(加载中)
     *
     * @type {Map<string,any>}
     * @memberof CodeListService
     */
    public static codelistCache:Map<string,any> = new Map();

    /**
     * 动态代码表缓存(已完成)
     *
     * @type {Map<string,any>}
     * @memberof CodeListService
     */
    public static codelistCached:Map<string,any> = new Map();


    /**
     * 代码表--产品平台（动态）_缓存
     *
     * @type {ProductBranch_Cache}
     * @memberof CodeListService
     */
    public ProductBranch_Cache: ProductBranch_Cache = new ProductBranch_Cache();

    /**
     * 代码表--用户真实名称（动态）
     *
     * @type {UserRealName}
     * @memberof CodeListService
     */
    public UserRealName: UserRealName = new UserRealName();

    /**
     * 代码表--产品平台（动态）
     *
     * @type {ProductBranch}
     * @memberof CodeListService
     */
    public ProductBranch: ProductBranch = new ProductBranch();

    /**
     * 代码表--产品版本（动态）
     *
     * @type {ProductBuild}
     * @memberof CodeListService
     */
    public ProductBuild: ProductBuild = new ProductBuild();

    /**
     * 代码表--群组（动态）
     *
     * @type {Role}
     * @memberof CodeListService
     */
    public Role: Role = new Role();

    /**
     * 代码表--测试单（动态）
     *
     * @type {TestTask}
     * @memberof CodeListService
     */
    public TestTask: TestTask = new TestTask();

    /**
     * 代码表--产品（动态）
     *
     * @type {Product}
     * @memberof CodeListService
     */
    public Product: Product = new Product();

    /**
     * 代码表--产品计划（动态）
     *
     * @type {CurProductPlan}
     * @memberof CodeListService
     */
    public CurProductPlan: CurProductPlan = new CurProductPlan();

    /**
     * 代码表--当前需求版本
     *
     * @type {CurStory}
     * @memberof CodeListService
     */
    public CurStory: CurStory = new CurStory();

    /**
     * 获取动态代码表
     *
     * @param {string} tag 代码表标识
     * @param {string} context
     * @returns {Promise<any[]>}
     * @memberof CodeListService
     */
    public getItems(tag: string,context:any = {}, data?: any, isloading?: boolean,): Promise<any[]> {
        let _this: any = this;
        if(context && context.srfsessionid){
            delete context.srfsessionid;
        }
        let isEnableCache:boolean = _this[tag].isEnableCache;
        let cacheTimeout:any = _this[tag].cacheTimeout;
        return new Promise((resolve:any,reject:any) =>{
                // 启用缓存
                if(isEnableCache){
                    // 加载完成,从本地缓存获取
                    if(CodeListService.codelistCached.get(`${JSON.stringify(context)}-${JSON.stringify(data)}-${tag}`)){
                        let items:any = CodeListService.codelistCached.get(`${JSON.stringify(context)}-${JSON.stringify(data)}-${tag}`);
                        if(items.length >0){
                            if(cacheTimeout !== -1){
                                if(new Date().getTime() > _this[tag].expirationTime){
                                    _this[tag].getItems(context,data,isloading).then((result:any) =>{
                                        CodeListService.codelistCached.set(`${JSON.stringify(context)}-${JSON.stringify(data)}-${tag}`,{items:result});
                                        _this[tag].expirationTime = new Date().getTime() + cacheTimeout;
                                        resolve(result);
                                    }).catch((error:any) =>{
                                        Promise.reject([]);
                                    })
                                }else{
                                    return resolve(items); 
                                }
                            }else{
                                return resolve(items);
                            }
                        }
                    }
                    if (_this[tag]) {
                        const callback:Function = (context:any ={},data:any ={},tag:string,promise:Promise<any>) =>{
                            promise.then((result:any) =>{
                                console.log()
                                if(result.length > 0){
                                    CodeListService.codelistCached.set(`${JSON.stringify(context)}-${JSON.stringify(data)}-${tag}`,{items:result});
                                    return resolve(result);
                                }else{
                                    return resolve([]);
                                }
                            }).catch((result:any) =>{
                                return reject(result);
                            })
                        }
                        // 加载中，UI又需要数据，解决连续加载同一代码表问题
                        if(CodeListService.codelistCache.get(`${JSON.stringify(context)}-${JSON.stringify(data)}-${tag}`)){
                            callback(context,data,tag,CodeListService.codelistCache.get(`${JSON.stringify(context)}-${JSON.stringify(data)}-${tag}`));
                        }else{
                            let result:Promise<any> = _this[tag].getItems(context,data,isloading);
                            CodeListService.codelistCache.set(`${JSON.stringify(context)}-${JSON.stringify(data)}-${tag}`,result);
                            if(cacheTimeout !== -1){
                                _this[tag].expirationTime = new Date().getTime() + cacheTimeout;
                            }
                            callback(context,data,tag,result);
                        }
                    }
                }else{
                    if (_this[tag]) {
                        _this[tag].getItems(context,data,isloading).then((result:any) =>{
                            resolve(result);
                        }).catch((error:any) =>{
                            Promise.reject([]);
                        })
                    }else{
                        return Promise.reject([]);
                    } 
                }
        })
    }
}