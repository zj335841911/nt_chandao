import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibTreeProductService from './doc-lib-tree-product-treeview-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * tree部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {DocLibTreeProductTreeBase}
 */
export class DocLibTreeProductTreeBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DocLibTreeProductTreeBase
     */
    protected controlType: string = 'TREEVIEW';

    /**
     * 建构部件服务对象
     *
     * @type {DocLibTreeProductService}
     * @memberof DocLibTreeProductTreeBase
     */
    public service: DocLibTreeProductService = new DocLibTreeProductService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibTreeProductTreeBase
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibTreeProductTreeBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibTreeProductTreeBase
     */
    protected appDeLogicName: string = '文档库';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibUIService}
     * @memberof DocLibTreeProductBase
     */  
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * doclib_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibTreeProductTreeBase
     */
    public doclib_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.doclib_cm_deuiaction1_click(null, 'doclib_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.doclib_cm_deuiaction2_click(null, 'doclib_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.doclib_cm_deuiaction3_click(null, 'doclib_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.doclib_cm_deuiaction4_click(null, 'doclib_cm', $event2);
        }
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclib_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_EditDocLib(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclib_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_WeiHuFenLei(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclib_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_UnCollect(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclib_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_Collect(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DocLibTreeProductBase
     */
    public getDatas(): any[] {
        return [this.currentselectedNode];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DocLibTreeProductBase
     */
    public getData(): any {
        return this.currentselectedNode;
    }

    /**
     * 当前选中数据项
     *
     * @type {*}
     * @memberof DocLibTreeProductBase
     */
    public currentselectedNode: any = {};

    /**
     * 备份行为模型
     * 
     * @type any
     * @memberof DocLibTreeProductBase
     */
    public copyActionModel: any = {};

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof DocLibTreeProductBase
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof DocLibTreeProductBase
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof DocLibTreeProductBase
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof DocLibTreeProductBase
     */
    @Prop() public loadAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof DocLibTreeProductBase
     */
    @Prop() public createAction!: string;

    /**
     * 过滤属性
     *
     * @type {string}
     * @memberof DocLibTreeProductBase
     */
    public srfnodefilter: string = '';

    /**
     * 当前文件夹所含文件
     *  
     * @type {Array<any>}
     * @memberof DocLibTreeProductBase
     */
    public items: any[] = [];

    /**
     * 面包屑数据(默认第一项为图标)
     * 
     * @type {Array<any>}
     * @memberof DocLibTreeProductBase
     */
    public breadcrumbs: Array<any> = [{curData: ''}];

    /**
     * 展现形式(默认为图表)
     * 
     * @type {string}
     * @memberof DocLibTreeProductBase
     */
    public modality: string = 'chart';

    /**
     * 树节点上下文菜单集合
     *
     * @type {string[]}
     * @memberof DocLibTreeProductBase
     */
     public actionModel: any = {
        docLib_deuiaction1: {name:'deuiaction1',nodeOwner:'docLib',type: 'DEUIACTION', tag: 'EditDocLib', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'DOC', visible: true, disabled: false},
        docLib_deuiaction2: {name:'deuiaction2',nodeOwner:'docLib',type: 'DEUIACTION', tag: 'WeiHuFenLei', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'DOC', visible: true, disabled: false},
        docLib_deuiaction3: {name:'deuiaction3',nodeOwner:'docLib',type: 'DEUIACTION', tag: 'UnCollect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIB_NFAVOUR_BUT', visible: true, disabled: false},
        docLib_deuiaction4: {name:'deuiaction4',nodeOwner:'docLib',type: 'DEUIACTION', tag: 'Collect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIB_FAVOUR_BUT', visible: true, disabled: false},
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof DocLibTreeProductBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DocLibTreeProductBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.load();
                }
                if (Object.is('filter', action)) {
                    this.srfnodefilter  = data.srfnodefilter;
                    this.refresh();
                }
                if (Object.is('refresh_parent', action)) {
                    this.refresh();
                }
                if (Object.is('refresh_current', action)) {
                    this.refresh();
                }
            });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof DocLibTreeProductBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DocLibTreeProductBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 监听视图参数变化
     * 
     * @param newVal 新值
     * @param oldVal 旧值
     * @memberof DocumentsLibrary
     */
    @Watch('viewparams')
    public viewparamsChange(newVal: any, oldVal: any){
        if (newVal && newVal.n_product_eq && !Object.is(newVal.n_product_eq, oldVal.n_product_eq)) {
            this.breadcrumbs.splice(1);
            this.modality = 'chart';
        }
    }

    /**
     * 刷新功能
     *
     * @param {any[]} args
     * @memberof DocLibTreeProductBase
     */
    public refresh(args: any[]): void {
        this.load({});
    }

    /**
     * 加载当前文件夹所有文件
     *
     * @param {*} node 当前文件夹对象
     * @memberof DocLibTreeProductBase
     */
    public load(node: any = {}, resolve?: any) {
        this.items = [];
        if (node.data && node.data.children) {
            return;
        }
        const params: any = {
            srfnodeid: node.data && node.data.id ? node.data.id : "#",
            srfnodefilter: this.srfnodefilter
        };
        let tempViewParams:any = JSON.parse(JSON.stringify(this.viewparams));
        let curNode:any = {}; 
        curNode = this.$util.deepObjectMerge(curNode,node);
        let tempContext:any = this.computecurNodeContext(curNode);
        if(curNode.data && curNode.data.srfparentdename){
            Object.assign(tempContext,{srfparentdename:curNode.data.srfparentdename});
            Object.assign(tempViewParams,{srfparentdename:curNode.data.srfparentdename});
        }
        if(curNode.data && curNode.data.srfparentkey){
            Object.assign(tempContext,{srfparentkey:curNode.data.srfparentkey});
            Object.assign(tempViewParams,{srfparentkey:curNode.data.srfparentkey});
        }
        Object.assign(params,{viewparams:tempViewParams});
        this.service.getNodes(tempContext,params).then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
                return;
            }
            const _items = response.data;
            this.items = [..._items];
            this.$emit("load", _items);
            this.computeAllNodeState();
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
        });
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof DocLibTreeProductBase
     */
    public computecurNodeContext(curNode:any) {
        let tempContext:any = {};
        if (curNode && curNode.data && curNode.data.srfappctx) {
            tempContext = JSON.parse(JSON.stringify(curNode.data.srfappctx));
        } else {
            tempContext = JSON.parse(JSON.stringify(this.context));
        }
        return tempContext;
    }

    /**
     * 添加面包屑数据
     * 
     * @param node 文件夹对象
     * @memberof DocLibTreeProductBase
     */
    public addBreadcrumbs(node: any) {
        if (this.breadcrumbs.length > 0) {
            const index: number = this.breadcrumbs.findIndex((item: any) => Object.is(item.srfkey, node.srfkey));
            if(index === -1){
                this.breadcrumbs.push(node);
            }
        } else {
            this.breadcrumbs.push(node);
        }
    }

    /**
     * 移除面包屑数据
     * 
     * @param node 文件夹对象
     * @memberof DocLibTreeProductBase
     */
    public removeBreadcrumbs(node: any) {
        if (this.breadcrumbs.length > 0) {
            const index: number = this.breadcrumbs.findIndex((item: any) => Object.is(item.srfkey, node.srfkey));
            if (index !== -1) {
                this.breadcrumbs.splice(index+1);
            }
        }
    }

    /**
     * 面包屑跳转文件夹
     * 
     * @param node 文件夹对象
     * @memberof DocLibTreeProductBase
     */
    public handleLink(node: any) {
        this.removeBreadcrumbs(node);
        this.load({data: node});
    }

    /**
     * 切换展现形式
     * 
     * @param modality 展现形式
     * @memberof DocLibTreeProductBase
     */
    public modalityChange(modality: string) {
        this.modality = modality;
    }

    /**
     * 打开目标文件
     * 
     * @param file 目标文件
     * @memberof DocLibTreeProductBase
     */
    public openNode(node: any) {
        this.addBreadcrumbs(node);
        this.load({data: node});
    }

    /**
     * 绘制右击菜单
     *
     * @param {*} node
     * @returns
     * @memberof DocLibTreeProductBase
     */
    public renderContextMenu(node: any) {
        let content;
        if (node && node.data) {
            const data: any = JSON.parse(JSON.stringify(node.data));
            this.currentselectedNode = { ...data };
            const tags: string[] = data.id.split(';');
            if (tags[0] === "docLib") {
                content = this.renderContextMenuDoclib();
            }
        }
        return content;
    }

    /**
     * 绘制docLib类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof DocLibTreeProductBase
     */
    public renderContextMenuDoclib() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.doclib_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1" v-show={this.copyActionModel['deuiaction1']?.visible} disabled={this.copyActionModel['deuiaction1']?.disabled}>
                        <i class="fa fa-edit"></i>
                        
                    </dropdown-item>
                            <dropdown-item name="deuiaction2" v-show={this.copyActionModel['deuiaction2']?.visible} disabled={this.copyActionModel['deuiaction2']?.disabled}>
                        <i class="fa fa-lock"></i>
                        
                    </dropdown-item>
                            <dropdown-item name="deuiaction3" v-show={this.copyActionModel['deuiaction3']?.visible} disabled={this.copyActionModel['deuiaction3']?.disabled}>
                        <i class="fa fa-star"></i>
                        
                    </dropdown-item>
                            <dropdown-item name="deuiaction4" v-show={this.copyActionModel['deuiaction4']?.visible} disabled={this.copyActionModel['deuiaction4']?.disabled}>
                        <i class="fa fa-star-o"></i>
                        
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 执行默认界面行为
     *
     * @param {*} node
     * @memberof DocLibTreeProductBase
     */
    public doDefaultAction(node: any) {
        if (node && node.data) {
            const data: any = node.data;
            const tags: string[] = data.id.split(';');
        }
        this.$emit('nodedblclick', this.selectedNodes);
    }

    /**
     * 计算当前文件夹的所有文件工具栏状态
     * 
     * @memberof DocLibTreeProductBase
     */
    public computeAllNodeState() {
        if (this.items && this.items.length > 0) {
            this.items.forEach((item: any)=>{
                this.computeRowState(item);
            });
        }
    }

    /**
     * 获取当前文件夹指定文件的工具栏状态
     * 
     * @param node 指定的文件对象
     * @memberof DocLibTreeProductBase
     */
    public getNodeState(node: any) {
        this.copyActionModel = {};
        const tags: string[] = node.id.split(';');
        Object.values(this.actionModel).forEach((item:any) =>{
            if(Object.is(item.nodeOwner,tags[0])){
                this.copyActionModel[item.name] = item;
            }
        })
        if(Object.keys(this.copyActionModel).length === 0){
            return;
        }
        this.computeNodeState(node,node.nodeType,node.appEntityName).then((result:any) => {
            if(Object.values(result).length>0){
                node.curData.copyActionModel = JSON.parse(JSON.stringify(this.copyActionModel));;
            }
        });
    }

    /**
     * 计算文件的工具栏状态
     *
     * @param {*} node 指定的文件对象
     * @param {*} nodeType 指定的文件类型
     * @param {*} appEntityName 应用实体名称  
     * @returns
     * @memberof DocLibTreeProductBase
     */
    public async computeNodeState(node: any, nodeType: string, appEntityName: string) {
        if(Object.is(nodeType,"STATIC")){
            return this.copyActionModel;
        }
        let service:any = await this.appEntityService.getService(appEntityName);
        if(this.copyActionModel && Object.keys(this.copyActionModel).length > 0) {
            if(service['Get'] && service['Get'] instanceof Function){
                let tempContext:any = this.$util.deepCopy(this.context);
                tempContext[appEntityName] = node.srfkey;
                let targetData = await service.Get(tempContext,{}, false);
                let uiservice:any = await this.appUIService.getService(appEntityName);
                let result: any[] = ViewTool.calcActionItemAuthState(targetData.data,this.copyActionModel,uiservice);
                return this.copyActionModel;
            }else{
                console.warn("获取数据异常");
                return this.copyActionModel;
            }
        }
    }

}