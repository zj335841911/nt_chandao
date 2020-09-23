import axios from 'axios';
import * as dd from 'dingtalk-jsapi';
import {  Util } from '@/ibiz-core/utils';
import store from '@/store';
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
    private readonly appId: string = "ding0466097cd833d9f9a1320dcb25e91351";
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
    public $store:any;

    /**
     * Creates an instance of DingTalkService.
     * @memberof DingTalkService
     */
    private constructor(store:any) {
        this.$store = store;
        if (DingTalkService.instance) {
            return DingTalkService.instance;
        }
        const info: string = window.navigator.userAgent.toUpperCase();
        if (info.indexOf('DINGTALK') !== -1) {
            dd.ready(() => {
                this.$isInit = true;
                this.navBack();
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
            const access_token :any= await this.get(`/uaa/open/dingtalk/access_token`);
            if(access_token.status == 200 && access_token.data && access_token.data.corp_id){
                const res: any= await dd.runtime.permission.requestAuthCode({ corpId: access_token.data.corp_id });
                if (res && res.code) {
                    const userInfo:any = await this.get(`/uaa/open/dingtalk/auth/${res.code}`);
                    if(userInfo.status == 200 && userInfo.data.token && userInfo.data.user){
                        localStorage.setItem("token", userInfo.data.token);
                        localStorage.setItem("user", JSON.stringify(userInfo.data.user));
                        return {issuccess:true,message:""};
                    }else if(userInfo.status == 400){
                        return {issuccess:false,message:userInfo.data.message};
                    }else{
                        return {issuccess:false,message:userInfo.data.message};
                    }
                }else{
                    return {issuccess:false,message:"钉钉用户信息获取失败"};
                }
            }else{
                return {issuccess:false,message:"获取企业id失败"};
            }
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
     * @static
     * @returns {DingTalkService}
     * @memberof DingTalkService
     */
    public static getInstance(): DingTalkService {
        return DingTalkService.instance;
    }

    /**
     * 关闭钉钉应用
     *
     * @static
     * @returns {DingTalkService}
     * @memberof DingTalkService
     */
    public close(){
        this.dd.biz.navigation.close({});
    }

    /**
     * 设置钉钉标题
     *
     * @static
     * @returns {DingTalkService}
     * @memberof DingTalkService
     */
    public setTitle(title:string){
        this.dd.biz.navigation.setTitle({
            title : title,
        });
    }

    /**
     * 设置钉钉导航栏返回按钮
     *
     * @static
     * @returns {DingTalkService}
     * @memberof DingTalkService
     */
    private navBack(){
        if(Util.isAndroid()){
            document.addEventListener('backbutton', (e:any)=> {
                e.preventDefault();
                this.controlBackEvent();
            },false)
        }else{
            dd.biz.navigation.setLeft({
                 control : true,//是否控制点击事件，true 控制，false 不控制， 默认false
                 text : '返回', //控制显示文本，空字符串表示显示默认文本
                 onSuccess : ()=>{      
                  this.controlBackEvent();  
                 }
             });
        }
    }

    /**
     * 钉钉导航栏返回事件
     *
     * @static
     * @returns {DingTalkService}
     * @memberof DingTalkService
     */
    private backEvent:Function = ()=>{};

    /**
     * 设置钉钉导航栏返回事件
     *
     * @static
     * @returns {DingTalkService}
     * @memberof DingTalkService
     */
    public setBackEvent(event:Array<Function>){
        this.backEvent = event[event.length -1];
    }

    /**
     * 是否调用导航栏返回事件
     * @memberof DingTalkService
     */
    public controlBackEvent(){
      if (this.$store.state.selectStatus && this.$store.state.noticeStatus) {
        this.backEvent();
      }
    }
}
