<template>
    <div class="app-mob-treeview sysemployee-tree ">
        <div class="treeNav">
            <template v-for="(item,index) in treeNav">
            <ion-label  :key="index" class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated" :class="index+1 < treeNav.length? 'treeNav-active':'' " @click="nav_click(item)">{{item.text}}</ion-label>
            <span class="tree-span" :key="index+'span'" v-if="index+1 < treeNav.length">></span>
            </template>
        </div>
        <div class="tree-partition" v-if="valueNodes.length > 0" ></div>
        <ion-list>
        <template v-for="item in rootNodes">
            <ion-item  :key="item.id" @click="click_node(item)">
                <ion-label>{{item.text}}</ion-label>
                <ion-icon class="tree-icon" slot="end" name="chevron-forward-outline"></ion-icon>
            </ion-item>
        </template>
       </ion-list>
        <div class="tree-partition tree-partition-bigger" v-if="rootNodes.length > 0"></div>
        <!-- 树视图 -->
        <ion-list v-if="viewType == 'DEMOBTREEVIEW'">
        <template v-for="item in valueNodes">
            <ion-item :key="item.id">
                <ion-label>{{item.text}}</ion-label>
            </ion-item>
        </template>
       </ion-list>
       <!-- 树多选 -->
        <ion-list v-else-if="viewType == 'DEMOBPICKUPTREEVIEW' && !isSingleSelect">
        <template v-for="item in valueNodes">
            <ion-item :key="item.id">
                <ion-checkbox color="secondary" v-if="viewType == 'DEMOBPICKUPTREEVIEW' && !isSingleSelect"  :checked="item.checked" :value="item.id" slot="end" @ionChange="onChecked"></ion-checkbox>
                <ion-label>{{item.text}}</ion-label>
            </ion-item>
        </template>
       </ion-list>
       <!-- 树单选 -->
        <ion-radio-group v-else-if="viewType == 'DEMOBPICKUPTREEVIEW' && isSingleSelect" :value="selectedValue" >
            <template v-for="item in valueNodes">
                <ion-item  :key="item.id"   @click="onSimpleSelChange(item)">
                    <ion-label>{{item.text}}</ion-label>
                    <ion-radio slot="end" :checked="item.checked" :value="item.id"></ion-radio>
                </ion-item>
            </template>
        </ion-radio-group>
    </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import SysEmployeeService from '@/app-core/service/sys-employee/sys-employee-service';
import EmpTreeService from '@/app-core/ctrl-service/sys-employee/emp-tree-treeview-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import SysEmployeeUIService from '@/ui-service/sys-employee/sys-employee-ui-action';

import { Util } from '@ibiz-core/utils'


