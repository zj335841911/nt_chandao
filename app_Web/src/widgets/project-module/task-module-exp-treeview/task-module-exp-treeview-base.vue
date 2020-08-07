<template>
    <div class="design-tree-container">
        <context-menu-container>
            <el-tree
            v-if="inited"
            ref="treeexpbar_tree"
            class="design-tree"
            node-key="id"
            lazy
            :show-checkbox="!isSingleSelect"
            :check-on-click-node="!isSingleSelect"
            :default-expanded-keys="expandedKeys"
            :props="{
                label: 'text',
                isLeaf: 'leaf',
                children: 'children'
            }"
            :load="load"
            :highlight-current="true"
            :expand-on-click-node="false"
            @check="onCheck"
            @current-change="selectionChange"
            :filter-node-method="filterNode"
            >
                <template slot-scope="{ node, data }">
                  <context-menu :contextMenuStyle="{width: '100%'}" :data="node" :renderContent="renderContextMenu">
                    <tooltip transfer style="width: 100%;" max-width="2000" placement="right">
                        <div class="tree-node" @dblclick="doDefaultAction(node)">
                            <span class="icon">
                                <i v-if=" data.iconcls && !Object.is(data.iconcls, '')" :class="data.iconcls"></i>
                                <img v-else-if="data.icon && !Object.is(data.icon, '')" :src="data.icon" />
                                <icon v-else-if="isOutputIconDefault" type="ios-paper-outline"></icon>&nbsp;
                            </span>
                            <span class="text">
                                <span v-if="data.html" v-html="data.html"></span>
                                <span v-else>{{ data.isUseLangRes ? $t(data.text) : data.text }}</span>
                            </span>
                        </div>
                        <template slot="content">
                            <span v-if="data.html" v-html="data.html"></span>
                            <span v-else>{{ data.isUseLangRes ? $t(data.text) : data.text }}</span>
                        </template>
                    </tooltip>
                 </context-menu>
                </template>
            </el-tree>
        </context-menu-container>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProjectModuleService from '@/service/project-module/project-module-service';
import TaskModuleExpService from './task-module-exp-treeview-service';



