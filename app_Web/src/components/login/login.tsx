import { Vue, Component, Watch } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';
import './login.less';

/**
 * 登录页面
 *
 * @export
 * @class Login
 * @extends {Vue}
 */
@Component({})
export default class Login extends Vue {

    /**
     * 表单对象
     *
     * @type {*}
     * @memberof Login
     */
    public form = { loginname: '', password: '' };

    /**
     * 登录提示语
     *
     * @type {*}
     * @memberof Login
     */
    public loginTip: any = "";

    /**
     * 按钮可点击
     *
     * @type {*}
     * @memberof Login
     */
    public canClick: any = true;

    /**
     * 应用名称
     *
     * @type {string}
     * @memberof Login
     */
    public appTitle: string = Environment.AppTitle;

    /**
     * 值规则
     *
     * @type {*}
     * @memberof Login
     */
    public rules = {};

    /**
     * 设置值规则
     *
     * @memberof Login
     */
    public setRules() {
        this.rules = {
            loginname: [
                { required: true, message: this.$t('components.login.loginname.message'), trigger: 'change' },
            ],
            password: [
                { required: true, message: this.$t('components.login.password.message'), trigger: 'change' },
            ]
        }
    };

    /**
     * 生命周期Create
     *
     * @memberof Login
     */
    public created() {
        this.setRules();
        for (const el of document.body.children) {
            if (el.id !== 'app') {
                (el as HTMLDivElement).style.display = 'none';
            }
        }
    }

    /**
     *
     *
     * @memberof Login
     */
    public mounted() {
        this.getCookie("loginname");
        setTimeout(() => {
            const el = document.getElementById('app-loading-x');
            if (el) {
                el.remove();
            }
        }, 300);
    }

    /**
     * 监听语言变化
     *
     * @memberof Login
     */
    @Watch('$i18n.locale')
    onLocaleChange(newval: any, val: any) {
        this.setRules();
    }

