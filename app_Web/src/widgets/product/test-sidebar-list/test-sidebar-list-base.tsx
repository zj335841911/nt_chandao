import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import TestSidebarService from './test-sidebar-list-service';


/**
 * list部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TestSidebarListBase}
 */
export class TestSidebarListBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {TestSidebarService}
     * @memberof TestSidebarListBase
     */
    public service: TestSidebarService = new TestSidebarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TestSidebarListBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestSidebar
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestSidebar
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof TestSidebar
     */
    @Prop({ default: false }) public isSelectFirstDefault!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof TestSidebar
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof TestSidebar
     */
    @Prop() public createAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof TestSidebar
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof TestSidebar
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof TestSidebar
     */
    @Prop() public fetchAction!: string;

    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof TestSidebar
     */
    @Prop() public newdata: any;
    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof TestSidebar
     */
    @Prop() public opendata: any;

    /**
     * this引用
     *
     * @type {number}
     * @memberof Main
     */
    public thisRef: any = this;

    /**
     * 当前页
     *
     * @type {number}
     * @memberof Main
     */
    public curPage: number = 1;

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof TestSidebar
     */
    public items: any[] = [];

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof TestSidebar
     */
    public isEnablePagingBar: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof TestSidebar
     */
    public limit: number = 1000;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof TestSidebar
     */
    public totalRecord: number = 0;

    /**
     * 加载的数据是否附加在items之后
     *
     * @type {boolean}
     * @memberof TestSidebar
     */
    public isAddBehind:boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof TestSidebar
     */    
    public sortDir:string = '';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof TestSidebar
     */    
    public sortField: string = '';

    /**
     * 选中数组
     * @type {Array<any>}
     * @memberof TestSidebar
     */
    public selections: Array<any> = [];

     /**
     * Vue声明周期，组件挂载完毕
     *
     * @memberof TestSidebar
     */
    public mounted () {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     *
     * @memberof TestSidebar
     */
    public afterMounted () {
        this.$el.addEventListener('scroll', ()=> {
            if( this.$el.scrollTop +  this.$el.clientHeight  >=  this.$el.scrollHeight) {
                this.loadMore();
            }
        })
    }
    

    /**
     * Vue声明周期，组件创建完毕
     *
     * @memberof TestSidebar
     */
    public created() {
        this.afterCreated()
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestSidebar
     */    
    public afterCreated(){
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
     * @memberof TestSidebar
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestSidebar
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }    

    /**
    * 加载更多
    *
    * @memberof Mob
    */
    public loadMore(){
        if(this.totalRecord>this.items.length)
        {
            this.curPage = ++this.curPage;
            this.isAddBehind = true;
            this.load({});
        }
    }

    /**
     * 刷新
     *
     * @param {*} [opt={}]
     * @memberof Main
     */
    public refresh(opt: any = {}) {
        this.curPage = 1;
        this.items = [];
        this.load(opt);
    }

    /**
     * 列表数据加载
     *
     * @public
     * @param {*} [arg={}]
     * @memberof TestSidebar
     */
    public load(opt: any = {}): void {
        if(!this.fetchAction){
            this.$Notice.error({ title: '错误', desc: 'ProductTestLeftSidebarListView视图列表fetchAction参数未配置' });
            return;
        }        
        const arg: any = {...opt};
        const page: any = {};
        if (this.isEnablePagingBar) {
            Object.assign(page, { page: this.curPage-1, size: this.limit });
        }
        // 设置排序
        if (!Object.is(this.sortDir, '') && !Object.is(this.sortField, '')) {
          const sort: string = this.sortField+","+this.sortDir;
            Object.assign(page, { sort: sort });
        }
        Object.assign(arg, page);
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        let tempViewParams:any = parentdata.viewparams?parentdata.viewparams:{};
        if(this.viewparams){
            Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        }
        Object.assign(arg,{viewparams:tempViewParams});
        const post: Promise<any> = this.service.search(this.fetchAction, this.context?JSON.parse(JSON.stringify(this.context)):{}, arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }
            const data: any = response.data;
            if(!this.isAddBehind){
                this.items = [];
            }
            if (Object.keys(data).length > 0) {
                let datas = JSON.parse(JSON.stringify(data));
                datas.map((item: any) => {
                    Object.assign(item, { isselected: false });
                });
                this.totalRecord = response.total;
                this.items.push(...datas);
            }
            this.isAddBehind = false;
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
     * @memberof TestSidebar
     */
    public async remove(datas: any[]): Promise<any> {
        if(!this.removeAction){
            this.$Notice.error({ title: '错误', desc: 'ProductTestLeftSidebarListView视图表格removeAction参数未配置' });
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
            let _removeAction = keys.length > 1 ? 'removeBatch' : this.removeAction ;
            const context:any = JSON.parse(JSON.stringify(this.context));
            const post: Promise<any> = this.service.delete(_removeAction,Object.assign(context,{ product: keys.join(';') }),Object.assign({ product: keys.join(';') },{viewparams:this.viewparams}), this.showBusyIndicator);
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
     * @memberof TestSidebar
     *
     */
    public handleClick(args: any) {
        this.clearSelection();
        args.isselected = !args.isselected;
        this.selectchange();
    }

    /**
     * 双击数据
     * @memberof TestSidebar
     *
     */
    public handleDblClick(args: any) {
        this.$emit('rowdblclick', args);
    }

    /**
     * 触发事件
     * @memberof TestSidebar
     *
     */
    public selectchange() {
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
     * @memberof TestSidebar
     */
    public clearSelection(){
        this.items.map((item: any) => {
            Object.assign(item, { isselected: false });
        }); 
    }

}