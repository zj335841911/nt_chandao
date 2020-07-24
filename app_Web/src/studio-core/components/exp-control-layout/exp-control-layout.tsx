import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import './exp-control-layout.less';

/**
 * 导航部件布局组件
 *
 * @export
 * @class ExpControlLayout
 * @extends {Vue}
 */
@Component({})
export class ExpControlLayout extends Vue {

    /**
     * 是否挂载完毕
     *
     * @protected
     * @type {boolean}
     * @memberof ExpControlLayout
     */
    protected showAnimation: boolean = false;

    /**
     * 默认分割比例
     *
     * @type {number}
     * @memberof ExpControlLayout
     */
    public split: number = 1;

    /**
     * 旧分割比例
     *
     * @type {number}
     * @memberof ExpControlLayout
     */
    public oldSplit: number = 0.7;

    /**
     * 视图是否显示
     *
     * @type {boolean}
     * @memberof ExpControlLayout
     */
    public showView: boolean = false;

    /**
     * 视图显示变更
     *
     * @param {boolean} val
     * @param {boolean} oldVal
     * @memberof ExpControlLayout
     */
    @Watch('showView')
    public showViewWatch(val: boolean, oldVal: boolean): void {
        this.showAnimation = true;
        setTimeout(() => this.showAnimation = false, 500);
        if (val) {
            const s = this.split;
            this.split = this.oldSplit;
            this.oldSplit = s;
        } else {
            this.split = 1;
        }
    }

    /**
     * 选中视图数据
     *
     * @type {*}
     * @memberof ExpControlLayout
     */
    @Prop()
    public selectView: any;

    /**
     * 监控选中视图变更
     *
     * @param {*} val
     * @param {*} oldVal
     * @memberof ExpControlLayout
     */
    @Watch('selectView')
    public selectViewWatch(val: any, oldVal: any): void {
        if (val) {
            this.showView = true;
        } else {
            this.showView = false;
        }
    }

    /**
     * 展示模式
     *
     * @type {string}
     * @memberof ExpControlLayout
     */
    @Prop({ default: 'horizontal' })
    public mode!: 'horizontal' | 'vertical';

    /**
     * 部件宽度
     *
     * @type {number}
     * @memberof ExpControlLayout
     */
    @Prop({ default: 0 })
    public ctrlWidth!: number;

    /**
     * 部件高度
     *
     * @type {number}
     * @memberof ExpControlLayout
     */
    @Prop({ default: 0 })
    public ctrlHeight!: number;

    /**
     * 组件挂载完毕
     *
     * @memberof ExpControlLayout
     */
    public mounted(): void {
        const el: any = this.$el;
        let split = 1;
        if (this.ctrlWidth > 0 && this.mode === 'horizontal') {
            split = parseFloat(((el.offsetWidth - this.ctrlWidth) / el.offsetWidth).toFixed(2));
        } else if (this.ctrlHeight > 0 && this.mode === 'vertical') {
            split = parseFloat(((el.offsetHeight - this.ctrlHeight) / el.offsetHeight).toFixed(2));
        }
        if (this.showView) {
            this.split = split;
        } else {
            this.oldSplit = split;
        }
    }

    /**
     * 绘制可拖拽分隔
     *
     * @protected
     * @returns {*}
     * @memberof ExpControlLayout
     */
    protected renderSplit(): any {
        return <split class={{ 'exp-control-layout': true, 'animation': this.showAnimation }} v-model={this.split} mode={this.mode}>
            <template slot={this.mode === 'horizontal' ? 'left' : 'top'}>
                <div class="exp">
                    {this.$slots.exp}
                </div>
            </template>
            <template slot={this.mode === 'horizontal' ? 'right' : 'bottom'}>
                <div class="view">
                    {this.$slots.default}
                </div>
            </template>
        </split>;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ExpControlLayout
     */
    public render(): any {
        return this.renderSplit();
    }
}