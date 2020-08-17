<template>
  <div class="app-mpicker">
      <ion-input  :clear-input="true" @ionFocus="openModal">
        <div style="    display: flex; flex-wrap: wrap;">
            <p v-for="(item,index) in curValue" :key="index" style="margin: 0; padding: 0;">
            <ion-chip outline color="primary">
              <ion-label>{{item.text}}</ion-label>
              <ion-icon name="close-circle" @click="remove(item)"></ion-icon>
            </ion-chip>
          </p>
          </div>
      </ion-input>
      <ion-icon class="open-picker" name="search-outline" @click="openModal"></ion-icon>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({})
export default class AppPicker extends Vue {

 /**
   * 视图上下文
   *
   * @type {*}
   * @memberof AppMPicker
   */
  @Prop() public context!: any;

  /**
   * 视图参数
   *
   * @type {*}
   * @memberof AppMPicker
   */
  @Prop() public viewparams!: any;

  /**
   * 输入值
   * @type any
   * @memberof AppMPicker
   */
  @Prop() public value?: any;

  get curValue() {
    if (this.value) {
      if (this.value instanceof Array) {
        return this.value;
      } else if (typeof this.value === "string") {
        try {
          return JSON.parse(this.value);
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      return [];
    }
  }

  set curValue(val: any) {
    if (!val) {
      this.$emit("change", null);
    } else {
      this.$emit("change", JSON.stringify(val));
    }
  }

  /**
   *  标签label
   * @type string
   * @memberof AppMPicker
   */
  @Prop() public labelText?: string;

  /**
   *  是否允许为空
   * @type boolean
   * @memberof AppMPicker
   */
  @Prop() public allowEmpty?: boolean;

  /**
   * 输入值
   * @type boolean
   * @memberof AppMPicker
   */
  @Prop() public disabled?: boolean;

  /**
   * 空白提示信息
   * @type string
   * @memberof AppMPicker
   */
  @Prop() public placeholder?: string;

  /**
   * 视图名称
   * @type string
   * @memberof AppMPicker
   */
  @Prop() public viewname?: string;

    /**
     * 打开模态
     *
     * @memberof AppMPicker
     */
    public async openModal() {
        if (this.viewname) {
            const result: any = await this.$appmodal.openModal({ viewname: this.viewname, title: this.viewname}, this.context, this.viewparams);
            if (result || Object.is(result.ret, 'OK')) {
                this.curValue = result.datas;
            }
        } else {
            console.log("选择视图未配置");
        }
    }

  /**
   * 删除单个数据项
   *
   * @memberof AppMPicker
   */
  public remove(value: any) {
    if (this.disabled) {
      return;
    }
    this.curValue = this.curValue.filter((item:any) =>{
        return item.srfkey !== value.srfkey;
    })
  }
}
</script>
<style lang="less">
@import './app-mpicker.less';
</style>