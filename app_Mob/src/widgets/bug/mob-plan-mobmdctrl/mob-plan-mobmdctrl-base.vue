<template>
    <div  class="app-mob-mdctrl bug-mdctrl ">
        <div class="app-mob-mdctrl-mdctrl">
          <van-pull-refresh class="app-mob-mdctrl-refresh" v-model="isLoading" success-text="刷新成功"  @refresh="refresh" :disabled="!isEnableRefresh">
            <ion-list class="items">
                <template v-if="(viewType == 'DEMOBMDVIEW9') && controlStyle != 'SWIPERVIEW' ">
                    <div class="selectall">
                        <ion-checkbox :checked="selectAllIschecked"  v-show="showCheack"  @ionChange="checkboxAll"></ion-checkbox>
                        <ion-label class="selectal-label" v-show="showCheack">全选</ion-label>
                    </div>
                    <ion-item-sliding ref="sliding" v-for="item in items" @click="item_click(item)" :key="item.srfkey" class="app-mob-mdctrl-item" :disabled="item.sliding_disabled">
                        <ion-item-options v-if="controlStyle != 'LISTVIEW3'" side="end">
                            <ion-item-option v-show="item.UnlinkBugMob.visabled" :disabled="item.UnlinkBugMob.disabled" color="primary" @click="mdctrl_click($event, 'u2f9e360', item)"><ion-icon v-if="item.UnlinkBugMob.icon && item.UnlinkBugMob.isShowIcon" :name="item.UnlinkBugMob.icon"></ion-icon><ion-label v-if="item.UnlinkBugMob.isShowCaption">移除关联</ion-label></ion-item-option>
                        </ion-item-options>
                        <div style="width:100%;">
                            <ion-item class="ibz-ionic-item">
                                <ion-checkbox  class="iconcheck" v-show="showCheack" @click.stop="checkboxSelect(item)"></ion-checkbox>
                                <layout_mdctrl_itempanel :context="{}" :viewparams="{}" :item="item"></layout_mdctrl_itempanel>
                            </ion-item>
                        </div>
                    </ion-item-sliding>
                    <ion-button size="small" color="secondary" v-if="!isTempMode && !allLoaded" style ="position: relative;left: calc( 50% - 44px);"  @click="loadBottom">{{$t('app.button.loadmore')}}</ion-button>
                </template>
            </ion-list>
            <ion-list class="items">
                <template v-if="(viewType == 'DEMOBMDVIEW') && controlStyle != 'SWIPERVIEW' ">
                    <div class="selectall">
                        <ion-checkbox :checked="selectAllIschecked"  v-show="showCheack"  @ionChange="checkboxAll"></ion-checkbox>
                        <ion-label class="selectal-label" v-show="showCheack">全选</ion-label>
                    </div>
                    <ion-item-sliding  :ref="item.srfkey" v-for="item in items" @click="item_click(item)" :key="item.srfkey" class="app-mob-mdctrl-item" :disabled="item.sliding_disabled">
                        <ion-item-options v-if="controlStyle != 'LISTVIEW3'" side="end">
                            <ion-item-option v-show="item.UnlinkBugMob.visabled" :disabled="item.UnlinkBugMob.disabled" color="primary" @click="mdctrl_click($event, 'u2f9e360', item)"><ion-icon v-if="item.UnlinkBugMob.icon && item.UnlinkBugMob.isShowIcon" :name="item.UnlinkBugMob.icon"></ion-icon><ion-label v-if="item.UnlinkBugMob.isShowCaption">移除关联</ion-label></ion-item-option>
                        </ion-item-options>
                        <div style="width:100%;">
                            <ion-item class="ibz-ionic-item">
                                <ion-checkbox  class="iconcheck" v-show="showCheack" @click.stop="checkboxSelect(item)"></ion-checkbox>
                                <layout_mdctrl_itempanel :context="{}" :viewparams="{}" :item="item"></layout_mdctrl_itempanel>
                            </ion-item>
                        </div>
                    </ion-item-sliding>
                    <ion-button size="small" color="secondary" v-if="!isTempMode && !allLoaded" style ="position: relative;left: calc( 50% - 44px);"  @click="loadBottom">{{$t('app.button.loadmore')}}</ion-button>
                </template>
                <template v-else-if="(viewType == 'DEMOBMDVIEW9')">
                </template>
                <template v-else-if="(viewType == 'DEMOBMDVIEW' || viewType == 'DEMOBMDVIEW9') && controlStyle === 'SWIPERVIEW'">
                    <app-list-swipe :items="items"></app-list-swipe>
                </template>
                <template v-else-if="viewType == 'DEMOBWFMDVIEW' || viewType == 'DEMOBWFDYNAEXPMDVIEW'">
                    <li v-for="item in items" @click="goPage(item)" :key="item.srfkey" class="app-mob-mdctrl-item">
                        <van-panel :title="item.srfmajortext ">
                            <div class="van-cell van-panel__header" >
                                <div class="van-cell__title time">
                                    <div class="van-cell__label">
                                        {{ item.starttime }}
                                    </div>
                                </div>
                                <div class="van-cell__title subtitle">
                                    <span>步骤</span>
                                    <div class="van-cell__label">
                                        {{ item.wfstep }}
                                    </div>
                                </div>
                                <div class="van-cell__title content" >
                                    <span>{{item.startusername}}</span>
                                    <div class="van-cell__label">
                                        {{ item.documentcentername }}
                                    </div>
                                </div>
                            </div>
                        </van-panel>
                    </li>
                </template>
                <template v-else>
                    <ion-list  v-model="selectedArray"   v-if="isMutli">
                        <ion-item v-for="(item, index) of items" :key="index" class="app-mob-mdctrl-item" >
                        <div style="width:100%;">
                            <ion-item class="ibz-ionic-item">
                                <ion-checkbox  class="iconcheck" v-show="showCheack" @click.stop="checkboxSelect(item)"></ion-checkbox>
                                <layout_mdctrl_itempanel :context="{}" :viewparams="{}" :item="item"></layout_mdctrl_itempanel>
                            </ion-item>
                        </div>
                        </ion-item>
                    </ion-list>
                    <ion-radio-group  :value="selectedValue" v-if="!isMutli">
                        <ion-item v-for="(item, index) of items" :key="index" class="app-mob-mdctrl-item"  @click="onSimpleSelChange(item)">
                        <div style="width:100%;">
                            <ion-item class="ibz-ionic-item">
                                <ion-checkbox  class="iconcheck" v-show="showCheack" @click.stop="checkboxSelect(item)"></ion-checkbox>
                                <layout_mdctrl_itempanel :context="{}" :viewparams="{}" :item="item"></layout_mdctrl_itempanel>
                            </ion-item>
                        </div>
                        </ion-item>
                    </ion-radio-group>
                </template>
            </ion-list>
            <ion-infinite-scroll v-if="viewType == 'DEMOBMDVIEW'" :disabled="allLoaded" ref="loadmoreBottom" @ionInfinite="loadBottom" distince="1%">
                <ion-infinite-scroll-content
                    loadingSpinner="bubbles"
                    loadingText="正在加载数据">
                </ion-infinite-scroll-content>
            </ion-infinite-scroll>    
          </van-pull-refresh>
        </div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import BugService from '@/app-core/service/bug/bug-service';
