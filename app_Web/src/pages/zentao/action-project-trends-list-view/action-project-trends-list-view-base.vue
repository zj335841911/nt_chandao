
<template>
<studio-view viewName="actionprojecttrendslistview" viewTitle="系统日志列表视图" class='delistview action-project-trends-list-view'>
    <view_list 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        createAction="Create"
        removeAction="Remove"
        updateAction="Update"
        fetchAction="FetchProjectTrends"
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
import ActionService from '@/service/action/action-service';

import ListViewEngine from '@engine/view/list-view-engine';


import CodeListService from "@service/app/codelist-service";


@Component({
    components: {
    },
})
export default class ActionProjectTrendsListViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof ActionProjectTrendsListViewBase
     */
    public appEntityService: ActionService = new ActionService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ActionProjectTrendsListViewBase
     */    
    public counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ActionProjectTrendsListViewBase
     */
    @Emit() 
    public viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof ActionProjectTrendsListViewBase
     */
    @Prop() public viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof ActionProjectTrendsListViewBase
     */
    @Prop() public viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ActionProjectTrendsListViewBase
     */
    @Prop({ default: true }) public viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ActionProjectTrendsListViewBase
	 */
	public viewtag: string = '7d34636d1c24d613abf8d3fdc64ec7ba';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof ActionProjectTrendsListViewBase
	 */
    public customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof ActionProjectTrendsListViewBase
	 */
    public customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ActionProjectTrendsListViewBase
     */
    public model: any = {
        srfCaption: 'entities.action.views.projecttrendslistview.caption',
        srfTitle: 'entities.action.views.projecttrendslistview.title',
        srfSubTitle: 'entities.action.views.projecttrendslistview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListViewBase
     */
    public containerModel: any = {
        view_list: { name: 'list', type: 'LIST' },
    };

    /**
     *  计数器刷新
     *
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListViewBase
     */
    public viewState: Subject<ViewState> = new Subject();



    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ActionProjectTrendsListViewBase
     */
    public engine: ListViewEngine = new ListViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ActionProjectTrendsListViewBase
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
            keyPSDEField: 'action',
            majorPSDEField: 'comment',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ActionProjectTrendsListViewBase
     */
    public context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ActionProjectTrendsListViewBase
     */
    public viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @public
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListViewBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListViewBase
     */
    public beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ActionProjectTrendsListViewBase
     */
    public mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ActionProjectTrendsListViewBase
     */
    public afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        

    }


    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }


    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }


    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_rowdblclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }


    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }


    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProjectTrendsListViewBase
     */
    public list_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'load', $event);
    }



    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ActionProjectTrendsListView
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
            { pathName: 'actions', parameterName: 'action' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const _data: any = { w: (new Date().getTime()) };
            Object.assign(_data, data);
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, curViewParam, deResParameters, parameters, args, _data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ActionProjectTrendsListView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const data: any = {};
        let curViewParam = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(curViewParam,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
            { pathName: 'editview', parameterName: 'editview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, curViewParam, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }



    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListViewBase
     */
    public destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ActionProjectTrendsListViewBase
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
     * @memberof ActionProjectTrendsListView
     */
    public query: string = '';

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof ActionProjectTrendsListView
     */
    public isExpandSearchForm: boolean = false;

    /**
     * 快速搜索
     *
     * @param {*} $event
     * @memberof ActionProjectTrendsListView
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
@import './action-project-trends-list-view.less';
</style>