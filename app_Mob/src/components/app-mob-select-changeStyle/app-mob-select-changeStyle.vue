<template>
    <div  class="app-mob-select-changeStyle" >
      <ion-list>
        <ion-radio-group :value="activeAlign">
          <ion-list-header>
            <ion-label>文本对齐方式</ion-label>
          </ion-list-header>
          <ion-item v-for="item in alignItems" :key="item.index" @click="changeTextAlign">
            <ion-label>{{item.text}}</ion-label>
            <ion-radio slot="start" :value="item.value"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <ion-list>
        <ion-radio-group :value="activeNavi">
          <ion-list-header>
            <ion-label>导航栏风格切换</ion-label>
          </ion-list-header>
          <ion-item  v-for="item in naviItems" :key="item.index" @click="changeNaviStyle">
            <ion-label>{{item.text}}</ion-label>
            <ion-radio slot="start" :value="item.value"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <div class="change-style-btnbox">
        <ion-button class="change-style-btn success" @click="save" expand="full">确定</ion-button> 
      </div>
    </div>
   
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, } from "vue-property-decorator";

@Component({
    components: {},
})
export default class AppSelect extends Vue {

    /**
     * 当前文本对齐方式选中值
     * @memberof AppMobSelectChangeStyle
     */
    public activeAlign:any = '';

    /**
     * 当前导航栏选中值
     * @memberof AppMobSelectChangeStyle
     */
    public activeNavi:any = '';

    /**
     * 文本对齐方式
     * @memberof AppMobSelectChangeStyle
     */
    public alignItems:Array<any> = [
        {text:'左对齐',value:'app-text-align-left'},
        {text:'右对齐',value:'app-text-align-right'},
      ]

    /**
     * 导航栏样式
     * @memberof AppMobSelectChangeStyle
     */
    public naviItems:Array<any> = [
        {text:'经典',value:'app-navi-class'},
        {text:'创新',value:'app-navi-new'}
      ]

    /**
     * 生命周期mounted
     * @memberof AppMobSelectChangeStyle
     */
    public mounted(){
        this.activeAlign = this.getActiveAlign();
        this.activeNavi = this.getActiveNavi();
    }

    /**
     * 获取文本对齐方式
     * @memberof AppMobSelectChangeStyle
     */
    public getActiveAlign(){
        if (this.$store.state.selectTextAlign) {
            return this.$store.state.selectTextAlign;
        } else if (localStorage.getItem('align-class')) {
            return localStorage.getItem('align-class');
        } else {
            return 'app-text-align-right';
        }
    }

    /**
     * 获取导航栏样式
     * @memberof AppMobSelectChangeStyle
     */
    public getActiveNavi(){
        if (this.$store.state.selectNaviStyle) {
            return this.$store.state.selectNaviStyle;
        } else if (localStorage.getItem('navigation-class')) {
            return localStorage.getItem('navigation-class');
        } else {
            return 'app-navi-new';
        }
    }

    /**
     * 点击改变文本对齐方式
     * @memberof AppMobSelectChangeStyle
     */
    public changeTextAlign($event:any){
      this.textAlignChange($event.target.value);
    }

    /**
     * 文本对齐方式变化
     * @memberof AppMobSelectChangeStyle
     */
    public textAlignChange(val:any){
        if (!Object.is(this.activeAlign, val)) {
            this.activeAlign = val;
            localStorage.setItem('align-class', val);
            this.$store.commit('setTextAlignStyle', val);
        }
    }

    /**
     * 点击改变导航栏样式
     * @memberof AppMobSelectChangeStyle
     */
    public changeNaviStyle($event:any){
      this.naviStyleChange($event.target.value)
    }

    /**
     * 导航栏样式变化
     * @memberof AppMobSelectChangeStyle
     */
    public naviStyleChange(val:any){
        if (!Object.is(this.activeNavi, val)) {
            this.activeNavi = val;
            localStorage.setItem('navigation-class', val);
            this.$store.commit('setNavigationStyle', val);
        }
    }

    /**
     * 退出模态框
     * @memberof AppMobSelectChangeStyle
     */
    public save(){
      this.$emit('close');
    }

}
</script>

<style lang="less">
@import './app-mob-select-changeStyle.less';
</style>