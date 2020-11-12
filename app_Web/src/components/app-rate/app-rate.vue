<template>
  <div>
    <el-rate
      :value="currentVal"
      :disabled="disabled"
      :max="maxItem"
      @change="change"
    >
    </el-rate>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Watch } from "vue-property-decorator";
import CodeListService from "@service/app/codelist-service";

@Component({})
export default class AppRate extends Vue {
  /**
   * 传入值
   * @type {any}
   * @memberof AppRate
   */
  @Prop() public value?: any;

  /**
   * 是否禁用
   * @type {boolean}
   * @memberof AppRate
   */
  @Prop() public disabled?: boolean;

  /**
   * 代码表服务对象
   *
   * @type {CodeListService}
   * @memberof AppRate
   */

  public codeListService: CodeListService = new CodeListService({
    $store: this.$store
  });

  /**
   * 传递最大值
   * @type {number}
   * @memberof AppRate
   */
  @Prop({ default: 5 }) public max!: number;

  /**
   * 数据模型
   * @type {*}
   * @memberof AppRate
   */
  @Prop() dataModel: any;

  /**
   * 数据名称
   * @type {number}
   * @memberof AppRate
   */
  @Prop() name: any;

  /**
   * 最大值
   * @type {number}
   * @memberof AppRate
   */
  public maxItem: number = 5;

  /**
   * 当前值
   *
   * @memberof AppRate
   */
  get currentVal() {
    return Number(this.value);
  }

  /**
   * change
   */
  public change(val: any) {
    this.$emit("change", val);
  }

  /**
   * Vue生命周期
   * @memberof AppRate
   */
  public created() {
    if (this.max) {
      this.maxItem = this.max;
    }
    if (this.name) {
      this.handleModel();
    }
  }

  /**
   * 数据模型处理
   * @memberof AppRate
   */
  public handleModel() {
    if (
      this.dataModel &&
      this.dataModel.getDataItems &&
      this.dataModel.getDataItems instanceof Function &&
      this.dataModel.getDataItems().length > 0
    ) {
      const models = this.dataModel.getDataItems();
      models.forEach((model: any) => {
        if (Object.is(this.name, model.name) && model.codelist) {
          this.handleCodelist(model.codelist.tag, model.codelist.codelistType);
        }
      });
    }
  }

  /**
   * 根据代码表获取最大值
   * @memberof AppRate
   */
  public handleCodelist(tag: any, codelistType: any) {
    if (Object.is(codelistType, "STATIC")) {
      const codelist = this.$store.getters.getCodeList(tag);
      if (codelist) {
        const items = [...JSON.parse(JSON.stringify(codelist.items))];
        //  获取最大值
        this.maxItem = Math.max.apply(
          Math,
          items.map((item: any) => {
            return item.value;
          })
        );
      } else {
        console.log(`----${tag}----$t('components.appCheckBox.notExist')`);
      }
    } else if (Object.is(codelistType, "DYNAMIC")) {
      // 公共参数处理
      let data: any = {};
      // 参数处理
      let _context = data.context;
      let _param = data.param;
      this.codeListService
        .getItems(tag, _context, _param)
        .then((res: any) => {
          const items = res;
          //  获取最大值
          this.maxItem = Math.max.apply(
            Math,
            items.map((item: any) => {
              return item.value;
            })
          );
        })
        .catch((error: any) => {
          console.log(`----${tag}----$t('components.appCheckBox.notExist')`);
        });
    }
  }
}
</script>

<style lang="less">
@import "./app-rate.less";
</style>
