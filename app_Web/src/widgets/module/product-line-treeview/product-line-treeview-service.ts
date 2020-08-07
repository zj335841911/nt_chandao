import { Http,Util,Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import ModuleService from '@/service/module/module-service';
import ProductLineModel from './product-line-treeview-model';
import CodeListService from '@service/app/codelist-service';
import i18n from '@/locale';


/**
 * ProductLine 部件服务对象
 *
 * @export
 * @class ProductLineService
 */
export default class ProductLineService extends ControlService {

    /**
     * 模块服务对象
     *
     * @type {ModuleService}
     * @memberof ProductLineService
     */
    public appEntityService: ModuleService = new ModuleService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof ProductLineService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of ProductLineService.
     * 
     * @param {*} [opts={}]
     * @memberof ProductLineService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new ProductLineModel();
    }


    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof ProductLineService
     */
    public codeListService:CodeListService = new CodeListService({ $store: this.getStore() });


    /**
     * 节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ProductLineService
     */
    private TREENODE_SEPARATOR: string = ';';

    /**
     * 默认根节点节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ProductLineService
     */
	private TREENODE_ROOT: string = 'ROOT';

    /**
     * 所有产品节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ProductLineService
     */
	private TREENODE_ALL: string = 'All';

    /**
     * 产品线节点分隔符号
     *
     * @private
     * @type {string}
     * @memberof ProductLineService
     */
	private TREENODE_LINE: string = 'Line';

    /**
     * 获取节点数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProductLineService
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
        if (Object.is(strNodeType, this.TREENODE_ALL)) {
            await this.fillAllNodeChilds(context,filter, list);
            return Promise.resolve({ status: 200, data: list });
        }
        if (Object.is(strNodeType, this.TREENODE_LINE)) {
            await this.fillLineNodeChilds(context,filter, list);
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
     * @memberof ProductLineService
     */
    @Errorlog
    private fillRootNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: 'entities.module.productline_treeview.nodes.root' });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'ROOT';

            Object.assign(treeNode, { srfkey: 'root' });
            strNodeId += this.TREENODE_SEPARATOR;
            strNodeId += 'root';

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
     * 填充 树视图节点[默认根节点]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProductLineService
     */
    @Errorlog
    private async fillRootNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充所有产品
			await this.fillAllNodes(context, filter, list);
		} else {
			// 填充所有产品
			await this.fillAllNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[所有产品]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProductLineService
     */
    @Errorlog
    private fillAllNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let treeNode: any = {};
            Object.assign(treeNode, { text: 'entities.module.productline_treeview.nodes.all' });
            Object.assign(treeNode, { isUseLangRes: true });
            Object.assign(treeNode,{srfappctx:context});
            Object.assign(treeNode, { srfmajortext: treeNode.text });
            let strNodeId: string = 'All';

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
     * 填充 树视图节点[所有产品]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProductLineService
     */
    @Errorlog
    private async fillAllNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
			// 填充产品线
			await this.fillLineNodes(context, filter, list);
		} else {
			// 填充产品线
			await this.fillLineNodes(context, filter, list);
		}
	}

    /**
     * 填充 树视图节点[产品线]
     *
     * @private
     * @param {any{}} context     
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProductLineService
     */
    @Errorlog
    private fillLineNodes(context:any={},filter: any, list: any[]): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            let searchFilter: any = {};
            Object.assign(searchFilter, { total: false });
            let bFirst: boolean = true;
            let records: any[] = [];
            try {
                this.searchLine(context, searchFilter, filter).then((records:any) =>{
                    if(records && records.length >0){
                        records.forEach((entity: any) => {
                        let treeNode: any = {};
                        // 整理context
                        let strId: string = entity.id;
                        let strText: string = entity.name;
                        Object.assign(treeNode,{srfparentdename:'Module',srfparentkey:entity.id});
                        Object.assign(treeNode,{srfappctxkey:'module'});
                        Object.assign(treeNode,{srfappctx:{'module':strId}});
                        Object.assign(treeNode,{'module':strId});
                        Object.assign(treeNode, { srfkey: strId });
                        Object.assign(treeNode, { text: strText, srfmajortext: strText });
                        let strNodeId: string = 'Line';
                        strNodeId += this.TREENODE_SEPARATOR;
                        strNodeId += strId;
                        Object.assign(treeNode, { id: strNodeId });
                        Object.assign(treeNode, { expanded: filter.isautoexpand });
                        Object.assign(treeNode, { leaf: true });
                        Object.assign(treeNode, { navfilter: "n_line_eq" });
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
    private searchLine(context:any={}, searchFilter: any, filter: any): Promise<any> {
        return new Promise((resolve:any,reject:any) =>{
            if(!searchFilter.page){
                Object.assign(searchFilter,{page:0});
            }
            if(!searchFilter.size){
                Object.assign(searchFilter,{size:1000});
            }
            const _appEntityService: any = this.appEntityService;
            let list: any[] = [];
            if (_appEntityService['FetchLine'] && _appEntityService['FetchLine'] instanceof Function) {
                const response: Promise<any> = _appEntityService['FetchLine'](context, searchFilter, false);
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
     * 填充 树视图节点[产品线]子节点
     *
     * @private
     * @param {any{}} context         
     * @param {*} filter
     * @param {any[]} list
     * @returns {Promise<any>}
     * @memberof ProductLineService
     */
    @Errorlog
    private async fillLineNodeChilds(context:any={}, filter: any, list: any[]): Promise<any> {
		if (filter.srfnodefilter && !Object.is(filter.srfnodefilter,"")) {
		} else {
		}
	}


    /**
     * 处理代码表返回数据(树状结构)
     * 
     * @param result 返回数组
     * @param context 应用上下文
     * @param callBack 回调
     * @memberof ProductLineService
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
     * @memberof ProductLineService
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
     * @memberof ProductLineService
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