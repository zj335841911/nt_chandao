<template>
    <div class="app-data-view-group">
                <template v-for="(group, index) of groups">
            <div :key="group + index" class="dataview-group-content" style="width: 280px;">
                <div class="dataview-group-header">
                    {{ getGroupText(group.name) }}
                </div>
                <draggable :list="group.items" group="kanban" class="dataview-group-items" @change="onDragChange($event, group.name)">
                    <div v-for="(item, i) in group.items" :key="i" :class="{'dataview-group-item': true, 'is-select': item.isselected}" @click="handleClick(item)" @dblclick="handleDblClick(item)">
                        <layout_itemlayoutpanel name='itemlayoutpanel' :inputData="item"></layout_itemlayoutpanel>
                    </div>
                </draggable>
            </div>
        </template>
  </div>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import TaskService from '@/service/task/task-service';
import TaskKanBanService from './task-kan-ban-kanban-service';

import draggable from "vuedraggable";


@Component({
    components: {
      draggable,

    }
})
export default class TaskKanBanBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TaskKanBan
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TaskKanBan
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof TaskKanBan
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TaskKanBan
     */
    public getControlType(): string {
        return 'KANBAN'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskKanBan
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TaskKanBanService}
     * @memberof TaskKanBan
     */
    public service: TaskKanBanService = new TaskKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskKanBan
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof TaskKanBan
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TaskKanBan
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
     * @memberof TaskKanBan
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TaskKanBan
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof TaskKanBan
     */
    @Prop({ default: false }) public isSelectFirstDefault!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof TaskKanBan
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof TaskKanBan
     */
    @Prop() public createAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof TaskKanBan
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof TaskKanBan
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof TaskKanBan
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--updateGroup
     *
     * @type {string}
     * @memberof TaskKanBan
     */
    @Prop() public updateGroupAction!: string;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof TaskKanBan
     */
    @Prop() public isSingleSelect?: boolean;

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof TaskKanBan
     */
    public items: any[] = [];

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof TaskKanBan
     */
    public isEnablePagingBar: boolean = false;;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof TaskKanBan
     */
    public totalRecord: number = 0;

    /**
     * 加载的数据是否附加在items之后
     *
     * @type {boolean}
     * @memberof TaskKanBan
     */
    public isAddBehind:boolean = false;

    /**
     * 选中数组
     * @type {Array<any>}
     * @memberof TaskKanBan
     */
    public selections: Array<any> = [];

    /**
     * 当前页
     *
     * @type {number}
     * @memberof TaskKanBan
     */
    public curPage: number = 1;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof TaskKanBan
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof TaskKanBan
     */    
    public sortDir:string = '';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof TaskKanBan
     */    
    public sortField: string = '';

    /**
     * 是否分组
     *
     * @type {string}
     * @memberof TaskKanBan
     */   
    public isGroup: boolean = true;
    /**
     * 分组集合
     *
     * @type {string}
     * @memberof TaskKanBan
     */ 
    public groups: any[] = [];
    /**
     * 分组属性名称
     *
     * @type {string}
     * @memberof TaskKanBan
     */ 
    public groupField: string = 'status';
    /**
     * 分组模式
     *
     * @type {string}
     * @memberof TaskKanBan
     */ 
    public groupMode: string = 'CODELIST'
    /**
     * 分组模式
     *
     * @type {string}
     * @memberof TaskKanBan
     */ 
    public groupCodelist: string = 'Task__status'

    /**
     * Vue声明周期，组件挂载完毕
     *
     * @memberof TaskKanBan
     */
    public mounted () {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     *
     *  @memberof TaskKanBan
     */    
    public afterMounted(){
        this.$el.addEventListener('scroll', ()=> {
            if( this.$el.scrollTop +  this.$el.clientHeight  >=  this.$el.scrollHeight) {
                this.loadMore();
            }
        })
    }

    /**
     * Vue声明周期，组件创建完毕
     *
     * @memberof TaskKanBan
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TaskKanBan
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
                if (Object.is(action,'filter')) {
                    this.refresh(data)
                }
            });
        }
    }

    /**
	 * 加载更多
	 *
	 * @memberof TaskKanBan
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
     * @memberof TaskKanBan
     */
    public refresh(opt: any = {}) {
        this.curPage = 1;
        this.load(opt, true);
    }

    /**
     * vue 生命周期
     *
     * @memberof TaskKanBan
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TaskKanBan
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 表格数据加载
     *
     * @public
     * @param {*} [arg={}]
     * @param {boolean} [isReset=false] 是否重置items
     * @memberof TaskKanBan
     */
    public load(opt: any = {}, isReset: boolean = false): void {
        if(!this.fetchAction){
            this.$Notice.error({ title: '错误', desc: 'TaskKanbanView视图列表fetchAction参数未配置' });
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
        Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(arg,{viewparams:tempViewParams});
        const post: Promise<any> = this.service.search(this.fetchAction,JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
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
                if(isReset){
                    this.items = datas;
                }else{
                    this.items.push(...datas);
                }
            }
            this.isAddBehind = false;
            this.setGroups();
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
     * @memberof TaskKanBan
     */
    public async remove(datas: any[]): Promise<any> {
        if(!this.removeAction){
            this.$Notice.error({ title: '错误', desc: 'TaskKanbanView视图表格removeAction参数未配置' });
            return;
        }
        let _datas:any[] = [];
        datas.forEach((record: any, index: number) => {
            if (Object.is(record.srfuf, '0')) {
                this.items.some((val: any, num: number) =>{
                    if(JSON.stringify(val) == JSON.stringify(record)){
                        this.items.splice(num,1);
                        return true;
                    }
                }); 
            }else{
               _datas.push(datas[index]);
            }
        });
        if (_datas.length === 0) {
            return;
        }
        let dataInfo = '';
        _datas.forEach((record: any, index: number) => {
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

        if (_datas.length < 5) {
            dataInfo = dataInfo + ' 共' + _datas.length + '条数据';
        } else {
            dataInfo = dataInfo + '...' + ' 共' + _datas.length + '条数据';
        }

        const removeData = () => {
            let keys: any[] = [];
            _datas.forEach((data: any) => {
                keys.push(data.srfkey);
            });
            let _removeAction = keys.length > 1 ? 'removeBatch' : this.removeAction ;
            const context:any = JSON.parse(JSON.stringify(this.context));
            const post: Promise<any> = this.service.delete(_removeAction,Object.assign(context,{ task: keys.join(';') }),Object.assign({ task: keys.join(';') },{viewparams:this.viewparams}), this.showBusyIndicator);
            return new Promise((resolve: any, reject: any) => {
                post.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '删除数据失败,' + response.info });
                        return;
                    } else {
                        this.$Notice.success({ title: '', desc: '删除成功!' });
                    }
                    //删除items中已删除的项
                    _datas.forEach((data: any) => {
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
     * 设置分组集合
     *
     * @param {*}
     * @memberof TaskKanBan
     */
    public updateData(opt: any) {
        const arg: any = { ...opt };
        Object.assign(arg, { viewparams: this.viewparams });
        let _context = JSON.parse(JSON.stringify(this.context));
        Object.assign(_context, { task: opt.task });
        const post: Promise<any> = this.service.update(this.updateGroupAction, _context, arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                }
                this.setGroups();
                return;
            }
            let item = this.items.find((item: any) => Object.is(item.srfkey, response.data.srfkey));
            Object.assign(item, response.data);
            this.setGroups();
            this.$emit('update', this.items);
        }).catch((response: any) => {
            if (response && response.status  && response.data) {
                this.$Notice.error({ title: '错误', desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 设置分组集合
     *
     * @param {}
     * @memberof TaskKanBan
     */
    public setGroups() {
        if(!this.isGroup || !this.groupField || Object.is(this.groupMode, 'NONE')) {
            return;
        }
        if(Object.is(this.groupMode, 'AUTO')) {
            this.groups = [];
            this.items.forEach(item => {
                let group: any = this.groups.find((group: any) => Object.is(group.name, item[this.groupField]));
                if(!group) {
                    this.groups.push({
                        name: item[this.groupField],
                        items: this.getGroupItems(item[this.groupField])
                    })
                }
            });
        }
        if(Object.is(this.groupMode, 'CODELIST') && this.groupCodelist) {
            this.groups = [];
            let codelist: any = this.$store.getters.getCodeList(this.groupCodelist);
            if(codelist) {
                codelist.items.forEach((item: any) => {
                    this.groups.push({
                        name: item.value,
                        items: this.getGroupItems(item.value)
                    })
                })
            }
        }
    }

    /**
     * 设置分组集合
     *
     * @param {string} name
     * @memberof TaskKanBan
     */
    public getGroupItems(name: string) {
        let datas: any = [];
        this.items.forEach(item => {
            if(Object.is(item[this.groupField], name)) {
                datas.push(item);
            }
        })
        return datas;
    }

    /**
     * 设置分组集合
     *
     * @param {string} name
     * @memberof TaskKanBan
     */
    public getGroupText(name: string) {
        if(Object.is(this.groupMode, 'CODELIST') && this.groupCodelist) {
            let codelist: any = this.$store.getters.getCodeList(this.groupCodelist);
            if(codelist) {
                if(!name) {
                    return codelist.emptytext;
                }
                let item = codelist.items.find((item: any) => Object.is(item.value, name));
                if(item) {
                    return item.text;
                }
            }
        }
        return name;
    }

    /**
     * 选择数据
     * @memberof TaskKanBan
     *
     */
    public handleClick(args: any) {
        args.isselected = !args.isselected;
        this.items.forEach((item:any) =>{
            if(item.srfkey !== args.srfkey){
                item.isselected =false;
            }
        })
        this.selectchange();
    }

    /**
     * 双击数据
     * @memberof TaskKanBan
     *
     */
    public handleDblClick(args: any) {
        args.isselected = true;
        this.items.forEach((item:any) =>{
            if(item.srfkey !== args.srfkey){
                item.isselected =false;
            }
        })
        this.$emit('rowdblclick', args);
    }

    /**
     * 触发事件
     * @memberof TaskKanBan
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
     * 界面行为
     *
     * @param {*} tag
     * @param {*} $event
     * @memberof TaskKanBan
     */
	public uiAction(tag: any, $event: any) {
        let row = this.selections.length > 0 ? this.selections[0] : {};
    }

    /**
     * 拖拽变化
     *
     * @param {*} evt
     * @param {*} name
     * @memberof TaskKanBan
     */
    public onDragChange(evt: any, name: string) {
        if(evt && evt.added && evt.added.element) {
            let item: any = JSON.parse(JSON.stringify(evt.added.element))
            item[this.groupField] = name;
            this.updateData(item)
        }
    }

}
</script>

<style lang='less'>
@import './task-kan-ban-kanban.less';
</style>