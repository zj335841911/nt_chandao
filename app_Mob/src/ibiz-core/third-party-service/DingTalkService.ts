import axios from 'axios';
import * as dd from 'dingtalk-jsapi';

/**
 * 钉钉服务
 *
 * @export
 * @class DingTalkService
 */
export class DingTalkService {
    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof DingTalkService
     */
    private static readonly instance = new DingTalkService();
    /**
     * 用户信息缓存key
     *
     * @private
     * @type {string}
     * @memberof DingTalkService
     */
    private readonly infoName: string = "UserInfo";
    /**
     * 企业corpId
     *
     * @private
     * @type {string}
     * @memberof WeChatService
     */
    private readonly appId: string = "dingf89eefecd565b89cbc961a6cb783455b";
    /**
     * 钉钉sdk
     *
     * @memberof DingTalkService
     */
    public readonly dd = dd;
    /**
     * 钉钉是否已经初始化
     *
     * @private
     * @type {boolean}
     * @memberof DingTalkService
     */
    private $isInit: boolean = false;
    /**
     * 是否已经初始化
     *
     * @type {boolean}
     * @memberof DingTalkService
     */
    public get isInit(): boolean {
        return this.$isInit;
    }

    /**
     * Creates an instance of DingTalkService.
     * @memberof DingTalkService
     */
    private constructor() {
        if (DingTalkService.instance) {
            return DingTalkService.instance;
        }
        const info: string = window.navigator.userAgent.toUpperCase();
        if (info.indexOf('DINGTALK') !== -1) {
            dd.ready(() => {
                this.$isInit = true;
            });
            dd.error((err: any) => {
                alert(`dd加载错误：${JSON.stringify(err)}`);
            });
        }
    }

    /**
     * 钉钉登录
     *
     * @returns {Promise<any>} 返回用户信息
     * @memberof DingTalkService
     */
    public async login(): Promise<any> {
        const data = await this.getUserInfo();
        if (!data || !data.value || Object.is(data.value, '')) {
            // 获取临时登录授权码
            const res: { code: string } = await dd.runtime.permission.requestAuthCode({ corpId: this.appId });
            if (res && res.code) {
                const userInfo = await this.get(`./dingtalk/login?code=${res.code}`);
                dd.util.domainStorage.setItem({ name: this.infoName, value: userInfo });
                data.value = userInfo;
            }
        }
        return data.value;
    }

    /**
     * 清楚登录用户信息
     *
     * @memberof DingTalkService
     */
    public clearUserInfo(): void {
        dd.util.domainStorage.removeItem({ name: this.infoName });
    }

    /**
     * 获取用户信息
     *
     * @returns {Promise<any>}
     * @memberof DingTalkService
     */
    public getUserInfo(): Promise<any> {
        return dd.util.domainStorage.getItem({ name: this.infoName });
    }

    /**
     * 请求(需要替换为项目)
     *
     * @private
     * @param {string} url
     * @returns {Promise<any>}
     * @memberof DingTalkService
     */
    private async get(url: string): Promise<any> {
        return new Promise((resolve) => {
            axios.get(url).then((response: any) => {
                resolve(response.data);
            }).catch((error: any) => {
                console.log('请求异常');
            });
        })
    }

    /**
     * 获取实例
     *
     * @static
     * @returns {DingTalkService}
     * @memberof DingTalkService
     */
    public static getInstance(): DingTalkService {
        return DingTalkService.instance;
    }

}
