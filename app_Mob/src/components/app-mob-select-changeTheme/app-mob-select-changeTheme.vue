<template>
    <div  class="app-mobile-select">
        <div class="activeoption" v-if="activeoption" :style="{'background':activeoption.background,'color':activeoption.color}">{{activeoption.text}}</div>
        <ion-select v-show="false"  ref="themeselect" :value="curValue"  @ionChange="change" interface="action-sheet"  :cancel-text="$t('app.button.cancel')">
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

    public activeoption:any = {};

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
        {value:"app-blue-theme",text:"魅力紫",background:"#705697",color:"#fff"},
        {value:"app-dark-blue-theme",text:"经典蓝",background:"#5475ab",color:"#fff"},
        {value:"app-class-black-theme",text:"极致黑",background:"#282829",color:"#FFF"},
        {value:"app-light-green-theme",text:"浅葱绿",background:"#05D2C2",color:"#FFF"},
        {value:"app-peach-pink-theme",text:"桃桃粉",background:"#FD84A3",color:"#FFF"},
        {value:"app-star-purple-theme",text:"星辰紫",background:"#6937D9",color:"#FFF"},
        {value:"app-summer-yellow-theme",text:"盛夏黄",background:"#FEE45A",color:"#000"},
        {value:"app-vital-red-theme",text:"元气红",background:"#FE657A",color:"#FFF"},
    ];

    /**
     * mounted
     */
    public mounted() {
        this.activeTheme = this.getTheme();
        this.setActiveoption();
    }

    /**
     * 激活主题
     *
     * @type {any[]}
     * @memberof AppSelect
     */
    public activeTheme = "";

    /**
     * 设置
     *
     * @type {any[]}
     * @memberof AppSelect
     */
    public setActiveoption(){
        let index = this.options.findIndex((item:any)=>{
            return this.activeTheme == item.value;
        })
       this.activeoption =  index>-1? this.options[index]:null;
    }

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
        this.setActiveoption();
    }

    /**
     * 打开
     *
     * @param {*} val
     * @memberof AppTheme
     */
    public open(){
        let select :any= this.$refs.themeselect;
        if(select){
            select.open();
        }
    }
}
</script>

<style lang="less">
@import './app-mob-select-changeTheme.less';
</style>