    /**
     * 登陆处理
     *
     * @memberof Login
     */
    public handleSubmit(): void {
        const leftTime = new Date();
        leftTime.setTime(leftTime.getSeconds() - 1000);
        document.cookie = "ibzuaa-token=;expires=" + leftTime.toUTCString();
        const form: any = this.$refs.loginForm;
        let validatestate: boolean = true;
        form.validate((valid: boolean) => {
            validatestate = valid ? true : false;
        });
        if (!validatestate) {
            return;
        }
        const post: Promise<any> = this.$http.post('/v7/login', this.form, true);
        post.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                    this.setCookie('ibzuaa-token', data.token, 0);
                }
                // 设置cookie,保存账号密码7天
                this.setCookie("loginname", this.form.loginname, 7);
                // 页面回跳
                if (this.$route.query.redirect) {
                    window.location.href = decodeURIComponent((this.$route.query.redirect as any));
                } else {
                    this.$router.push({ path: '/' });
                }
            }
        }).catch((error: any) => {
            // 登录提示
            const data = error.data;
            if (data && data.message) {
                this.loginTip = data.message;
                this.$Message.error({
                    content: "登录失败，" + data.message,
                    duration: 5,
                    closable: true
                });
            } else {
                this.$Message.error({
                    content: "登录失败",
                    duration: 5,
                    closable: true
                });
            }
        });

    }

    /**
     * 重置页面
     * 
     * @memberof Login
     */
    public goReset(): void {
        this.form = { loginname: '', password: '' };
    }

    /**
     * 设置cookie
     * 
     * @memberof Login
     */
    public setCookie(name: any, value: any, day: any) {
        if (day !== 0) { //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
            let curDate = new Date();
            let curTamp = curDate.getTime();
            let curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1;
            let passedTamp = curTamp - curWeeHours;
            let leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
            let leftTime = new Date();
            leftTime.setTime(leftTamp + curTamp);
            document.cookie = name + "=" + escape(value) + ";expires=" + leftTime.toUTCString();
        } else {
            document.cookie = name + "=" + escape(value);
        }
    }

    /**
     * 获取cookie
     * 
     * @memberof Login
     */
    public getCookie(name: any): any {
        let arr;
        let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    /**
     * 绘制
     *
     * @memberof Login
     */
    public render(): any {
        return <div class="ibiz-login">
            <row class="content">
                <i-col class="left" span="14">
                    <figure class="figure pattern-svg"><svg xmlns="http://www.w3.org/1999/xlink" width="690px" height="519px"><path fill-rule="evenodd" opacity="0.412" fill="rgb(255, 255, 255)" d="M0.010,293.142 L7.857,289.009 L11.990,296.857 L4.142,300.989 L0.010,293.142 Z"></path><path fill-rule="evenodd" opacity="0.6" fill="rgb(255, 255, 255)" d="M680.839,148.992 L689.997,154.833 L684.156,163.991 L674.998,158.149 L680.839,148.992 Z"></path><path fill-rule="evenodd" opacity="0.2" fill="rgb(255, 255, 255)" d="M145.500,508.000 C148.538,508.000 151.000,510.462 151.000,513.500 C151.000,516.538 148.538,519.000 145.500,519.000 C142.462,519.000 140.000,516.538 140.000,513.500 C140.000,510.462 142.462,508.000 145.500,508.000 Z"></path><path fill-rule="evenodd" opacity="0.302" fill="rgb(255, 255, 255)" d="M633.500,357.000 C635.985,357.000 638.000,359.015 638.000,361.500 C638.000,363.985 635.985,366.000 633.500,366.000 C631.015,366.000 629.000,363.985 629.000,361.500 C629.000,359.015 631.015,357.000 633.500,357.000 Z"></path><path fill-rule="evenodd" opacity="0.8" fill="rgb(255, 255, 255)" d="M574.672,8.047 L583.310,0.211 L585.650,11.982 L574.672,8.047 Z"></path><path fill-rule="evenodd" opacity="0.6" fill="rgb(255, 255, 255)" d="M140.000,18.000 C141.657,18.000 143.000,19.343 143.000,21.000 C143.000,22.657 141.657,24.000 140.000,24.000 C138.343,24.000 137.000,22.657 137.000,21.000 C137.000,19.343 138.343,18.000 140.000,18.000 Z"></path></svg></figure>
                    <div class="title">
                        <strong class="super-lead color--white">
                            富强、民主、文明、和谐<br />
                            自由、平等、公正、法治<br />
                            爱国、敬业、诚信、友善
                        </strong>
                    </div>
                </i-col>
                <i-col class="right" span="10">
                    <div class="login-wrapper">
                        <layout>
                            <i-header>
                                <img src="./assets/img/logo.png" alt="https://www.ibizlab.cn/" />
                                <div class="title">{this.appTitle}</div>
                            </i-header>
                            <i-content>
                                <h3>
                                    登录
                                    <span style="font-size:16px"> 没有帐号? <a href="#">注册</a> </span>
                                </h3>
                                <div class="login-content">
                                    <i-form ref="loginForm">
                                        <form-item>
                                            <i-input v-model={this.form.loginname} placeholder="用户名"></i-input>
                                        </form-item>
                                        <form-item>
                                            <i-input v-model={this.form.password} type="password" placeholder="密码"></i-input>
                                        </form-item>
                                        <form-item class="forgot-password">
                                            <small>
                                                <a href="#">忘记密码？</a>
                                            </small>
                                        </form-item>
                                        <form-item class="submit">
                                            <i-button type="primary" long size="large" on-click={() => this.handleSubmit()}>登录</i-button>
                                        </form-item>
                                    </i-form>
                                    <row class="external-account">
                                        <i-col class="top-line">
                                            <hr />
                                            <small>使用第三方帐号直接登录，免注册、更安全、更便捷</small>
                                        </i-col>
                                        <i-col class="icons">
                                            <a href="javascript:void(0)" class="pad-rgt social-login-link" title="使用 QQ 帐号登录">
                                                <svg t="1594819177569" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7719" width="38" height="38"><path d="M785.066667 725.333333c-4.266667 55.466667-29.866667 106.666667-72.533334 140.8 38.4 17.066667 93.866667 34.133333 93.866667 72.533334H217.6c0-34.133333 55.466667-55.466667 89.6-72.533334-38.4-38.4-64-89.6-72.533333-140.8v-17.066666l-72.533334 72.533333c-17.066667 17.066667-34.133333 17.066667-34.133333-38.4 0-34.133333 110.933333-302.933333 110.933333-302.933333v-85.333334c4.266667-153.6 128-273.066667 281.6-268.8 145.066667 4.266667 260.266667 119.466667 264.533334 264.533334v89.6s110.933333 268.8 110.933333 302.933333c0 55.466667-17.066667 55.466667-38.4 34.133333-55.466667-51.2-72.533333-72.533333-72.533333-72.533333v21.333333z" p-id="7720"></path></svg>
                                            </a>
                                            <a href="javascript:void(0)" class="pad-rgt social-login-link" title="使用 Weibo 帐号登录">
                                                <svg t="1594819126700" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6944" width="38" height="38"><path d="M331.446857 263.424c0-31.414857-20.553143-52.004571-52.004571-52.004571-30.866286 0-62.281143 20.553143-62.281143 52.004571 0 30.866286 31.414857 51.419429 62.281143 51.419429 31.414857 0 52.004571-20.553143 52.004571-51.419429z m424.557714 289.718857c0-20.553143-20.553143-41.142857-52.004571-41.142857-20.553143 0-41.142857 20.553143-41.142857 41.142857 0 21.138286 20.553143 41.728 41.142857 41.728 31.414857 0 52.004571-20.553143 52.004571-41.728z m-134.875428-289.718857c0-31.414857-20.553143-52.004571-51.419429-52.004571-31.414857 0-62.281143 20.553143-62.281143 52.004571 0 30.866286 30.866286 51.419429 62.281143 51.419429 30.866286 0 51.419429-20.553143 51.419429-51.419429z m362.861714 289.718857c0-20.553143-21.138286-41.142857-52.004571-41.142857-20.553143 0-41.142857 20.553143-41.142857 41.142857 0 21.138286 20.553143 41.728 41.142857 41.728 30.866286 0 52.004571-20.553143 52.004571-41.728zM832 326.290286a306.285714 306.285714 0 0 0-40.009143-2.304c-196.571429 0-352 146.870857-352 327.424 0 30.281143 4.571429 59.428571 13.129143 86.857143-13.129143 1.133714-25.709714 1.718857-38.838857 1.718857-52.004571 0-93.147429-10.276571-145.152-20.553143l-144.566857 72.557714 41.142857-124.562286C62.281143 594.870857 0 501.138286 0 387.437714 0 190.281143 186.294857 35.437714 414.281143 35.437714c203.446857 0 382.281143 124.013714 417.718857 290.852572zM1170.285714 646.838857c0 93.147429-61.696 176.018286-145.152 238.299429l31.414857 103.424-113.700571-62.281143c-41.728 10.276571-83.419429 21.138286-124.562286 21.138286-197.156571 0-352-134.838857-352-300.580572s154.843429-300.580571 352-300.580571c186.294857 0 352 134.838857 352 300.580571z" fill="" p-id="6945"></path></svg>
                                            </a>
                                        </i-col>
                                        <i-col class="bottom-line">
                                            <hr />
                                        </i-col>
                                    </row>
                                </div>
                            </i-content>
                            <i-footer>
                                <small>Copyright 2017-2020 埃毕致(上海)云计算科技有限公司版权所有</small>
                            </i-footer>
                        </layout>
                    </div>
                </i-col>
            </row>
        </div>;
    }

}