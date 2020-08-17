<template>
    <ion-page :className="{ 'app-login': true }">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="end">
                    <img src="assets/images/logo.png" />
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <div class="app-login-contant">
                <form class="app-login-form">
                    <ion-list lines="full" class=" ion-no-padding">
                        <ion-item>
                            <ion-label position="floating">{{$t('username')}}<ion-text color="danger">*</ion-text></ion-label>
                            <ion-input required type="text" debounce="100" :value="username" @ionChange="($event) => username = $event.detail.value"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">{{$t('password')}}<ion-text color="danger">*</ion-text></ion-label>
                            <ion-input required type="password" debounce="100" :value="password" @ionChange="($event) => password = $event.detail.value"></ion-input>
                        </ion-item>
                    </ion-list>
                    <div class="ion-padding button">
                        <ion-button expand="block" class="ion-no-margin" @click="login">{{$t('submit')}}</ion-button>
                    </div>
                </form>
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
            'zh-CN': {
                username: '用户名',
                password: '密码',
                submit: '提交',
                usernametipinfo: '用户名为空',
                passwordtipinfo: '密码为空',
            },
            'en-US': {
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
     * 登录
     *
     * @memberof Login
     */
    public login() {
        if (Object.is(this.username, '')) {
            this.$notice.error(`${this.$t('usernametipinfo')}`);
            return;
        }
        if (Object.is(this.password, '')) {
            this.$notice.error(`${this.$t('passwordtipinfo')}`);
            return;
        }
        Loading.show();
        const post: Promise<any> = this.$http.post(Environment.RemoteLogin, { loginname: this.username, password: this.password });
        post.then((response: any) => {
            Loading.hidden();
            if (response && response.status === 200) {
                const data = response.data;
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                const url: any = this.$route.query.redirect
                    ? this.$route.query.redirect
                    : "*";
                this.$router.push({ path: url });
            }
        }).catch((error: any) => {
            Loading.hidden();
            this.$notify({ type: 'danger', message: error });
        });
    }
}
</script>

<style lang='less'>
@import "./login.less";
</style>