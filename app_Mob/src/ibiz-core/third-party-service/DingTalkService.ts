import axios from 'axios';
import * as dd from 'dingtalk-jsapi';
import { Util } from '@/ibiz-core/utils';
import store from '@/store';
import { Notice } from '../../utils/notice/notice';
/**
 * 钉钉服务
 *
 * @export
 * @class DingTalkService
 */
export class DingTalkService {

    /**
     * 提示工具类
     *
     * @protected
     * @type {Notice}
     * @memberof UIActionBase
     */
    protected notice: Notice = Notice.getInstance();

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof DingTalkService
     */
    private static readonly instance = new DingTalkService(store);
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
    private corpId: string = "ding0466097cd833d9f9a1320dcb25e91351";
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
     * Vue 状态管理器
     *
     * @public
     * @type {(any | null)}
     * @memberof DingTalkService
     */
    public $store: any;

    /**
     * Creates an instance of DingTalkService.
     * @memberof DingTalkService
     */
    private constructor(store: any) {
        this.$store = store;
        if (DingTalkService.instance) {
            return DingTalkService.instance;
        }
        const info: string = window.navigator.userAgent.toUpperCase();
        if (info.indexOf('DINGTALK') !== -1) {
            dd.ready(() => {
                this.$isInit = true;
                this.dd_ready();
            });
            dd.error((err: any) => {
                alert(`dd加载错误：${JSON.stringify(err)}`);
            });
        }
    }

    /**
     * 钉钉初始化
     */
    private async dd_ready() {
        // 设置导航标题
        this.setNavBack();
    }


    /**
     * 获取access_token
     */
    public async getAccess_token() {
        let access_token = localStorage.getItem("access_token");
        if (access_token) {
            let reAccess_token: any = JSON.parse(access_token);
            // 鉴权信息2小时过期 设置一小时五十分钟
            if (reAccess_token.time && !(new Date().getTime() - reAccess_token.tiem > 5400000)) {
                return reAccess_token;
            }
        }
        const reAccess_token: any = await this.get(`/uaa/dingtalk/jsapi/sign`);
        if(reAccess_token.status == 200){
            localStorage.setItem("access_token", JSON.stringify(Object.assign(reAccess_token, { time: new Date().getTime() })));
        }else{
            this.notice.error('获取dd签名失败')
        }
        return reAccess_token.data;
    }
    /**
     * 钉钉登录
     *
     * @memberof DingTalkService
     */
    public async login(): Promise<any> {
        const access_token :any= await this.get(`/uaa/open/dingtalk/access_token`);
        if (access_token.status == 200 && access_token.data && access_token.data.corp_id) {
            localStorage.setItem("access_token", JSON.stringify(Object.assign(access_token, new Date().getTime)));
            this.corpId = access_token.data.corp_id;
            const res: any = await dd.runtime.permission.requestAuthCode({ corpId: this.corpId });
            if (res && res.code) {
                const userInfo: any = await this.get(`/uaa/open/dingtalk/auth/${res.code}`);
                if (userInfo.status == 200 && userInfo.data.token && userInfo.data.user) {
                    // 鉴权
                    const reAccess_token = await this.getAccess_token();
                    this.authentication(reAccess_token.agentId, reAccess_token.corpId, reAccess_token.data.timeStamp, reAccess_token.data.nonceStr, reAccess_token.data.signature);
                    localStorage.setItem("token", userInfo.data.token);
                    localStorage.setItem("user", JSON.stringify(userInfo.data.user));
                    return { issuccess: true, message: "" };
                } else if (userInfo.status == 400) {
                    return { issuccess: false, message: userInfo.data.message };
                } else {
                    return { issuccess: false, message: userInfo.data.message };
                }
            } else {
                return { issuccess: false, message: "钉钉用户信息获取失败" };
            }
        }
    }

    /**
     * 鉴权
     * 
     * @memberof DingTalkService
     */
    private authentication(agentId: string, corpId: string, timeStamp: any, nonceStr: string, signature: any) {
        this.dd.config({
            agentId: agentId, // 必填，微应用ID
            corpId: corpId,//必填，企业ID
            timeStamp: timeStamp, // 必填，生成签名的时间戳
            nonceStr: nonceStr, // 必填，生成签名的随机串
            signature: signature, // 必填，签名
            type: 0,   //选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
            jsApiList: [
                'device.audio.startRecord',
                'device.audio.stopRecord',
                'device.audio.onRecordEnd',
                'device.audio.translateVoice'
            ] // 必填，需要使用的jsapi列表，注意：不要带dd。
        });
        this.dd.error((error: any) => {
            // alert('dd error: ' + error);
        });
    }

