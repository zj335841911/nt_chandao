<template>
  <gantt-elastic :class="ganttClass" :tasks="tasks" :options="getOptions(this.locale)" :dynamic-style="dynamicStyle" @taskList-item-dblclick="taskClick" @task-item-expand="taskItemExpand">
  </gantt-elastic>
</template>


<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import TaskService from '@/service/task/task-service';
import TypeGanttService from './type-gantt-gantt-service';

import GanttElastic from "ibiz-gantt-elastic/src/GanttElastic.vue";


@Component({
    components: {
      GanttElastic,

    }
})
export default class TypeGanttBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TypeGantt
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TypeGantt
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TypeGantt
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TypeGantt
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof TypeGantt
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TypeGantt
     */
    public getControlType(): string {
        return 'GANTT'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TypeGantt
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TypeGanttService}
     * @memberof TypeGantt
     */
    public service: TypeGanttService = new TypeGanttService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TypeGantt
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof TypeGantt
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TypeGantt
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
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof TypeGantt
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof TypeGantt
     */
    @Prop() public loadAction!: string;

    /**
     * 部件样式名
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */
    public ganttClass: string = "gantt";

     /**
     * 语言
     *
     * @public
     * @type {string}
     * @memberof TypeGantt
     */  
    public locale: string = 'zh-CN';

     /**
     * 语言资源
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */   
    public localeZH: any =  {
        weekdays: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        Now: "现在",
        "X-Scale": "时间颗粒度",
        "Display task list": "显示列表",
        "Before/After": "数据范围"
    }

    /**
     * 配置参数
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */
    public options: any = {
        isflex: true,
        maxRows: 1000,
        dataType: 'treegrid',
        title: {
            label: ""
        },
        header: {
            yScole: false,
            taskListWidth: false,
        },
        calendar: {
            hour: {
                display: false
            }
        },
        chart: {
            progress: {
                bar: false
            },
            expander: {
                display: true
            },
        },
        taskList: {
            expander: {
                straight: false
            },
            labelField: 'text',
            columns: [
                {
                    label: '任务类型分类',
                    value: (task: any) => {
                        return this.getColumnValue(task, 'text')
                    },
                    expander: true,
                    width: 160,
                },
                {
                    label: '指派给',
                    value: (task: any) => {
                        return this.getColumnValue(task, 'assignedto')
                    },
                    width: 100,
                },
                {
                    label: '开始时间',
                    value: (task: any) => {
                        return this.getColumnValue(task, 'start')
                    },
                    width: 100,
                },
                {
                    label: '结束时间',
                    value: (task: any) => {
                        return this.getColumnValue(task, 'end')
                    },
                    width: 100,
                },
                {
                    label: '持续时间',
                    value: (task: any) => {
                        return this.getColumnValue(task, 'taskduration')
                    },
                    width: 100,
                },
            ]
        }
    };

    /**
     * 样式
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */
    public dynamicStyle: any = {};

    /**
     * 日程事件集合
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */
    public tasks: any[] = [];

    /**
     * 监听语言变化
     *
     * @public
     * @memberof TypeGantt
     */
    @Watch('$i18n.locale')
    public onLocaleChange(newval: any, val: any) {
        this.locale = newval;
    }

    /**
     * 获取列属性值
     *
     * @public
     * @memberof TypeGantt
     */
    public getColumnValue(task: any, field: string) {
        if(Object.is(task.id.split(';')[0], 'TaskTypes')) {
            if (Object.is(field, 'text')) {
                let codelist: any[] = this.$store.getters.getCodeList('Task__type');
                if(codelist) {
                    return this.getCodeListItem(codelist, task[field]);
                }
            }
            return task[field];
        }
        if(Object.is(task.id.split(';')[0], 'ROOT')) {
            return task[field];
        }
        if(Object.is(task.id.split(';')[0], 'ChildTasks')) {
            return task[field];
        }
        if(Object.is(task.id.split(';')[0], 'Tasks')) {
            return task[field];
        }
    }

    /**
     * 获取代码项
     *
     * @public
     * @memberof TypeGantt
     */
    public getCodeListItem(codelist: any, val: any) {
        for(let i = 0; i < codelist.items.length; i++) {
            if(Object.is(codelist.items[i].value, val)) {
                return codelist.items[i].text;
            }
        }
        return codelist.emptytext;
    }

    /**
     * 获取部件参数
     *
     * @returns {any}
     * @memberof TypeGantt
     */
    public getOptions() {
        if(Object.is(this.locale, 'zh-CN')) {
            return { locale: this.localeZH, ...this.options };
        }
        return this.options;
    }

    /**
     * 搜索获取日程事件
     *
     * @param {*} $event 日期信息
     * @memberof TypeGantt
     */
    public load(task: any = {}) {
        const params: any = {
            srfnodeid: task && task.id ? task.id : "#",
            srfnodefilter: ''
        };
        let tempViewParams:any = JSON.parse(JSON.stringify(this.viewparams));
        let curNode:any = {}; 
        Util.deepObjectMerge(curNode, task);
        let tempContext:any = this.computecurNodeContext(curNode);
        if(curNode && curNode.srfparentdename) {
            Object.assign(tempContext,{ srfparentdename: curNode.srfparentdename });
            Object.assign(tempViewParams,{ srfparentdename: curNode.srfparentdename });
        }
        if(curNode && curNode.srfparentkey) {
            Object.assign(tempContext,{ srfparentkey: curNode.srfparentkey });
            Object.assign(tempViewParams,{ srfparentkey: curNode.srfparentkey });
        }
        Object.assign(params,{viewparams:tempViewParams});
        this.service.getNodes(tempContext,params).then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: "错误", desc: response.info });
                return;
            }
            this.tasks = [...this.tasks, ...response.data];
            response.data.forEach((item: any) => {
                if(!item.collapsed) {
                    this.load(item);
                }
            })
            this.$emit("load", this.tasks);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: "错误", desc: response.info });
        });
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof TypeGantt
     */
    public computecurNodeContext(curNode:any){
        let tempContext:any = {};
        if(curNode && curNode.data && curNode.data.srfappctx){
            tempContext = JSON.parse(JSON.stringify(curNode.data.srfappctx));
        }else{
            tempContext = JSON.parse(JSON.stringify(this.context));
        }
        return tempContext;
    }

    /**
     * 节点展开
     *
     * @param {*} task 当前节点
     * @memberof TypeGantt
     */
    public taskItemExpand(task: any) {
        if(!task.collapsed) {
            let index: number = this.tasks.findIndex((item: any) => Object.is(task.id, item.parentId));
            if(index < 0) {
                this.load(task);
            }
        }
    }

    /**
     * 刷新
     *
     * @memberof TypeGantt
     */
    public refresh() {
        this.load();
    }



    /**
     * 选中的数据
     *
     * @returns {any[]}
     * @memberof TypeGantt
     */
    public selections: any[] = [];

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TypeGantt
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TypeGantt
     */
    public getData(): any {
        return null;
    }
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof TypeGantt
     */
    public created() {
        this.locale = this.$i18n.locale;
        this.load();
    }

    /**
     * 点击事件
     *
     * @returns
     * @memberof TypeGantt
     */
    public taskClick({event, data}: {event: any, data: any}) {
        const _this: any = this;
        let key: string = data.id.split(';')[0];
        if(_this[key + '_opendata'] instanceof Function) {
            _this[key + '_opendata']([data]);
        }
    }

}
</script>

<style lang='less'>
@import './type-gantt-gantt.less';
</style>