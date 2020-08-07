import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProjectModuleService from '@/service/project-module/project-module-service';
import ModuleExpModel from './module-exp-treeview-model';
import CodeListService from '@service/app/codelist-service';
import i18n from '@/locale';
import ProjectProductService from '@service/project-product/project-product-service';
import ProductModuleService from '@service/product-module/product-module-service';
import BranchService from '@service/branch/branch-service';


/**
 * ModuleExp 部件服务对象
 *
 * @export
 * @class ModuleExpService
 */
export default class ModuleExpService extends ControlService {

    /**
     * 任务模块服务对象
     *
     * @type {ProjectModuleService}
     * @memberof ModuleExpService
     */
    public appEntityService: ProjectModuleService = new ProjectModuleService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ModuleExpService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ModuleExpService.
     * 
     * @param {*} [opts={}]
     * @memberof ModuleExpService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ModuleExpModel();
    }


    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof ModuleExpService
     */
    public codeListService:CodeListService = new CodeListService({ $store: this.getStore() });


    /**
     * 项目产品服务对象
     *
     * @type {ProjectProductService}
     * @memberof ModuleExpService
     */
    public projectproductService: ProjectProductService = new ProjectProductService({ $store: this.getStore() });

    /**
     * 需求模块服务对象
     *
     * @type {ProductModuleService}
     * @memberof ModuleExpService
     */
    public productmoduleService: ProductModuleService = new ProductModuleService({ $store: this.getStore() });

    /**
     * 产品的分支和平台信息服务对象
     *
     * @type {BranchService}
     * @memberof ModuleExpService
     */
    public branchService: BranchService = new BranchService({ $store: this.getStore() });

    /**
     * 节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
    private TREENODE_SEPARATOR: string = ';';

    /**
     * 项目非根模块（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_MODULE: string = 'MODULE';

    /**
     * 所有模块节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_ALL: string = 'ALL';

    /**
     * 默认根节点节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_ROOT: string = 'ROOT';

    /**
     * 项目产品（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_ZT_PRODUCT: string = 'ZT_PRODUCT';

    /**
     * 产品根模块无分支（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_ROOT_NOBRANCH: string = 'Root_NoBranch';

    /**
     * 项目根模块（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_PROJECTMODULE: string = 'ProjectModule';

    /**
     * 产品非根模块（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_MODULE2: string = 'MODULE2';

    /**
     * 产品根模块（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_ROOTMODULE: string = 'ROOTMODULE';

    /**
     * 平台（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ModuleExpService
     */
	private TREENODE_BRANCHS: string = 'BRANCHS';

    /**
     * 获取节点数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    public async getNodes(context:any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let { srfparentkey, srfcat, srfnodeid, srfnodefilter, query }: { srfparentkey: string, srfcat: string, srfnodeid: string, srfnodefilter: string, query:string } = data;
        srfnodefilter = query ? query : srfnodefilter;
        let list: any[] = [];
        let filter: any = {};


        if (!srfnodeid || Object.is(srfnodeid, '#')) {
            srfnodeid = this.TREENODE_ROOT;
        }

        let strTreeNodeId: string = srfnodeid;
        let strRealNodeId: string = '';
        let bRootSelect: boolean = false;
        let strNodeType: string | null = null;
        let strRootSelectNode: string = '';

        if (Object.is(strTreeNodeId, this.TREENODE_ROOT)) {
            strNodeType = this.TREENODE_ROOT;
            if (srfparentkey) {
                strRealNodeId = srfparentkey;
            }
        } else {
            let nPos = strTreeNodeId.indexOf(this.TREENODE_SEPARATOR);
            if (nPos === -1) {
                return Promise.reject({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
            }
            strNodeType = strTreeNodeId.substring(0, nPos);
			strRealNodeId = strTreeNodeId.substring(nPos + 1);
        }

        Object.assign(filter,
            {
                srfparentkey: srfparentkey,
                srfcat: srfcat,
                srfnodefilter: srfnodefilter,
                strRealNodeId: strRealNodeId,
                srfnodeid: srfnodeid,
                strNodeType: strNodeType
            }
        );

        // 分解节点标识
        let nodeid: string[] = strRealNodeId.split(this.TREENODE_SEPARATOR);
        for (let i = 0; i < nodeid.length; i++) {
            switch (i) {
                case 0:
                    Object.assign(filter, { nodeid: nodeid[0] });
                    break;
                case 1:
                    Object.assign(filter, { nodeid2: nodeid[1] });
                    break;
                case 2:
                    Object.assign(filter, { nodeid3: nodeid[2] });
                    break;
                case 3:
                    Object.assign(filter, { nodeid4: nodeid[3] });
                    break;
                default:
                    break;
            }
        }

        if (Object.is(strNodeType, this.TREENODE_MODULE)) {
            await this.fillModuleNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ALL)) {
            await this.fillAllNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ROOT)) {
            await this.fillRootNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ZT_PRODUCT)) {
            await this.fillZt_productNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ROOT_NOBRANCH)) {
            await this.fillRoot_nobranchNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_PROJECTMODULE)) {
            await this.fillProjectmoduleNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_MODULE2)) {
            await this.fillModule2NodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ROOTMODULE)) {
            await this.fillRootmoduleNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_BRANCHS)) {
            await this.fillBranchsNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        return Promise.resolve({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
    }

    /**
     * 填充 树视图节点[项目非根模块（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillModuleNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            if (Object.is(filter.strNodeType, this.TREENODE_ROOT_NOBRANCH)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            if (Object.is(filter.strNodeType, this.TREENODE_MODULE2)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            if (Object.is(filter.strNodeType, this.TREENODE_ROOTMODULE)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            if (Object.is(filter.strNodeType, this.TREENODE_PROJECTMODULE)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            if (Object.is(filter.strNodeType, this.TREENODE_MODULE)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchModule(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'ProjectModule',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'projectmodule'});
                        Object.assign(treeNode,{srfappctx:{'projectmodule':strId}});
                        Object.assign(treeNode,{'projectmodule':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'MODULE';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        let objLeafFlag = entity.isleaf;
                        if (objLeafFlag != null ) {
                            let strLeafFlag: string = objLeafFlag.toString().toLowerCase();
                            if (Object.is(strLeafFlag, '1') || Object.is(strLeafFlag, 'true')){
                                Object.assign(treeNode, { leaf: true });
                            }
                        }
                        Object.assign(treeNode, { navfilter: "n_parent_eq" });
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @private
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    private searchModule(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            const _appEntityService: any = this.appEntityService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        reject("数据集异常!");
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                    reject("数据集异常!");
                });
            }
        })
    }

    /**
     * 填充 树视图节点[项目非根模块（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillModuleNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
		} else {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[所有模块]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillAllNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: 'entities.projectmodule.moduleexp_treeview.nodes.all' });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ALL';

            // 没有指定节点值，直接使用父节点值
            Object.assign(treeNode, { srfkey: filter.strRealNodeId });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += filter.strRealNodeId;

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: true });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { navparams: '{}' });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[所有模块]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillAllNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充项目产品（动态）
			await this.fillZt_productNodes(context, filter, list);
			// 填充项目根模块（动态）
			await this.fillProjectmoduleNodes(context, filter, list);
		} else {
			// 填充项目产品（动态）
			await this.fillZt_productNodes(context, filter, list);
			// 填充项目根模块（动态）
			await this.fillProjectmoduleNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[默认根节点]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillRootNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: 'entities.projectmodule.moduleexp_treeview.nodes.root' });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ROOT';

            Object.assign(treeNode, { srfkey: 'root' });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += 'root';

            Object.assign(treeNode, { id: strNodeId });

            Object.assign(treeNode, { expanded: filter.isAutoexpand });
            Object.assign(treeNode, { leaf: false });
            Object.assign(treeNode, { navparams: '{}' });
            Object.assign(treeNode, { nodeid: treeNode.srfkey });
            Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
            list.push(treeNode);
            resolve(list);
        });
	}

    /**
     * 填充 树视图节点[默认根节点]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillRootNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充所有模块
			await this.fillAllNodes(context, filter, list);
		} else {
			// 填充所有模块
			await this.fillAllNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[项目产品（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillZt_productNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchZt_product(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.productname;
                        Object.assign(treeNode,{srfparentdename:'ProjectProduct',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'projectproduct'});
                        Object.assign(treeNode,{srfappctx:{'projectproduct':strId}});
                        Object.assign(treeNode,{'projectproduct':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'ZT_PRODUCT';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: bFirst });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @private
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    private searchZt_product(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            Object.assign(searchFilter,{sort: 'project,asc'})
            const _appEntityService: any = this.projectproductService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        reject("数据集异常!");
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                    reject("数据集异常!");
                });
            }
        })
    }

    /**
     * 填充 树视图节点[项目产品（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillZt_productNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充产品根模块无分支（动态）
			await this.fillRoot_nobranchNodes(context, filter, list);
			// 填充平台（动态）
			await this.fillBranchsNodes(context, filter, list);
		} else {
			// 填充产品根模块无分支（动态）
			await this.fillRoot_nobranchNodes(context, filter, list);
			// 填充平台（动态）
			await this.fillBranchsNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[产品根模块无分支（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillRoot_nobranchNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_ZT_PRODUCT)) {
                Object.assign(searchFilter, { n_root_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchRoot_nobranch(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'ProductModule',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'productmodule'});
                        Object.assign(treeNode,{srfappctx:{'productmodule':strId}});
                        Object.assign(treeNode,{'productmodule':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'Root_NoBranch';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: bFirst });
                        Object.assign(treeNode, { leaf: false });
                        let objLeafFlag = entity.isleaf;
                        if (objLeafFlag != null ) {
                            let strLeafFlag: string = objLeafFlag.toString().toLowerCase();
                            if (Object.is(strLeafFlag, '1') || Object.is(strLeafFlag, 'true')){
                                Object.assign(treeNode, { leaf: true });
                            }
                        }
                        Object.assign(treeNode, { navfilter: "n_parent_eq" });
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @private
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    private searchRoot_nobranch(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            const _appEntityService: any = this.productmoduleService;
            let list: any[] = [];
            if (_appEntityService['FetchRoot_NoBranch'] && _appEntityService['FetchRoot_NoBranch'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchRoot_NoBranch'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        reject("数据集异常!");
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                    reject("数据集异常!");
                });
            }
        })
    }

    /**
     * 填充 树视图节点[产品根模块无分支（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillRoot_nobranchNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
			// 填充产品非根模块（动态）
			await this.fillModule2Nodes(context, filter, list);
		} else {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
			// 填充产品非根模块（动态）
			await this.fillModule2Nodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[项目根模块（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillProjectmoduleNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchProjectmodule(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'ProjectModule',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'projectmodule'});
                        Object.assign(treeNode,{srfappctx:{'projectmodule':strId}});
                        Object.assign(treeNode,{'projectmodule':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'ProjectModule';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        let objLeafFlag = entity.isleaf;
                        if (objLeafFlag != null ) {
                            let strLeafFlag: string = objLeafFlag.toString().toLowerCase();
                            if (Object.is(strLeafFlag, '1') || Object.is(strLeafFlag, 'true')){
                                Object.assign(treeNode, { leaf: true });
                            }
                        }
                        Object.assign(treeNode, { navfilter: "n_parent_eq" });
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @private
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    private searchProjectmodule(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            const _appEntityService: any = this.appEntityService;
            let list: any[] = [];
            if (_appEntityService['FetchRoot_Task'] && _appEntityService['FetchRoot_Task'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchRoot_Task'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        reject("数据集异常!");
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                    reject("数据集异常!");
                });
            }
        })
    }

    /**
     * 填充 树视图节点[项目根模块（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillProjectmoduleNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
		} else {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[产品非根模块（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillModule2Nodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            if (Object.is(filter.strNodeType, this.TREENODE_ROOTMODULE)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            if (Object.is(filter.strNodeType, this.TREENODE_ROOT_NOBRANCH)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            if (Object.is(filter.strNodeType, this.TREENODE_MODULE2)) {
                Object.assign(searchFilter, { n_parent_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchModule2(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'ProductModule',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'productmodule'});
                        Object.assign(treeNode,{srfappctx:{'productmodule':strId}});
                        Object.assign(treeNode,{'productmodule':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'MODULE2';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        let objLeafFlag = entity.isleaf;
                        if (objLeafFlag != null ) {
                            let strLeafFlag: string = objLeafFlag.toString().toLowerCase();
                            if (Object.is(strLeafFlag, '1') || Object.is(strLeafFlag, 'true')){
                                Object.assign(treeNode, { leaf: true });
                            }
                        }
                        Object.assign(treeNode, { navfilter: "n_parent_eq" });
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @private
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    private searchModule2(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            const _appEntityService: any = this.productmoduleService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        reject("数据集异常!");
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                    reject("数据集异常!");
                });
            }
        })
    }

    /**
     * 填充 树视图节点[产品非根模块（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillModule2NodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
			// 填充产品非根模块（动态）
			await this.fillModule2Nodes(context, filter, list);
		} else {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
			// 填充产品非根模块（动态）
			await this.fillModule2Nodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[产品根模块（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillRootmoduleNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_BRANCHS)) {
                Object.assign(searchFilter, { n_branch_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchRootmodule(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'ProductModule',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'productmodule'});
                        Object.assign(treeNode,{srfappctx:{'productmodule':strId}});
                        Object.assign(treeNode,{'productmodule':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'ROOTMODULE';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: bFirst });
                        Object.assign(treeNode, { leaf: false });
                        let objLeafFlag = entity.isleaf;
                        if (objLeafFlag != null ) {
                            let strLeafFlag: string = objLeafFlag.toString().toLowerCase();
                            if (Object.is(strLeafFlag, '1') || Object.is(strLeafFlag, 'true')){
                                Object.assign(treeNode, { leaf: true });
                            }
                        }
                        Object.assign(treeNode, { navfilter: "n_parent_eq" });
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @private
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    private searchRootmodule(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            const _appEntityService: any = this.productmoduleService;
            let list: any[] = [];
            if (_appEntityService['FetchRoot'] && _appEntityService['FetchRoot'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchRoot'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        reject("数据集异常!");
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                    reject("数据集异常!");
                });
            }
        })
    }

    /**
     * 填充 树视图节点[产品根模块（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillRootmoduleNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
			// 填充产品非根模块（动态）
			await this.fillModule2Nodes(context, filter, list);
		} else {
			// 填充项目非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
			// 填充产品非根模块（动态）
			await this.fillModule2Nodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[平台（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private fillBranchsNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};

            if (Object.is(filter.strNodeType, this.TREENODE_ZT_PRODUCT)) {
                Object.assign(searchFilter, { n_product_eq: filter.nodeid });
            }

            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchBranchs(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'Branch',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'branch'});
                        Object.assign(treeNode,{srfappctx:{'branch':strId}});
                        Object.assign(treeNode,{'branch':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'BRANCHS';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: bFirst });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { navparams: '{}' });
                        Object.assign(treeNode, { nodeid: treeNode.srfkey });
                        Object.assign(treeNode, { nodeid2: filter.strRealNodeId });
                        list.push(treeNode);
                        resolve(list);
                        bFirst = false;
                    });
                    }else{
                        resolve(list);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });

	}

    /**
     * 获取查询集合
     *
     * @private
     * @param {any{}} context     
     * @param {*} searchFilter
     * @param {*} filter
     * @returns {any[]}
     * @memberof TestEnetityDatasService
     */
    @Errorlog
    private searchBranchs(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            const _appEntityService: any = this.branchService;
            let list: any[] = [];
            if (_appEntityService['FetchDefault'] && _appEntityService['FetchDefault'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchDefault'](context, searchFilter, false);
                response.then((response: any) => {
                    if (!response.status || response.status !== 200) {
                        reject("数据集异常!");
                    }
                    const data: any = response.data;
                    if (Object.keys(data).length > 0) {
                        list = JSON.parse(JSON.stringify(data));
                        resolve(list);
                    } else {
                        resolve([]);
                    }
                }).catch((response: any) => {
                    reject("数据集异常!");
                });
            }
        })
    }

    /**
     * 填充 树视图节点[平台（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ModuleExpService
     */
    @Errorlog
    private async fillBranchsNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充产品根模块（动态）
			await this.fillRootmoduleNodes(context, filter, list);
		} else {
			// 填充产品根模块（动态）
			await this.fillRootmoduleNodes(context, filter, list);
		}
	}


    /**
     * 处理代码表返回数据(树状结构)
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof ModuleExpService
     */
    public handleDataSet(result:Array<any>,context:any,callBack:any){
        let list:Array<any> = [];
        if(result.length === 0){
            return list;
        }
        result.forEach((codeItem:any) =>{
            if(!codeItem.pvalue){
                let valueField:string = codeItem.value;
                this.setChildCodeItems(valueField,result,codeItem);
                list.push(codeItem);
            }
        })
        this.setNodeData(list,context,callBack);
        return list;
    }

    /**
     * 处理非根节点数据
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof ModuleExpService
     */
    public setChildCodeItems(pValue:string,result:Array<any>,codeItem:any){
        result.forEach((item:any) =>{
            if(item.pvalue == pValue){
                let valueField:string = item.value;
                this.setChildCodeItems(valueField,result,item);
                if(!codeItem.children){
                    codeItem.children = [];
                }
                codeItem.children.push(item);
            }
        })
    }

    /**
     * 设置节点UI数据
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof ModuleExpService
     */
    public setNodeData(result:Array<any>,context:any,callBack:any){
        result.forEach((item:any) =>{
            if(item.children){
                item.leaf = false;
                this.setNodeData(item.children,context,callBack);
            }else{
                item.leaf = true;
            }
            callBack(context,item);
        })
    }

}