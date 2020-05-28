
<template>
<studio-view viewName="productleftsidebarlistview" viewTitle="所有产品" class='delistview product-left-sidebar-list-view'>
    <template slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
    </template>
    <i-input slot="quickSearch" v-model="query" search @on-search="onSearch($event)"/>
    <template slot="toolbar">
                <div class='toolbar-container'>
            <i-button :title="$t('entities.product.leftsidebarlistviewtoolbar_toolbar.deuiaction3_manager.tip')" v-show="toolBarModels.deuiaction3_manager.visabled" :disabled="toolBarModels.deuiaction3_manager.disabled" class='' @click="toolbar_click({ tag: 'deuiaction3_manager' }, $event)">
                    <i class=''></i>
                    <span class='caption'>{{$t('entities.product.leftsidebarlistviewtoolbar_toolbar.deuiaction3_manager.caption')}}</span>
                </i-button>
            <span class='seperator'>|</span>    <i-button :title="$t('entities.product.leftsidebarlistviewtoolbar_toolbar.deuiaction1.tip')" v-show="toolBarModels.deuiaction1.visabled" :disabled="toolBarModels.deuiaction1.disabled" class='' @click="toolbar_click({ tag: 'deuiaction1' }, $event)">
                    <i class='fa fa-plus'></i>
                    <span class='caption'>{{$t('entities.product.leftsidebarlistviewtoolbar_toolbar.deuiaction1.caption')}}</span>
                </i-button>
            <span class='seperator'>|</span>    <i-button :title="$t('entities.product.leftsidebarlistviewtoolbar_toolbar.deuiaction2.tip')" v-show="toolBarModels.deuiaction2.visabled" :disabled="toolBarModels.deuiaction2.disabled" class='' @click="toolbar_click({ tag: 'deuiaction2' }, $event)">
                    <i class='fa fa-refresh'></i>
                    <span class='caption'>{{$t('entities.product.leftsidebarlistviewtoolbar_toolbar.deuiaction2.caption')}}</span>
                </i-button>
        </div>
    </template>
    <view_list 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        createAction="Create"
        removeAction="Remove"
        updateAction="Update"
        fetchAction="FetchDefault"
        :showBusyIndicator="true"
        name="list"  
        ref='list' 
        @selectionchange="list_selectionchange($event)"  
        @beforeload="list_beforeload($event)"  
        @rowdblclick="list_rowdblclick($event)"  
        @remove="list_remove($event)"  
        @load="list_load($event)"  
        @closeview="closeView($event)">
    </view_list>
</studio-view>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { UIActionTool,Util } from '@/utils';
import { Subject } from 'rxjs';
import ProductService from '@/service/product/product-service';

import ListViewEngine from '@engine/view/list-view-engine';


import ProductUIService from '@/uiservice/product/product-ui-service';

