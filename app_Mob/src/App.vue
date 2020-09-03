<template>
	<ion-app id="app" :class="themeClass" class="ios ion-page hydrated">
		        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
	</ion-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue { 

	/**
     * 当前主题
     *
     * @readonly
     * @memberof App
     */
    get themeClass() {
        if (this.$router.app.$store.state.selectTheme) {
            return this.$router.app.$store.state.selectTheme;
        } else if (localStorage.getItem('theme-class')) {
            return localStorage.getItem('theme-class');
        } else {
            return 'app-dark-blue-theme';
        }
	}

    /**
     * 设置第三方应用
     *
     * @readonly
     * @memberof App
     */
    public setThirdPartyPath(){
        let name = this.$viewTool.getThirdPartyName();
        if(name){
            this.$router.app.$store.commit('setThirdPartyName',name);
        }
    }

	/**
     * 生命周期
     *
     *
     *1
     *
     *2
     *
     *3
     *
     * @readonly
     * @memberof App
     */
    public created(){
        this.setThirdPartyPath();
    }
}
</script>