<template>
<div class="view-container project-module-quick-cfg-view">
    <app-studioaction :viewTitle="$t(model.srfTitle)" viewName="projectmodulequickcfgview"></app-studioaction>
    <card class='view-card' dis-hover :padding="0" :bordered="false">
        <p slot='title'>
        <span class='caption-info'>{{$t(model.srfTitle)}}</span>
        </p>
        <div class="content-container">
            <view_form 
                :viewState="viewState"  
                :viewparams="viewparams" 
                :context="context" 
                :autosave="false" 
                :viewtag="viewtag"
                :showBusyIndicator="true"
                updateAction="Update"
                removeAction="Remove"
                loaddraftAction="GetDraft"
                loadAction="Get"
                createAction="Create"
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
        </div>
        <card dis-hover :bordered="false" class='footer'>
          <row style=" text-align: right ">
            <i-button type='primary' @click="onClickOk">{{ containerModel.view_okbtn.text }}</i-button>
              &nbsp;&nbsp;
            <i-button @click="onClickCancel">{{ containerModel.view_cancelbtn.text }}</i-button>
          </row>
        </card>
    </card>
</div>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { UIActionTool,Util } from '@/utils';
import { Subject } from 'rxjs';
import ProjectModuleService from '@/service/project-module/project-module-service';

import OptionViewEngine from '@engine/view/option-view-engine';



@Component({
    components: {
    },
})
export default class ProjectModuleQuickCfgViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ProjectModuleService}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected appEntityService: ProjectModuleService = new ProjectModuleService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectModuleQuickCfgViewBase
     */    
    protected counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    @Prop() protected viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    @Prop() protected viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof ProjectModuleQuickCfgViewBase
	 */
	protected viewtag: string = '0568d197dda832ceb89ad0442ab9f230';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof ProjectModuleQuickCfgViewBase
	 */
    protected customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof ProjectModuleQuickCfgViewBase
	 */
    protected customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected model: any = {
        srfCaption: 'entities.projectmodule.views.quickcfgview.caption',
        srfTitle: 'entities.projectmodule.views.quickcfgview.title',
        srfSubTitle: 'entities.projectmodule.views.quickcfgview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ProjectModuleQuickCfgViewBase
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
     * @memberof ProjectModuleQuickCfgViewBase
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
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
        view_okbtn: { name: 'okbtn', type: 'button', text: '确定', disabled: true },
        view_cancelbtn: { name: 'cancelbtn', type: 'button', text: '取消', disabled: false },
        view_leftbtn: { name: 'leftbtn', type: 'button', text: '左移', disabled: true },
        view_rightbtn: { name: 'rightbtn', type: 'button', text: '右移', disabled: true },
        view_allleftbtn: { name: 'allleftbtn', type: 'button', text: '全部左移', disabled: true },
        view_allrightbtn: { name: 'allrightbtn', type: 'button', text: '全部右移', disabled: true },
    };

    /**
     *  计数器刷新
     *
     * @memberof ProjectModuleQuickCfgViewBase
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
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();



    /**
     * 视图引擎
     *
     * @private
     * @type {Engine}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    private engine: OptionViewEngine = new OptionViewEngine();

    /**
     * 引擎初始化
     *
     * @private
     * @memberof ProjectModuleQuickCfgViewBase
     */
    private engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'projectmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @private
     * @memberof ProjectModuleQuickCfgViewBase
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
     * @memberof ProjectModuleQuickCfgViewBase
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
     * @memberof ProjectModuleQuickCfgViewBase
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
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof ProjectModuleQuickCfgViewBase
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
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        
    }


    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected form_save($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'save', $event);
    }


    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected form_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }


    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected form_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('form', 'load', $event);
    }




    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ProjectModuleQuickCfgViewBase
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
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof ProjectModuleQuickCfgViewBase
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
     * 确定
     *
     * @memberof ProjectModuleQuickCfgViewBase
     */
    public onClickOk(): void {
        const form: any = this.$refs.form;
        if (!form) return;
        form.save().then((res:any) =>{
            if(res.status == 200){
                this.$emit('close',[res.data]);
            }
        });
    }

    /**
     * 取消
     *
     * @memberof ProjectModuleQuickCfgViewBase
     */
    public onClickCancel(): void {
        this.$emit('close', null);
    }

}
</script>

<style lang='less'>
@import './project-module-quick-cfg-view.less';
</style>