    /**
     * 开始录音
     * 
     * @memberof DingTalkService
     */
    private startRecord() {
        dd.device.audio.onRecordEnd({
            onSuccess: (res: any) => {
                res.duration; // 返回音频的时长，单位：秒
            },
            onFail: (err: any) => {

            }
        });
        this.dd.device.audio.startRecord({
            onSuccess: () => {//支持最长为300秒（包括）的音频录制，默认60秒(包括)。
            },
            onFail: (err: any) => {
                alert(JSON.stringify(err))
            }
        });
    }

    /**
     * 停止录音
     * 
     * @memberof DingTalkService
     */
    private stopRecord(): Promise<any> {
        return new Promise((resolve, reject) => {
            dd.device.audio.stopRecord({
                onSuccess: (res: any) => {
                    res.mediaId; // 返回音频的MediaID，可用于本地播放和音频下载
                    res.duration; // 返回音频的时长，单位：秒
                    resolve(res);
                },
                onFail: (err: any) => {
                    alert(JSON.stringify(err))
                }
            });;
        });
    }

    /**
     * 语音转文字
     * 
     * @memberof DingTalkService
     */
    private translateVoice(arg: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dd.device.audio.translateVoice({
                mediaId: arg.mediaId,
                duration: arg.duration,
                onSuccess: (res: any) => {
                    res.mediaId; // 转换的语音的mediaId
                    res.content; // 语音转换的文字内容
                    resolve(res);
                },
                onFail: (err: any) => {
                    alert(JSON.stringify(err))
                }
            });
        });
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
                resolve(response);
            }).catch((error: any) => {
                resolve(error);
                console.log('请求异常');
            });
        })
    }

    /**
     * 获取实例
     *
     * @memberof DingTalkService
     */
    public static getInstance(): DingTalkService {
        return DingTalkService.instance;
    }

    /**
     * 关闭钉钉应用
     *
     * @memberof DingTalkService
     */
    private close() {
        this.dd.biz.navigation.close({});
    }

    /**
     * 设置钉钉标题
     *
     * @memberof DingTalkService
     */
    private setTitle(title: string) {
        this.dd.biz.navigation.setTitle({
            title: title,
        });
    }

    /**
     * 设置钉钉导航栏返回按钮
     *
     * @memberof DingTalkService
     */
    private setNavBack() {
        if (Util.isAndroid()) {
            document.addEventListener('backbutton', (e: any) => {
                e.preventDefault();
                this.controlBackEvent();
            }, false)
        } else {
            dd.biz.navigation.setLeft({
                control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
                text: '返回', //控制显示文本，空字符串表示显示默认文本
                onSuccess: () => {
                    this.controlBackEvent();
                }
            });
        }
    }

    /**
     * 钉钉导航栏返回事件
     *
     * @memberof DingTalkService
     */
    private backEvent: Function = () => { };

    /**
     * 设置钉钉导航栏返回事件
     *
     * @memberof DingTalkService
     */
    private setBackEvent(event: Array<Function>) {
        this.backEvent = event[event.length - 1];
    }

    /**
     * 是否调用导航栏返回事件
     * 
     * @memberof DingTalkService
     */
    private controlBackEvent() {
        if (this.$store.state.selectStatus && this.$store.state.noticeStatus) {
            this.backEvent();
        }
    }

    /**
     * 钉钉开放事件
     * 
     *  @memberof DingTalkService
     */
    public ddEvent(tag: string, arg: any) {
        if (Object.is(tag, 'startRecord')) {
            return this.startRecord();
        }
        if (Object.is(tag, 'stopRecord')) {
            return this.stopRecord();
        }
        if (Object.is(tag, 'translateVoice')) {
            return this.translateVoice(arg);
        }
        if (Object.is(tag, 'login')) {
            return this.login();
        }
        if (Object.is(tag, 'setTitle')) {
            return this.setTitle(arg);
        }
        if (Object.is(tag, 'setBackEvent')) {
            return this.setBackEvent(arg);
        }
        if (Object.is(tag, 'close')) {
            return this.close();
        }
    }

}
