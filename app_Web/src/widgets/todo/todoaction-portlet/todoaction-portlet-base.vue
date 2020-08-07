<template>
    <div class='porlet todoaction' :style="{}">
        <div class="portlet-widthout-title">
        <action-history-list-view :viewdata="JSON.stringify(context)" :viewDefaultUsage="false" ></action-history-list-view>
        </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import TodoService from '@/service/todo/todo-service';
import TodoactionService from './todoaction-portlet-service';



@Component({
    components: {
      
    }
})
export default class TodoTodoactionBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Todoaction
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Todoaction
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Todoaction
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Todoaction
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Todoaction
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Todoaction
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Todoaction
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TodoactionService}
     * @memberof Todoaction
     */
    protected service: TodoactionService = new TodoactionService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof Todoaction
     */
    protected appEntityService: TodoService = new TodoService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof Todoaction
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof Todoaction
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
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof Todoaction
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Todoaction
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Todoaction
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof Todoaction
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Todoaction
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof Todoaction
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Todoaction
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './todoaction-portlet.less';
</style>