<template>
    <div class='porlet assign-to-me' :style="{'height': isAdaptiveSize ? '100%' : '200px',}">
        <p class='porlet-title'>
            指派任务
        </p>
        <div class="portlet-width-title">
        <task-grid-view9-assigned-to-me :viewdata="JSON.stringify(context)" :viewDefaultUsage="false" ></task-grid-view9-assigned-to-me>
        </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import TaskService from '@/service/task/task-service';
import AssignToMeService from './assign-to-me-portlet-service';



@Component({
    components: {
      
    }
})
export default class TaskAssignToMeBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AssignToMe
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof AssignToMe
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AssignToMe
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AssignToMe
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof AssignToMe
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof AssignToMe
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof AssignToMe
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {AssignToMeService}
     * @memberof AssignToMe
     */
    protected service: AssignToMeService = new AssignToMeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof AssignToMe
     */
    protected appEntityService: TaskService = new TaskService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof AssignToMe
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof AssignToMe
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
     * @memberof AssignToMe
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AssignToMe
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AssignToMe
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof AssignToMe
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof AssignToMe
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
     * @memberof AssignToMe
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AssignToMe
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './assign-to-me-portlet.less';
</style>