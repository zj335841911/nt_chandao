<template>
  <van-dropdown-menu :class="showTitle === title?'':'dropdown-menu-ative'" class="ibiz-dropdown-menu">
    <van-dropdown-item :title="showTitle" ref="item" >
        <div class="dropdown-box">
        <div v-for="(item,index) in items" :key="index" class="dropdown-item" @click="itemClick(item)">
            <div v-show="selectItem == item" class="dropdown-item-icon"><van-icon name="success" /></div>
            <div  class="dropdown-item-text">{{item.label}}</div>
        </div>
        </div>
      <van-button  class="dropdown-btn" @click="onReset" >{{$t('reset')}}</van-button>
      <van-button  class="dropdown-btn" type="info" @click="onConfirm">{{$t('confirm')}}</van-button>
    </van-dropdown-item>
  </van-dropdown-menu>
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
  components: {},
  i18n: {
      messages: {
          'ZH-CN': {
              confirm: '确定',
              reset: '重置',
          },
          'EN-US': {
              confirm: 'Confirm',
              reset: 'Reset',
          }
      }
  }
})
export default class AppVanSelect extends Vue {

   /**
     * 数据集
     *
     * @type {any}
     * @memberof AppVanMenu
     */
    @Prop() public items?: any;

    /**
     * 搜索名
     *
     * @type {any}
     * @memberof AppVanMenu
     */
    @Prop() public name!: string;

    /**
     * 名称
     *
     * @type {any}
     * @memberof AppVanMenu
     */
    @Prop() public title?: any;

    /**
     * 展示信息
     *
     * @type {any}
     * @memberof AppVanMenu
     */
    public showTitle :any = "";

    /**
     * 重置按钮
     *
     * @type {string}
     * @memberof AppVanMenu
     */
    public onReset(){
        this.selectItem = {};
        this.showTitle = this.title;
        this.closeDropdown();
        this.$emit('onConfirm',{[this.name]:this.selectItem.value})
    }

    /**
     * 当前选中数据
     *
     * @type {any}
     * @memberof AppVanMenu
     */
    public selectItem: any ={};

    /**
     * 数据点击事件
     *
     * @type {any}
     * @memberof AppVanMenu
     */
    public itemClick(item:any){
        this.selectItem = item;
    }

    /**
     * 生命周期
     *
     * @memberof AppVanMenu
     */
    created(){
        this.showTitle =  this.title ;
    }

    /**
     * 收起数据
     *
     * @type {any}
     * @memberof AppVanMenu
     */
    public closeDropdown() {
        let dropdown: any =this.$refs.item;
        if(dropdown.toggle &&  dropdown.toggle instanceof Function){
            dropdown.toggle();
        }
         
    }
    /**
     * 提交事件
     *
     * @type {any}
     * @memberof AppVanMenu
     */
    public onConfirm() {
        if(this.selectItem.label){
         this.showTitle = this.selectItem.label;
        }
        this.closeDropdown();
        this.$emit('onConfirm',{[this.name]:this.selectItem.value})
    }

}
</script>
<style lang="less">
.ibiz-dropdown-menu {
  min-width: 100px;
  max-width: 100px;
  height: 30px;
  .van-ellipsis {
    padding-right: 15px;
  }
  .van-dropdown-menu__title::after {
    right: 6px;
  }
  .dropdown-box {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0;
    .dropdown-item {
      width: 50%;
      display: flex;
      padding: 8px 12px;
      .dropdown-item-icon {
        padding: 0 5px;
        position: absolute;
      }
      .dropdown-item-text {
        margin-left: 35px;
      }
    }
  }
  .dropdown-btn {
    width: 50%;
  }
  .van-dropdown-item__content {
    border-radius: 0 0 15px 15px;
  }
  .dropdown-menu-ative {
  }
}
</style>