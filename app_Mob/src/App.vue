<template>
	<ion-app id="app" :class="[themeClass,alignClass,navigationClass]" class="ios ion-page hydrated">
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
     * 当前文本对齐方式
     *
     * @readonly
     * @memberof App
     */
    get alignClass() {
        if (this.$router.app.$store.state.selectTextAlign) {
            return this.$router.app.$store.state.selectTextAlign;
        } else if (localStorage.getItem('align-class')) {
            return localStorage.getItem('align-class');
        } else {
            return 'app-text-align-right';
        }
  }
  
	/**
     * 当前导航栏样式
     *
     * @readonly
     * @memberof App
     */
    get navigationClass() {
        if (this.$router.app.$store.state.selectNaviStyle) {
            return this.$router.app.$store.state.selectNaviStyle;
        } else if (localStorage.getItem('navigation-class')) {
            return localStorage.getItem('navigation-class');
        } else {
            return 'app-navi-new';
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
     * @readonly
     * @memberof App
     */
    public created(){
        this.setThirdPartyPath();
    }
}
</script>