<template>
    <div class="form-druipart">
        <component
            :is="viewname"
            class="viewcontainer2"
            :viewUsage="4"
            :viewdata="viewdata"
            :viewparam="viewparam"
            :viewDefaultUsage="false"
            :formDruipart="formDruipart"
            :isformDruipart="true"
            @mditemsload="mditemsload"
            @drdatasaved="drdatasaved"
            @drdatachange="drdatachange"
            @viewdataschange="viewdataschange"
            @viewload="viewload"
            @mounted="viewMounted"
        >
        </component>
        <spin v-if="blockUI" class="app-druipart-spin" fix>{{ $t('components.appFormDRUIPart.blockUITipInfo') }}</spin>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Subject, Unsubscribable } from 'rxjs';
@Component({})
export default class AppFormDRUIPart extends Vue {
    /**
     * 表单数据
     *
     * @type {string}
     * @memberof AppFormDRUIPart
     */
    @Prop() public data!: string;

    /**
     * 关联视图
     *
     * @type {string}
     * @memberof AppFormDRUIPart
     */
    @Prop() public viewname?: string;

    /**
     * 刷新关系项
     *
     * @type {string}
     * @memberof AppFormDRUIPart
     */
    @Prop({ default: '' }) public refreshitems!: string;

    /**
     * 禁止加载
     *
     * @type {string}
     * @memberof AppFormDRUIPart
     */
    @Prop({ default: false }) public isForbidLoad!: boolean;

    /**
     * 关系视图类型
     *
     * @type {string}
     * @memberof AppFormDRUIPart
     */
    @Prop() public refviewtype?: string;

    /**
     * 父数据
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    @Prop() public parentdata!: any;

    /**
     * 传入参数项名称
     *
     * @type {string}
     * @memberof AppFormDRUIPart
     */
    @Prop() public paramItem!: string;

    /**
     * 是否忽略表单项值变化
     *
     * @type {boolean}
     * @memberof AppFormDRUIPart
     */
    @Prop() public ignorefieldvaluechange!: boolean;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof AppFormDRUIPart
     */
    @Prop() public formState!: Subject<any>;

    /**
     * 视图参数
     *
     * @type {any[]}
     * @memberof AppFormDRUIPart
     */
    @Prop() public parameters!: any[];

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    @Prop() public context!: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    @Prop() public viewparams!: any;

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    @Prop() public localContext!: any;

    /**
     * 局部参数
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    @Prop() public localParam!: any;

    /**
     * 应用实体参数名称
     *
     * @type {string}
     * @memberof AppFormDRUIPart
     */
    @Prop() public parameterName!: string;

    /**
     * 应用实体参数名称(区分大小写)
     *
     * @type {string}
     * @memberof AppFormDRUIPart
     */
    @Prop() public parentName!: string;

    /**
     * 关系界面向视图下发指令对象
     *
     * @private
     * @type {Subject<any>}
     * @memberof AppFormDRUIPart
     */
    private formDruipart: Subject<any> = new Subject<any>();

    /**
     * 表单状态事件
     *
     * @private
     * @type {(Unsubscribable | undefined)}
     * @memberof AppFormDRUIPart
     */
    private formStateEvent: Unsubscribable | undefined;

    /**
     * 关系视图是否已经加载完毕
     *
     * @type {boolean}
     * @memberof AppFormDRUIPart
     */
    protected viewIsLoaded: boolean = false;

    /**
     * 定时器实例
     *
     * @type {[boolean]}
     * @memberof AppFormDRUIPart
     */
    protected timer?: any;

    /**
     * 关系视图加载完毕触发事件
     *
     * @memberof AppFormDRUIPart
     */
    protected viewMounted(): void {
        this.viewIsLoaded = true;
    }

    /**
     * 监控值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof AppFormDRUIPart
     */
    @Watch('data')
    onActivedataChange(newVal: any, oldVal: any) {
        if (this.ignorefieldvaluechange) {
            return;
        }
        if (Object.is(newVal, oldVal)) {
            return;
        }
        const newFormData: any = JSON.parse(newVal);
        const oldDormData: any = JSON.parse(oldVal);
        let refreshRefview = false;
        this.hookItems.some((_hookItem: any) => {
            if (!Object.is(newFormData[_hookItem], oldDormData[_hookItem])) {
                refreshRefview = true;
                return refreshRefview;
            }
            return refreshRefview;
        });
        if (refreshRefview) {
            this.refreshDRUIPart();
        }
    }

    /**
     * 是否启用遮罩
     *
     * @type {boolean}
     * @memberof AppFormDRUIPart
     */
    public blockUI: boolean = false;

    /**
     * 是否刷新关系数据
     *
     * @private
     * @type {boolean}
     * @memberof AppFormDRUIPart
     */
    private isRelationalData: boolean = true;

    /**
     * 刷新节点
     *
     * @private
     * @type {string[]}
     * @memberof AppFormDRUIPart
     */
    private hookItems: string[] = [];

    /**
     * 父数据
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    public viewdata: any = {};

    /**
     * 父视图参数
     *
     * @type {*}
     * @memberof AppFormDRUIPart
     */
    public viewparam: any = {};

