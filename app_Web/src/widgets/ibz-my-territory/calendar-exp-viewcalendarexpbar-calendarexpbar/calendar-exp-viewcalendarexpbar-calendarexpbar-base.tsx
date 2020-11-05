import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import CalendarExpViewcalendarexpbarService from './calendar-exp-viewcalendarexpbar-calendarexpbar-service';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';


/**
 * calendarexpbar部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {CalendarExpViewcalendarexpbarCalendarexpbarBase}
 */
export class CalendarExpViewcalendarexpbarCalendarexpbarBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    protected controlType: string = 'CALENDAREXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {CalendarExpViewcalendarexpbarService}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    public service: CalendarExpViewcalendarexpbarService = new CalendarExpViewcalendarexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    public appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    protected appDeLogicName: string = '我的地盘';

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof CalendarExpViewcalendarexpbarBase
     */  
    public appUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * calendarexpbar_calendar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    public calendarexpbar_calendar_selectionchange($event: any, $event2?: any) {
        this.calendarexpbar_selectionchange($event, 'calendarexpbar_calendar', $event2);
    }

    /**
     * calendarexpbar_calendar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CalendarExpViewcalendarexpbarCalendarexpbarBase
     */
    public calendarexpbar_calendar_load($event: any, $event2?: any) {
        this.calendarexpbar_load($event, 'calendarexpbar_calendar', $event2);
    }


    /**
     * 视图唯一标识
     *
     * @type {boolean}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    @Prop() public viewUID!:string;

    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof CalendarExpViewcalendarexpbar
     */
    @Prop() public newdata: any;
    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof CalendarExpViewcalendarexpbar
     */
    @Prop() public opendata: any;

    /**
     * 是否单选
     * 
     * @public
     * @type {(boolean)}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public isSingleSelect:boolean = true;

    /**
     * 呈现模式，可选值：horizontal或者vertical
     * 
     * @public
     * @type {(string)}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public showMode:string ="horizontal";

    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 控件高度
     *
     * @type {number}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public ctrlHeight: number = 0;

    /**
     * 搜素值
     * 
     * @public
     * @type {(string)}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public searchText:string = "";

    /**
     * 分割宽度
     *
     * @type {number}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public split: number = 0.5;


    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public navViewName: any = {
        Bug: "",
        task: "",
        todo: ""
    };

    /**
     * 导航参数
     *
     * @type {*}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public navParam: any = {
        Bug: {
            navigateContext:null,
            navigateParams:null
        },
        task: {
            navigateContext:null,
            navigateParams:null
        },
        todo: {
            navigateContext:null,
            navigateParams:null
        }
    };

    /**
     * 导航过滤项
     *
     * @type {*}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public navFilter: any = {
        Bug: "",
        task: "",
        todo: ""
    };

    /**
     * 导航关系
     *
     * @type {*}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public navPSDer: any = {
        Bug: "",
        task: "",
        todo: ""
    };

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    @Prop({ default: true }) public showBusyIndicator!: boolean;


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public getData(): any {
        return null;
    }

    /**
     * 选中数据
     *
     * @type {*}
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public selection: any = {};

    /**
     * split值变化事件
     *
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public onSplitChange() {
        if(this.$refs.calendarexpbar_calendar){
            const calendarContainer:any = this.$refs.calendarexpbar_calendar;
            if(calendarContainer.$refs.calendar){
                const appCalendar: any = calendarContainer.$refs.calendar;
                const api = appCalendar.getApi();
                api.updateSize();
            }
        }
        if(this.split){
          this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split});
        }
    }

    /**
    * Vue声明周期(组件初始化完毕)
    *
    * @memberof CalendarExpViewcalendarexpbarBase
    */
    public created() {
         this.afterCreated();     
    }

    /**
    * 执行created后的逻辑
    *
    * @memberof CalendarExpViewcalendarexpbarBase
    */
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.viewState.next({ tag: 'calendarexpbar_calendar', action: action, data: data });
            });
        }  
    }
    
    /**
    * Vue声明周期(组件渲染完毕)
    *
    * @memberof CalendarExpViewcalendarexpbarBase
    */
    public mounted() {
        this.afterMounted();     
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof CalendarExpViewcalendarexpbarBase
    */
    public afterMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("calendarexpviewcalendarexpbar") as any).offsetWidth;
            let containerHeight:number = (document.getElementById("calendarexpviewcalendarexpbar") as any).offsetHeight;
            if(Object.is(this.showMode,'horizontal')){
                if(this.ctrlWidth){
                    this.split = this.ctrlWidth/containerWidth;
                }
            }else{
                if(this.ctrlHeight){
                    this.split = this.ctrlHeight/containerHeight;
                }
            }
            this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split}); 
        }  
    }
 
    /**
     * vue 生命周期
     *
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }
    
    /**
     * calendarexpbar的选中数据事件
     * 
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public calendarexpbar_selectionchange(args: any [], tag?: string, $event2?: any): void {
        let tempContext:any = {};
        let tempViewParam:any = {};
        if (args.length === 0) {
            this.selection = {};
            return ;
        }
        const arg:any = args[0];
        if(this.context){
            Object.assign(tempContext,JSON.parse(JSON.stringify(this.context)));
        }
        switch(arg.itemType) {
            case "Bug":
                Object.assign(tempContext,{ bug : arg.bug});
                Object.assign(tempContext,{srfparentdename:'Bug',srfparentkey:arg['bug']});
                if(this.navFilter && this.navFilter['Bug'] && !Object.is(this.navFilter['Bug'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['Bug']]:arg['bug']});
                }
                if(this.navPSDer && this.navFilter['Bug'] && !Object.is(this.navPSDer['Bug'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['Bug']]:arg['bug']});
                }
                if(this.navParam && this.navParam['Bug'] && this.navParam['Bug'].navigateContext && Object.keys(this.navParam['Bug'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['Bug'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['Bug'] && this.navParam['Bug'].navigateParams && Object.keys(this.navParam['Bug'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['Bug'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
            case "task":
                Object.assign(tempContext,{ task : arg.task});
                Object.assign(tempContext,{srfparentdename:'Task',srfparentkey:arg['task']});
                if(this.navFilter && this.navFilter['task'] && !Object.is(this.navFilter['task'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['task']]:arg['task']});
                }
                if(this.navPSDer && this.navFilter['task'] && !Object.is(this.navPSDer['task'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['task']]:arg['task']});
                }
                if(this.navParam && this.navParam['task'] && this.navParam['task'].navigateContext && Object.keys(this.navParam['task'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['task'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['task'] && this.navParam['task'].navigateParams && Object.keys(this.navParam['task'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['task'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
            case "todo":
                Object.assign(tempContext,{ todo : arg.todo});
                Object.assign(tempContext,{srfparentdename:'Todo',srfparentkey:arg['todo']});
                if(this.navFilter && this.navFilter['todo'] && !Object.is(this.navFilter['todo'],"")){
                    Object.assign(tempViewParam,{[this.navFilter['todo']]:arg['todo']});
                }
                if(this.navPSDer && this.navFilter['todo'] && !Object.is(this.navPSDer['todo'],"")){
                    Object.assign(tempViewParam,{[this.navPSDer['todo']]:arg['todo']});
                }
                if(this.navParam && this.navParam['todo'] && this.navParam['todo'].navigateContext && Object.keys(this.navParam['todo'].navigateContext).length >0){
                    let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['todo'].navigateContext);
                    Object.assign(tempContext,_context);
                }
                if(this.navParam && this.navParam['todo'] && this.navParam['todo'].navigateParams && Object.keys(this.navParam['todo'].navigateParams).length >0){
                    let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navParam['todo'].navigateParams);
                    Object.assign(tempViewParam,_params);
                }
                break;
        }
        this.selection = {};
        Object.assign(this.selection, { view: { viewname: this.navViewName[arg.itemType] }, context:tempContext,viewparam:tempViewParam });
        this.$forceUpdate();
    }

    /**
     * calendarexpbar的load完成事件
     * 
     * @memberof CalendarExpViewcalendarexpbarBase
     */
    public calendarexpbar_load(args:any, tag?: string, $event2?: any){
        this.$emit('load',args);
    }

    /**
    * 执行搜索
    *
    * @memberof CalendarExpViewcalendarexpbarBase
    */
    public onSearch($event:any) {
        let calendar:any = this.$refs.calendarexpbar_calendar;
        calendar.searchEvents({ query: this.searchText });
    }
}