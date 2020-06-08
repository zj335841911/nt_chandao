<template>
    <split id="listexpviewlistexpbar" class="app-list-exp-bar" v-model="split" mode="horizontal" @on-move-end="onSplitChange">
        <template slot='left'>
           <div class="container-header">
           </div>
            <div class='list-exp-bar-content'>
                <view_listexpbar_list 
    :viewState="viewState"  
    :viewparams="viewparams" 
    :context="context" 
    createAction="Create"
    removeAction="Remove"
    updateAction="Update"
    fetchAction="FetchDefault"
    :showBusyIndicator="true"
    :isSelectFirstDefault="true"
    :newdata="newdata"
    :opendata="opendata"
    name="listexpbar_list"  
    ref='listexpbar_list' 
    @selectionchange="listexpbar_list_selectionchange($event)"  
    @load="listexpbar_list_load($event)"  
    @closeview="closeView($event)">
</view_listexpbar_list>
            </div>
        </template>
        <template slot='right'>
            <component 
              v-if="selection.view && !Object.is(this.selection.view.viewname, '')" 
              :is="selection.view.viewname"
              class="viewcontainer2"
              :viewDefaultUsage="false"
              :viewdata="JSON.stringify(selection.data)">
            </component>
        </template>
    </split>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProjectService from '@/service/project/project-service';
import ListExpViewlistexpbarService from './list-exp-viewlistexpbar-listexpbar-service';



@Component({
    components: {
      
    }
})
export default class ListExpViewlistexpbarBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ListExpViewlistexpbar
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ListExpViewlistexpbar
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ListExpViewlistexpbar
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ListExpViewlistexpbar
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof ListExpViewlistexpbar
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ListExpViewlistexpbar
     */
    public getControlType(): string {
        return 'LISTEXPBAR'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ListExpViewlistexpbar
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {ListExpViewlistexpbarService}
     * @memberof ListExpViewlistexpbar
     */
    public service: ListExpViewlistexpbarService = new ListExpViewlistexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ListExpViewlistexpbar
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * listexpbar_list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ListExpViewlistexpbar
     */
    public listexpbar_list_selectionchange($event: any, $event2?: any) {
        this.listexpbar_selectionchange($event, 'listexpbar_list', $event2);
    }

    /**
     * listexpbar_list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ListExpViewlistexpbar
     */
    public listexpbar_list_load($event: any, $event2?: any) {
        this.listexpbar_load($event, 'listexpbar_list', $event2);
    }
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof ListExpViewlistexpbar
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof ListExpViewlistexpbar
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
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof ListExpViewlistexpbar
     */
    @Prop() public newdata: any;

    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof ListExpViewlistexpbar
     */
    @Prop() public opendata: any;

    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof ListExpViewlistexpbarBase
     */
    public navViewName: string = "project-stats-main-dashboard-view";

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
        let data:any = {};
        if (args.length === 0) {
            return ;
        }
        const arg:any = args[0];
        if(this.context){
            Object.assign(data,JSON.parse(JSON.stringify(this.context)));
        }
        Object.assign(data,{'project':arg['project']});
        Object.assign(data,{srfparentdename:'Project',srfparentkey:arg['project']});
        this.selection = {};
        Object.assign(this.selection, { view: { viewname: this.navViewName }, data:data });
        this.$emit('selectionchange',args);
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
</script>

<style lang='less'>
@import './list-exp-viewlistexpbar-listexpbar.less';
</style>