@Component({
    components: {
    },
})
export default class ProductLeftSidebarListViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductLeftSidebarListViewBase
     */
    public appEntityService: ProductService = new ProductService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductLeftSidebarListViewBase
     */    
    public counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ProductLeftSidebarListViewBase
     */
    @Emit() 
    public viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof ProductLeftSidebarListViewBase
     */
    @Prop() public viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof ProductLeftSidebarListViewBase
     */
    @Prop() public viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ProductLeftSidebarListViewBase
     */
    @Prop({ default: true }) public viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ProductLeftSidebarListViewBase
	 */
	public viewtag: string = '8ca39819b87c5e3e8669fcd7409cf9a2';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof ProductLeftSidebarListViewBase
	 */
    public customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof ProductLeftSidebarListViewBase
	 */
    public customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ProductLeftSidebarListViewBase
     */
    public model: any = {
        srfCaption: 'entities.product.views.leftsidebarlistview.caption',
        srfTitle: 'entities.product.views.leftsidebarlistview.title',
        srfSubTitle: 'entities.product.views.leftsidebarlistview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ProductLeftSidebarListViewBase
     */
    @Watch('viewparam',{immediate: true, deep: true})
    onParamData(newVal: any, oldVal: any) {
        if(newVal){
            for(let key in this.viewparams){
                delete this.viewparams[key];
            }
            Object.assign(this.viewparams, JSON.parse(this.viewparam));
            
        } 
    }

    /**
     * 处理应用上下文变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ProductLeftSidebarListViewBase
     */
    @Watch('viewdata')
    onViewData(newVal: any, oldVal: any) {
        const _this: any = this;
        if (!Object.is(newVal, oldVal) && _this.engine) {
            _this.parseViewParam();
            _this.engine.load();
        }
        
    }

    /**
     * 容器模型
     *
     * @type {*}
     * @memberof ProductLeftSidebarListViewBase
     */
    public containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_list: { name: 'list', type: 'LIST' },
    };

    /**
     *  计数器刷新
     *
     * @memberof ProductLeftSidebarListViewBase
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
     * 视图状态订阅对象
     *
     * @public
     * @type {Subject<{action: string, data: any}>}
     * @memberof ProductLeftSidebarListViewBase
     */
    public viewState: Subject<ViewState> = new Subject();
    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductLeftSidebarListView
     */
    public toolBarModels: any = {
        deuiaction3_manager: { name: 'deuiaction3_manager', caption: '管理', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'Manager', target: 'NONE' } },

        seperator2: {  name: 'seperator2', type: 'SEPERATOR', visabled: true, dataaccaction: '', uiaction: { } },
        deuiaction1: { name: 'deuiaction1', caption: '新建', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'New', target: '' } },

        seperator1: {  name: 'seperator1', type: 'SEPERATOR', visabled: true, dataaccaction: '', uiaction: { } },
        deuiaction2: { name: 'deuiaction2', caption: '刷新', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'Refresh', target: '' } },

    };



    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductLeftSidebarListViewBase
     */
    public engine: ListViewEngine = new ListViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductLeftSidebarListViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            list: this.$refs.list,
            opendata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.opendata(args,fullargs, params, $event, xData);
            },
            newdata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.newdata(args,fullargs, params, $event, xData);
            },
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProductLeftSidebarListViewBase
     */
    public context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProductLeftSidebarListViewBase
     */
    public viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @public
     * @memberof ProductLeftSidebarListViewBase
     */
    public parseViewParam(): void {
        for(let key in this.context){
            delete this.context[key];
        }
        if (!this.viewDefaultUsage && this.viewdata && !Object.is(this.viewdata, '')) {
            Object.assign(this.context, JSON.parse(this.viewdata));
            if(this.context && this.context.srfparentdename){
                Object.assign(this.viewparams,{srfparentdename:this.context.srfparentdename});
            }
            if(this.context && this.context.srfparentkey){
                Object.assign(this.viewparams,{srfparentkey:this.context.srfparentkey});
            }
            this.handleCustomViewData();
            return;
        }
        const path = (this.$route.matched[this.$route.matched.length - 1]).path;
        const keys: Array<any> = [];
        const curReg = this.$pathToRegExp.pathToRegexp(path, keys);
        const matchArray = curReg.exec(this.$route.path);
        let tempValue: Object = {};
        keys.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item.name, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
        this.$viewTool.formatRouteParams(tempValue,this.$route,this.context,this.viewparams);
        if(this.$store.getters.getAppData() && this.$store.getters.getAppData().context){
            Object.assign(this.context,this.$store.getters.getAppData().context);
        }
        //初始化视图唯一标识
        Object.assign(this.context,{srfsessionid:this.$util.createUUID()});
        this.handleCustomViewData();
    }

    /**
     * 处理自定义视图数据
     *
     * @memberof ProductLeftSidebarListViewBase
     */
	public handleCustomViewData(){
		if(Object.keys(this.customViewNavContexts).length > 0){
			Object.keys(this.customViewNavContexts).forEach((item:any) =>{
				let tempContext:any = {};
				let curNavContext:any = this.customViewNavContexts[item];
				this.handleCustomDataLogic(curNavContext,tempContext,item);
				Object.assign(this.context,tempContext);
			})
		}
		if(Object.keys(this.customViewParams).length > 0){
			Object.keys(this.customViewParams).forEach((item:any) =>{
				let tempParam:any = {};
				let curNavParam:any = this.customViewParams[item];
				this.handleCustomDataLogic(curNavParam,tempParam,item);
				Object.assign(this.viewparams,tempParam);
			})
		}
	}

    /**
     * 处理自定义视图数据逻辑
     *
     * @memberof ProductLeftSidebarListViewBase
     */
	public handleCustomDataLogic(curNavData:any,tempData:any,item:string){
		// 直接值直接赋值
		if(curNavData.isRawValue){
			if(Object.is(curNavData.value,"null") || Object.is(curNavData.value,"")){
                Object.defineProperty(tempData, item.toLowerCase(), {
                    value: null,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }else{
                Object.defineProperty(tempData, item.toLowerCase(), {
                    value: curNavData.value,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }
		}else{
			// 先从导航上下文取数，没有再从导航参数（URL）取数，如果导航上下文和导航参数都没有则为null
			if(this.context[(curNavData.value).toLowerCase()]){
				Object.defineProperty(tempData, item.toLowerCase(), {
					value: this.context[(curNavData.value).toLowerCase()],
					writable : true,
					enumerable : true,
					configurable : true
				});
			}else{
				if(this.viewparams[(curNavData.value).toLowerCase()]){
					Object.defineProperty(tempData, item.toLowerCase(), {
						value: this.viewparams[(curNavData.value).toLowerCase()],
						writable : true,
						enumerable : true,
						configurable : true
					});
				}else{
					Object.defineProperty(tempData, item.toLowerCase(), {
						value: null,
						writable : true,
						enumerable : true,
						configurable : true
					});
				}
			}
		}
	}
	

    /**
     * Vue声明周期
     *
     * @memberof ProductLeftSidebarListViewBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ProductLeftSidebarListViewBase
     */    
    public afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        
    }

    /**
     * 销毁之前
     *
     * @memberof ProductLeftSidebarListViewBase
     */
    public beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ProductLeftSidebarListViewBase
     */
    public mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ProductLeftSidebarListViewBase
     */
    public afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        
    }


    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLeftSidebarListViewBase
     */
    public toolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction3_manager')) {
            this.toolbar_deuiaction3_manager_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction1')) {
            this.toolbar_deuiaction1_click(null, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.toolbar_deuiaction2_click(null, '', $event2);
        }
    }


    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLeftSidebarListViewBase
     */
    public list_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }


    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLeftSidebarListViewBase
     */
    public list_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }


    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLeftSidebarListViewBase
     */
    public list_rowdblclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }


    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLeftSidebarListViewBase
     */
    public list_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }


    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductLeftSidebarListViewBase
     */
    public list_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'load', $event);
    }



    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction3_manager_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this.$refs.list;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductUIService  = new ProductUIService();
        curUIService.Product_Manager(datas,contextJO, paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this.$refs.list;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.New(datas, contextJO,paramJO,  $event, xData,this,"Product");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this.$refs.list;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.Refresh(datas, contextJO,paramJO,  $event, xData,this,"Product");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductLeftSidebarListView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        const data: any = {};
        if(args[0].srfsourcekey){
            data.srfsourcekey = args[0].srfsourcekey;
        }
        let curViewParam = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(curViewParam,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, curViewParam, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'product-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.product.views.editview.title'),
            placement: 'DRAWER_LEFT',
        };
        openDrawer(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductLeftSidebarListView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const data: any = {};
        let curViewParam = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(curViewParam,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, curViewParam, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


    /**
     * 新建
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProductLeftSidebarListViewBase
     */
    public New(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
         const _this: any = this;
        if (_this.newdata && _this.newdata instanceof Function) {
            const data: any = {};
            _this.newdata([{ ...data }],[{ ...data }], params, $event, xData);
        } else {
            _this.$Notice.error({ title: '错误', desc: 'newdata 视图处理逻辑不存在，请添加!' });
        }
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
     * @memberof ProductLeftSidebarListViewBase
     */
    public Refresh(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.refresh && xData.refresh instanceof Function) {
            xData.refresh(args);
        } else if (_this.refresh && _this.refresh instanceof Function) {
            _this.refresh(args);
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProductLeftSidebarListViewBase
     */
    public closeView(args: any[]): void {
        let _view: any = this;
        if (_view.viewdata) {
            _view.$emit('viewdataschange', [args]);
            _view.$emit('close', [args]);
        } else if (_view.$tabPageExp) {
            _view.$tabPageExp.onClose(_view.$route.fullPath);
        }
    }

    /**
     * 销毁视图回调
     *
     * @memberof ProductLeftSidebarListViewBase
     */
    public destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ProductLeftSidebarListViewBase
     */
    public afterDestroyed(){
        if(this.viewDefaultUsage){
            let localStoreLength = Object.keys(localStorage);
            if(localStoreLength.length > 0){
                localStoreLength.forEach((item:string) =>{
                if(item.startsWith(this.context.srfsessionid)){
                    localStorage.removeItem(item);
                }
                })
            }
        }
    }
    /**
     * 搜索值
     *
     * @type {string}
     * @memberof ProductLeftSidebarListView
     */
    public query: string = '';

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof ProductLeftSidebarListView
     */
    public isExpandSearchForm: boolean = false;

    /**
     * 快速搜索
     *
     * @param {*} $event
     * @memberof ProductLeftSidebarListView
     */
    public onSearch($event: any): void {
        const refs: any = this.$refs;
        if (refs.list) {
            refs.list.load({});
        }
    }

}
</script>

<style lang='less'>
@import './product-left-sidebar-list-view.less';
</style>