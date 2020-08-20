<template>
    <ion-page :className="{ 'app-login': true }">
        <ion-content fullscreen>
            <div class="app-login-contant">
                <img src="assets/images/logo.png" class="ibizLogo"/>
                <form class="app-login-form">
                    <ion-item lines="none">
                        <ion-label position="stacked">{{$t('username')}}：</ion-label>
                        <ion-input clear-input required type="text" debounce="100" :value="username" @ionChange="($event) => username = $event.detail.value"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label position="stacked">{{$t('password')}}：</ion-label>
                        <ion-input clear-input required type="password" debounce="100" :value="password" @ionChange="($event) => password = $event.detail.value"></ion-input>
                    </ion-item>
                    <div class="ion-padding button">
                        <ion-button expand="block" :disabled="isLoadding" class="ion-no-margin" @click="login">{{$t('submit')}}</ion-button>
                    </div>
                </form>
                <!-- <div class="thirdParty">
                    <img src="assets/aliiconfont/dingding.svg">
                    <img src="assets/aliiconfont/QQ.svg">
                    <img src="assets/aliiconfont/weixin.svg">
                </div> -->
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Loading } from '@/ibiz-core/utils';
import { Environment } from '@/environments/environment';

@Component({
    components: {},
    i18n: {
        messages: {
            'ZH-CN': {
                username: '用户名',
                password: '密码',
                submit: '提交',
                usernametipinfo: '用户名为空',
                passwordtipinfo: '密码为空',
            },
            'EN-US': {
                username: 'User name',
                password: 'Password',
                submit: 'Submit',
                usernametipinfo: 'User name is empty.',
                passwordtipinfo: 'Password id empty.',
            }
        }
    }
})
export default class Login extends Vue {
    /**
     * 用户名
     *
     * @type {string}
     * @memberof Login
     */
    public username: string = "";

    /**
     * 密码
     *
     * @type {string}
     * @memberof Login
     */
    public password: string = "";

       /**
     * 是否加载中
     *
     * @type {string}
     * @memberof Login
     */
    public isLoadding:boolean = false;

    /**
     * 登录
     *
     * @memberof Login
     */
    public login() {
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        if(token){
            localStorage.removeItem("token");
        }
        if(user){
            localStorage.removeItem("user");
        }
        if (Object.is(this.username, '')) {
            this.$notice.error(`${this.$t('usernametipinfo')}`);
            return;
        }
        if (Object.is(this.password, '')) {
            this.$notice.error(`${this.$t('passwordtipinfo')}`);
            return;
        }
        const post: Promise<any> = this.$http.post(Environment.RemoteLogin, { loginname: this.username, password: this.password });
        this.isLoadding = true;
        post.then((response: any) => {
            if (response && response.status === 200) {
                this.isLoadding = false;
                const data = response.data;
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                const url: any = this.$route.query.redirect
                    ? this.$route.query.redirect
                    : "*";
                this.$router.replace({ path: url });
                this.$router.go(-1)
            }
        }).catch((error: any) => {
            this.isLoadding = false;
            this.$notice.error(error?error.error.message:"登录异常");
        });
    }
}
</script>

<style lang='less'>
@import "./login.less";
</style>