    /**
     * 刷新关系页面
     *
     * @private
     * @returns {void}
     * @memberof AppFormDRUIPart
     */
    private refreshDRUIPart(data?: any): void {
        if (Object.is(this.parentdata.SRFPARENTTYPE, 'CUSTOM')) {
            this.isRelationalData = false;
        }
        const formData: any = data || JSON.parse(this.data);
        const _paramitem = formData[this.paramItem];
        let tempContext: any = {};
        let tempParam: any = {};
        Object.assign(tempContext, this.$viewTool.getIndexViewParam());
        const _parameters: any[] = [...this.$viewTool.getIndexParameters(), ...this.parameters];
        _parameters.forEach((parameter: any) => {
            const { pathName, parameterName }: { pathName: string; parameterName: string } = parameter;
            if (formData[parameterName] && !Object.is(formData[parameterName], '')) {
                Object.assign(tempContext, { [parameterName]: formData[parameterName] });
            }
        });
        Object.assign(tempContext, { [this.paramItem]: _paramitem });
        //设置顶层视图唯一标识
        Object.assign(tempContext, this.context);
        Object.assign(tempContext, { srfparentdename: this.parentName, srfparentkey: _paramitem });
        // 设置局部上下文
        if (this.localContext && Object.keys(this.localContext).length > 0) {
            let _context: any = this.$util.computedNavData(formData, tempContext, this.viewparams, this.localContext);
            Object.assign(tempContext, _context);
        }
        this.viewdata = JSON.stringify(tempContext);
        // 设置局部参数
        if (this.localParam && Object.keys(this.localParam).length > 0) {
            let _param: any = this.$util.computedNavData(formData, tempContext, this.viewparams, this.localParam);
            Object.assign(tempParam, _param);
        }
        this.viewparam = JSON.stringify(tempParam);
        if (this.isRelationalData) {
            if (!_paramitem || _paramitem == null || Object.is(_paramitem, '')) {
                this.blockUIStart();
                return;
            } else {
                this.blockUIStop();
            }
        }
        if (!this.isForbidLoad) {
            this.$nextTick(() => {
                this.$nextTick(() => {
                    this.partViewEvent('load', { srfparentdename: this.parentName, srfparentkey: _paramitem }, 0);
                });
            });
        }
    }

    /**
     * 向关系视图发送事件，采用轮询模式。避免异步视图出现加载慢情况
     *
     * @param {*} action 触发行为
     * @param {*} data 数据
     * @param {*} count 轮询计数
     * @memberof AppFormDRUIPart
     */
    protected partViewEvent(action: string, data: any, count: number = 0): void {
        if (count > 100) {
            return;
        }
        if (count === 0 && this.timer !== undefined) {
            clearTimeout(this.timer);
            this.timer = undefined;
        }
        if (this.viewIsLoaded) {
            this.formDruipart.next({ action: 'load', data });
            return;
        }
        this.timer = setTimeout(() => {
            count++;
            this.partViewEvent(action, data, count);
        }, 30);
    }

    /**
     * vue  生命周期
     *
     * @memberof AppFormDRUIPart
     */
    public created(): void {
        this.hookItems = [...this.refreshitems.split(';')];
        if (!this.formState) {
            return;
        }
        if (!Object.is(this.paramItem, this.parameterName)) {
            this.hookItems.push(this.paramItem);
        }
        this.formStateEvent = this.formState.subscribe(($event: any) => {
            // 表单加载完成
            if (Object.is($event.type, 'load')) {
                this.refreshDRUIPart($event.data);
            }
            // 表单保存之前
            if (Object.is($event.type, 'beforesave')) {
                if (Object.is(this.refviewtype, 'DEMEDITVIEW9') || Object.is(this.refviewtype, 'DEGRIDVIEW9')) {
                    this.formDruipart.next({ action: 'save', data: $event.data });
                } else {
                    // 不需要保存的界面也要抛出事件，供计数器计算
                    this.$emit('drdatasaved', $event);
                }
            }
            // 表单保存完成
            if (Object.is($event.type, 'save')) {
                this.refreshDRUIPart($event.data);
            }
            // 表单项更新
            if (Object.is($event.type, 'updateformitem')) {
                if (!$event.data) {
                    return;
                }
                let refreshRefview = false;
                Object.keys($event.data).some((name: string) => {
                    const index = this.hookItems.findIndex((_name: string) => Object.is(_name, name));
                    refreshRefview = index !== -1 ? true : false;
                    return refreshRefview;
                });
                if (refreshRefview) {
                    this.refreshDRUIPart();
                }
            }
        });
        // this.refreshDRUIPart();
    }

    /**
     * 部件销毁
     *
     * @memberof AppFormDRUIPart
     */
    public destroyed(): void {
        if (this.formStateEvent) {
            this.formStateEvent.unsubscribe();
        }
    }

    /**
     * 开启遮罩
     *
     * @private
     * @memberof AppFormDRUIPart
     */
    private blockUIStart(): void {
        this.blockUI = true;
    }

    /**
     * 关闭遮罩
     *
     * @private
     * @memberof AppFormDRUIPart
     */
    private blockUIStop(): void {
        this.blockUI = false;
    }

    /**
     * 多数据视图加载完成
     *
     * @public
     * @memberof AppFormDRUIPart
     */
    public mditemsload() {
        console.log('多数据视图加载完成，触发后续表单项更新');
    }

    /**
     * DEMEDITVIEW9 关系数据保存完成
     *
     * @public
     * @memberof AppFormDRUIPart
     */
    public drdatasaved($event: any) {
        this.$emit('drdatasaved', $event);
        console.log(this.viewname + '关系数据保存完成');
    }

    /**
     * DEMEDITVIEW9 关系数据值变化
     *
     * @public
     * @memberof AppFormDRUIPart
     */
    public drdatachange() {
        console.log('DEMEDITVIEW9 关系数据值变化');
    }

    /**
     * 视图数据变化
     *
     * @public
     * @memberof AppFormDRUIPart
     */
    public viewdataschange() {
        console.log('视图数据变化');
    }

    /**
     * 视图加载完成
     *
     * @public
     * @memberof AppFormDRUIPart
     */
    public viewload() {
        console.log('视图加载完成');
    }
}
</script>
<style lang="less">
@import './app-form-druipart.less';
</style>
