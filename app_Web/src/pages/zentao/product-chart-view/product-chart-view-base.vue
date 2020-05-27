<template>
<studio-view viewName="productchartview" viewTitle="产品图表视图" class='dechartview product-chart-view'>
    <template slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
    </template>
    <view_chart 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        fetchAction="FetchDefault"
        :showBusyIndicator="true" 
        name="chart"  
        ref='chart' 
        @beforeload="chart_beforeload($event)"  
        @load="chart_load($event)"  
        @closeview="closeView($event)">
    </view_chart>
</studio-view>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { UIActionTool,Util } from '@/utils';
import { Subject } from 'rxjs';
import ProductService from '@/service/product/product-service';

import ChartViewEngine from '@engine/view/chart-view-engine';



@Component({
    components: {
    },
})
export default class ProductChartViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductChartViewBase
     */
    public appEntityService: ProductService = new ProductService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductChartViewBase
     */    
    public counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ProductChartViewBase
     */
    @Emit() 
    public viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof ProductChartViewBase
     */
    @Prop() public viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof ProductChartViewBase
     */
    @Prop() public viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ProductChartViewBase
     */
    @Prop({ default: true }) public viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ProductChartViewBase
	 */
	public viewtag: string = '2a60d576ef50d63f5e967cef38bc8fed';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof ProductChartViewBase
	 */
    public customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof ProductChartViewBase
	 */
    public customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ProductChartViewBase
     */
    public model: any = {
        srfCaption: 'entities.product.views.chartview.caption',
        srfTitle: 'entities.product.views.chartview.title',
        srfSubTitle: 'entities.product.views.chartview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartViewBase
     */
    public containerModel: any = {
        view_chart: { name: 'chart', type: 'CHART' },
    };

    /**
     *  计数器刷新
     *
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartViewBase
     */
    public viewState: Subject<ViewState> = new Subject();


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductChartViewBase
     */
    public engine: ChartViewEngine = new ChartViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductChartViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProductChartViewBase
     */
    public context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProductChartViewBase
     */
    public viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @public
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartViewBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartViewBase
     */
    public beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ProductChartViewBase
     */
    public mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ProductChartViewBase
     */
    public afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        
    }


    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductChartViewBase
     */
    public chart_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }


    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductChartViewBase
     */
    public chart_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }




    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartViewBase
     */
    public destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ProductChartViewBase
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
     * @memberof ProductChartView
     */
    public query: string = '';

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof ProductChartView
     */
    public isExpandSearchForm: boolean = false;

    /**
     * 快速搜索
     *
     * @param {*} $event
     * @memberof ProductChartView
     */
    public onSearch($event: any): void {
        const refs: any = this.$refs;
        if (refs.chart) {
            refs.chart.refresh({});
        }
    }

}
</script>

<style lang='less'>
@import './product-chart-view.less';
</style>