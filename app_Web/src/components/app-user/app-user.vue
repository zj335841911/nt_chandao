<template>
    <div class="app-header-user">
        <dropdown transfer-class-name="user-dropdownMenu" @on-click="userSelect" :transfer="true">
            <div class="user">
                <span>{{ user.name ? user.name : $t('components.appUser.name') }}</span>
                &nbsp;&nbsp;<avatar :src="user.avatar" />
            </div>
            <dropdown-menu class="menu" slot="list" style="font-size: 15px !important">
                <dropdown-item name="updatepwd" style="font-size: 15px !important">
                    <span><Icon type="ios-create-outline" style="margin-right: 8px" /></span>
                    <span>{{ $t('components.appUser.changepwd') }}</span>
                </dropdown-item>
                <dropdown-item name="logout" style="font-size: 15px !important">
                    <span><i aria-hidden="true" class="ivu-icon ivu-icon-md-power" style="margin-right: 8px"></i></span>
                    <span>{{ $t('components.appUser.logout') }}</span>
                </dropdown-item>
            </dropdown-menu>
        </dropdown>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Subject } from 'rxjs';
@Component({})
export default class AppUser extends Vue {
    /**
     * 用户信息
     *
     * @memberof AppUser
     */
    public user = {
        name: '',
        avatar: './assets/img/avatar.png',
    };

    /**
     * 下拉选选中回调
     *
     * @param {*} data
     * @memberof AppUser
     */
    public userSelect(data: any) {
        if (Object.is(data, 'logout')) {
            const title: any = this.$t('components.appUser.surelogout');
            this.$Modal.confirm({
                title: title,
                onOk: () => {
                    this.logout();
                },
            });
        } else if (Object.is(data, 'updatepwd')) {
            let container: Subject<any> = this.$appmodal.openModal(
                {
                    viewname: 'app-update-password',
                    title: this.$t('components.appUser.changepwd') as string,
                    width: 500,
                    height: 400,
                },
                {},
                {}
            );
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
            });
        }
    }

    /**
     * vue  生命周期
     *
     * @memberof AppUser
     */
    public mounted() {
        let _user: any = {};
        if (this.$store.getters.getAppData()) {
            if (this.$store.getters.getAppData().context && this.$store.getters.getAppData().context.srfusername) {
                _user.name = this.$store.getters.getAppData().context.srfusername;
            }
            if (this.$store.getters.getAppData().context && this.$store.getters.getAppData().context.srfusericonpath) {
                _user.avatar = this.$store.getters.getAppData().context.srfusericonpath;
            }
        }
        if (localStorage.getItem('user')) {
            let user: any = JSON.parse(localStorage.getItem('user') as string);
            if (user && user.personname) {
                _user.name = user.personname;
            }
        }
        Object.assign(this.user, _user, {
            time: +new Date(),
        });
    }

    /**
     * 退出登录
     *
     * @memberof AppUser
     */
    public logout() {
        const get: Promise<any> = this.$http.get('v7/logout');
        get.then((response: any) => {
            if (response && response.status === 200) {
                this.$appService.logout();
            }
        }).catch((error: any) => {
            console.error(error);
        });
    }
}
</script>

<style lang="less">
@import './app-user.less';
</style>
