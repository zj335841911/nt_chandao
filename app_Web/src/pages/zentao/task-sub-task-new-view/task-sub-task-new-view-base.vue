<template>
    <div class='view-container task-sub-task-new-view'>
    <app-studioaction :viewTitle="$t(model.srfTitle)" viewName="tasksubtasknewview"></app-studioaction>
    <card class='view-card'  :dis-hover="true" :bordered="false">
        <p slot='title'>
        <span class='caption-info'>{{$t(model.srfTitle)}}</span>
        </p>
        <div class='content-container'>
            <div class='view-top-messages'>
            </div>
            <row style='margin-bottom: 6px;'>
                <div class='pull-right'>
                    <div class='toolbar-container'>
                        <tooltip :transfer="true" :max-width="600">
                                <i-button v-show="toolBarModels.deuiaction2.visabled" :disabled="toolBarModels.deuiaction2.disabled" class='' @click="toolbar_click({ tag: 'deuiaction2' }, $event)">
                                    <i class='fa fa-plus'></i>
                                    <span class='caption'>{{$t('entities.subtask.subtasknewviewtoolbar_toolbar.deuiaction2.caption')}}</span>
                                </i-button>
                            <div slot='content'>{{$t('entities.subtask.subtasknewviewtoolbar_toolbar.deuiaction2.tip')}}</div>
                        </tooltip>
                        <tooltip :transfer="true" :max-width="600">
                                <i-button v-show="toolBarModels.deuiaction3.visabled" :disabled="toolBarModels.deuiaction3.disabled" class='' @click="toolbar_click({ tag: 'deuiaction3' }, $event)">
                                    <i class='fa fa-save'></i>
                                    <span class='caption'>{{$t('entities.subtask.subtasknewviewtoolbar_toolbar.deuiaction3.caption')}}</span>
                                </i-button>
                            <div slot='content'>{{$t('entities.subtask.subtasknewviewtoolbar_toolbar.deuiaction3.tip')}}</div>
                        </tooltip>
                    </div>
                </div>
            </row>
            <view_grid 
                :viewState="viewState"  
                :viewparams="viewparams" 
                :context="context" 
                :isSingleSelect="isSingleSelect"
                :showBusyIndicator="true"
                :isOpenEdit="true"
                :gridRowActiveMode="gridRowActiveMode"
                @save="onSave"
                updateAction="Update"
                removeAction="Remove"
                loaddraftAction="GetDraft"
                loadAction="Get"
                createAction="Create"
                fetchAction="FetchDefaultRow"
                :newdata="newdata"
                :opendata="opendata"
                name="grid"  
                ref='grid' 
                @selectionchange="grid_selectionchange($event)"  
                @beforeload="grid_beforeload($event)"  
                @rowdblclick="grid_rowdblclick($event)"  
                @remove="grid_remove($event)"  
                @load="grid_load($event)"  
                @closeview="closeView($event)">
            </view_grid>
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
import SubTaskService from '@/service/sub-task/sub-task-service';

import GridViewEngine from '@engine/view/grid-view-engine';



