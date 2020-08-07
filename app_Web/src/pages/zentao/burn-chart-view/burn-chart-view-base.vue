<template>
<div class='view-container burn-chart-view'>
    <app-studioaction :viewTitle="$t(model.srfTitle)" viewName="burnchartview"></app-studioaction>
    <card class='view-card view-no-caption'  :bordered="false" :dis-hover="true" >
    
<p slot='title'>
</p>

        <div class='content-container'>

<row style="margin-bottom:6px;">
    <div class='pull-right'>
        <div class='toolbar-container'>
            <tooltip :transfer="true" :max-width="600">
                    <i-button v-show="toolBarModels.deuiaction1_computeburn.visabled" :disabled="toolBarModels.deuiaction1_computeburn.disabled" class='' @click="toolbar_click({ tag: 'deuiaction1_computeburn' }, $event)">
                        <i class=''></i>
                        <span class='caption'>{{$t('entities.burn.chartviewtoolbar_toolbar.deuiaction1_computeburn.caption')}}</span>
                    </i-button>
                <div slot='content'>{{$t('entities.burn.chartviewtoolbar_toolbar.deuiaction1_computeburn.tip')}}</div>
            </tooltip>
        </div>
    </div>
</row>
<view_chart 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
    fetchAction="FetchESTIMATEANDLEFT"
    :showBusyIndicator="true" 
    name="chart"  
    ref='chart' 
    @beforeload="chart_beforeload($event)"  
    @load="chart_load($event)"  
    @closeview="closeView($event)">
</view_chart>

        </div>
    </card>
</div>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { UIActionTool,Util } from '@/utils';
import { Subject } from 'rxjs';
import BurnService from '@/service/burn/burn-service';

import ChartViewEngine from '@engine/view/chart-view-engine';


import BurnUIService from '@/uiservice/burn/burn-ui-service';

@Component({
    components: {
    },
})
export default class BurnChartViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {BurnService}
     * @memberof BurnChartViewBase
     */
    protected appEntityService: BurnService = new BurnService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BurnChartViewBase
     */    
    protected counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof BurnChartViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof BurnChartViewBase
     */
    @Prop() protected viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof BurnChartViewBase
     */
    @Prop() protected viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof BurnChartViewBase
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof BurnChartViewBase
	 */
	protected viewtag: string = '441544d65ca067ea5ea625645b70e610';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof BurnChartViewBase
	 */
    protected customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof BurnChartViewBase
	 */
    protected customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof BurnChartViewBase
     */
    protected model: any = {
        srfCaption: 'entities.burn.views.chartview.caption',
        srfTitle: 'entities.burn.views.chartview.title',
        srfSubTitle: 'entities.burn.views.chartview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_chart: { name: 'chart', type: 'CHART' },
    };

    /**
     *  计数器刷新
     *
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof BurnChartView
     */
    public toolBarModels: any = {
        deuiaction1_computeburn: { name: 'deuiaction1_computeburn', caption: '更新燃尽图', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'ComputeBurn', target: 'SINGLEKEY' } },

    };



    /**
     * 视图引擎
     *
     * @private
     * @type {Engine}
     * @memberof BurnChartViewBase
     */
    private engine: ChartViewEngine = new ChartViewEngine();

    /**
     * 引擎初始化
     *
     * @private
     * @memberof BurnChartViewBase
     */
    private engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            keyPSDEField: 'burn',
            majorPSDEField: 'date',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof BurnChartViewBase
     */
    protected context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof BurnChartViewBase
     */
    protected viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @private
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof BurnChartViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof BurnChartViewBase
     */
    protected afterMounted(){
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
     * @memberof BurnChartViewBase
     */
    protected toolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1_computeburn')) {
            this.toolbar_deuiaction1_computeburn_click($event, '', $event2);
        }
    }


    /**
     * chart 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BurnChartViewBase
     */
    protected chart_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('chart', 'beforeload', $event);
    }


    /**
     * chart 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BurnChartViewBase
     */
    protected chart_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('chart', 'load', $event);
    }



    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected toolbar_deuiaction1_computeburn_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:BurnUIService  = new BurnUIService();
        curUIService.Burn_ComputeBurn(datas,contextJO, paramJO,  $event, xData,this,"Burn");
    }


    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof BurnChartViewBase
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
     * @memberof BurnChartView
     */
    public query: string = '';

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof BurnChartView
     */
    public isExpandSearchForm: boolean = false;

    /**
     * 快速搜索
     *
     * @param {*} $event
     * @memberof BurnChartView
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
@import './burn-chart-view.less';
</style>