import { Http,Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品服务对象基类
 *
 * @export
 * @class ProductServiceBase
 * @extends {EntityServie}
 */
export default class ProductServiceBase extends EntityService {

    /**
     * Creates an instance of  ProductServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof ProductServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='product';
        this.APPDEKEY = 'id';
        this.APPDENAME = 'products';
        this.APPDETEXT = 'name';
        this.APPNAME = 'web';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().get(`/products/${context.product}/select`,isloading);
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async Create(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let productplansData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_productplans'),'undefined')){
            productplansData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_productplans') as any);
            if(productplansData && productplansData.length && productplansData.length > 0){
                productplansData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.productplans = productplansData;
        let projectproductsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts'),'undefined')){
            projectproductsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts') as any);
            if(projectproductsData && projectproductsData.length && projectproductsData.length > 0){
                projectproductsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectproducts = projectproductsData;
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let releasesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_releases'),'undefined')){
            releasesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_releases') as any);
            if(releasesData && releasesData.length && releasesData.length > 0){
                releasesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.releases = releasesData;
        let buildsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_builds'),'undefined')){
            buildsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_builds') as any);
            if(buildsData && buildsData.length && buildsData.length > 0){
                buildsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.builds = buildsData;
        let productmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_productmodules'),'undefined')){
            productmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_productmodules') as any);
            if(productmodulesData && productmodulesData.length && productmodulesData.length > 0){
                productmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.productmodules = productmodulesData;
        let testmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testmodules'),'undefined')){
            testmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testmodules') as any);
            if(testmodulesData && testmodulesData.length && testmodulesData.length > 0){
                testmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testmodules = testmodulesData;
        let branchesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_branches'),'undefined')){
            branchesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_branches') as any);
            if(branchesData && branchesData.length && branchesData.length > 0){
                branchesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.branches = branchesData;
        let storiesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_stories'),'undefined')){
            storiesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_stories') as any);
            if(storiesData && storiesData.length && storiesData.length > 0){
                storiesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.stories = storiesData;
        let testreportsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testreports'),'undefined')){
            testreportsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testreports') as any);
            if(testreportsData && testreportsData.length && testreportsData.length > 0){
                testreportsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testreports = testreportsData;
        let testtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testtasks'),'undefined')){
            testtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testtasks') as any);
            if(testtasksData && testtasksData.length && testtasksData.length > 0){
                testtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testtasks = testtasksData;
        Object.assign(data,masterData);
        if(!data.srffrontuf || data.srffrontuf !== "1"){
            data[this.APPDEKEY] = null;
        }
        if(data.srffrontuf){
            delete data.srffrontuf;
        }
        let tempContext:any = JSON.parse(JSON.stringify(context));
        let res:any = await Http.getInstance().post(`/products`,data,isloading);
        this.tempStorage.setItem(tempContext.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_productplans',JSON.stringify(res.data.productplans ? res.data.productplans : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_releases',JSON.stringify(res.data.releases ? res.data.releases : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_productmodules',JSON.stringify(res.data.productmodules ? res.data.productmodules : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_testmodules',JSON.stringify(res.data.testmodules ? res.data.testmodules : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_branches',JSON.stringify(res.data.branches ? res.data.branches : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_stories',JSON.stringify(res.data.stories ? res.data.stories : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_testreports',JSON.stringify(res.data.testreports ? res.data.testreports : []));
        this.tempStorage.setItem(tempContext.srfsessionkey+'_testtasks',JSON.stringify(res.data.testtasks ? res.data.testtasks : []));
        return res;
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async Update(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let productplansData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_productplans'),'undefined')){
            productplansData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_productplans') as any);
            if(productplansData && productplansData.length && productplansData.length > 0){
                productplansData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.productplans = productplansData;
        let projectproductsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts'),'undefined')){
            projectproductsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts') as any);
            if(projectproductsData && projectproductsData.length && projectproductsData.length > 0){
                projectproductsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectproducts = projectproductsData;
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let releasesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_releases'),'undefined')){
            releasesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_releases') as any);
            if(releasesData && releasesData.length && releasesData.length > 0){
                releasesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.releases = releasesData;
        let buildsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_builds'),'undefined')){
            buildsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_builds') as any);
            if(buildsData && buildsData.length && buildsData.length > 0){
                buildsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.builds = buildsData;
        let productmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_productmodules'),'undefined')){
            productmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_productmodules') as any);
            if(productmodulesData && productmodulesData.length && productmodulesData.length > 0){
                productmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.productmodules = productmodulesData;
        let testmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testmodules'),'undefined')){
            testmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testmodules') as any);
            if(testmodulesData && testmodulesData.length && testmodulesData.length > 0){
                testmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testmodules = testmodulesData;
        let branchesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_branches'),'undefined')){
            branchesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_branches') as any);
            if(branchesData && branchesData.length && branchesData.length > 0){
                branchesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.branches = branchesData;
        let storiesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_stories'),'undefined')){
            storiesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_stories') as any);
            if(storiesData && storiesData.length && storiesData.length > 0){
                storiesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.stories = storiesData;
        let testreportsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testreports'),'undefined')){
            testreportsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testreports') as any);
            if(testreportsData && testreportsData.length && testreportsData.length > 0){
                testreportsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testreports = testreportsData;
        let testtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testtasks'),'undefined')){
            testtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testtasks') as any);
            if(testtasksData && testtasksData.length && testtasksData.length > 0){
                testtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testtasks = testtasksData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().put(`/products/${context.product}`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_productplans',JSON.stringify(res.data.productplans ? res.data.productplans : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_releases',JSON.stringify(res.data.releases ? res.data.releases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
            this.tempStorage.setItem(context.srfsessionkey+'_productmodules',JSON.stringify(res.data.productmodules ? res.data.productmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testmodules',JSON.stringify(res.data.testmodules ? res.data.testmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_branches',JSON.stringify(res.data.branches ? res.data.branches : []));
            this.tempStorage.setItem(context.srfsessionkey+'_stories',JSON.stringify(res.data.stories ? res.data.stories : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testreports',JSON.stringify(res.data.testreports ? res.data.testreports : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testtasks',JSON.stringify(res.data.testtasks ? res.data.testtasks : []));
            return res;
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async Remove(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().delete(`/products/${context.product}`,isloading);
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async Get(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = await Http.getInstance().get(`/products/${context.product}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_productplans',JSON.stringify(res.data.productplans ? res.data.productplans : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_releases',JSON.stringify(res.data.releases ? res.data.releases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
            this.tempStorage.setItem(context.srfsessionkey+'_productmodules',JSON.stringify(res.data.productmodules ? res.data.productmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testmodules',JSON.stringify(res.data.testmodules ? res.data.testmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_branches',JSON.stringify(res.data.branches ? res.data.branches : []));
            this.tempStorage.setItem(context.srfsessionkey+'_stories',JSON.stringify(res.data.stories ? res.data.stories : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testreports',JSON.stringify(res.data.testreports ? res.data.testreports : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testtasks',JSON.stringify(res.data.testtasks ? res.data.testtasks : []));
            return res;
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async GetDraft(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res:any = await  Http.getInstance().get(`/products/getdraft`,isloading);
        res.data.product = data.product;
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_productplans',JSON.stringify(res.data.productplans ? res.data.productplans : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_releases',JSON.stringify(res.data.releases ? res.data.releases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
            this.tempStorage.setItem(context.srfsessionkey+'_productmodules',JSON.stringify(res.data.productmodules ? res.data.productmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testmodules',JSON.stringify(res.data.testmodules ? res.data.testmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_branches',JSON.stringify(res.data.branches ? res.data.branches : []));
            this.tempStorage.setItem(context.srfsessionkey+'_stories',JSON.stringify(res.data.stories ? res.data.stories : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testreports',JSON.stringify(res.data.testreports ? res.data.testreports : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testtasks',JSON.stringify(res.data.testtasks ? res.data.testtasks : []));
        return res;
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async CheckKey(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/products/${context.product}/checkkey`,data,isloading);
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async Close(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            return Http.getInstance().post(`/products/${context.product}/close`,data,isloading);
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async Save(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let productplansData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_productplans'),'undefined')){
            productplansData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_productplans') as any);
            if(productplansData && productplansData.length && productplansData.length > 0){
                productplansData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.productplans = productplansData;
        let projectproductsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts'),'undefined')){
            projectproductsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_projectproducts') as any);
            if(projectproductsData && projectproductsData.length && projectproductsData.length > 0){
                projectproductsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.projectproducts = projectproductsData;
        let bugsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_bugs'),'undefined')){
            bugsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_bugs') as any);
            if(bugsData && bugsData.length && bugsData.length > 0){
                bugsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.bugs = bugsData;
        let releasesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_releases'),'undefined')){
            releasesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_releases') as any);
            if(releasesData && releasesData.length && releasesData.length > 0){
                releasesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.releases = releasesData;
        let buildsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_builds'),'undefined')){
            buildsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_builds') as any);
            if(buildsData && buildsData.length && buildsData.length > 0){
                buildsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.builds = buildsData;
        let productmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_productmodules'),'undefined')){
            productmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_productmodules') as any);
            if(productmodulesData && productmodulesData.length && productmodulesData.length > 0){
                productmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.productmodules = productmodulesData;
        let testmodulesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testmodules'),'undefined')){
            testmodulesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testmodules') as any);
            if(testmodulesData && testmodulesData.length && testmodulesData.length > 0){
                testmodulesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testmodules = testmodulesData;
        let branchesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_branches'),'undefined')){
            branchesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_branches') as any);
            if(branchesData && branchesData.length && branchesData.length > 0){
                branchesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.branches = branchesData;
        let storiesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_stories'),'undefined')){
            storiesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_stories') as any);
            if(storiesData && storiesData.length && storiesData.length > 0){
                storiesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.stories = storiesData;
        let testreportsData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testreports'),'undefined')){
            testreportsData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testreports') as any);
            if(testreportsData && testreportsData.length && testreportsData.length > 0){
                testreportsData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testreports = testreportsData;
        let testtasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_testtasks'),'undefined')){
            testtasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_testtasks') as any);
            if(testtasksData && testtasksData.length && testtasksData.length > 0){
                testtasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.testtasks = testtasksData;
        Object.assign(data,masterData);
            let res:any = await  Http.getInstance().post(`/products/${context.product}/save`,data,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_productplans',JSON.stringify(res.data.productplans ? res.data.productplans : []));
            this.tempStorage.setItem(context.srfsessionkey+'_projectproducts',JSON.stringify(res.data.projectproducts ? res.data.projectproducts : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_releases',JSON.stringify(res.data.releases ? res.data.releases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_builds',JSON.stringify(res.data.builds ? res.data.builds : []));
            this.tempStorage.setItem(context.srfsessionkey+'_productmodules',JSON.stringify(res.data.productmodules ? res.data.productmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testmodules',JSON.stringify(res.data.testmodules ? res.data.testmodules : []));
            this.tempStorage.setItem(context.srfsessionkey+'_branches',JSON.stringify(res.data.branches ? res.data.branches : []));
            this.tempStorage.setItem(context.srfsessionkey+'_stories',JSON.stringify(res.data.stories ? res.data.stories : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testreports',JSON.stringify(res.data.testreports ? res.data.testreports : []));
            this.tempStorage.setItem(context.srfsessionkey+'_testtasks',JSON.stringify(res.data.testtasks ? res.data.testtasks : []));
            return res;
    }

    /**
     * FetchCurProject接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async FetchCurProject(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/products/fetchcurproject`,tempData,isloading);
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return Http.getInstance().get(`/products/fetchdefault`,tempData,isloading);
    }
}