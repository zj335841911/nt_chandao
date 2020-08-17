<template>
  <ion-list class="app-mobile-radio-list">
    <ion-radio-group  :value="value" @ionChange="change">
      <ion-item  v-for="(item,index) in options" :key="index">
        <ion-label>{{item.text}}</ion-label>
        <ion-radio  :disabled="item.disabled" color="success" :value="item.value"></ion-radio>  
      </ion-item>
    </ion-radio-group>
  </ion-list>
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
import CodeListService from "@app-core/service/app/code-list-service";

@Component({
  components: {}
})
export default class AppMobRadio extends Vue {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppMobRadio
     */

    public codeListService: CodeListService = new CodeListService();

    /**
     * 代码表标识
     *
     * @type {string}
     * @memberof AppMobRadio
     */
    @Prop() public tag?: string;

    /**
     * 代码表类型
     *
     * @type {string}
     * @memberof AppMobRadio
     */
    @Prop() public type!: string;

    /**
     * 代码表列表项
     *
     * @type {Array<any>}
     * @memberof AppMobRadio
     */
    public options?: Array<any> = [];

    /**
     * 输入值
     *
     * @type {any}
     * @memberof AppMobRadio
     */
    @Prop() public value?: any;

    /**
     * 禁用
     *
     * @type {boolean}
     * @memberof AppMobRadio
     */
    @Prop() public disabled?: boolean;

    /**
     * change事件
     */
    public change(data: any) {
      this.$emit("change", data.detail.value);
    }

    public created() {
      if (this.tag && this.type) {
        if (Object.is(this.type, "dynamic")) {
          this.codeListService
            .getItems(this.tag)
            .then((res: any) => {
              this.options = res;
            })
            .catch((error: any) => {
              this.options = [];
            });
        } else {
          this.options = this.$store.getters.getCodeListItems(this.tag);
        }
      }
    }

    public mounted(){
        this.changeLabelStyle();
    }

    /**
     * 修改label默认样式
     * @memberof AppMobPicture
     */
    public changeLabelStyle() {
      document.querySelectorAll(".app-mobile-radio-list").forEach((element: any) => {
        let prev = this.getNearEle(element, 1);
        prev.style.transform = 'none';
      })
    }

    /**
     * 查找相邻前一个元素
     * 
     *  @memberof AppMobPicture
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
</style>