import Mob_PlanService from '@/app-core/ctrl-service/bug/mob-plan-mobmdctrl-service';

import BugUIService from '@/ui-service/bug/bug-ui-action';



@Component({
    components: {
    }
})
export default class Mob_PlanBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Mob_Plan
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Mob_Plan
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Mob_Plan
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Mob_Plan
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Mob_Plan
     */
    protected getControlType(): string {
        return 'MOBMDCTRL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof Mob_Plan
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  Mob_PlanBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args)['data'];
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {Mob_PlanService}
     * @memberof Mob_Plan
     */
    protected service: Mob_PlanService = new Mob_PlanService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof Mob_Plan
     */
    protected appEntityService: BugService = new BugService();

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof Mob_PlanBase
     */  
    public deUIService:BugUIService = new BugUIService(this.$store);
    

    /**
     * 逻辑事件
     *
     * @protected
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @returns {Promise<any>}
     * @memberof MdctrlBase
     */
    protected async mdctrl_u2f9e360_click(params: any = {}, tag?: any, $event?: any): Promise<any> {

        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let contextJO: any = {};
        let paramJO: any = {};
        
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService: any = await this.globaluiservice.getService('bug_ui_action');
        if (curUIService) {
            curUIService.Bug_UnlinkBugMob(datas, contextJO, paramJO, $event, xData, this);
        }
    }

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof Mob_Plan
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


    /**
     * 视图类型
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected viewType?: string | 'DEMOBMDVIEW' | 'DEMOBMDVIEW9' | 'DEMOBWFMDVIEW';

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof Mob_Plan
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected fetchAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop() protected createAction!: string;

    /**
     * 部件样式
     *
     * @type {string}
     * @memberof Mob_Plan
     */
    @Prop({default: 'LISTVIEW'}) protected controlStyle!: string | 'ICONVIEW'  | 'LISTVIEW' | 'SWIPERVIEW' | 'LISTVIEW2' | 'LISTVIEW3' | 'LISTVIEW4';

    /**
    *上级传递的选中项
    *@type {Array}
    *@memberof Mob_Plan
    */
     @Prop() public selectedData?:Array<any>;


    /**
    * 新建打开视图
    *
    * @type {Function}
    * @memberof Mob_Plan
    */
    @Prop() public newdata?: Function; 


    /**
    * 打开视图
    *
    * @type {Function}
    * @memberof Mob_Plan
    */
    @Prop() public opendata?: Function; 

    /**
    * 是否能下拉刷新
    *
    * @type {Function}
    * @memberof Mob
    */
    @Prop({ default: true }) public isEnableRefresh?: Boolean;

    /**
    * 是否能长按
    *
    * @type {Function}
    * @memberof Mob
    */
    @Prop({ default: true }) public isEnableChoose?: Boolean;

    /**
    * 当前选中数组
    *
    * @type {array}
    * @memberof Mob_Plan
    */
    public  selectdata :any = [];

    /**
    * 关闭行为
    *
    * @type {Function}
    * @memberof Mob_Plan
    */
    @Prop() public close?:Function;


    /**
    * 是否为临时模式
    *
    * @type {boolean}
    * @memberof Mob_Plan
    */
    @Prop({ default: false}) public isTempMode?:boolean;

    /**
    * 是否正在加载
    *
    * @type {boolean}
    * @memberof Mob_Plan
    */
    public isLoading:boolean = true;

    /**
    * 存放多数据选择数组（多选）
    *
    * @type {array}
    * @memberof Mob_Plan
    */
    public checkboxList:Array<string> = [];

    /**
    * 存放数据选择数组(单选)
    *
    * @type {object}
    * @memberof Mob_Plan
    */
    public radio:any = '';


    /**
    * 点击多选按钮触发
    *
    *
    * @memberof Mob_Plan
    */
    public change(){
        if(this.isMutli){
             let checkboxLists= this.items.filter((item,index)=>{
                  if(this.checkboxList.indexOf(item.srfkey)!=-1){
                    return true;
                  }else{
                    return false;
                  }
                })
          this.$emit('selectchange',checkboxLists);
        }else{
           let radioItem = this.items.filter((item,index)=>{return item.srfkey==this.radio});
           this.$emit('selectchange',radioItem);
        }
    }

    /**
    * 列表键值对
    *
    * @type {Map}
    * @memberof Mob_Plan
    */
    public listMap: any = new Map();

    /**
    * 分页大小
    *
    * @type {number}
    * @memberof Mob_Plan
    */
    public pageSize: number = 5;

    /**
    * 总页数
    *
    * @type {number}
    * @memberof Mob_Plan
    */
     public pageTotal: number = 0;

    /**
    * 当前页数
    *
    * @type {number}
    * @memberof Mob_Plan
    */
     public pageNumber: number = 1;

    /**
    * 判断底部数据是否全部加载完成，若为真，则 bottomMethod 不会被再次触发
    *
    * @type {number}
    * @memberof Mob_Plan
    */
    get allLoaded() {
        return ((this.pageNumber + 1) * this.pageSize) >= this.pageTotal ? true : false;
    }

    /**
    * 底部状态
    *
    * @type {String}
    * @memberof Mob_Plan
    */
    // public bottomStatus: String = "";

    /**
    * 顶部状态
    *
    * @type {String}
    * @memberof Mob_Plan
    */
    // public topStatus: String = "";

    /**
    * 
    *
    * @type {Number}
    * @memberof Mob_Plan
    */
    // public moveTranslate: Number = 0;

    /**
    * searchKey 搜索关键字
    *
    * @type {string}
    * @memberof Mob_Plan
    */
     public searchKey:string = '';

    /**
    * 列表数组
    *
    * @param {Array<any>}
    * @memberof Mob_Plan
    */
    public items:Array<any> =[];

    /**
    * 选中数组
    *
    * @param {Array<any>}
    * @memberof Mob_Plan
    */
    public selectedArray:Array<any> = [];

    /**
    * 多选计数
    *
    * @param {number}
    * @memberof Mob_Plan
    */
    public selectednumber:number =0;

    /**
    * 搜索行为
    *
    * @param {string}
    * @memberof Mob_Plan
    */
    @Prop() public searchAction?:string;

    /**
    * 是否为选择视图
    *
    * @param {boolean} 
    * @memberof Mob_Plan
    */
    @Prop() public isSelected?:boolean;

    /**
    * 是否多选
    *
    * @type {boolean}
    * @memberof Mob_Plan
    */
    @Prop({default:false}) public isMutli?: boolean;

    /**
    * 单选选择值
    *
    * @param {string} 
    * @memberof Mob_Plan
    */
    public selectedValue:string = ""; 

    /**
    * 部件排序对象
    *
    * @param {object} 
    * @memberof Mob_Plan
    */
    public sort: any = { sort:'id,desc'};
    
    /**
    * 底部改变状态
    * 
    * @memberof Mob_Plan
    */
    public handleBottomChange(status: String) {
    //   this.bottomStatus = status;
    }

    /**
    * 顶部改变状态
    * 
    * @memberof Mob_Plan
    */
    public handleTopChange(status: String) {
    //   this.moveTranslate = 1;
    //   this.topStatus = status;
    }

    /**
     * 上拉加载更多数据
     *
     * @memberof Mob_Plan
     */
    public async loadBottom(): Promise<any> {
        this.pageNumber++;
        let params = {};
        if (this.viewparams) {
            Object.assign(params, this.viewparams);
        }
        Object.assign(params, { query: this.searchKey, page: this.pageNumber, size: this.pageSize });
        let response: any = await this.load(params, 'bottom');
        let loadmoreBottom: any = this.$refs.loadmoreBottom;
        if (loadmoreBottom) {
            loadmoreBottom.complete();
        }
    }

    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof Mdctrl
     */
    public async remove(datas: any[]): Promise<any> {
        let arg: any = {};
        let keys: Array<string> = [];
        let infoStr: string = '';
        datas.forEach((data: any, index: number) => {
            keys.push(data.id);
            if (index < 5) {
                if (!Object.is(infoStr, '')) {
                    infoStr += '、';
                }
                infoStr += data.title;
            }
        });
        if(datas.length <= 0 ){
          this.$notice.error('请选择至少一条删除~')
          return
        }
        if (datas.length < 5) {
            infoStr = infoStr + this.$t('app.message.totle') + datas.length + this.$t('app.message.data');
        } else {
            infoStr = infoStr + '...' + this.$t('app.message.totle') + datas.length + this.$t('app.message.data');
        }
        return new Promise((resolve, reject) => {
            const _remove = async () => {
                let _context: any = { bug: keys.join(';') }
                const response: any = await this.service.delete(this.removeAction, Object.assign({}, this.context, _context), arg, this.showBusyIndicator);
                if (response && response.status === 200 && response.data.records) {
                    this.$notice.success((this.$t('app.message.deleteSccess') as string));
                    this.load();
                    this.closeSliding();
                    resolve(response);
                } else {
                    this.$notice.error(response.message?response.message:"删除失败");
                    reject(response);
                }
            }

            this.$dialog.confirm({
                title: (this.$t('app.message.warning') as string),
                message: this.$t('app.message.confirmToDelete') + infoStr +','+ this.$t('app.message.unrecoverable') + '？',
            }).then(() => {
                _remove();
            }).catch(() => {
            });
        });
    }

    /**
     * 刷新数据
     *
     * @returns {Promise<any>}
     * @memberof Mdctrl
     */
    public refresh(): Promise<any> {
        this.isLoading = true;
        return new Promise((resolve: any, reject: any) => {
            this.load().then((res) => {
                this.isLoading = false;
                resolve(res);
            }).catch((error: any) => {
                this.isLoading = false;
                reject(error);
            })
        })
    }

    /**
     * 长按
     *
     * @memberof Mob_Plan
     */
    public onPress(){
        let _this = this;
        window.addEventListener('contextmenu',(e:any)=>{
            _this.onCheackChange();
            e.preventDefault();
        });
    }

    /**
     * 长按状态改变事件
     *
     * @memberof Mob_Plan
     */
    public onCheackChange(){
        this.$emit('showCheackChange', !this.showCheack);
    }

    /**
     * 快速搜索
     *
     * @param {string} query
     * @returns {Promise<any>}
     * @memberof Mob_Plan
     */
    public async quickSearch(query: string): Promise<any> {
        this.searchKey = query;
        this.pageNumber = 0;
        const response = await this.load(Object.assign({ query: query }, { page: this.pageNumber, size: this.pageSize }), "init");
        return response;
    }

    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof Mob_Plan
     */
    private async load(data: any = {}, type: string = ""): Promise<any> {
        if (!data.page) {
            Object.assign(data, { page: this.pageNumber });
        }
        if (!data.size) {
            Object.assign(data, { size: this.pageSize });
        }
        //部件排序
        if(this.sort){
​           Object.assign(data,this.sort);
        }
        //视图排序
        if(data.data && data.data.sort){
            Object.assign(data, { sort:data.data.sort });
        }
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(data, parentdata);
        let tempViewParams:any = parentdata.viewparams?parentdata.viewparams:{};
        Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(data,{viewparams:tempViewParams});
        const response: any = await this.service.search(this.fetchAction, this.context, data, this.showBusyIndicator);
        if (!response || response.status !== 200) {
            this.$notify({ type: 'danger', message: response.error.message });
            return response;
        }

        this.$emit('load', (response.data && response.data.records) ? response.data.records : []);
        this.pageTotal = response.data.total;
        if (type == 'top') {
            this.items = [];
            this.items = response.data.records;
        } else if (type == 'bottom') {
            for (let i = 0; i < response.data.records.length; i++) {
                this.items.push(response.data.records[i]);
            }
        } else {
            this.items = [];
            this.items = response.data.records;
        }
        this.items.forEach((item:any)=>{
            Object.assign(item,this.getActionState(item));    
            this.setSlidingDisabled(item);
        });
        return response;
    }

    /**
    * 全选
    *
    * @private
    * @param {*} [arg={}]
    * @memberof Mob_Plan
    */
    private handleClick() {
        this.items.forEach((item: any) => {
            item.value = true;
        });
        this.selectednumber = this.items.length;
    }

    /**
     * checkbox 选中回调
     *
     * @param {*} data
     * @returns
     * @memberof Mob_Plan
     */
    public checkboxChange(data: any) {
        let { detail } = data;
        if (!detail) {
            return;
        }
        let { value } = detail;
        this.selectednumber = 0;
        this.items.forEach((item: any, index: number) => {
            if (item.value) {
                this.selectednumber++;
            }
            if (Object.is(item.bugid, value)) {
                if (detail.checked) {
                    this.selectdata.push(this.items[index]);
                } else {
                    this.selectdata.splice(this.selectdata.findIndex((i: any) => i.value === item.value), 1)
                }
            }
        });
        this.$emit('selectionchange', this.selectdata);
    }

    /**
     * 下拉刷新
     *
     * @returns {Promise<any>}
     * @memberof Mob_Plan
     */
    public async pullDownToRefresh(): Promise<any> {
        this.pageNumber = 0;
        let params = {};
        if (this.viewparams) {
            Object.assign(params, this.viewparams);
        }
        Object.assign(params, { query: this.searchKey, pageNumber: this.pageNumber, pageSize: this.pageSize });
        let response: any = await this.load(params, 'top');
        return response;
    }

    /**
    * 点击回调事件
    *
    * @memberof Mob_Plan
    */
    public item_click(item:any){
        if(this.showCheack){
            let count = this.selectedArray.findIndex((i) => {
            return i.mobentityid == item.mobentityid;
        });
            if (count === -1) {
                this.selectedArray.push(item);
            } else {
                this.selectedArray.splice(count, 1);
            }
        } else {
            this.goPage(item)
        }
    }

    /**
    * 点击列表数据跳转
    *
    * @memberof Mob_Plan
    */
    public goPage(item: any) {
        this.$emit('rowclick',item);
    }

    /**
    * 获取多项数据
    *
    * @memberof Mob_Plan
    */
    public getDatas(): any[] {
      return this.selectedArray;
    }

    /**
    * 获取单项数据
    *
    * @memberof Mob_Plan
    */
    public getData(): any {
        return this.selectedArray[0];
    }

    /**
    * vue生命周期created
    *
    * @memberof Mob_Plan
    */
    public created() {
        if (this.isEnableChoose) {
           this.onPress();
        }
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Mob_Plan
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action, "load")) {
                    this.pageNumber = 0;
                    this.load(Object.assign(data, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "search")) {
                    this.pageNumber = 0;
                    this.load(Object.assign(data, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "quicksearch")) {
                    this.searchKey = data;
                    this.pageNumber = 0;
                    this.load(Object.assign({ query: data }, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "refresh")) {
                    this.refresh();
                }
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof Mob_Plan
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Mob_Plan
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        window.removeEventListener('contextmenu',()=>{});
    }

    /**
     * vue 生命周期 activated
     *
     * @memberof Mob_Plan
     */
    public activated() {
        this.items.forEach((item:any)=>{
            let curr:any = this.$refs[item.srfkey];
            curr[0].close();
        })
    }

    /**
     * 列表项左滑右滑触发行为
     *
     * @param {*} $event 点击鼠标事件
     * @param {*} tag 操作标识
     * @param {*} item 行数据
     * @memberof Mdctrl
     */
    public mdctrl_click($event: any, tag: any, item: any): void {
        $event.stopPropagation();
        this.selectedArray = [];
        this.selectedArray.push(item);
        if (Object.is(tag, 'u2f9e360')) {
            this.mdctrl_u2f9e360_click();
        }
        let curr :any = this.$refs[item.srfkey];
        curr[0].closeOpened();
    }

    /**
     * 单选选中变化
     * 
     * @memberof Mdctrl
     */
    public onSimpleSelChange(item: any = {}) {
        this.$emit('selectionchange', [item]);
        this.selectedValue = item.srfkey;
        this.selectedArray = [];
        this.goPage(item);
    }


   /**
     * 是否展示多选
     *
     * @memberof Mdctrl
     */
    @Prop({default:false}) showCheack?: boolean;

    /**
     * 选中或取消事件
     *
     * @memberof Mdctrl
     */
    public checkboxSelect(item:any){
        let count = this.selectedArray.findIndex((i) => {
            return i.id == item.id;
        });
        let re = false;
        if(count == -1){
            re = true;
            this.selectedArray.push(item);
        }else{
            this.selectedArray.splice(count,1);
        }
        this.items.forEach((_item:any,index:number)=>{
            if(_item.id == item.id){
                this.items[index].checked = re;
            }
        });
    }
    
    /**
     * 全选事件
     *
     * @memberof Mdctrl
     */
    public checkboxAll(item:any) {
        this.selectAllIschecked = item.detail.checked;
        if(this.selectAllIschecked){
            this.selectedArray = JSON.parse(JSON.stringify(this.items));
        }else{
            this.selectedArray = [];
        }
        this.items.forEach((item:any,index:number)=>{
            this.items[index].checked = this.selectAllIschecked
        });
        this.$forceUpdate();
    }


    /**
     * 全选按钮选中状态
     *
     * @memberof Mdctrl
     */
    public selectAllIschecked = false;


    /**
     * 关闭滑动项
     *
     * @memberof Mdctrl
     */
    public closeSliding(){
        let sliding :any = this.$refs.sliding;
        if(sliding){
            sliding.forEach((item:any) => {
                item.closeOpened();
            });
        }
    }

    

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof Mob_PlanBase
     */  
    public ActionModel:any ={
        UnlinkBugMob: { name: 'UnlinkBugMob',disabled: false, visabled: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__BUG_UNLINK_BUT', target: 'SINGLEKEY',icon:'trash',isShowCaption:false,isShowIcon:true}
    };

    

    /**
     * 获取界面行为权限状态
     *
     * @memberof Mob_PlanBase
     */
    public getActionState(data:any){
        //let targetData:any = this.transformData(data);
        let tempActionModel:any = JSON.parse(JSON.stringify(this.ActionModel));
        this.$viewTool.calcActionItemAuthState(data,tempActionModel,this.deUIService);
        return tempActionModel;
    }

    /**
    * 判断列表项左滑右滑禁用状态
    *
    * @memberof Mob_PlanBase
    */
    public setSlidingDisabled(item:any){
        item.sliding_disabled = true;
        Object.keys(this.ActionModel).forEach((key,index) => {
           if(item[key].visabled && item.sliding_disabled ){
             item.sliding_disabled = false;
           }
        })

    }
}
</script>

<style lang='less'>
@import './mob-plan-mobmdctrl.less';
</style>