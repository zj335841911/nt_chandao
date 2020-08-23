<template>
    <div  class="app-mobile-select"  >
        <div  class="ion-select-icon"></div>
        <ion-select  :value="curValue"  @ionChange="change" interface="action-sheet"  :cancel-text="$t('app.button.cancel')">
                <ion-select-option  v-for="option of options" :key="option.value" :value="option.value" class="mob-select-text">{{option.text}}</ion-select-option>
        </ion-select>
      
    </div>   
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, } from "vue-property-decorator";

@Component({
    components: {},
})
export default class AppSelect extends Vue {
    /**
     * 当前选中值
     * @memberof AppSelect
     */
    get curValue(){
        return  this.activeTheme;
    }
    
    set curValue(value:any){
        this.themeChange(value.detail.value);
    }

    public getTheme(){
        if (this.$router.app.$store.state.selectTheme) {
            return this.$router.app.$store.state.selectTheme;
        } else if (localStorage.getItem('theme-class')) {
            return localStorage.getItem('theme-class');
        } else {
            return 'app-dark-blue-theme';
        }
    }

    /**
     * change事件
     *
     * @memberof AppSelect
     */
    public change(value: any) {
        this.themeChange(value.detail.value);
    }

    /**
     * 下拉数据数组
     *
     * @type {any[]}
     * @memberof AppSelect
     */
    public options: any[] = [
        {value:"app-blue-theme",text:"dark"},
        {value:"app-dark-blue-theme",text:"light"},
        {value:"app-default-theme",text:"default"},
    ];

    /**
     * mounted
     */
    public mounted() {
        this.activeTheme = this.getTheme();
    }

    /**
     * 激活主题
     *
     * @type {any[]}
     * @memberof AppSelect
     */
    public activeTheme = "";

    /**
     * 主题变化
     *
     * @param {*} val
     * @memberof AppTheme
     */
    public themeChange(val: any) {
        if (!Object.is(this.activeTheme, val)) {
            this.activeTheme = val;
            localStorage.setItem('theme-class', val);
            this.$router.app.$store.commit('setCurrentSelectTheme', val);
        }
    }

}
</script>

<style lang="less">
@import './app-mob-select-changeTheme.less';
</style>