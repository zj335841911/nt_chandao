<template>
<div class='view-container ibz-my-territory-tab-exp-view'>
    <app-studioaction :viewTitle="$t(model.srfTitle)" viewName="ibzmyterritorytabexpview"></app-studioaction>
    <card class='view-card view-no-caption'  :dis-hover="true" :bordered="false">
    <div class='content-container'>
        <div class='view-top-messages'>
</div>
        <view_tabexppanel 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
    name="tabexppanel"  
    ref='tabexppanel' 
    @closeview="closeView($event)">
</view_tabexppanel>
        <div class='view-bottom-messages'>
</div>
    </div>
    </card>
</div>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { UIActionTool,Util } from '@/utils';
import { Subject } from 'rxjs';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';

import TabExpViewEngine from '@engine/view/tab-exp-view-engine';



@Component({
    components: {
    },
})
export default class IbzMyTerritoryTabExpViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzMyTerritoryTabExpViewBase
     */    
    protected counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    @Prop() protected viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    @Prop() protected viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof IbzMyTerritoryTabExpViewBase
	 */
	protected viewtag: string = '0f3dff62ef8bcb1662cc82e57a34c56b';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof IbzMyTerritoryTabExpViewBase
	 */
    protected customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof IbzMyTerritoryTabExpViewBase
	 */
    protected customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzmyterritory.views.tabexpview.caption',
        srfTitle: 'entities.ibzmyterritory.views.tabexpview.title',
        srfSubTitle: 'entities.ibzmyterritory.views.tabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof IbzMyTerritoryTabExpViewBase
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
     * @memberof IbzMyTerritoryTabExpViewBase
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
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };

    /**
     *  计数器刷新
     *
     * @memberof IbzMyTerritoryTabExpViewBase
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
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();


    /**
     * 视图引擎
     *
     * @private
     * @type {Engine}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    private engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @private
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    private engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'ibzmyterritory',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @private
     * @memberof IbzMyTerritoryTabExpViewBase
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
     * @memberof IbzMyTerritoryTabExpViewBase
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
     * @memberof IbzMyTerritoryTabExpViewBase
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
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof IbzMyTerritoryTabExpViewBase
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
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        
    }




    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof IbzMyTerritoryTabExpViewBase
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
     * @memberof IbzMyTerritoryTabExpViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof IbzMyTerritoryTabExpViewBase
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

}
</script>

<style lang='less'>
@import './ibz-my-territory-tab-exp-view.less';
</style>