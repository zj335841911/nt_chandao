<template>
    <div  class="app-mob-mdctrl task-dashboard_sysportlet2_list ">
        <div v-if="listMode==='LISTEXPBAR'">
            <van-sidebar v-model="listItem" @change="switchView">
                <van-sidebar-item class="app-mob-list-item" v-for="item in items" :key="item.srfkey" :title='item.srfmajortext'/>
            </van-sidebar>
        </div>
        <div v-else class="app-mob-mdctrl-dashboard_sysportlet2_list">
            <ion-list class="items">
                <template v-if="controlStyle != 'SWIPERVIEW' ">
                    <ion-item-sliding v-for="(item, index) in items" :key="index" class="app-mob-mdctrl-item">
                        <div style="width:100%;">
                        <layout_dashboard_sysportlet2_list_itempanel :context="{}" :viewparams="{}" :item="item"></layout_dashboard_sysportlet2_list_itempanel>
                        </div>
                    </ion-item-sliding>
                </template>
                <template v-else-if="controlStyle != 'LISTVIEW' ">
                        <ion-item-sliding v-for="(item, index) in items" :key="index" class="app-mob-mdctrl-item">
                            <div style="width:100%;">
                            <layout_dashboard_sysportlet2_list_itempanel :context="{}" :viewparams="{}" :item="item"></layout_dashboard_sysportlet2_list_itempanel>
                            </div>
                        </ion-item-sliding>
                    </template>
                    <template v-else-if="controlStyle === 'SWIPERVIEW'">
                        <app-list-swipe :items="items"></app-list-swipe>
                    </template>
            </ion-list>
        </div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import TaskService from '@/app-core/service/task/task-service';
import AssMobDASHBOARDService from '@/app-core/ctrl-service/task/ass-mob-dashboard-list-service';

import TaskUIService from '@/ui-service/task/task-ui-action';



@Component({
    components: {
    }
})
export default class AssMobDASHBOARDBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AssMobDASHBOARD
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof AssMobDASHBOARD
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof AssMobDASHBOARD
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AssMobDASHBOARD
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AssMobDASHBOARD
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof AssMobDASHBOARD
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof AssMobDASHBOARD
     */
    protected getControlType(): string {
        return 'LIST'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof AssMobDASHBOARD
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  AssMobDASHBOARDBase
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
     * @type {AssMobDASHBOARDService}
     * @memberof AssMobDASHBOARD
     */
    protected service: AssMobDASHBOARDService = new AssMobDASHBOARDService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof AssMobDASHBOARD
     */
    protected appEntityService: TaskService = new TaskService();

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof AssMobDASHBOARDBase
     */  
    public deUIService:TaskUIService = new TaskUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof AssMobDASHBOARD
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AssMobDASHBOARDBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AssMobDASHBOARDBase
     */
    public getData(): any {
        return null;
    }

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof AssMobDASHBOARD
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof AssMobDASHBOARD
     */
    @Prop() protected fetchAction!: string;

    /**
     * 列表数组
     *
     * @type {Array<any>}
     * @memberof AssMobDASHBOARD
     */
    public items: Array<any> = [];

    /**
     * 列表类型
     *
     * @type {string}
     * @memberof AssMobDASHBOARD
     */
    @Prop({default:'LIST'}) protected listMode?: 'LISTEXPBAR' | 'LIST' | string;

    /**
     * 列表选中项的索引
     *
     * @type {string}
     * @memberof AssMobDASHBOARD
     */
    public listItem: number = 0;

    /**
     * 分页大小
     *
     * @type {number}
     * @memberof AssMobDASHBOARD
     */
    public pageSize: number = 5;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof AssMobDASHBOARD
     */
    public pageTotal: number = 0;

    /**
     * 当前页数
     *
     * @type {number}
     * @memberof AssMobDASHBOARD
     */
    public pageNumber: number = 0;

    /**
     * 部件样式
     *
     * @type {string}
     * @memberof AssMobDASHBOARD
     */
    @Prop({default: ''}) protected controlStyle!: string;

    /**
     * vue生命周期created
     *
     * @memberof AssMobDASHBOARD
     */
    public created() {
        this.handleCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof AssMobDASHBOARD
     */
    public handleCreated() {
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.load(Object.assign(data, { page: this.pageNumber, size: this.pageSize }), "");
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof AssMobDASHBOARD
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AssMobDASHBOARD
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 列表切换回调
     * @param {number} listIndex
     * @memberof AssMobDASHBOARD
     */
    public switchView(listIndex:number){
        this.items.findIndex((item,index)=>{
            if(index === listIndex){
                this.$emit('selectionchange', item);
            }
        })
    }

    /**
     * 数据加载
     *
     * @protected
     * @param {*} data
     * @param {*} type
     * @returns {Promise<any>}
     * @memberof AssMobDASHBOARD
     */
    protected async load(data: any, type: any): Promise<any> {
        if (!data.page) {
            Object.assign(data, { page: this.pageNumber });
        }
        if (!data.size) {
            Object.assign(data, { size: this.pageSize });
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
        return response;
    }

    /**
     * 格式化数据
     *
     * @param {*} datelist
     * @memberof IBizChartViewController
     */
    public formatdate(datelist: any) {
        this.items = datelist;
    }

}
</script>

<style lang='less'>
@import './ass-mob-dashboard-list.less';
</style>