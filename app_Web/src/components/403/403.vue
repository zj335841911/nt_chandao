<template>
    <div class="app-error-view">
        <div class="app-error-container">
            <ion-icon class='err-icon' src="./assets/svg/icon-500.svg"/>
            <div class="error-text">
                <div class="error-text1">403 抱歉您无权限访问此内容</div>
                <div class="error-text2">
                    <a @click="gotoIndexView">返回</a>
                    or
                    <a @click="logout">退出登录</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
})
export default class Error404 extends Vue {

    /**
     * 跳转首页
     *
     * @memberof Error404
     */
    public gotoIndexView() {
        this.$router.back();
    }

    logout() {
        this.$appService.logout();
    }
}
</script>

<style lang='less'>
@import './403.less';
</style>