
<template>
<div class='view-container action-product-trends-list-view'>
    <app-studioaction :viewTitle="$t(model.srfTitle)" viewName="actionproducttrendslistview"></app-studioaction>
    <card class='view-card view-no-caption'  :bordered="false" :dis-hover="true" >
    

        <div class='content-container'>

<view_list 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
    createAction="Create"
    removeAction="Remove"
    updateAction="Update"
    fetchAction="FetchProductTrends"
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

        </div>
    </card>
</div>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { UIActionTool,Util } from '@/utils';
import { Subject } from 'rxjs';
import ActionService from '@/service/action/action-service';

import ListViewEngine from '@engine/view/list-view-engine';



@Component({
    components: {
    },
})
export default class ActionProductTrendsListViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof ActionProductTrendsListViewBase
     */
    protected appEntityService: ActionService = new ActionService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ActionProductTrendsListViewBase
     */    
    protected counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ActionProductTrendsListViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof ActionProductTrendsListViewBase
     */
    @Prop() protected viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof ActionProductTrendsListViewBase
     */
    @Prop() protected viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ActionProductTrendsListViewBase
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ActionProductTrendsListViewBase
	 */
	protected viewtag: string = 'f7a278d765ff0f85a2c59cbb2485fa30';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof ActionProductTrendsListViewBase
	 */
    protected customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof ActionProductTrendsListViewBase
	 */
    protected customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ActionProductTrendsListViewBase
     */
    protected model: any = {
        srfCaption: 'entities.action.views.producttrendslistview.caption',
        srfTitle: 'entities.action.views.producttrendslistview.title',
        srfSubTitle: 'entities.action.views.producttrendslistview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ActionProductTrendsListViewBase
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
     * @memberof ActionProductTrendsListViewBase
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
     * @memberof ActionProductTrendsListViewBase
     */
    protected containerModel: any = {
        view_list: { name: 'list', type: 'LIST' },
    };

    /**
     *  计数器刷新
     *
     * @memberof ActionProductTrendsListViewBase
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
     * @private
     * @type {Subject<{action: string, data: any}>}
     * @memberof ActionProductTrendsListViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 视图引擎
     *
     * @private
     * @type {Engine}
     * @memberof ActionProductTrendsListViewBase
     */
    private engine: ListViewEngine = new ListViewEngine();

    /**
     * 引擎初始化
     *
     * @private
     * @memberof ActionProductTrendsListViewBase
     */
    private engineInit(): void {
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
     * @memberof ActionProductTrendsListViewBase
     */
    protected context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ActionProductTrendsListViewBase
     */
    protected viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @private
     * @memberof ActionProductTrendsListViewBase
     */
    private parseViewParam(): void {
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
     * @memberof ActionProductTrendsListViewBase
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
     * @memberof ActionProductTrendsListViewBase
     */
	public handleCustomDataLogic(curNavData:any,tempData:any,item:string){
		// 直接值直接赋值
		if(curNavData.isRawValue){
			if(Object.is(curNavData.value,"null") || Object.is(curNavData.value,"")){
                Object.defineProperty(tempData, item, {
                    value: null,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }else{
                Object.defineProperty(tempData, item, {
                    value: curNavData.value,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }
		}else{
			// 先从导航上下文取数，没有再从导航参数（URL）取数，如果导航上下文和导航参数都没有则为null
			if(this.context[curNavData.value]){
				Object.defineProperty(tempData, item, {
					value: this.context[curNavData.value],
					writable : true,
					enumerable : true,
					configurable : true
				});
			}else{
				if(this.viewparams[curNavData.value]){
					Object.defineProperty(tempData, item, {
						value: this.viewparams[curNavData.value],
						writable : true,
						enumerable : true,
						configurable : true
					});
				}else{
					Object.defineProperty(tempData, item, {
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
     * @memberof ActionProductTrendsListViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ActionProductTrendsListViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        
    }

    /**
     * 销毁之前
     *
     * @memberof ActionProductTrendsListViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ActionProductTrendsListViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ActionProductTrendsListViewBase
     */
    protected afterMounted(){
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
     * @memberof ActionProductTrendsListViewBase
     */
    protected list_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }


    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListViewBase
     */
    protected list_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }


    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListViewBase
     */
    protected list_rowdblclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }


    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListViewBase
     */
    protected list_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }


    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionProductTrendsListViewBase
     */
    protected list_load($event: any, $event2?: any) {
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
     * @memberof ActionProductTrendsListView
     */
    protected newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        const data: any = {};
        let curViewParam = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(curViewParam,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
        ];
        const _this: any = this;
        const openPopupModal = (view: any, data: any) => {
            let container: Subject<any> = this.$appmodal.openModal(view, curViewParam, data);
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
            viewname: 'action-edit-view', 
            height: 0, 
            width: 800,  
            title: this.$t('entities.action.views.editview.title'),
        };
        openPopupModal(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ActionProductTrendsListView
     */
    protected opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const data: any = {};
        let curViewParam = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(curViewParam,args[0]);
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'actions', parameterName: 'action' },
        ];
        const _this: any = this;
        const openPopupModal = (view: any, data: any) => {
            let container: Subject<any> = this.$appmodal.openModal(view, curViewParam, data);
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
            viewname: 'action-edit-view', 
            height: 0, 
            width: 800,  
            title: this.$t('entities.action.views.editview.title'),
        };
        openPopupModal(view, data);
    }



    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ActionProductTrendsListViewBase
     */
    protected closeView(args: any[]): void {
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
     * @memberof ActionProductTrendsListViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ActionProductTrendsListViewBase
     */
    protected afterDestroyed(){
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
     * @memberof ActionProductTrendsListView
     */
    protected query: string = '';

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof ActionProductTrendsListView
     */
    protected isExpandSearchForm: boolean = false;

    /**
     * 快速搜索
     *
     * @param {*} $event
     * @memberof ActionProductTrendsListView
     */
    protected onSearch($event: any): void {
        const refs: any = this.$refs;
        if (refs.list) {
            refs.list.load({});
        }
    }

}
</script>

<style lang='less'>
@import './action-product-trends-list-view.less';
</style>