<template>
<div class='view-container story-pickup-grid-view3'>
    <app-studioaction :viewTitle="$t(model.srfTitle)" viewName="storypickupgridview3"></app-studioaction>
    <card class='view-card view-no-caption' :dis-hover="true" :bordered="false">
        <div class='content-container pickup-grid-view'>
            <view_grid 
                :viewState="viewState"  
                :viewparams="viewparams" 
                :context="context" 
                :isSingleSelect="isSingleSelect"
                :selectedData="selectedData"
                :showBusyIndicator="true"
                updateAction=""
                removeAction="Remove"
                loaddraftAction=""
                loadAction=""
                createAction=""
                fetchAction="FetchBuildLinkCompletedStories"
                name="grid"  
                ref='grid' 
                @selectionchange="grid_selectionchange($event)"  
                @beforeload="grid_beforeload($event)"  
                @rowdblclick="grid_rowdblclick($event)"  
                @load="grid_load($event)"  
                @closeview="closeView($event)">
            </view_grid>
        </div>
    </card>
</div>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { UIActionTool,Util } from '@/utils';
import { Subject } from 'rxjs';
import StoryService from '@/service/story/story-service';

import PickupGridViewEngine from '@engine/view/pickup-grid-view-engine';



@Component({
    components: {
    },
})
export default class StoryPickupGridView3Base extends Vue {

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryPickupGridView3Base
     */
    protected appEntityService: StoryService = new StoryService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof StoryPickupGridView3Base
     */    
    protected counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof StoryPickupGridView3Base
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof StoryPickupGridView3Base
     */
    @Prop() protected viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof StoryPickupGridView3Base
     */
    @Prop() protected viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof StoryPickupGridView3Base
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof StoryPickupGridView3Base
	 */
	protected viewtag: string = '4571c6ac173283165334a20d5b218f3b';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof StoryPickupGridView3Base
	 */
    protected customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof StoryPickupGridView3Base
	 */
    protected customViewParams:any ={
    "srfparentkey":{"isRawValue":false,"value":"srfparentkey"},
    "project":{"isRawValue":false,"value":"project"},
    "build":{"isRawValue":false,"value":"build"}
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof StoryPickupGridView3Base
     */
    protected model: any = {
        srfCaption: 'entities.story.views.pickupgridview3.caption',
        srfTitle: 'entities.story.views.pickupgridview3.title',
        srfSubTitle: 'entities.story.views.pickupgridview3.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof StoryPickupGridView3Base
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
     * @memberof StoryPickupGridView3Base
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
     * @memberof StoryPickupGridView3Base
     */
    protected containerModel: any = {
        view_grid: { name: 'grid', type: 'GRID' },
    };

    /**
     *  计数器刷新
     *
     * @memberof StoryPickupGridView3Base
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
     * @memberof StoryPickupGridView3Base
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 视图引擎
     *
     * @private
     * @type {Engine}
     * @memberof StoryPickupGridView3Base
     */
    private engine: PickupGridViewEngine = new PickupGridViewEngine();

    /**
     * 引擎初始化
     *
     * @private
     * @memberof StoryPickupGridView3Base
     */
    private engineInit(): void {
        this.engine.init({
            view: this,
            grid: this.$refs.grid,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof StoryPickupGridView3Base
     */
    protected context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof StoryPickupGridView3Base
     */
    protected viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @private
     * @memberof StoryPickupGridView3Base
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
     * @memberof StoryPickupGridView3Base
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
     * @memberof StoryPickupGridView3Base
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
     * @memberof StoryPickupGridView3Base
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof StoryPickupGridView3Base
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
     * @memberof StoryPickupGridView3Base
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof StoryPickupGridView3Base
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof StoryPickupGridView3Base
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        
    }


    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridView3Base
     */
    protected grid_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }


    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridView3Base
     */
    protected grid_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }


    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridView3Base
     */
    protected grid_rowdblclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }


    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryPickupGridView3Base
     */
    protected grid_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }




    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof StoryPickupGridView3Base
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
     * @memberof StoryPickupGridView3Base
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof StoryPickupGridView3Base
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
     * 选中数据字符串
     *
     * @type {string}
     * @memberof StoryPickupGridView3
     */
    @Prop() protected selectedData?: string;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof StoryPickupGridView3
     */
    @Prop() protected isSingleSelect?: boolean;

    /**
     * 搜索值
     *
     * @type {string}
     * @memberof StoryPickupGridView3
     */
    protected query: string = '';

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof StoryPickupGridView3
     */
    protected isExpandSearchForm: boolean = true;

    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @type {(number | 0 | 1 | 2)}
     * @memberof StoryPickupGridView3
     */
    protected gridRowActiveMode: number | 0 | 1 | 2 = 2;

    /**
     * 快速搜索
     *
     * @param {*} $event
     * @memberof StoryPickupGridView3
     */
    protected onSearch($event: any): void {
        const refs: any = this.$refs;
        if (refs.grid) {
            refs.grid.load({});
        }
    }

}
</script>

<style lang='less'>
@import './story-pickup-grid-view3.less';
</style>