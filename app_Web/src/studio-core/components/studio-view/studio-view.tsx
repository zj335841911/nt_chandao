import { Vue, Component, Prop } from 'vue-property-decorator';
import './studio-view.less';

/**
 * 嵌入视图布局容器
 *
 * @export
 * @class StudioView
 * @extends {Vue}
 */
@Component({})
export class StudioView extends Vue {

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof StudioView
     */
    @Prop({ default: '' })
    public viewName!: string;

    /**
     * 视图标题
     *
     * @type {string}
     * @memberof StudioView
     */
    @Prop({ default: '' })
    public viewTitle!: string;

    /**
     * 是否隐藏视图头部
     *
     * @protected
     * @type {boolean}
     * @memberof StudioView
     */
    @Prop({ default: false })
    protected hiddenHeader!: boolean;

    /**
     * 是否显示视图头
     *
     * @protected
     * @type {boolean}
     * @memberof StudioView
     */
    protected isShowHeader: boolean = true;

    /**
     * 组件创建完毕
     *
     * @memberof StudioView
     */
    public created(): void {
        if (this.hiddenHeader) {
            this.isShowHeader = !this.isShowHeader;
        } else {
            this.isShowHeader = (this.$slots.title || this.$slots.toolbar || this.$slots.quickSearch) ? true : false;
        }
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof StudioView
     */
    public render(): any {
        return <div class={{ 'studio-view': true, 'view-container': true, 'hidden-header': !this.isShowHeader }}>
            <view-config-actions viewName={this.viewName} viewTitle={this.viewTitle}/>
            {this.isShowHeader ? <div class="view-header">
                {this.$slots.title ? <div class="title">{this.$slots.title}</div> : null}
                {this.$slots.toolbar ? <div class="toolbar">{this.$slots.toolbar}</div> : null}
                {this.$slots.quickSearch ? <div class="quick-search">{this.$slots.quickSearch}</div> : null}
            </div> : null}
            <div class="view-content">
                {this.$slots.default}
            </div>
        </div>;
    }

}