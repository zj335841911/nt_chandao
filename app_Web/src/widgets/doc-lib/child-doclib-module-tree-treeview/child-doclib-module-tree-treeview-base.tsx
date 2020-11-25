import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import ChildDoclibModuleTreeService from './child-doclib-module-tree-treeview-service';
import DocUIService from '@/uiservice/doc/doc-ui-service';
import DocLibModuleUIService from '@/uiservice/doc-lib-module/doc-lib-module-ui-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * tree部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ChildDoclibModuleTreeTreeBase}
 */
export class ChildDoclibModuleTreeTreeBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ChildDoclibModuleTreeTreeBase
     */
    protected controlType: string = 'TREEVIEW';

    /**
     * 建构部件服务对象
     *
     * @type {ChildDoclibModuleTreeService}
     * @memberof ChildDoclibModuleTreeTreeBase
     */
    public service: ChildDoclibModuleTreeService = new ChildDoclibModuleTreeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof ChildDoclibModuleTreeTreeBase
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ChildDoclibModuleTreeTreeBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ChildDoclibModuleTreeTreeBase
     */
    protected appDeLogicName: string = '文档库';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibUIService}
     * @memberof ChildDoclibModuleTreeBase
     */  
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * doclibrootmodule_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ChildDoclibModuleTreeTreeBase
     */
    public doclibrootmodule_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.doclibrootmodule_cm_deuiaction1_click(null, 'doclibrootmodule_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.doclibrootmodule_cm_deuiaction2_click(null, 'doclibrootmodule_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.doclibrootmodule_cm_deuiaction3_click(null, 'doclibrootmodule_cm', $event2);
        }
    }

    /**
     * doc_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ChildDoclibModuleTreeTreeBase
     */
    public doc_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.doc_cm_deuiaction1_click(null, 'doc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.doc_cm_deuiaction2_click(null, 'doc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.doc_cm_deuiaction3_click(null, 'doc_cm', $event2);
        }
    }

    /**
     * childdoclibanddoc_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ChildDoclibModuleTreeTreeBase
     */
    public childdoclibanddoc_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.childdoclibanddoc_cm_deuiaction1_click(null, 'childdoclibanddoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.childdoclibanddoc_cm_deuiaction2_click(null, 'childdoclibanddoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.childdoclibanddoc_cm_deuiaction3_click(null, 'childdoclibanddoc_cm', $event2);
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
    public childdoclibanddoc_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_Edit(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdoclibanddoc_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_Collect(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdoclibanddoc_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_UnCollect(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibrootmodule_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_edit(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibrootmodule_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_Favorite(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibrootmodule_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_NFavorite(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doc_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_Edit(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doc_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_Collect(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doc_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_UnCollect(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ChildDoclibModuleTreeBase
     */
    public getDatas(): any[] {
        return [this.currentselectedNode];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ChildDoclibModuleTreeBase
     */
    public getData(): any {
        return this.currentselectedNode;
    }

    /**
     * 当前选中数据项
     *
     * @type {*}
     * @memberof ChildDoclibModuleTreeBase
     */
    public currentselectedNode: any = {};

    /**
     * 备份行为模型
     * 
     * @type any
     * @memberof ChildDoclibModuleTreeBase
     */
    public copyActionModel: any = {};

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof ChildDoclibModuleTreeBase
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof ChildDoclibModuleTreeBase
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof ChildDoclibModuleTreeBase
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof ChildDoclibModuleTreeBase
     */
    @Prop() public loadAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof ChildDoclibModuleTreeBase
     */
    @Prop() public createAction!: string;

    /**
     * 过滤属性
     *
     * @type {string}
     * @memberof ChildDoclibModuleTreeBase
     */
    public srfnodefilter: string = '';

    /**
     * 当前文件夹所含文件
     *  
     * @type {Array<any>}
     * @memberof ChildDoclibModuleTreeBase
     */
    public items: any[] = [];

    /**
     * 面包屑数据(默认第一项为图标)
     * 
     * @type {Array<any>}
     * @memberof ChildDoclibModuleTreeBase
     */
    public breadcrumbs: Array<any> = [{curData: ''}];

    /**
     * 展现形式(默认为图表)
     * 
     * @type {string}
     * @memberof ChildDoclibModuleTreeBase
     */
    public mode: string = 'chart';

    /**
     * 树节点上下文菜单集合
     *
     * @type {string[]}
     * @memberof ChildDoclibModuleTreeBase
     */
     public actionModel: any = {
        DoclibRootModule_deuiaction1: {ctrlname: 'doclibrootmodule_cm',name:'deuiaction1',nodeOwner:'DoclibRootModule',type: 'DEUIACTION', tag: 'edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, visible: true, disabled: false,imgclass: 'fa fa-edit',caption: ''},
        DoclibRootModule_deuiaction2: {ctrlname: 'doclibrootmodule_cm',name:'deuiaction2',nodeOwner:'DoclibRootModule',type: 'DEUIACTION', tag: 'Favorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: ''},
        DoclibRootModule_deuiaction3: {ctrlname: 'doclibrootmodule_cm',name:'deuiaction3',nodeOwner:'DoclibRootModule',type: 'DEUIACTION', tag: 'NFavorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: ''},
        doc_deuiaction1: {ctrlname: 'doc_cm',name:'deuiaction1',nodeOwner:'doc',type: 'DEUIACTION', tag: 'Edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'DOC', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: ''},
        doc_deuiaction2: {ctrlname: 'doc_cm',name:'deuiaction2',nodeOwner:'doc',type: 'DEUIACTION', tag: 'Collect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: ''},
        doc_deuiaction3: {ctrlname: 'doc_cm',name:'deuiaction3',nodeOwner:'doc',type: 'DEUIACTION', tag: 'UnCollect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: ''},
        ChildDoclibAndDoc_deuiaction1: {ctrlname: 'childdoclibanddoc_cm',name:'deuiaction1',nodeOwner:'ChildDoclibAndDoc',type: 'DEUIACTION', tag: 'Edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'DOC', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: ''},
        ChildDoclibAndDoc_deuiaction2: {ctrlname: 'childdoclibanddoc_cm',name:'deuiaction2',nodeOwner:'ChildDoclibAndDoc',type: 'DEUIACTION', tag: 'Collect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: ''},
        ChildDoclibAndDoc_deuiaction3: {ctrlname: 'childdoclibanddoc_cm',name:'deuiaction3',nodeOwner:'ChildDoclibAndDoc',type: 'DEUIACTION', tag: 'UnCollect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: ''},
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof ChildDoclibModuleTreeBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ChildDoclibModuleTreeBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.breadcrumbs.splice(1);
                    this.mode = 'chart';
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
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ChildDoclibModuleTreeBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ChildDoclibModuleTreeBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 刷新功能
     *
     * @param {any[]} args
     * @memberof ChildDoclibModuleTreeBase
     */
    public refresh(): void {
        this.load();
    }

    /**
     * 加载当前文件夹所有文件
     *
     * @param {*} node 当前文件夹对象
     * @memberof ChildDoclibModuleTreeBase
     */
    public async load(node: any = {}, resolve?: any) {
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
        const response = await this.service.getNodes(tempContext,params)
        if (!response || response.status !== 200) {
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
            return;
        }
        const _items = response.data;
        await this.computeAllNodeState(_items);
        this.items = _items; 
        this.$emit("load", _items);
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof ChildDoclibModuleTreeBase
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
     * @memberof ChildDoclibModuleTreeBase
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
     * @memberof ChildDoclibModuleTreeBase
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
     * @memberof ChildDoclibModuleTreeBase
     */
    public handleLink(node: any) {
        this.removeBreadcrumbs(node);
        this.load({data: node});
    }

    /**
     * 切换展现形式
     * 
     * @param model 展现形式
     * @memberof ChildDoclibModuleTreeBase
     */
    public modeChange(mode: string) {
        this.mode = mode;
    }

    /**
     * 打开目标文件
     * 
     * @param file 目标文件
     * @memberof ChildDoclibModuleTreeBase
     */
    public openNode(node: any) {
        this.addBreadcrumbs(node);
        this.load({data: node});
    }

    /**
     * 计算当前文件夹的所有文件工具栏状态
     * 
     * @memberof ChildDoclibModuleTreeBase
     */
    public async computeAllNodeState(items: Array<any>) {
        if (items && items.length > 0) {
            for (let i=0; i < items.length; i++) {
                await this.getNodeState(items[i]);
            }
        }
    }

    /**
     * 获取当前文件夹指定文件的工具栏状态
     * 
     * @param node 指定的文件对象
     * @memberof ChildDoclibModuleTreeBase
     */
    public async getNodeState(node: any) {
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
        const result = await this.computeNodeState(node,node.nodeType,node.appEntityName)
        if(Object.values(result).length>0){
            node.curData.copyActionModel = JSON.parse(JSON.stringify(this.copyActionModel));
        }
    }

    /**
     * 计算文件的工具栏状态
     *
     * @param {*} node 指定的文件对象
     * @param {*} nodeType 指定的文件类型
     * @param {*} appEntityName 应用实体名称  
     * @returns
     * @memberof ChildDoclibModuleTreeBase
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

    /**
     * 图表模式下工具栏的显示
     *
     * @param {*} index 工具栏标识
     * @memberof ChildDoclibModuleTreeBase
     */
    public showToolBar(index: number){
        let el: any = this.$el.getElementsByClassName('chart-item-operate-'+index)[0];
        if (el) {
            el.style.display = 'block'; 
        }
    }

    /**
     * 图表模式下工具栏的隐藏
     *
     * @param {*} index 工具栏标识
     * @memberof ChildDoclibModuleTreeBase
     */
    public hideToolBar(index: number){
        let el: any = this.$el.getElementsByClassName('chart-item-operate-'+index)[0];
        if (el) {
            el.style.display = 'none'; 
        }
    }

    /**
     * 工具栏触发行为
     *
     * @param {*} item 触发行为文件对象
     * @param {*} tag 触发行为标识
     * @memberof ChildDoclibModuleTreeBase
     */
    public onAction(item: any,ctrlname: string,tag: string) {
        let _this:any = this;
        this.currentselectedNode = JSON.parse(JSON.stringify(item));
        if (Object.is('doclibrootmodule_cm',ctrlname) && _this.doclibrootmodule_cm_click && _this.doclibrootmodule_cm_click instanceof Function) {
            _this.doclibrootmodule_cm_click({ tag: tag });
        }           
        if (Object.is('doc_cm',ctrlname) && _this.doc_cm_click && _this.doc_cm_click instanceof Function) {
            _this.doc_cm_click({ tag: tag });
        }           
        if (Object.is('childdoclibanddoc_cm',ctrlname) && _this.childdoclibanddoc_cm_click && _this.childdoclibanddoc_cm_click instanceof Function) {
            _this.childdoclibanddoc_cm_click({ tag: tag });
        }           
    }

}