@Component({
    components: {
    }
})
export default class EmpTreeBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof EmpTree
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof EmpTree
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof EmpTree
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof EmpTree
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof EmpTree
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof EmpTree
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof EmpTree
     */
    protected getControlType(): string {
        return 'TREEVIEW'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof EmpTree
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  EmpTreeBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args);
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {EmpTreeService}
     * @memberof EmpTree
     */
    protected service: EmpTreeService = new EmpTreeService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {SysEmployeeService}
     * @memberof EmpTree
     */
    protected appEntityService: SysEmployeeService = new SysEmployeeService();

    /**
     * 界面UI服务对象
     *
     * @type {SysEmployeeUIService}
     * @memberof EmpTreeBase
     */  
    public deUIService:SysEmployeeUIService = new SysEmployeeUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof EmpTree
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


    /**
     * 视图类型
     *
     * @type {string}
     * @memberof Testtree
     */
    @Prop() protected viewType!: string;
    
    /**
     * 树视图导航数组名称
     *
     * @type {string[]}
     * @memberof EmpTreeBase
     */
    public treeNav :any= [{id:"#",text:"人员选择树"}];

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof EmpTreeBase
     */
    public getDatas(): any[] {
        return [this.currentselectedNode];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof EmpTreeBase
     */
    public getData(): any {
        return this.currentselectedNode;
    }

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof EmpTreeBase
     */
    @Prop({ default: true }) public isSingleSelect!: boolean;

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof EmpTreeBase
     */
    @Prop({ default: false }) public isSelectFirstDefault!: boolean;

    /**
     * 枝干节点是否可用（具有数据能力，可抛出）
     *
     * @type {string}
     * @memberof EmpTreeBase
     */
    @Prop({default:true}) public isBranchAvailable!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof EmpTreeBase
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof EmpTreeBase
     */
    public inited: boolean = false;

    /**
     * 已选中数据集合
     *
     * @type {*}
     * @memberof EmpTreeBase
     */
    public selectedNodes: any = [];

    /**
     * 当前选中数据项
     *
     * @type {*}
     * @memberof EmpTreeBase
     */
    public currentselectedNode: any = {};

    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof EmpTreeBase
     */
    @Prop() public selectedData?: string;

    /**
     * 节点点击加载
     *
     * @memberof EmpTreeBase
     */
    public click_node(data:any){
        this.treeNav.push(data);
        this.load({data:data});
    }

    /**
     * 选中值变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof EmpTreeBase
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
     * 导航点击行为
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof EmpTreeBase
     */
    public nav_click(item:any) {
        if(item.id == this.treeNav[this.treeNav.length-1].id){
            return
        }
        const count = this.treeNav.findIndex((i:any) => item.id === i.id) + 1;
        this.treeNav.splice(count,this.treeNav.length- count);
        this.load({data:item});
    }

    /**
     * 节点数组
     *
     * @memberof EmpTreeBase
     */
    public rootNodes :any= [];

    /**
     * 节点值数组
     *
     * @memberof EmpTreeBase
     */
    public valueNodes :any= [];

    /**
     * 解析节点数据
     *
     * @param {*} nodes
     * @memberof EmpTreeBase
     */
    public parseNodes(nodes:any) {
        let rootNodes :any= [];
        let valueNodes :any= [];
        nodes.forEach((item:any) => {
            if(!item.leaf){
                rootNodes.push(item);
            }else{
                valueNodes.push(item);
            }
        });
        this.rootNodes = rootNodes;
        this.valueNodes = valueNodes;
    }

    /**
     * 回显选中数据集合
     *
     * @type {*}
     * @memberof EmpTreeBase
     */
    public echoselectedNodes:any[] = this.selectedData ? ( this.isSingleSelect ? [JSON.parse(this.selectedData)[0]] : JSON.parse(this.selectedData)) : [];

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof EmpTreeBase
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof EmpTreeBase
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof EmpTreeBase
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof EmpTreeBase
     */
    @Prop() public loadAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof EmpTreeBase
     */
    @Prop() public createAction!: string;

    /**
     * 过滤属性
     *
     * @type {string}
     * @memberof EmpTreeBase
     */
    public srfnodefilter: string = '';

    /**
     * 默认输出图标
     *
     * @type {boolean}
     * @memberof EmpTreeBase
     */
    public isOutputIconDefault: boolean = true;

    /**
     * 树数据
     *
     * @type {any[]}
     * @memberof EmpTreeBase
     */
    @Provide()
    public nodes: any[] = [];  

    /**
     * 数据展开主键
     *
     * @type {string[]}
     * @memberof EmpTreeBase
     */
    @Provide()
    public expandedKeys: string[] = [];

    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof EmpTreeBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 选中数据变更事件
     *
     * @public
     * @param {*} data
     * @param {*} data 当前节点对应传入对象
     * @param {*} checkedState 树目前选中状态对象
     * @memberof EmpTreeBase
     */
    public onCheck(data: any, checkedState: any) {
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
     * @public
     * @param {*} data 节点对应传入对象
     * @param {*} node 节点对应node对象
     * @memberof EmpTreeBase
     */
    public selectionChange(data: any, node: any) {
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
     * @memberof EmpTreeBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof EmpTreeBase
     */    
    public afterCreated(){
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
                    this.load();
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
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"SysEmployee")){
                    return;
                }
                if(Object.is(action,'appRefresh')){
                    this.refresh([data]);
                }
            })
        }
    }

    /**
     * 对树节点进行筛选操作
     * @memberof OrderTree
     */
    public filterNode(value:any, data:any) {
        if (!value) return true;
        return data.text.indexOf(value) !== -1;
    }


    /**
     * vue 生命周期
     *
     * @memberof EmpTreeBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof EmpTreeBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if(this.appStateEvent){
            this.appStateEvent.unsubscribe();
        }
    }

    /**
     * 刷新数据
     *
     * @memberof EmpTreeBase
     */
    public refresh_all(): void {
        this.inited = false;
        this.$nextTick(() => {
            this.inited = true;
        });
    }

    /**
     * 刷新父节点
     *
     * @memberof EmpTreeBase
     */
    public refresh_parent(): void {
        if (Object.keys(this.currentselectedNode).length === 0) {
            return;
        }
        const tree: any = this.$refs.tree;
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
     * @memberof EmpTreeBase
     */
    public load(node: any = {}) {
        if (node.data && node.data.children) {
            return;
        }
        const params: any = {
            srfnodeid: node.data && node.data.id ? node.data.id : "#",
            srfnodefilter: this.srfnodefilter
        };
        let tempViewParams:any = JSON.parse(JSON.stringify(this.viewparams));
        let curNode:any = {}; 
        curNode = Util.deepObjectMerge(curNode,node);
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
                this.$notice.error(response.info);
                return;
            }
            const _items = response.data;
            this.formatExpanded(_items);
            this.nodes = [..._items];
            this.parseNodes(this.nodes);
            let isRoot = Object.is(node.level,0);
            let isSelectedAll = node.checked;
            this.setDefaultSelection(_items, isRoot, isSelectedAll);
            this.$emit("load", _items);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$notice.error(response.info);
        });
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof EmpTreeBase
     */
    public computecurNodeContext(curNode:any){
        let tempContext:any = {};
        if(curNode && curNode.data && curNode.data.srfappctx){
            tempContext = JSON.parse(JSON.stringify(curNode.data.srfappctx));
        }else{
            tempContext = JSON.parse(JSON.stringify(this.context));
        }
        return tempContext;
    }

    /**
     * 刷新功能
     *
     * @param {any[]} args
     * @memberof EmpTreeBase
     */
    public refresh(args: any[]): void {
        this.refresh_all();
    }

    /**
     * 刷新节点
     *
     * @public
     * @param {*} [curContext] 当前节点上下文
     * @param {*} [arg={}] 当前节点附加参数
     * @param {boolean} parentnode 是否是刷新父节点
     * @memberof EmpTreeBase
     */
    public refresh_node(curContext:any,arg: any = {}, parentnode: boolean): void {
        const { srfnodeid: id } = arg;
        Object.assign(arg,{viewparams:this.viewparams});
        const get: Promise<any> = this.service.getNodes(JSON.parse(JSON.stringify(this.context)),arg);
        get.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$notice.error(response.info);
                return;
            }
            const _items = [...response.data];
            this.formatExpanded(_items);
            const tree: any = this.$refs.tree;
            tree.updateKeyChildren(id, _items);
            if (parentnode) {
                this.currentselectedNode = {};
            }
            this.setDefaultSelection(_items);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$notice.error(response.info);
        });
    }

    /**
     * 默认展开节点
     *
     * @public
     * @param {any[]} items
     * @returns {any[]}
     * @memberof EmpTreeBase
     */
    public formatExpanded(items: any[]): any[] {
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
     * @memberof EmpTreeBase
     */
    public setDefaultSelection(items: any[], isRoot: boolean = false, isSelectedAll: boolean = false): void {
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
     * @memberof EmpTreeBase
     */
    public renderContextMenu(node: any) {
        let content;
        if (node && node.data) {
            const data: any = JSON.parse(JSON.stringify(node.data));
            this.currentselectedNode = { ...data };
            const tags: string[] = data.id.split(';');
        }
        return content;
    }

    /**
     * 设置选中高亮
     *
     * @param {*} data
     * @memberof EmpTreeBase
     */
    public setTreeNodeHighLight(data: any): void {
        const tree: any = this.$refs.tree;
        tree.setCurrentKey(data.id);
    }

    /**
     * 执行默认界面行为
     *
     * @param {*} node
     * @memberof EmpTreeBase
     */
    public doDefaultAction(node: any) {
        if (node && node.data) {
            const data: any = node.data;
            const tags: string[] = data.id.split(';');
        }
        this.$emit('nodedblclick', this.selectedNodes);
    }
    
    /**
    * 单选选择值
    *
    * @param {string} 
    * @memberof EmpTree
    */
    public selectedValue:string = ""; 

    /**
     * 单选点击行为
     *
     * @param {*} item
     * @memberof EmpTreeBase
     */
    public onSimpleSelChange(item:any){
        this.$emit('selectchange', [item]);
        this.selectedValue = item.srfkey;
    }

    /**
     * 多选点击行为
     *
     * @param {*} data
     * @memberof EmpTreeBase
     */
    public onChecked(data:any){
        let { detail } = data;
        if (!detail) {
            return;
        }
        let { value } = detail;
        this.valueNodes.forEach((item: any, index: number) => {
            if (Object.is(item.id, value)) {
                if (detail.checked) {
                    this.selectedNodes.push(this.valueNodes[index]);
                } else {
                    this.selectedNodes.splice(this.selectedNodes.findIndex((i: any) => i.value === item.value), 1)
                }
            }
        });
        this.$emit('selectchange', this.selectedNodes);
    }
}
</script>

<style lang='less'>
@import './emp-tree-treeview.less';
</style>