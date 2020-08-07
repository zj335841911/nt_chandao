import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ProductModuleService from '@/service/product-module/product-module-service';
import BugExpModel from './bug-exp-treeview-model';
import CodeListService from '@service/app/codelist-service';
import i18n from '@/locale';


/**
 * BugExp 部件服务对象
 *
 * @export
 * @class BugExpService
 */
export default class BugExpService extends ControlService {

    /**
     * 需求模块服务对象
     *
     * @type {ProductModuleService}
     * @memberof BugExpService
     */
    public appEntityService: ProductModuleService = new ProductModuleService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof BugExpService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of BugExpService.
     * 
     * @param {*} [opts={}]
     * @memberof BugExpService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new BugExpModel();
    }


    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof BugExpService
     */
    public codeListService:CodeListService = new CodeListService({ $store: this.getStore() });


    /**
     * 节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof BugExpService
     */
    private TREENODE_SEPARATOR: string = ';';

    /**
     * 默认根节点节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof BugExpService
     */
	private TREENODE_ROOT: string = 'ROOT';

    /**
     * 非根模块（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof BugExpService
     */
	private TREENODE_MODULE: string = 'MODULE';

    /**
     * 根模块（动态）节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof BugExpService
     */
	private TREENODE_ROOTMODULE: string = 'ROOTMODULE';

    /**
     * 全部节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof BugExpService
     */
	private TREENODE_ALL: string = 'ALL';

    /**
     * 获取节点数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof BugExpService
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

        if (Object.is(strNodeType, this.TREENODE_ROOT)) {
            await this.fillRootNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_MODULE)) {
            await this.fillModuleNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ROOTMODULE)) {
            await this.fillRootmoduleNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_ALL)) {
            await this.fillAllNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        return Promise.resolve({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
    }

    /**
     * 填充 树视图节点[默认根节点]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof BugExpService
     */
    @Errorlog
    private fillRootNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: 'entities.productmodule.bugexp_treeview.nodes.root' });
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
     * @memberof BugExpService
     */
    @Errorlog
    private async fillRootNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充全部
			await this.fillAllNodes(context, filter, list);
		} else {
			// 填充全部
			await this.fillAllNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[非根模块（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof BugExpService
     */
    @Errorlog
    private fillModuleNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            if (Object.is(filter.strNodeType, this.TREENODE_ROOTMODULE)) {
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
                        Object.assign(treeNode,{srfparentdename:'ProductModule',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'productmodule'});
                        Object.assign(treeNode,{srfappctx:{'productmodule':strId}});
                        Object.assign(treeNode,{'productmodule':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'MODULE';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: false });
                        Object.assign(treeNode, { navfilter: "n_module_eq" });
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
     * 填充 树视图节点[非根模块（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof BugExpService
     */
    @Errorlog
    private async fillModuleNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
		} else {
			// 填充非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[根模块（动态）]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof BugExpService
     */
    @Errorlog
    private fillRootmoduleNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
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
                        Object.assign(treeNode, { navfilter: "n_module_eq" });
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
            const _appEntityService: any = this.appEntityService;
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
     * 填充 树视图节点[根模块（动态）]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof BugExpService
     */
    @Errorlog
    private async fillRootmoduleNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
		} else {
			// 填充非根模块（动态）
			await this.fillModuleNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[全部]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof BugExpService
     */
    @Errorlog
    private fillAllNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: 'entities.productmodule.bugexp_treeview.nodes.all' });
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
     * 填充 树视图节点[全部]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof BugExpService
     */
    @Errorlog
    private async fillAllNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充根模块（动态）
			await this.fillRootmoduleNodes(context, filter, list);
		} else {
			// 填充根模块（动态）
			await this.fillRootmoduleNodes(context, filter, list);
		}
	}


    /**
     * 处理代码表返回数据(树状结构)
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof BugExpService
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
     * @memberof BugExpService
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
     * @memberof BugExpService
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