<template>
  <div class="app-mobile-check-list">
    <ion-icon v-if="curValue"  name="close-outline" @click="clear"></ion-icon>
    <div v-if="curValue== null || curValue==''" class="ion-select-icon"></div>
    <ion-select  ref="checkList" @ionChange="change" multiple="true"   :ok-text="$t('app.button.confirm')" :cancel-text="$t('app.button.cancel')">
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
  import { CodeListService } from "@/ibiz-core";

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

    /**
     * 导航参数
     *
     * @type {*}
     * @memberof AppCheckList
     */
    @Prop({ default: {} }) protected navigateParam?: any;

    /**
     * 导航上下文
     *
     * @type {*}
     * @memberof AppCheckList
     */
    @Prop({ default: {} }) protected navigateContext?: any;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AppCheckList
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 是否缓存
     *
     * @type {*}
     * @memberof AppCheckList
     */
    @Prop({ default: true }) protected isCache?: boolean;


    /**
     * 传入表单数据
     *
     * @type {*}
     * @memberof AppCheckList
     */
    @Prop() public data?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppCheckList
     */
    @Prop() public viewparams!: any;

    /**
     * 生命周期
     *
     * @type {*}
     * @memberof AppCheckList
     */
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
        // 处理导航参数、上下文参数
        let param: any= {};
          this.handleOtherParam(param);
          this.options = this.$store.getters.getCodeListItems(this.tag ,this.isCache, param.context, param.param);
        }
      }
    }

    /**
     * 值改变
     * 
     * @memberof AppCheckList
     */
    public change(value: any) {
      this.curValue = value.detail.value.toString();
      this.$emit('change', this.curValue);
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
     * 处理额外参数
     */
    public handleOtherParam(arg:any) {
        if (!this.data) {
            return false;
        }
        // 导航参数处理
        const {context, param} = this.$viewTool.formatNavigateParam( this.navigateContext, this.navigateParam, this.context, this.viewparams, this.data );
        arg.context =  context;
        arg.param = param;
        return true;
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