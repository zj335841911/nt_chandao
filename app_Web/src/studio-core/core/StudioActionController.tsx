import Vue from 'vue';
import { Http } from '@/utils';
import { Environment } from '@/environments/environment';
import { on } from '@/utils/dom/dom';
import { textCopy } from '../service/TextCopy';
import { FooterItemsService } from '../service/FooterItemsService';

/**
 * Studio Debug控制器
 *
 * @export
 * @class StudioActionController
 */
export class StudioActionController {
    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {StudioActionController}
     * @memberof StudioActionController
     */
    private static readonly instance: StudioActionController = new StudioActionController();

    /**
     * 是否启用
     *
     * @protected
     * @type {boolean}
     * @memberof StudioActionController
     */
    protected isEnable: boolean = Environment.devMode;

    /**
     * 请求对象
     *
     * @protected
     * @type {Http}
     * @memberof StudioActionController
     */
    protected http: Http = Http.getInstance();

    /**
     * 配置信息
     *
     * @protected
     * @type {*}
     * @memberof StudioActionController
     */
    protected config: any = null;

    /**
     * 配置平台界面
     *
     * @protected
     * @type {Window}
     * @memberof StudioActionController
     */
    protected studioWin: Window | null = null;

    /**
     * 是否显示开发配置工具栏
     *
     * @type {boolean}
     * @memberof StudioActionController
     */
    public isShowTool: boolean = false;

    /**
     * Creates an instance of StudioActionController.
     * @memberof StudioActionController
     */
    constructor() {
        if (StudioActionController.instance) {
            return StudioActionController.instance;
        }
        if (Environment.devMode) {
            on(window, 'keydown', (e: KeyboardEvent) => {
                if ((e.ctrlKey || e.metaKey) && e.keyCode === 123) {
                    this.showToolChange();
                }
            });
        }
        const f = new FooterItemsService();
        f.registerRightItem((h) => {
            return <div on-click={() => this.showToolChange()}>{this.isShowTool ? '关闭' : '显示'}Debug栏</div>;;
        });
        f.tick();
    }

    /**
     * 为当前视图建立issues
     *
     * @param {string} viewName
     * @returns {Promise<void>}
     * @memberof StudioActionController
     */
    public async createdIssues(viewName: string): Promise<void> {
        const config: any = await this.getConfig(viewName);
        if (config) {
            const context: string = `视图模块：${config.viewmodule}\n视图抬头: ${config.title}\n视图标题: ${config.caption}\n视图标识：${config.viewname}\n视图类型：${config.viewtype}\n浏览器信息：${navigator.userAgent}<br/>\n`;
            window.open(`${Environment.ProjectUrl}/issues/new?issue[title]=${encodeURIComponent('问题')}&issue[description]=${encodeURIComponent(context)}`, '_blank');
        }
    }

    /**
     * 打开Studio配置界面
     *
     * @param {string} viewName
     * @returns {Promise<void>}
     * @memberof StudioActionController
     */
    public async openStudioConfigView(viewName: string): Promise<void> {
        const config: any = await this.getConfig(viewName);
        if (config) {
            const params: any = {
                "appType": "APPSTUDIO",
                "appKey": Environment.AppId,
                "dataType": "AppDesign_PSAppViewDesignRedirectView",
                "srfkey": config.viewtag
            };
            if (this.studioWin && this.studioWin.closed === false) {
                this.studioWin.postMessage({
                    type: 'OpenView',
                    params
                }, '*');
                Vue.prototype.$message.warning('请在已打开的配置平台查看!');
            } else {
                this.studioWin = window.open(`${Environment.StudioUrl}?ov=${encodeURIComponent(JSON.stringify(params))}#/common_slnindex/srfkeys=${Environment.SlnId}/sysdesign_psdevslnsysmodeltreeexpview/srfkey=${Environment.SysId}`, '_blank');
            }
        }
    }

    /**
     * 获取视图配置参数
     *
     * @param {string} viewName
     * @returns {Promise<any>}
     * @memberof StudioActionController
     */
    public async getConfig(viewName: string): Promise<any> {
        if (!this.config) {
            await this.loadConfig();
        }
        return this.config[viewName];
    }

    /**
     * 加载配置信息
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof StudioActionController
     */
    protected async loadConfig(): Promise<void> {
        const response: any = await this.http.get('./assets/json/view-config.json');
        if (response && response.status === 200 && response.data) {
            this.config = response.data;
        } else {
            console.warn('Studio操作控制器，视图参数信息加载失败!');
        }
    }

    /**
     * 复制配置地址
     *
     * @param {string} viewName
     * @returns {Promise<boolean>}
     * @memberof StudioActionController
     */
    public async copyStudioConfigUrl(viewName: string): Promise<boolean> {
        const config: any = await this.getConfig(viewName);
        if (config) {
            const params: any = {
                "appType": "APPSTUDIO",
                "appKey": Environment.AppId,
                "dataType": "AppDesign_PSAppViewDesignRedirectView",
                "srfkey": config.viewtag
            };
            return textCopy.copy(`${Environment.StudioUrl}?ov=${encodeURIComponent(JSON.stringify(params))}#/common_slnindex/srfkeys=${Environment.SlnId}/sysdesign_psdevslnsysmodeltreeexpview/srfkey=${Environment.SysId}`);
        }
        return false;
    }

    /**
     * 拷贝视图文件名称
     *
     * @param {string} viewName
     * @returns {Promise<boolean>}
     * @memberof StudioActionController
     */
    public async copyViewFileName(viewName: string): Promise<boolean> {
        const config: any = await this.getConfig(viewName);
        if (config) {
            return textCopy.copy(config.viewfilename);
        }
        return false;
    }

    /**
     * 展示配置工具栏状态变更
     *
     * @memberof StudioActionController
     */
    public showToolChange(): void {
        this.isShowTool = !this.isShowTool;
    }

    /**
     * 获取实例
     *
     * @static
     * @returns {StudioActionController}
     * @memberof StudioActionController
     */
    public static getInstance(): StudioActionController {
        return this.instance;
    }

}