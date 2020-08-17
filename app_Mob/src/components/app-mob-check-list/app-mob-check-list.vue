<template>
  <div class="app-mobile-check-list">
    <ion-icon v-if="curValue"  name="close-circle-outline" @click="clear"></ion-icon>
    <ion-select  ref="checkList" @ionChange="change"  :disabled="disabled" multiple="true"   :ok-text="$t('app.button.confirm')" :cancel-text="$t('app.button.cancel')">
      <ion-select-option v-for="option of options" :key="option.value" :value="option.value">{{option.text}}
      </ion-select-option>
    </ion-select>
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
  import CodeListService from "@app-core/service/app/code-list-service";

  @Component({
    components: {}
  })
  export default class AppCheckList extends Vue {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppCheckList
     */

    public codeListService: CodeListService = new CodeListService();

    /**
     * 传入值
     *
     * @type {string}
     * @memberof AppCheckList
     */
    @Prop() public value ? : string;

    /**
     * 当前选中值
     * @memberof AppCheckList
     */
    public curValue:any = this.value;

    /**
     * 下拉数据数组
     *
     * @type {any[]}
     * @memberof AppCheckList
     */
    public options: any[] = [];

    /**
     * 是否禁用
     *
     * @type {string}
     * @memberof AppCheckList
     */
    @Prop() public disabled ? : string;

    /**
     * 代码表标识
     *
     * @type {string}
     * @memberof AppCheckList
     */
    @Prop() public tag!: string;

    /**
     * 代码表类型
     *
     * @type {string}
     * @memberof AppCheckList
     */
    @Prop() public type!: string;

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

    /**
     * 值改变
     * 
     * @memberof AppCheckList
     */
    public change(value: any) {
      this.curValue = value.detail.value;
      this.$emit('change', value.detail.value);
    }

    /**
     * 回填值
     * @memberof AppCheckList
     */
    public mounted(){
      const select:any = this.$refs.checkList;
      select.value = this.curValue;
    }

    /**
     * 清空值
     * @memberof @memberof AppCheckList
     */
    public clear(){
        this.curValue = null;
        const select:any = this.$refs.checkList;
        select.value = '';
        this.$emit('change','')
    }
  }
</script>
<style lang="less">
  @import "./app-mob-check-list.less";
</style>