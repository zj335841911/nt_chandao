<template>  
    <div :class="['app-list', this.items.length > 0 ? '' : 'app-list-empty' ]">
            <div v-if="items.length > 0">
                                <div v-for = "item in items" :key="item.srfkey"  :class="['app-list-item', {'isSelect': item.isselected === true ? true : false}]" @click="handleClick(item)"  @dblclick="handleDblClick(item)">
     <a :href="'../ibizutil/ztdownload/' + item.srfkey" target="_blank">{{item.srfmajortext}}</a>&nbsp;<icon type="md-close" @click="remove([item])"/>
</div>

            </div>
            <div v-else>
                暂无数据
            </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import FileService from '@/service/file/file-service';
import ListService from './list-list-service';



@Component({
    components: {
      
    }
})
export default class ListBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof List
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof List
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof List
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof List
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof List
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof List
     */
    protected getControlType(): string {
        return 'LIST'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof List
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {ListService}
     * @memberof List
     */
    protected service: ListService = new ListService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {FileService}
     * @memberof List
     */
    protected appEntityService: FileService = new FileService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof List
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof List
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
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof List
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof List
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof List
     */
    @Prop({ default: false }) protected isSelectFirstDefault!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof List
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof List
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof List
     */
    @Prop() protected removeAction!: string;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof List
     */
    @Prop() protected updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof List
     */
    @Prop() protected fetchAction!: string;

    /**
     * 当前页
     *
     * @type {number}
     * @memberof Main
     */
    protected curPage: number = 1;

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof List
     */
    protected items: any[] = [];

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof List
     */
    protected isEnablePagingBar: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof List
     */
    protected limit: number = 20;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof List
     */
    protected totalRecord: number = 0;

    /**
     * 选中数组
     * @type {Array<any>}
     * @memberof List
     */
    protected selections: Array<any> = [];

     /**
     * Vue声明周期，组件挂载完毕
     *
     * @memberof List
     */
    protected mounted () {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     *
     * @memberof List
     */
    protected afterMounted () {
        this.$el.addEventListener('scroll', ()=> {
            if( this.$el.scrollTop +  this.$el.clientHeight  >=  this.$el.scrollHeight) {
                this.loadMore();
            }
        })
    }

    /**
     * Vue声明周期，组件创建完毕
     *
     * @memberof List
     */
    protected created() {
        this.afterCreated()
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof List
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action,'load')) {
                    this.refresh(data)
                }
            });
        }
    }    

    /**
     * vue 生命周期
     *
     * @memberof List
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof List
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }    

    /**
    * 加载更多
    *
    * @memberof Mob
    */
    protected loadMore(){
        if(this.totalRecord>this.items.length)
        {
            this.curPage = ++this.curPage;
            this.load({});
        }
    }

    /**
     * 刷新
     *
     * @param {*} [opt={}]
     * @memberof Main
     */
    protected refresh(opt: any = {}) {
        this.curPage = 1;
        this.items = [];
        this.load(opt);
    }

    /**
     * 列表数据加载
     *
     * @private
     * @param {*} [arg={}]
     * @memberof List
     */
    private load(opt: any = {}): void {
        if(!this.fetchAction){
            this.$Notice.error({ title: '错误', desc: 'FileListView9视图列表fetchAction参数未配置' });
            return;
        }        
        const arg: any = {...opt};
        const page: any = {};
        if (this.isEnablePagingBar) {
            Object.assign(page, { page: this.curPage-1, size: this.limit });
        }
        Object.assign(arg, page);
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        Object.assign(arg,{viewparams:this.viewparams});
        const post: Promise<any> = this.service.search(this.fetchAction, this.context?JSON.parse(JSON.stringify(this.context)):{}, arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }
            const data: any = response.data;
            this.items = [];
            if (Object.keys(data).length > 0) {
                let datas = JSON.parse(JSON.stringify(data));
                datas.map((item: any) => {
                    Object.assign(item, { isselected: false });
                });
                this.totalRecord = response.total;
                this.items.push(...datas);
            }
            this.$emit('load', this.items);
            if(this.isSelectFirstDefault){
                this.handleClick(this.items[0]);
            }
        }, (response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: '错误', desc: response.errorMessage });
        });
    }

    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof List
     */
    protected async remove(datas: any[]): Promise<any> {
        if(!this.removeAction){
            this.$Notice.error({ title: '错误', desc: 'FileListView9视图表格removeAction参数未配置' });
            return;
        }
        if (datas.length === 0) {
            return;
        }
        let dataInfo = '';
        datas.forEach((record: any, index: number) => {
            let srfmajortext = record.srfmajortext;
            if (index < 5) {
                if (!Object.is(dataInfo, '')) {
                    dataInfo += '、';
                }
                dataInfo += srfmajortext;
            } else {
                return false;
            }
        });

        if (datas.length < 5) {
            dataInfo = dataInfo + ' 共' + datas.length + '条数据';
        } else {
            dataInfo = dataInfo + '...' + ' 共' + datas.length + '条数据';
        }

        const removeData = () => {
            let keys: any[] = [];
            datas.forEach((data: any) => {
                keys.push(data.srfkey);
            });
            const context:any = JSON.parse(JSON.stringify(this.context));
            const post: Promise<any> = this.service.delete(this.removeAction,Object.assign(context,{ file: keys.join(';') }),Object.assign({ id: keys.join(';') },{viewparams:this.viewparams}), this.showBusyIndicator);
            return new Promise((resolve: any, reject: any) => {
                post.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '删除数据失败,' + response.info });
                        return;
                    } else {
                        this.$Notice.success({ title: '', desc: '删除成功!' });
                    }
                    //删除items中已删除的项
                    datas.forEach((data: any) => {
                      this.items.some((item:any,index:number)=>{
                        if(Object.is(item.srfkey,data.srfkey)){
                          this.items.splice(index,1);
                                return true;
                            }
                        });
                    });
                    this.$emit('remove', null);
                    this.selections = [];
                    resolve(response);
                }).catch((response: any) => {
                    if (response && response.status === 401) {
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
                });
            });
        }

        dataInfo = dataInfo.replace(/[null]/g, '').replace(/[undefined]/g, '').replace(/[ ]/g, '');
        this.$Modal.confirm({
            title: '警告',
            content: '确认要删除 ' + dataInfo + '，删除操作将不可恢复？',
            onOk: () => {
                removeData();
            },
            onCancel: () => { }
        });
        return removeData;
    }

    /**
     * 选择数据
     * @memberof List
     *
     */
    protected handleClick(args: any) {
        this.clearSelection();
        args.isselected = !args.isselected;
        this.selectchange();
    }

    /**
     * 双击数据
     * @memberof List
     *
     */
    protected handleDblClick(args: any) {
        this.$emit('rowdblclick', args);
    }

    /**
     * 触发事件
     * @memberof List
     *
     */
    protected selectchange() {
        this.selections = [];
        this.items.map((item: any) => {
            if (item.isselected) {
                this.selections.push(item);
            }
        });
        this.$emit('selectionchange', this.selections);
    }

    /**
     * 清除当前所有选中状态
     *
     * @memberof List
     */
    protected clearSelection(){
        this.items.map((item: any) => {
            Object.assign(item, { isselected: false });
        }); 
    }

}
</script>

<style lang='less'>
@import './list-list.less';
</style>