@Component({
    components: {
    },
})
export default class TaskSubTaskNewViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {SubTaskService}
     * @memberof TaskSubTaskNewViewBase
     */
    protected appEntityService: SubTaskService = new SubTaskService;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskSubTaskNewViewBase
     */    
    protected counterServiceArray:Array<any> = [];
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof TaskSubTaskNewViewBase
     */
    @Emit() 
    protected viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof TaskSubTaskNewViewBase
     */
    @Prop() protected viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof TaskSubTaskNewViewBase
     */
    @Prop() protected viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof TaskSubTaskNewViewBase
     */
    @Prop({ default: true }) protected viewDefaultUsage!: boolean;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof TaskSubTaskNewViewBase
	 */
	protected viewtag: string = '35ba93bac795e0deb7297d2d471b7180';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof TaskSubTaskNewViewBase
	 */
    protected customViewNavContexts:any ={
    "project":{"isRawValue":false,"value":"project"}
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof TaskSubTaskNewViewBase
	 */
    protected customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof TaskSubTaskNewViewBase
     */
    protected model: any = {
        srfCaption: 'entities.subtask.views.subtasknewview.caption',
        srfTitle: 'entities.subtask.views.subtasknewview.title',
        srfSubTitle: 'entities.subtask.views.subtasknewview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof TaskSubTaskNewViewBase
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
     * @memberof TaskSubTaskNewViewBase
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
     * @memberof TaskSubTaskNewViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_grid: { name: 'grid', type: 'GRID' },
    };

    /**
     *  计数器刷新
     *
     * @memberof TaskSubTaskNewViewBase
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
     * @memberof TaskSubTaskNewViewBase
     */
    protected viewState: Subject<ViewState> = new Subject();

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof TaskSubTaskNewView
     */
    public toolBarModels: any = {
        deuiaction2: { name: 'deuiaction2', caption: '新建行', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'NewRow', target: '' } },

        deuiaction3: { name: 'deuiaction3', caption: '保存行', disabled: false, type: 'DEUIACTION', visabled: true, dataaccaction: '', uiaction: { tag: 'SaveRow', target: '' } },

    };




    /**
     * 视图引擎
     *
     * @private
     * @type {Engine}
     * @memberof TaskSubTaskNewViewBase
     */
    private engine: GridViewEngine = new GridViewEngine();

    /**
     * 引擎初始化
     *
     * @private
     * @memberof TaskSubTaskNewViewBase
     */
    private engineInit(): void {
        this.engine.init({
            view: this,
            opendata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.opendata(args,fullargs, params, $event, xData);
            },
            newdata: (args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) => {
                this.newdata(args,fullargs, params, $event, xData);
            },
            grid: this.$refs.grid,
            keyPSDEField: 'subtask',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TaskSubTaskNewViewBase
     */
    protected context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TaskSubTaskNewViewBase
     */
    protected viewparams:any = {};

    /**
     * 解析视图参数
     *
     * @private
     * @memberof TaskSubTaskNewViewBase
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
     * @memberof TaskSubTaskNewViewBase
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
     * @memberof TaskSubTaskNewViewBase
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
     * @memberof TaskSubTaskNewViewBase
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof TaskSubTaskNewViewBase
     */    
    protected afterCreated(){
        const secondtag = this.$util.createUUID();
        this.$store.commit('viewaction/createdView', { viewtag: this.viewtag, secondtag: secondtag });
        this.viewtag = secondtag;
        this.parseViewParam();
        if(this.formDruipart){
            this.formDruipart.subscribe((res:any) =>{
                if(Object.is(res.action,'save')){
                    this.viewState.next({ tag:'grid', action: 'save', data: this.viewparams });
                }
                if(Object.is(res.action,'load')){
                    const _this: any = this;
                    _this.engine.load(res.data,true);
                }
            });
        }

    }

    /**
     * 销毁之前
     *
     * @memberof TaskSubTaskNewViewBase
     */
    protected beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof TaskSubTaskNewViewBase
     */
    protected mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof TaskSubTaskNewViewBase
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
     * @memberof TaskSubTaskNewViewBase
     */
    protected toolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction2')) {
            this.toolbar_deuiaction2_click($event, '', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.toolbar_deuiaction3_click($event, '', $event2);
        }
    }


    /**
     * grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskSubTaskNewViewBase
     */
    protected grid_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'selectionchange', $event);
    }


    /**
     * grid 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskSubTaskNewViewBase
     */
    protected grid_beforeload($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'beforeload', $event);
    }


    /**
     * grid 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskSubTaskNewViewBase
     */
    protected grid_rowdblclick($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'rowdblclick', $event);
    }


    /**
     * grid 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskSubTaskNewViewBase
     */
    protected grid_remove($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'remove', $event);
    }


    /**
     * grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TaskSubTaskNewViewBase
     */
    protected grid_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('grid', 'load', $event);
    }



    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected toolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this.$refs.grid;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        this.NewRow(datas, contextJO,paramJO,  $event, xData,this,"SubTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected toolbar_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this.$refs.grid;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        // 界面行为
        this.SaveRow(datas, contextJO,paramJO,  $event, xData,this,"SubTask");
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskSubTaskNewView
     */
    protected newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        const data: any = {};
        let curViewParam = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(curViewParam,args[0]);
        }
        let deResParameters: any[] = [];
        if(curViewParam.story && true){
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
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
            viewname: 'task-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.task.views.editview.title'),
            placement: 'DRAWER_RIGHT',
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
     * @memberof TaskSubTaskNewView
     */
    protected opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const data: any = {};
        let curViewParam = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(curViewParam,args[0]);
        }
        let deResParameters: any[] = [];
        if(curViewParam.story && true){
            deResParameters = [
            { pathName: 'stories', parameterName: 'story' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
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
            viewname: 'task-edit-view', 
            height: 0, 
            width: 0,  
            title: this.$t('entities.task.views.editview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }


    /**
     * 新建行
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TaskSubTaskNewViewBase
     */
    protected NewRow(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        const data: any = {};
        if (_this.newRow && _this.newRow instanceof Function) {
            _this.newRow([{ ...data }], params, $event, xData);
        } else if(xData.newRow && xData.newRow instanceof Function) {
            xData.newRow([{ ...data }], params, $event, xData);
        }else{
            _this.$Notice.error({ title: '错误', desc: 'newRow 视图处理逻辑不存在，请添加!' });
        }
    }
    /**
     * 保存行
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof TaskSubTaskNewViewBase
     */
    protected SaveRow(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        // 界面行为容器对象 _this
        const _this: any = this;
        if (xData && xData.save instanceof Function) {
            xData.save();
        } else if (_this.save && _this.save instanceof Function) {
            _this.save();
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof TaskSubTaskNewViewBase
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
     * 是否单选
     *
     * @type {boolean}
     * @memberof TaskSubTaskNewViewBase
     */
    public isSingleSelect: boolean = false;

    /**
    * 是否嵌入关系界面
    *
    * @type {boolean}
    * @memberof TaskSubTaskNewViewBase
    */
    @Prop({default:false}) public isformDruipart?: boolean;

    /**
    * 界面关系通讯对象
    *
    * @type {Subject<ViewState>}
    * @memberof TaskSubTaskNewViewBase
    */
    @Prop() public formDruipart?: Subject<ViewState>;

    /**
     * 搜索值
     *
     * @type {string}
     * @memberof TaskSubTaskNewViewBase
     */
    public query: string = '';

    /**
     * 是否展开搜索表单
     *
     * @type {boolean}
     * @memberof TaskSubTaskNewViewBase
     */
    public isExpandSearchForm: boolean = false;

    /**
     * 表格行数据默认激活模式
     * 0 不激活
     * 1 单击激活
     * 2 双击激活
     *
     * @type {(number | 0 | 1 | 2)}
     * @memberof TaskSubTaskNewViewBase
     */
    public gridRowActiveMode: number | 0 | 1 | 2 = 2;

    /**
     * 快速搜索
     *
     * @param {*} $event
     * @memberof TaskSubTaskNewViewBase
     */
    public onSearch($event: any): void {
        const grid: any = this.$refs.grid;
        if (grid) {
            grid.load(this.context, true);
        }
    }

    /**
     * grid 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ENTITYTEST1Usr2GridViewBase
     */
    public onSave($event: any) {
        this.$emit('drdatasaved', $event);
    }

    /**
     * 刷新数据
     *
     * @readonly
     * @type {(number | null)}
     * @memberof TaskSubTaskNewViewBase
     */
    get refreshdata(): number | null {
        return this.$store.getters['viewaction/getRefreshData'](this.viewtag);
    }

    /**
     * 监控数据变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @returns
     * @memberof TaskSubTaskNewViewBase
     */
    @Watch('refreshdata')
    onRefreshData(newVal: any, oldVal: any) {
        if (newVal === null || newVal === undefined) {
            return;
        }
        if (newVal === 0) {
            return;
        }
        const grid: any = this.$refs.grid;
        if (grid) {
            grid.load({});
        }
    }

}
</script>

<style lang='less'>
@import './task-sub-task-new-view.less';
</style>