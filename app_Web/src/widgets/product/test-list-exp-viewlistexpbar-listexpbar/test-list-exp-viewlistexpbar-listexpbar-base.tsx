import { Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { CtrlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import TestListExpViewlistexpbarService from './test-list-exp-viewlistexpbar-listexpbar-service';


/**
 * listexpbar部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {TestListExpViewlistexpbarLISTEXPBARBase}
 */
export class TestListExpViewlistexpbarLISTEXPBARBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {TestListExpViewlistexpbarService}
     * @memberof TestListExpViewlistexpbar
     */
    public service: TestListExpViewlistexpbarService = new TestListExpViewlistexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TestListExpViewlistexpbar
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * listexpbar_list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestListExpViewlistexpbar
     */
    public listexpbar_list_selectionchange($event: any, $event2?: any) {
        this.listexpbar_selectionchange($event, 'listexpbar_list', $event2);
    }

    /**
     * listexpbar_list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestListExpViewlistexpbar
     */
    public listexpbar_list_load($event: any, $event2?: any) {
        this.listexpbar_load($event, 'listexpbar_list', $event2);
    }

    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof TestListExpViewlistexpbarBase
     */
    @Prop() public newdata: any;
    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof TestListExpViewlistexpbarBase
     */
    @Prop() public opendata: any;

    /**
     * 视图唯一标识
     *
     * @type {boolean}
     * @memberof TestListExpViewlistexpbarBase
     */
    @Prop() public viewUID!:string;

    /**
     * 是否单选
     * 
     * @public
     * @type {(boolean)}
     * @memberof TestListExpViewlistexpbarBase
     */
    public isSingleSelect:boolean = true;

    /**
     * 呈现模式，可选值：horizontal或者vertical
     * 
     * @public
     * @type {(string)}
     * @memberof TestListExpViewlistexpbarBase
     */
    public showMode:string ="horizontal";

    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof TestListExpViewlistexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 控件高度
     *
     * @type {number}
     * @memberof TestListExpViewlistexpbarBase
     */
    public ctrlHeight: number = 0;

    /**
     * 搜素值
     * 
     * @public
     * @type {(string)}
     * @memberof TestListExpViewlistexpbarBase
     */
    public searchText:string = "";

    /**
     * 分割宽度
     *
     * @type {number}
     * @memberof TestListExpViewlistexpbarBase
     */
    public split: number = 0.2;


    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof TestListExpViewlistexpbarBase
     */
    public navViewName: string = "product-stats-test-edit-view9";

    /**
     * 导航视图参数
     *
     * @type {string}
     * @memberof TestListExpViewlistexpbarBase
     */
    public navViewParam: string = '{}';

    /**
     * 导航过滤项
     *
     * @type {string}
     * @memberof TestListExpViewlistexpbarBase
     */
    public navFilter: string = "";

    /**
     * 导航关系
     *
     * @type {string}
     * @memberof TestListExpViewlistexpbarBase
     */
    public navPSDer: string = "";
    
    /**
     * 导航上下文参数
     *
     * @type {*}
     * @memberof TestListExpViewlistexpbarBase
     */
    public navigateContext:any = null;

    /**
     * 导航视图参数
     *
     * @type {*}
     * @memberof TestListExpViewlistexpbarBase
     */
    public navigateParams:any = null;     

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof TestListExpViewlistexpbarBase
     */
    @Prop({ default: true }) public showBusyIndicator!: boolean;


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestListExpViewlistexpbarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestListExpViewlistexpbarBase
     */
    public getData(): any {
        return null;
    }

    /**
     * 选中数据
     *
     * @type {*}
     * @memberof TestListExpViewlistexpbarBase
     */
    public selection: any = {};

    /**
     * split值变化事件
     *
     * @memberof TestListExpViewlistexpbarBase
     */
    public onSplitChange() {
        if(this.split){
          this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split});
        }
    }

    /**
    * Vue声明周期(组件初始化完毕)
    *
    * @memberof TestListExpViewlistexpbarBase
    */
    public created() {
         this.afterCreated();     
    }

    /**
    * 执行created后的逻辑
    *
    * @memberof TestListExpViewlistexpbarBase
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
    * @memberof TestListExpViewlistexpbarBase
    */
    public afterMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("testlistexpviewlistexpbar") as any).offsetWidth;
            let containerHeight:number = (document.getElementById("testlistexpviewlistexpbar") as any).offsetHeight;
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
    * @memberof TestListExpViewlistexpbarBase
    */
    public mounted() {
        this.afterMounted();     
    }

    /**
     * vue 生命周期
     *
     * @memberof TestListExpViewlistexpbarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestListExpViewlistexpbarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }
    
    /**
     * listexpbar的选中数据事件
     * 
     * @memberof TestListExpViewlistexpbarBase
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
        Object.assign(tempContext,{'product':arg['product']});
        Object.assign(tempContext,{srfparentdename:'Product',srfparentkey:arg['product']});
        if(this.navFilter && !Object.is(this.navFilter,"")){
            Object.assign(tempViewParam,{[this.navFilter]:arg['product']});
        }
        if(this.navPSDer && !Object.is(this.navPSDer,"")){
            Object.assign(tempViewParam,{[this.navPSDer]:arg['product']});
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
        this.$emit('selectionchange',args);
        this.$forceUpdate();
    }

    /**
     * listexpbar的load完成事件
     * 
     * @memberof TestListExpViewlistexpbarBase
     */
    public listexpbar_load(args:any, tag?: string, $event2?: any){
        this.$emit('load',args);
    }

    /**
    * 执行搜索
    *
    * @memberof TestListExpViewlistexpbarBase
    */
    public onSearch($event:any) {
        this.viewState.next({ tag: 'listexpbar_list', action: "load", data: {query : this.searchText}});
    }

}