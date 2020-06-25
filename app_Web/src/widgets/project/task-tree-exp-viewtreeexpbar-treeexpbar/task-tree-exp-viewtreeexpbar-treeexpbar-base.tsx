import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import TaskTreeExpViewtreeexpbarService from './task-tree-exp-viewtreeexpbar-treeexpbar-service';


/**
 * treeexpbar部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TaskTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class TaskTreeExpViewtreeexpbarTreeExpBarBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {TaskTreeExpViewtreeexpbarService}
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: TaskTreeExpViewtreeexpbarService = new TaskTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'project';

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }

    /**
     * 视图唯一标识
     *
     * @type {boolean}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    @Prop() public viewUID!:string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 选中数据
     *
     * @type {*}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public selection: any = {};

    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 过滤值
     *
     * @type {string}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public srfnodefilter: string = '';

    /**
     * 刷新标识
     *
     * @public
     * @type {number}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public counter:number = 0;

    /**
     * 是否加载默认关联视图
     *
     * @public
     * @type {boolean}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public istLoadDefaultRefView: boolean = false;

    /**
     * 分割宽度
     *
     * @type {number}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public split: number = 0.15;

    /**
     * split值变化事件
     *
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public onSplitChange() {
        if(this.split){
          this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split});
        }
    }

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'PROJECTMODULE')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'ROOT_NOBRANCH')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'MODULE')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'ROOTMODULE')) {
            return {  
                viewname: 'task-main-grid-view-by-module', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'ZT_PRODUCT')) {
            return {  
                viewname: 'task-main-grid-view', 
                parentdata: {"srfparentdefname":"n_product_eq"},
                deKeyField:'task'
			};
        }
        if (Object.is(expmode, 'ALL')) {
            return {  
                viewname: 'task-main-grid-view', 
                parentdata: {},
                deKeyField:'task'
			};
        }
        return null;
    }

    /**
     * 树导航选中
     *
     * @param {any []} args
     * @param {string} [tag]
     * @param {*} [$event2]
     * @returns {void}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public treeexpbar_selectionchange(args: any [], tag?: string, $event2?: any): void {
        if (args.length === 0) {
            return ;
        }
        const arg:any = args[0];
        if (!arg.id) {
            return;
        }
        const nodetype = arg.id.split(';')[0];
        const refview = this.getExpItemView({ nodetype: nodetype });
        if (!refview) {
            return;
        }
        let tempViewparam:any = {};
        let tempContext:any ={};
        if(arg && arg.navfilter){
            this.counter += 1;
            Object.defineProperty(tempViewparam, arg.navfilter, {
                value : arg.srfkey,
                writable : true,
                enumerable : true,
                configurable : true
            })
            Object.assign(tempContext,{srfcounter:this.counter});
        }
        Object.assign(tempContext,JSON.parse(JSON.stringify(this.context)));
        if(arg.srfappctx){
            Object.assign(tempContext,JSON.parse(JSON.stringify(arg.srfappctx)));
        }
        // 计算导航上下文
        if(arg && arg.navigateContext && Object.keys(arg.navigateContext).length >0){
            let tempData:any = arg.curData?JSON.parse(JSON.stringify(arg.curData)):{};
            Object.assign(tempData,arg);
            let _context = this.$util.computedNavData(tempData,tempContext,tempViewparam,arg.navigateContext);
            Object.assign(tempContext,_context);
        }
        if(arg.srfparentdename){
            Object.assign(tempContext,{srfparentdename:arg.srfparentdename});
        }
        if(arg.srfparentkey){
            Object.assign(tempContext,{srfparentkey:arg.srfparentkey});
        }
        // 计算导航参数
        if(arg && arg.navigateParams && Object.keys(arg.navigateParams).length >0){
            let tempData:any = arg.curData?JSON.parse(JSON.stringify(arg.curData)):{};
            Object.assign(tempData,arg);
            let _params = this.$util.computedNavData(tempData,tempContext,tempViewparam,arg.navigateParams);
            Object.assign(tempViewparam,_params);
            this.counter += 1;
            Object.assign(tempContext,{srfcounter:this.counter});
        }
        this.selection = {};
        Object.assign(this.selection, { view: { viewname: refview.viewname } });
        Object.assign(this.selection,{'viewparam':tempViewparam,'context':tempContext});
        this.$emit('selectionchange',args);
        this.$forceUpdate();
    }

    /**
     * 树加载完成
     *
     * @param {any[]} args
     * @param {string} [tag]
     * @param {*} [$event2]
     * @returns {void}
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public treeexpbar_load(args: any[], tag?: string, $event2?: any): void {
        this.$emit('load',args);
    }

    /**
     * 执行搜索
     *
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public onSearch(): void {
        if (!this.viewState) {
            return;
        }
        this.istLoadDefaultRefView = false;
        this.viewState.next({ tag: 'treeexpbar_tree', action: 'filter', data: { srfnodefilter: this.srfnodefilter } });
    }

    /**
     * vue 声明周期
     *
     * @memberof @memberof TaskTreeExpViewtreeexpbarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TaskTreeExpViewtreeexpbarBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.istLoadDefaultRefView = false;
                this.viewState.next({ tag: 'treeexpbar_tree', action: action, data: data });
            });
        }
    }

    /**
    * Vue声明周期(组件渲染完毕)
    *
    * @memberof TaskTreeExpViewtreeexpbarBase
    */
    public mounted() {
        this.afterMounted();     
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof TaskTreeExpViewtreeexpbarBase
    */
    public afterMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("tasktreeexpviewtreeexpbar") as any).offsetWidth;
            if(this.ctrlWidth){
                    this.split = this.ctrlWidth/containerWidth;
            }
            this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split}); 
        }  
    }


    /**
     * vue 生命周期
     *
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 视图数据变化
     *
     * @param {*} $event
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public onViewDatasChange($event: any): void {
        this.$emit('selectionchange', $event);
    }

    /**
     * 视图数据被激活
     *
     * @param {*} $event
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public viewDatasActivated($event: any): void {
        this.$emit('activated', $event);
    }

    /**
     * 视图数据加载完成
     *
     * @param {*} $event
     * @memberof TaskTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
    
}