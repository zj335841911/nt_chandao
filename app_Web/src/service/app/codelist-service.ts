import RelatedStory from '@/codelist/related-story';   
import ProductBranch_Cache from '@/codelist/product-branch-cache';   
import CurProductPlan from '@/codelist/cur-product-plan';   
import UserRealNameTask from '@/codelist/user-real-name-task';   
import UserRealName from '@/codelist/user-real-name';   
import ProductBranch from '@/codelist/product-branch';   
import CurProductBuild from '@/codelist/cur-product-build';   
import BugModule from '@/codelist/bug-module';   
import Role from '@/codelist/role';   
import TestTask from '@/codelist/test-task';   
import ProjectProductPlan from '@/codelist/project-product-plan';   
import BugUserRealName from '@/codelist/bug-user-real-name';   
import Product from '@/codelist/product';   
import CurCaseVersion from '@/codelist/cur-case-version';   
import ProductPlan from '@/codelist/product-plan';   
import UserRealNameProject from '@/codelist/user-real-name-project';   
import CurStory from '@/codelist/cur-story';   
import UserRealNameTaskTeam from '@/codelist/user-real-name-task-team';   
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
     * 代码表--关联需求（动态）
     *
     * @type {RelatedStory}
     * @memberof CodeListService
     */
    public RelatedStory: RelatedStory = new RelatedStory();

    /**
     * 代码表--产品平台（动态）_缓存
     *
     * @type {ProductBranch_Cache}
     * @memberof CodeListService
     */
    public ProductBranch_Cache: ProductBranch_Cache = new ProductBranch_Cache();

    /**
     * 代码表--当前产品计划（动态）_缓存
     *
     * @type {CurProductPlan}
     * @memberof CodeListService
     */
    public CurProductPlan: CurProductPlan = new CurProductPlan();

    /**
     * 代码表--用户真实名称（项目团队成员-任务）
     *
     * @type {UserRealNameTask}
     * @memberof CodeListService
     */
    public UserRealNameTask: UserRealNameTask = new UserRealNameTask();

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
     * 代码表--当前产品版本（动态）
     *
     * @type {CurProductBuild}
     * @memberof CodeListService
     */
    public CurProductBuild: CurProductBuild = new CurProductBuild();

    /**
     * 代码表--所属模板（动态）
     *
     * @type {BugModule}
     * @memberof CodeListService
     */
    public BugModule: BugModule = new BugModule();

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
     * 代码表--项目产品计划（动态）
     *
     * @type {ProjectProductPlan}
     * @memberof CodeListService
     */
    public ProjectProductPlan: ProjectProductPlan = new ProjectProductPlan();

    /**
     * 代码表--用户真实名称（动态）（Bug）
     *
     * @type {BugUserRealName}
     * @memberof CodeListService
     */
    public BugUserRealName: BugUserRealName = new BugUserRealName();

    /**
     * 代码表--产品（动态）
     *
     * @type {Product}
     * @memberof CodeListService
     */
    public Product: Product = new Product();

    /**
     * 代码表--当前用例版本（动态）
     *
     * @type {CurCaseVersion}
     * @memberof CodeListService
     */
    public CurCaseVersion: CurCaseVersion = new CurCaseVersion();

    /**
     * 代码表--产品计划（动态）
     *
     * @type {ProductPlan}
     * @memberof CodeListService
     */
    public ProductPlan: ProductPlan = new ProductPlan();

    /**
     * 代码表--用户真实名称（项目团队成员）
     *
     * @type {UserRealNameProject}
     * @memberof CodeListService
     */
    public UserRealNameProject: UserRealNameProject = new UserRealNameProject();

    /**
     * 代码表--当前需求版本（动态）
     *
     * @type {CurStory}
     * @memberof CodeListService
     */
    public CurStory: CurStory = new CurStory();

    /**
     * 代码表--用户真实名称（任务团队）
     *
     * @type {UserRealNameTaskTeam}
     * @memberof CodeListService
     */
    public UserRealNameTaskTeam: UserRealNameTaskTeam = new UserRealNameTaskTeam();

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
        let isEnableCache:boolean = _this[tag].isEnableCache;
        let cacheTimeout:any = _this[tag].cacheTimeout;
        return new Promise((resolve:any,reject:any) =>{
            // 如有查询参数传递过来，需直接加载，不能使用缓存
            if(data && Object.keys(data).length >0){
                if (_this[tag]) {
                    _this[tag].getItems(context,JSON.parse(JSON.stringify(data)),isloading).then((result:any) =>{
                        resolve(result);
                    }).catch((error:any) =>{
                        Promise.reject([]);
                    })
                }else{
                    return Promise.reject([]);
                }
            }else{
                // 启用缓存
                if(isEnableCache){
                    // 加载完成,从store获取
                    if(this.$store &&  _this.$store.getters){
                        let items:any = _this.$store.getters.getCodeListItems(tag);
                        if(items.length >0){
                            if(cacheTimeout !== -1){
                                if(new Date().getTime() > _this[tag].expirationTime){
                                    _this[tag].getItems(context,data,isloading).then((result:any) =>{
                                        _this.$store.commit('updateCodeList',{srfkey:tag,items:result});
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
                        const callback:Function = (tag:string,promise:Promise<any>) =>{
                            promise.then((result:any) =>{
                                if(result.length > 0){
                                    _this.$store.commit('updateCodeList',{srfkey:tag,items:result});
                                    return resolve(result);
                                }else{
                                    return resolve([]);
                                }
                            }).catch((result:any) =>{
                                return reject(result);
                            })
                        }
                        // 加载中，UI又需要数据，解决连续加载同一代码表问题
                        if(CodeListService.codelistCache.get(tag)){
                            callback(tag,CodeListService.codelistCache.get(tag));
                        }else{
                            let result:Promise<any> = _this[tag].getItems(context,data,isloading);
                            CodeListService.codelistCache.set(tag,result);
                            if(cacheTimeout !== -1){
                                _this[tag].expirationTime = new Date().getTime() + cacheTimeout;
                            }
                            callback(tag,result);
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
            }
        })
    }
}