@Component({
    components: {
      
    }
})
export default class TaskModuleExpBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TaskModuleExp
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TaskModuleExp
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TaskModuleExp
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof TaskModuleExp
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TaskModuleExp
     */
    protected getControlType(): string {
        return 'TREEVIEW'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskModuleExp
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TaskModuleExpService}
     * @memberof TaskModuleExp
     */
    protected service: TaskModuleExpService = new TaskModuleExpService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectModuleService}
     * @memberof TaskModuleExp
     */
    protected appEntityService: ProjectModuleService = new ProjectModuleService({ $store: this.$store });

    /**
     * zt_product_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExp
     */
    protected zt_product_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.zt_product_cm_deuiaction1_click($event, 'zt_product_cm', $event2);
        }
    }

    /**
     * branchs_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExp
     */
    protected branchs_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.branchs_cm_deuiaction1_click($event, 'branchs_cm', $event2);
        }
    }

    /**
     * all_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExp
     */
    protected all_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.all_cm_deuiaction1_click($event, 'all_cm', $event2);
        }
    }

    /**
     * module_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExp
     */
    protected module_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.module_cm_deuiaction1_click($event, 'module_cm', $event2);
        }
    }

    /**
     * rootmodule_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExp
     */
    protected rootmodule_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.rootmodule_cm_deuiaction1_click($event, 'rootmodule_cm', $event2);
        }
    }

    /**
     * root_nobranch_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExp
     */
    protected root_nobranch_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.root_nobranch_cm_deuiaction1_click($event, 'root_nobranch_cm', $event2);
        }
    }

    /**
     * projectmodule_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskModuleExp
     */
    protected projectmodule_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.projectmodule_cm_deuiaction1_click($event, 'projectmodule_cm', $event2);
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
    protected all_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected branchs_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected zt_product_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected projectmodule_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected rootmodule_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected module_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected root_nobranch_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        // 界面行为
        this.RefreshParent(datas, contextJO,paramJO,  $event, xData,this,"ProjectModule");
    }

    /**
     * 刷新
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProjectTaskTreeExpViewBase
     */
    protected RefreshParent(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        if (xData && xData.refresh_parent && xData.refresh_parent instanceof Function) {
            xData.refresh_parent();
            return;
        }
        const _this: any = this;
        if (_this.refresh_parent && _this.refresh_parent instanceof Function) {
            _this.refresh_parent();
            return;
        }
    }

    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof TaskModuleExp
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TaskModuleExp
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TaskModuleExp
     */
    public getDatas(): any[] {
        return [this.currentselectedNode];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TaskModuleExp
     */
    public getData(): any {
        return this.currentselectedNode;
    }

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof TaskModuleExp
     */
    @Prop({ default: true }) protected isSingleSelect!: boolean;

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof TaskModuleExp
     */
    @Prop({ default: false }) protected isSelectFirstDefault!: boolean;

    /**
     * 枝干节点是否可用（具有数据能力，可抛出）
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    @Prop({default:true}) protected isBranchAvailable!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof TaskModuleExp
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof TaskModuleExp
     */
    protected inited: boolean = false;

    /**
     * 已选中数据集合
     *
     * @type {*}
     * @memberof TaskModuleExp
     */
    protected selectedNodes: any = [];

    /**
     * 当前选中数据项
     *
     * @type {*}
     * @memberof TaskModuleExp
     */
    protected currentselectedNode: any = {};

    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    @Prop() protected selectedData?: string;

    /**
     * 选中值变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TaskModuleExp
     */
    @Watch('selectedData')
    public onValueChange(newVal: any, oldVal: any) {
        this.echoselectedNodes = newVal ? this.isSingleSelect ? JSON.parse(newVal)[0] : JSON.parse(newVal) : [];
        this.selectedNodes = [];
        if(this.echoselectedNodes.length > 0){
            let AllnodesObj = (this.$refs.treeexpbar_tree as any).store.nodesMap;
            let AllnodesArray : any[] = [];
            for (const key in AllnodesObj) {
              if (AllnodesObj.hasOwnProperty(key)) {
                AllnodesArray.push(AllnodesObj[key].data);
              }
            }
            this.setDefaultSelection(AllnodesArray);
        }
    }

    /**
     * 回显选中数据集合
     *
     * @type {*}
     * @memberof TaskModuleExp
     */
    protected echoselectedNodes:any[] = this.selectedData ? ( this.isSingleSelect ? [JSON.parse(this.selectedData)[0]] : JSON.parse(this.selectedData)) : [];

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    @Prop() protected updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    @Prop() protected fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    @Prop() protected removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    @Prop() protected loadAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    @Prop() protected createAction!: string;

    /**
     * 过滤属性
     *
     * @type {string}
     * @memberof TaskModuleExp
     */
    protected srfnodefilter: string = '';

    /**
     * 默认输出图标
     *
     * @type {boolean}
     * @memberof TaskModuleExp
     */
    protected isOutputIconDefault: boolean = false;


    /**
     * 数据展开主键
     *
     * @type {string[]}
     * @memberof TaskModuleExp
     */
    @Provide()
    protected expandedKeys: string[] = [];

    /**
     * 选中数据变更事件
     *
     * @private
     * @param {*} data
     * @param {*} data 当前节点对应传入对象
     * @param {*} checkedState 树目前选中状态对象
     * @memberof TaskModuleExp
     */
    private onCheck(data: any, checkedState: any) {
        // 处理多选数据
        if(!this.isSingleSelect){
            let leafNodes = checkedState.checkedNodes.filter((item:any) => item.leaf);
            this.selectedNodes = JSON.parse(JSON.stringify(leafNodes));
            this.$emit('selectionchange', this.selectedNodes);
        }
    }

    /**
     * 选中数据变更事件
     *
     * @private
     * @param {*} data 节点对应传入对象
     * @param {*} node 节点对应node对象
     * @memberof TaskModuleExp
     */
    private selectionChange(data: any, node: any) {
        // 禁用项处理
        if (data.disabled){
            node.isCurrent = false;
            return;
        }
        // 只处理最底层子节点
        if(this.isBranchAvailable || data.leaf){
            this.currentselectedNode = JSON.parse(JSON.stringify(data));
            // 单选直接替换
            if(this.isSingleSelect){
                this.selectedNodes = [this.currentselectedNode];
                this.$emit('selectionchange', this.selectedNodes);
            }
            // 多选用check方法
        }
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof TaskModuleExp
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TaskModuleExp
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.inited = false;
                    this.$nextTick(() => {
                        this.inited = true;
                    });
                }
                if (Object.is('filter', action)) {
                    this.srfnodefilter  = data.srfnodefilter;
                    this.refresh_all();
                }
                if (Object.is('refresh_parent', action)) {
                    this.refresh_parent();
                }
            });
        }
    }

    /**
     * 对树节点进行筛选操作
     * @memberof OrderTree
     */
    protected filterNode(value:any, data:any) {
        if (!value) return true;
        return data.text.indexOf(value) !== -1;
    }


    /**
     * vue 生命周期
     *
     * @memberof TaskModuleExp
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TaskModuleExp
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 刷新数据
     *
     * @memberof TaskModuleExp
     */
    protected refresh_all(): void {
        this.inited = false;
        this.$nextTick(() => {
            this.inited = true;
        });
    }

    /**
     * 刷新父节点
     *
     * @memberof TaskModuleExp
     */
    protected refresh_parent(): void {
        if (Object.keys(this.currentselectedNode).length === 0) {
            return;
        }
        const tree: any = this.$refs.treeexpbar_tree;
        const node: any = tree.getNode(this.currentselectedNode.id);
        if (!node || !node.parent) {
            return;
        }
        let curNode:any = {}; 
        const { parent: _parent } = node;
        curNode = Util.deepObjectMerge(curNode,_parent);
        let tempContext:any = {};
        if(curNode.data && curNode.data.srfappctx){
            Object.assign(tempContext,curNode.data.srfappctx);
        }else{
            Object.assign(tempContext,this.context);
        }
        const id: string = _parent.key ? _parent.key : '#';
        const param: any = { srfnodeid: id };
        this.refresh_node(tempContext,param, true);
    }

    /**
     * 数据加载
     *
     * @param {*} node
     * @memberof TaskModuleExp
     */
    protected load(node: any = {}, resolve?: any) {
        if (node.data && node.data.children) {
            resolve(node.data.children);
            return;
        }
        const params: any = {
            srfnodeid: node.data && node.data.id ? node.data.id : "#",
            srfnodefilter: this.srfnodefilter
        };
        Object.assign(params,{viewparams:this.viewparams});
        let curNode:any = {}; 
        curNode = Util.deepObjectMerge(curNode,node);
        let tempContext:any = this.computecurNodeContext(curNode);
        this.service.getNodes(tempContext,params).then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: "错误", desc: response.info });
                resolve([]);
                return;
            }
            const _items = response.data;
            this.formatExpanded(_items);
            resolve([..._items]);
            let isRoot = Object.is(node.level,0);
            let isSelectedAll = node.checked;
            this.setDefaultSelection(_items, isRoot, isSelectedAll);
            this.$emit("load", _items);
        }).catch((response: any) => {
            resolve([]);
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: "错误", desc: response.info });
        });
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof TaskModuleExp
     */
    protected computecurNodeContext(curNode:any){
        let tempContext:any = JSON.parse(JSON.stringify(this.context));
        while(curNode){
            if(curNode.data && curNode.data.id){
                let strTreeNodeId:string = curNode.data.id;
                let strNodeType:string = strTreeNodeId.substring(0, strTreeNodeId.indexOf(";")).toLowerCase();
                let strRealNodeValue:string = curNode.data.srfkey;
                let strNodeKey:string = curNode.data.srfappctxkey?curNode.data.srfappctxkey:strNodeType;
                if(!tempContext[strNodeKey]){
                    Object.defineProperty(tempContext, strNodeKey, {
                        value: strRealNodeValue,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                if(tempContext[strNodeKey]){
                    curNode = null;
                }
            }
            if(curNode){
                curNode = curNode.parent;
            }
        }
        return tempContext;
    }

    /**
     * 刷新功能
     *
     * @param {any[]} args
     * @memberof TaskModuleExp
     */
    protected refresh(args: any[]): void {
        if (Object.keys(this.currentselectedNode).length === 0) {
            return;
        }
        const id: string = this.currentselectedNode.id;
        const param: any = { srfnodeid: id };
        const tree: any = this.$refs.treeexpbar_tree;
        const node: any = tree.getNode(id);
        if (!node) {
            return;
        }
        let curNode:any = {}; 
        curNode = Util.deepObjectMerge(curNode,node);
        let tempContext:any;
        if(curNode.data && curNode.data.srfappctx){
            Object.assign(tempContext,curNode.data.srfappctx);
        }else{
            Object.assign(tempContext,this.context);
        }
        this.refresh_node(tempContext,param, false);
    }

    /**
     * 刷新节点
     *
     * @protected
     * @param {*} [curContext] 当前节点上下文
     * @param {*} [arg={}] 当前节点附加参数
     * @param {boolean} parentnode 是否是刷新父节点
     * @memberof TaskModuleExp
     */
    protected refresh_node(curContext:any,arg: any = {}, parentnode: boolean): void {
        const { srfnodeid: id } = arg;
        Object.assign(arg,{viewparams:this.viewparams});
        const get: Promise<any> = this.service.getNodes(JSON.parse(JSON.stringify(this.context)),arg);
        get.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: '错误', desc: response.info });
                return;
            }
            const _items = [...response.data];
            this.formatExpanded(_items);
            const tree: any = this.$refs.treeexpbar_tree;
            tree.updateKeyChildren(id, _items);
            if (parentnode) {
                this.currentselectedNode = {};
            }
            this.setDefaultSelection(_items);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: '错误', desc: response.info });
        });
    }

    /**
     * 默认展开节点
     *
     * @private
     * @param {any[]} items
     * @returns {any[]}
     * @memberof TaskModuleExp
     */
    protected formatExpanded(items: any[]): any[] {
        const data: any[] = [];
        items.forEach((item) => {
            if (item.expanded || (item.children && item.children.length > 0)) {
                this.expandedKeys.push(item.id);
            }
        });
        return data;
    }

    /**
     * 设置默认选中,回显数项，选中所有子节点
     *
     * @param {any[]} items 当前节点所有子节点集合
     * @param {boolean} isRoot 是否是加载根节点
     * @param {boolean} isSelectedAll 是否选中所有子节点
     * @memberof MainTree
     */
    protected setDefaultSelection(items: any[], isRoot: boolean = false, isSelectedAll: boolean = false): void {
        if(items.length == 0){
            return;
        }
        let defaultData: any;
        // 导航中选中第一条配置的默认选中,没有选中第一条
        if(this.isSelectFirstDefault){
            if(this.isSingleSelect){
                let index = items.findIndex((item: any) => item.selected);
                if(index === -1) {
                    if(isRoot){
                        index = 0;
                    }else{
                        return;
                    }
                }
                defaultData = items[index];
                this.setTreeNodeHighLight(defaultData);
                this.currentselectedNode = JSON.parse(JSON.stringify(defaultData));
                if(this.isBranchAvailable || defaultData.leaf){
                    this.selectedNodes = [this.currentselectedNode];
                    this.$emit('selectionchange', this.selectedNodes);
                } 
            }
        }
        // 已选数据的回显
        if(this.echoselectedNodes && this.echoselectedNodes.length > 0){
            let checkedNodes = items.filter((item:any)=>{
                return this.echoselectedNodes.some((val:any)=> {
                    if(Object.is(item.srfkey,val.srfkey) && Object.is(item.srfmajortext,val.srfmajortext)){
                        val.used = true;
                        return true;
                    }
                });
            });
            if(checkedNodes.length > 0){
                this.echoselectedNodes = this.echoselectedNodes.filter((item:any)=> !item.used);
                // 父节点选中时，不需要执行这段，会选中所有子节点
                if(!isSelectedAll){
                    if(this.isSingleSelect){
                        this.setTreeNodeHighLight(checkedNodes[0]);
                        this.currentselectedNode = JSON.parse(JSON.stringify(checkedNodes[0]));
                        this.selectedNodes = [this.currentselectedNode];
                    }else{
                        this.selectedNodes = this.selectedNodes.concat(checkedNodes);
                        const tree: any = this.$refs.treeexpbar_tree;
                        tree.setCheckedNodes(this.selectedNodes);
                    }
                }
            }
        }
        // 父节点选中时，选中所有子节点
        if(isSelectedAll){
            let leafNodes = items.filter((item:any) => item.leaf);
            this.selectedNodes = this.selectedNodes.concat(leafNodes);
            this.$emit('selectionchange', this.selectedNodes);
        }
    } 

    /**
     * 绘制右击菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExp
     */
    protected renderContextMenu(node: any) {
        let content;
        if (node && node.data) {
            const data: any = JSON.parse(JSON.stringify(node.data));
            this.currentselectedNode = { ...data };
            const tags: string[] = data.id.split(';');
            if (tags[0] === "ZT_PRODUCT") {
                content = this.renderContextMenuZt_product();
            }
            if (tags[0] === "BRANCHS") {
                content = this.renderContextMenuBranchs();
            }
            if (tags[0] === "ALL") {
                content = this.renderContextMenuAll();
            }
            if (tags[0] === "MODULE") {
                content = this.renderContextMenuModule();
            }
            if (tags[0] === "ROOTMODULE") {
                content = this.renderContextMenuRootmodule();
            }
            if (tags[0] === "Root_NoBranch") {
                content = this.renderContextMenuRoot_nobranch();
            }
            if (tags[0] === "ProjectModule") {
                content = this.renderContextMenuProjectmodule();
            }
        }
        return content;
    }

    /**
     * 绘制ZT_PRODUCT类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExp
     */
    protected renderContextMenuZt_product() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.zt_product_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1">
                        <i class='fa fa-refresh'></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制BRANCHS类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExp
     */
    protected renderContextMenuBranchs() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.branchs_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1">
                        <i class='fa fa-refresh'></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制ALL类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExp
     */
    protected renderContextMenuAll() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.all_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1">
                        <i class='fa fa-refresh'></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制MODULE类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExp
     */
    protected renderContextMenuModule() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.module_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1">
                        <i class='fa fa-refresh'></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制ROOTMODULE类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExp
     */
    protected renderContextMenuRootmodule() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.rootmodule_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1">
                        <i class='fa fa-refresh'></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制Root_NoBranch类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExp
     */
    protected renderContextMenuRoot_nobranch() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.root_nobranch_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1">
                        <i class='fa fa-refresh'></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 绘制ProjectModule类型右键菜单
     *
     * @param {*} node
     * @returns
     * @memberof TaskModuleExp
     */
    protected renderContextMenuProjectmodule() {
        return (
            <dropdown class="tree-right-menu" trigger="custom" visible={true} on-on-click={($event: any) => this.projectmodule_cm_click({tag: $event})}>
                <dropdown-menu slot="list">
                            <dropdown-item name="deuiaction1">
                        <i class='fa fa-refresh'></i>
                        刷新
                    </dropdown-item>
                </dropdown-menu>
            </dropdown>
        );
    }

    /**
     * 设置选中高亮
     *
     * @param {*} data
     * @memberof TaskModuleExp
     */
    protected setTreeNodeHighLight(data: any): void {
        const tree: any = this.$refs.treeexpbar_tree;
        tree.setCurrentKey(data.id);
    }

    /**
     * 执行默认界面行为
     *
     * @param {*} node
     * @memberof AppView
     */
    protected doDefaultAction(node: any) {
        if (node && node.data) {
            const data: any = node.data;
            const tags: string[] = data.id.split(';');
        }
    }

}
</script>

<style lang='less'>
@import './task-module-exp-treeview.less';
</style>