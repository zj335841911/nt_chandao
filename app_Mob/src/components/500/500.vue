<template>
  <div class="app-500">
    <img src="assets/images/500.jpg" alt />
    <div class="btnbox">
      <ion-button class="backbtn" @click="back">上一步</ion-button>
      <ion-button class="backbtn" @click="backindex">返回首页</ion-button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Provide,
  Emit,
  Watch
} from "vue-property-decorator";

@Component({
  components: {}
})
export default class App404 extends Vue {
  /**
   * 返回上一步
   */
  public back() {
    this.$emit("close",['back'])
  }
  /**
   * 返回首页
   */
  public backindex() {
    this.$emit("close",['goIndex'])
  }
}
</script>
<style lang = "less">
@import "./500";
</style>