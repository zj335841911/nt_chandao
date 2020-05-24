import { Component, Vue, Prop } from 'vue-property-decorator';
import { StudioActionController } from '../../core/StudioActionController';
import { Environment } from '@/environments/environment';
import './view-config-actions.less';

/**
 * 视图快捷配置
 *
 * @export
 * @class ViewConfigActions
 * @extends {Vue}
 */
@Component({})
export class ViewConfigActions extends Vue {

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ViewConfigActions
     */
    @Prop({ default: '' })
    public viewName!: string;

    /**
     * 视图标题
     *
     * @type {string}
     * @memberof ViewConfigActions
     */
    @Prop({ default: '' })
    public viewTitle!: string;

    /**
     * 视图配置信息
     *
     * @protected
     * @type {*}
     * @memberof ViewConfigActions
     */
    protected config: any = {};

    /**
     * 鼠标是否悬浮在行为组上
     *
     * @protected
     * @type {boolean}
     * @memberof ViewConfigActions
     */
    protected actinsIsHover: boolean = false;

    /**
     * 配置平台操作控制器
     *
     * @type {StudioActionController}
     * @memberof ViewConfigActions
     */
    public sdc: StudioActionController = StudioActionController.getInstance();

    /**
     * 触发配置
     *
     * @protected
     * @memberof AppLayout
     */
    protected configView(): void {
        this.sdc.openStudioConfigView(this.viewName);
    }

    /**
     * 新建issues
     *
     * @protected
     * @memberof AppLayout
     */
    protected createIssues(): void {
        this.sdc.createdIssues(this.viewName);
    }

    /**
     * 拷贝配置路径
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ViewConfigActions
     */
    protected async copyConfigUrl(): Promise<void> {
        const judge = this.sdc.copyStudioConfigUrl(this.viewName);
        if (judge) {
            this.$Message.success('拷贝配置路径成功');
        } else {
            this.$Message.error('拷贝失败，可能浏览器不支持!');
        }
    }

    /**
     * 拷贝视图文件名称
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ViewConfigActions
     */
    protected async copyViewFileName(): Promise<void> {
        const judge = this.sdc.copyViewFileName(this.viewName);
        if (judge) {
            this.$Message.success('拷贝视图文件名称成功');
        } else {
            this.$Message.error('拷贝失败，可能浏览器不支持!');
        }
    }

    /**
     * 组件创建完毕
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ViewConfigActions
     */
    protected async created(): Promise<void> {
        if (Environment.devMode) {
            this.config = await this.sdc.getConfig(this.viewName);
        }
    }

    /**
     * 鼠标移入
     *
     * @protected
     * @memberof ViewConfigActions
     */
    protected mouseenter(): void {
        this.actinsIsHover = true;
    }

    /**
     * 鼠标移出
     *
     * @protected
     * @memberof ViewConfigActions
     */
    protected mouseleave(): void {
        this.actinsIsHover = false;
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ViewConfigActions
     */
    public render(): any {
        return Environment.devMode ? <div v-show={this.sdc.isShowTool} class={{ 'studio-config-container': true, 'hover': this.actinsIsHover }}>
            <div class="studio-config-actions" on-mouseenter={() => this.mouseenter()} on-mouseleave={() => this.mouseleave()}>
                <div class="title">
                    {this.config.memo && !Object.is(this.config.memo, '') ? <tooltip content={this.config.memo} placement="bottom-end">
                        <icon type="ios-bulb-outline" />
                    </tooltip> : null}
                    {this.viewTitle}
                    <i-button title="拷贝视图文件名称" type="text" icon="ios-copy" ghost on-click={() => this.copyViewFileName()}></i-button>
                </div>
                <div class="actions">
                    <button-group>
                        <i-button title="进入当前视图配置界面" type="text" icon="ios-hammer" ghost on-click={() => this.configView()}>配置</i-button>
                        <i-button title="复制配置界面路径" type="text" icon="ios-share-alt" ghost on-click={() => this.copyConfigUrl()}>分享配置</i-button>
                        <i-button title="建立当前界面的issues" type="text" icon="ios-browsers" ghost on-click={() => this.createIssues()}>新建issues</i-button>
                    </button-group>
                </div>
            </div>
            <div class="view-show-container"></div>
        </div> : null;
    }
}