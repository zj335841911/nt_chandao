<template>
<div>
  <div class="app-quick-group">
    <div :class="{'quick-group-tab':true,'app-seleted-item':isSelectedItem(item)}" v-for="(item,index) in showItems" :key="index">
      <div
        :style="{color:item.color}"
        @click="handleClick(item)"
      >
        <ion-icon v-if=" item.iconcls && !Object.is(item.iconcls, '')" :name="item.iconcls"></ion-icon>
        <img v-else-if="item.icon && !Object.is(item.icon, '')" :src="item.icon" />
        <span class="app-quick-item-label">{{item.label}}</span>
        <ion-icon v-if="item.children" name="caret-down-outline"></ion-icon>
      </div>
    </div>
  </div>
  <div v-if="subItems.length > 0" class="child-list">
    <div class="child" v-for="(item,index) in subItems" :key="index" @click="handleClick(item)">
      <span>
        <ion-icon v-if=" item.iconcls && !Object.is(item.iconcls, '')" :name="item.iconcls"></ion-icon>
        <img v-else-if="item.icon && !Object.is(item.icon, '')" :src="item.icon" />
        <span>{{item.label}}</span>
      </span>
      <ion-icon v-if="item.selected" name="checkbox-outline"></ion-icon>
    </div>
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
  Watch,
} from "vue-property-decorator";
@Component({
  components: {},
})
export default class AppQuickGroupTab extends Vue {
  public test($event: any) {}

  /**
   * 快速分组代码表
   *
   * @type {any[]}
   * @memberof ViewQuickGroupTab
   */
  @Prop({ default: () => [] }) public items!: Array<any>;

  /**
   * 渲染列表
   *
   * @type {any[]}
   * @memberof AppQuickGroup
   */
  public showItems: any[] = [];

  /**
   * 子项列表
   *
   * @type {any[]}
   * @memberof AppQuickGroup
   */
  public subItems: any[] = [];

  /**
   * 监控代码表变化
   *
   * @memberof AppQuickGroup
   */
  @Watch("items", { immediate: true })
  public itemsWatch(): void {
    if (this.items) {
      this.items.every((item: any) => {
        if (item.default) {
          this.$nextTick(() => {
            this.handleClick(item, true);
          })
        }
        return !item.default;
      });
      this.showItems = this.handleDataSet(this.items);
    }
  }

  /**
   * UI选中项
   *
   * @type {*}
   * @memberof AppQuickGroup
   */
  public selectedUiItem: any = {};

  /**
   * 是否选中当前项
   *
   * @param item 传入当前项
   * @memberof AppQuickGroup
   */
  public isSelectedItem(item: any): boolean {
    if (this.selectedUiItem && this.selectedUiItem.id === item.id) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 处理代码表返回数据(树状结构)
   *
   * @param result 返回数组
   * @memberof AppQuickGroup
   */
  public handleDataSet(result: Array<any>): any[] {
    let list: Array<any> = [];
    if (result.length === 0) {
      return list;
    }
    result.forEach((codeItem: any) => {
      if (!codeItem.pvalue) {
        let valueField: string = codeItem.value;
        this.setChildCodeItems(valueField, result, codeItem);
        list.push(codeItem);
      }
    });
    return list;
  }

  /**
   * 处理非根节点数据
   *
   * @param pValue 父值
   * @param result 返回数组
   * @param codeItem 代码项
   * @memberof AppQuickGroup
   */
  public setChildCodeItems(
    pValue: string,
    result: Array<any>,
    codeItem: any
  ): void {
    result.forEach((item: any) => {
      if (item.pvalue == pValue) {
        let valueField: string = item.value;
        this.setChildCodeItems(valueField, result, item);
        if (!codeItem.children) {
          codeItem.children = [];
        }
        codeItem.children.push(item);
      }
    });
  }

  /**
   * 处理点击事件
   *
   * @param $event 值
   * @param isswitch 是否切换UI选中项
   * @memberof AppQuickGroup
   */
  public handleClick($event: any, isswitch: boolean = true): void {
    if (isswitch) {
      this.selectedUiItem = $event;
    }
    if ($event.children) {
      if (this.subItems.length > 0) {
        this.subItems.length = 0;
      } else {
        this.subItems.push(...$event.children);
      }
    } else {
      this.subItems.length = 0;
      this.$emit("valuechange", $event);
    }
    this.$forceUpdate();
  }
}
</script>

<style lang="less">
@import "./app-quick-group-tab.less";
</style>