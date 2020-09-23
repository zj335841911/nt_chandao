<template>  
  <div class="app-update-log-list">
    <div class="list-item">
      <div class="list-text">
        <div class="text">PMS 7.0.19主要更新</div>
        <div class="date">09月23日</div>
      </div>
      <div class="list-icon">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>

    <div class="list-item">
      <div class="list-text">
        <div class="text">PMS 7.0.19主要更新</div>
        <div class="date">09月23日</div>
      </div>
      <div class="list-icon">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
    <div class="list-item">
      <div class="list-text">
        <div class="text">PMS 7.0.19主要更新</div>
        <div class="date">09月23日</div>
      </div>
      <div class="list-icon">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
    <div class="list-item">
      <div class="list-text">
        <div class="text">PMS 7.0.19主要更新</div>
        <div class="date">09月23日</div>
      </div>
      <div class="list-icon">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
    <div class="list-item">
      <div class="list-text">
        <div class="text">PMS 7.0.19主要更新</div>
        <div class="date">09月23日</div>
      </div>
      <div class="list-icon">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
    <div class="list-item">
      <div class="list-text">
        <div class="text">PMS 7.0.19主要更新</div>
        <div class="date">09月23日</div>
      </div>
      <div class="list-icon">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, } from "vue-property-decorator";

@Component({
    components: {},
})
export default class AppSelect extends Vue {

  public items:Array<any> = []; 
   
    /**
     * 生命周期
     */
    public created() {
      this.thirdPartyInit();
      this.setViewTitleStatus();
    }

    /**
     * 标题状态
     *
     * @memberof ProductCloseMobEditViewBase
     */
    public titleStatus :boolean = true;

    /**
     * 设置标题状态
     *
     * @memberof ProductCloseMobEditViewBase
     */
    public setViewTitleStatus(){
        const thirdPartyName = this.$store.getters.getThirdPartyName();
        if(thirdPartyName){
            this.titleStatus = false;
        }
    }

     /**
     * 关闭视图
     * 
     * @memberof AppMobSelectChangeStyle
     */
    public closeView() {
        this.$emit("close");
    }
    
      /**
     *  第三方容器初始化
     *
     * @type {function}
     * @memberof AppMobSelectChangeStyle
     */
    protected  thirdPartyInit(){
          this.$viewTool.setViewTitleOfThirdParty("更新日志");
          this.$viewTool.setThirdPartyEvent(this.closeView);
          const thirdPartyName = this.$store.getters.getThirdPartyName();
          if(thirdPartyName){
              this.titleStatus = false;
          }
    }
}
</script>

<style lang="less">
@import './app-update-log-list.less';
</style>