import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ListExpViewlistexpbarService from './list-exp-viewlistexpbar-listexpbar-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';


/**
 * listexpbar部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ListExpViewlistexpbarListexpbarBase}
 */
export class ListExpViewlistexpbarListexpbarBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    protected controlType: string = 'LISTEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {ListExpViewlistexpbarService}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    public service: ListExpViewlistexpbarService = new ListExpViewlistexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof ListExpViewlistexpbarBase
     */  
    public appUIService:ProjectUIService = new ProjectUIService(this.$store);

    /**
     * listexpbar_list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    public listexpbar_list_selectionchange($event: any, $event2?: any) {
        this.listexpbar_selectionchange($event, 'listexpbar_list', $event2);
    }

    /**
     * listexpbar_list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ListExpViewlistexpbarListexpbarBase
     */
    public listexpbar_list_load($event: any, $event2?: any) {
        this.listexpbar_load($event, 'listexpbar_list', $event2);
    }

    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof ListExpViewlistexpbarBase
     */
    @Prop() public newdata: any;
    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof ListExpViewlistexpbarBase
     */
    @Prop() public opendata: any;

    /**
     * 视图唯一标识
     *
     * @type {boolean}
     * @memberof ListExpViewlistexpbarBase
     */
    @Prop() public viewUID!:string;

    /**
     * 是否单选
     * 
     * @public
     * @type {(boolean)}
     * @memberof ListExpViewlistexpbarBase
     */
    public isSingleSelect:boolean = true;

    /**
     * 呈现模式，可选值：horizontal或者vertical
     * 
     * @public
     * @type {(string)}
     * @memberof ListExpViewlistexpbarBase
     */
    public showMode:string ="horizontal";

    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof ListExpViewlistexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 控件高度
     *
     * @type {number}
     * @memberof ListExpViewlistexpbarBase
     */
    public ctrlHeight: number = 0;

    /**
     * 搜素值
     * 
     * @public
     * @type {(string)}
     * @memberof ListExpViewlistexpbarBase
     */
    public searchText:string = "";

    /**
     * 分割宽度
     *
     * @type {number}
     * @memberof ListExpViewlistexpbarBase
     */
    public split: number = 0.2;


    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof ListExpViewlistexpbarBase
     */
    public navViewName: string = "project-stats-edit-view9";

    /**
     * 导航视图参数
     *
     * @type {string}
     * @memberof ListExpViewlistexpbarBase
     */
    public navViewParam: string = '{}';

    /**
     * 导航过滤项
     *
     * @type {string}
     * @memberof ListExpViewlistexpbarBase
     */
    public navFilter: string = "";

    /**
     * 导航关系
     *
     * @type {string}
     * @memberof ListExpViewlistexpbarBase
     */
    public navPSDer: string = "";
    
    /**
     * 导航上下文参数
     *
     * @type {*}
     * @memberof ListExpViewlistexpbarBase
     */
    public navigateContext:any = null;

    /**
     * 导航视图参数
     *
     * @type {*}
     * @memberof ListExpViewlistexpbarBase
     */
    public navigateParams:any = null;     

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof ListExpViewlistexpbarBase
     */
    @Prop({ default: true }) public showBusyIndicator!: boolean;


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ListExpViewlistexpbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ListExpViewlistexpbarBase
     */
    public getData(): any {
        return null;
    }

    /**
     * 选中数据
     *
     * @type {*}
     * @memberof ListExpViewlistexpbarBase
     */
    public selection: any = {};

    /**
     * split值变化事件
     *
     * @memberof ListExpViewlistexpbarBase
     */
    public onSplitChange() {
        if(this.split){
          this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split});
        }
    }

    /**
    * Vue声明周期(组件初始化完毕)
    *
    * @memberof ListExpViewlistexpbarBase
    */
    public created() {
         this.afterCreated();     
    }

    /**
    * 执行created后的逻辑
    *
    * @memberof ListExpViewlistexpbarBase
    */
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.viewState.next({ tag: 'listexpbar_list', action: action, data: data });
            });
        }
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof ListExpViewlistexpbarBase
    */
    public afterMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("listexpviewlistexpbar") as any).offsetWidth;
            let containerHeight:number = (document.getElementById("listexpviewlistexpbar") as any).offsetHeight;
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
    * Vue声明周期(组件渲染完毕)
    *
    * @memberof ListExpViewlistexpbarBase
    */
    public mounted() {
        this.afterMounted();     
    }

    /**
     * vue 生命周期
     *
     * @memberof ListExpViewlistexpbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ListExpViewlistexpbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }
    
    /**
     * listexpbar的选中数据事件
     * 
     * @memberof ListExpViewlistexpbarBase
     */
    public listexpbar_selectionchange(args: any [], tag?: string, $event2?: any): void {
        let tempContext:any = {};
        let tempViewParam:any = {};
        if (args.length === 0) {
            return ;
        }
        const arg:any = args[0];
        if(this.context){
            Object.assign(tempContext,JSON.parse(JSON.stringify(this.context)));
        }
        Object.assign(tempContext,{'project':arg['project']});
        Object.assign(tempContext,{srfparentdename:'Project',srfparentkey:arg['project']});
        if(this.navFilter && !Object.is(this.navFilter,"")){
            Object.assign(tempViewParam,{[this.navFilter]:arg['project']});
        }
        if(this.navPSDer && !Object.is(this.navPSDer,"")){
            Object.assign(tempViewParam,{[this.navPSDer]:arg['project']});
        }
        if(this.navigateContext && Object.keys(this.navigateContext).length >0){
            let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navigateContext);
            Object.assign(tempContext,_context);
        }
        if(this.navigateParams && Object.keys(this.navigateParams).length >0){
            let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navigateParams);
            Object.assign(tempViewParam,_params);
        }
        this.selection = {};
        Object.assign(this.selection, { view: { viewname: this.navViewName },context:tempContext,viewparam:tempViewParam});
        this.$forceUpdate();
    }

    /**
     * listexpbar的load完成事件
     * 
     * @memberof ListExpViewlistexpbarBase
     */
    public listexpbar_load(args:any, tag?: string, $event2?: any){
        this.$emit('load',args);
    }

    /**
    * 执行搜索
    *
    * @memberof ListExpViewlistexpbarBase
    */
    public onSearch($event:any) {
        this.viewState.next({ tag: 'listexpbar_list', action: "load", data: {query : this.searchText}});
    }

}