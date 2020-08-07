<template>
<div class="view-container case-main-edit-view">
    <app-studioaction :viewTitle="$t(model.srfTitle)" viewName="casemaineditview"></app-studioaction>
    <card class='view-card ' :disHover="true" :bordered="false">

<p slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
</p>

        <div slot="extra">
        <div class='toolbar-container'>
            <tooltip :transfer="true" :max-width="600">
                    <i-button v-show="toolBarModels.deuiaction1.visabled" :disabled="toolBarModels.deuiaction1.disabled" class='' @click="toolbar_click({ tag: 'deuiaction1' }, $event)">
                        <i class='sx-tb-saveandclose'></i>
                        <span class='caption'>{{$t('entities.case.maineditviewtoolbar_toolbar.deuiaction1.caption')}}</span>
                    </i-button>
                <div slot='content'>{{$t('entities.case.maineditviewtoolbar_toolbar.deuiaction1.tip')}}</div>
            </tooltip>
        </div>
        
        </div>
        <div class="content-container">
        <div class='view-top-messages'>
        </div>
        <view_form 
            :viewState="viewState"  
            :viewparams="viewparams" 
            :context="context" 
            :autosave="false" 
            :viewtag="viewtag"
            :showBusyIndicator="true"
            updateAction="UpdateTempMajor"
            removeAction="RemoveTempMajor"
            loaddraftAction="GetDraftTempMajor"
            loadAction="GetTempMajor"
            createAction="CreateTempMajor"
            WFSubmitAction=""
            WFStartAction=""
            style='' 
            name="form"  
            ref='form' 
            @save="form_save($event)"  
            @remove="form_remove($event)"  
            @load="form_load($event)"  
            @closeview="closeView($event)">
        </view_form>
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
import CaseService from '@/service/case/case-service';

import EditViewEngine from '@engine/view/edit-view-engine';



@Component({
    components: {
    },
})
export default class CaseMainEditViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof CaseMainEditViewBase
     */
    protected appEntityService: CaseService = new CaseService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof CaseMainEditViewBase
     */    
    protected counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof CaseMainEditViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof CaseMainEditViewBase
     */
    @Prop() protected viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof CaseMainEditViewBase
     */
    @Prop() protected viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof CaseMainEditViewBase
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof CaseMainEditViewBase
	 */
	protected viewtag: string = '8e070a3e9ad67b127db723463198f9ac';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof CaseMainEditViewBase
	 */
    protected customViewNavContexts:any ={
    "objecttype":{"isRawValue":true,"value":"case"},
    "srfparentkey":{"isRawValue":false,"value":"case"}
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof CaseMainEditViewBase
	 */
    protected customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof CaseMainEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.case.views.maineditview.caption',
        srfTitle: 'entities.case.views.maineditview.title',
        srfSubTitle: 'entities.case.views.maineditview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_form: { name: 'form', type: 'FORM' },
    };

    /**
     *  计数器刷新
     *
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof CaseMainEditView
     */
    public toolBarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: '保存并关闭', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'SaveAndExit', target: '' } },

    };




    /**
     * 视图引擎
     *
     * @private
     * @type {Engine}
     * @memberof CaseMainEditViewBase
     */
    private engine: EditViewEngine = new EditViewEngine();

    /**
     * 引擎初始化
     *
     * @private
     * @memberof CaseMainEditViewBase
     */
    private engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'case',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof CaseMainEditViewBase
     */
    protected context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof CaseMainEditViewBase
     */
    protected viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @private
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof CaseMainEditViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
     */
    protected toolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.toolbar_deuiaction1_click($event, '', $event2);
        }
    }


    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseMainEditViewBase
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }


    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseMainEditViewBase
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }


    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseMainEditViewBase
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected toolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        this.SaveAndExit(datas, contextJO,paramJO,  $event, xData,this,"Case");
    }

    /**
     * 保存并关闭
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof CaseMainEditViewBase
     */
    protected SaveAndExit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.saveAndExit instanceof Function) {
            xData.saveAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        } else if (_this.saveAndExit && _this.saveAndExit instanceof Function) {
            _this.saveAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof CaseMainEditViewBase
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
     * @memberof CaseMainEditViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof CaseMainEditViewBase
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
@import './case-main-edit-view.less';
</style>