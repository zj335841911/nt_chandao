<template>
  <div class="app-mobile-slider">
      <ion-range :value="value" :disabled="disabled" min="0" max="100" pin color="secondary" @ionChange="change"></ion-range>
  </div>
</template>



<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';

@Component({
    components: {
      
    }
})
export default class AppMobSlider extends Vue {
    /**
     * 值
     *
     * @type {number}
     * @memberof AppMobSlider
     */
    @Prop() public value?:number;

    /**
     * 是否禁用
     *
     * @type {boolean}
     * @memberof AppMobSlider
     */
    @Prop() public disabled?:boolean;


    /**
     * change事件
     */
    public change(data:any) {
        this.$emit('change',data.detail.value);
    }

    public mounted(){
        this.changeLabelStyle();
    }

    /**
     * 修改label默认样式
     * @memberof AppMobSlider
     */
    public changeLabelStyle() {
      document.querySelectorAll(".app-mobile-slider").forEach((element: any) => {
        let prev = this.getNearEle(element, 1);
        prev.style.transform = 'none';
      })
    }

    /**
     * 查找相邻前一个元素
     * 
     *  @memberof AppMobSlider
     */
    public getNearEle(ele: any, type: any) {
      type = type == 1 ? "previousSibling" : "nextSibling";
      var nearEle = ele[type];
      while (nearEle) {
        if (nearEle.nodeType === 1) {
          return nearEle;
        }
        nearEle = nearEle[type];
        if (!nearEle) {
          break;
        }
      }
      return null;
    }    
}
</script>
<style lang="less">
.app-mobile-slider{
  width: 100%;
  ion-range{
    padding-top:10px;
  }
}   
</style>