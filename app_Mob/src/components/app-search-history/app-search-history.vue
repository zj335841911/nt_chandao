<template>
  <div class="app-seach-history">
        <ion-toolbar>
            <ion-searchbar style="height: 36px; padding-bottom: 0px;" :placeholder="$t('app.fastsearch')" debounce="500" @ionChange="quickValueChange($event)" show-cancel-button="focus" :cancel-button-text="$t('app.button.cancel')" @ionFocus="showHistory" @ionBlur="hideHistory" @search="searchVal"></ion-searchbar>
            <ion-button v-if="showfilter" class="filter-btn" size="small" slot="end"  @click="openSearchform"><ion-icon  slot="end" name="filter-outline"></ion-icon>过滤</ion-button> 
        </ion-toolbar>
        <div class="history" v-if="hasHistory">
          <div class="hisText"><div>最近搜索</div> <ion-icon name="trash-bin-outline" @click="clearHistory"></ion-icon></div>
          <div class="hisItems">
            <van-tag type="primary" v-for="item in historyList" :key="item.index" round size="medium" color="#ededed" text-color="#333" >{{item}}</van-tag>
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
  Watch
} from "vue-property-decorator";

@Component({
  components: {}
})
export default class AppRoundList extends Vue{

   /**
     * 视图模型数据
     *
     * @type {any}
     * @memberof AppSearchHistory
     */ 
    @Prop() public model:any;
    
    /**
     * 是否展示过滤按钮
     *
     * @type {boolean}
     * @memberof AppSearchHistory
     */ 
    @Prop() public showfilter:boolean = false;

    /**
     * 快速搜索值变化
     *
     * @param {*} event
     * @returns
     * @memberof AppSearchHistory
     */
    public quickValueChange($event:any){
      this.$emit('quickValueChange',$event);
    }

    /**
     * 打开搜索表单
     *
     * @memberof AppSearchHistory
     */ 
    public openSearchform(){
      this.$emit('openSearchform');
    }

   /**
     * 搜索历史数组
     *
     * @type {Array}
     * @memberof AppSearchHistory
     */ 
    public historyList:Array<any> = [];

   /**
     * 每一类搜索历史
     *
     * @type {Object}
     * @memberof AppSearchHistory
     */ 
    public historyLists:any = {};

   /**
     * 分类缓存搜索历史
     *
     * @type {Array}
     * @memberof AppSearchHistory
     */ 
    public historyStorage:Array<any> = [];
    
   /**
     * 是否展开搜索历史
     *
     * @type {boolean}
     * @memberof AppSearchHistory
     */ 
    public hasHistory:boolean = false;

   /**
     * 是否有搜索历史功能
     *
     * @type {boolean}
     * @memberof AppSearchHistory
     */ 
    public enableHistory:boolean = true;

   /**
     * 生命周期
     * 
     * @memberof AppSearchHistory
     */ 
    public mounted(){
      this.afterMounted();
    }

   /**
     * 执行mounted后的逻辑
     * 
     * @memberof AppSearchHistory
     */ 
    public afterMounted(){
      let storage:any = localStorage.getItem('historyStorage');
      if (storage) {
        // 后续拿
        let historystorage:any = JSON.parse(storage);
        this.historyLists = historystorage.find((historyLists:any)=>{
          return historyLists.viewname == this.model.viewname;
        })
        if (this.historyLists) {
          // 如果是缓存过的模型
          this.historyList = this.historyLists.historyList;
          this.historyStorage = historystorage;
        } else {
          // 如果是未缓存过的模型 = 第一次拿
          this.historyLists = {viewname:this.model.viewname,historyList:[]};
          this.historyList = this.historyLists.historyList;
          historystorage.push(this.historyLists);
          this.historyStorage = historystorage;
        }
      } else {
        // 第一次拿
        this.historyLists = {viewname:this.model.viewname,historyList:[]};
        this.historyList = this.historyLists.historyList;
        this.historyStorage.push(this.historyLists);
      }
    }

   /**
     * 聚焦搜索框时
     * @memberof AppSearchHistory
     */ 
    public showHistory(){
      if (this.enableHistory) {
        if ( (Array.isArray(this.historyLists.historyList)) && (this.historyLists.historyList.length <= 0) ) {
          this.hasHistory = false;
        } else {
          console.log('333');
          this.hasHistory = true;
        }
      } 
    }

   /**
     * 失焦搜索框时
     * @memberof AppSearchHistory
     */ 
    public hideHistory(){
      setTimeout(() => {   
        this.hasHistory = false;
      }, 100);
    }

   /**
     * 触发搜索
     * @memberof AppSearchHistory
     */ 
    public searchVal($event:any){
      let val:any = $event.target.value;
      val = val.trim();
      if (this.historyList.length > 0) {
        if (this.historyList.indexOf(val) !== -1) { 
          this.historyList.splice(this.historyList.indexOf(val), 1);
          this.historyList.unshift(val);
        } else {
          this.historyList.unshift(val);
        }
      } else {
        this.historyList.unshift(val);
      }
      if (this.historyList.length > 10) {
        this.historyList.pop();
      }
      if (this.enableHistory) {
        localStorage.setItem('historyStorage', JSON.stringify(this.historyStorage))
      }
    }

   /**
     * 清除搜索历史
     *
     * @type {boolean}
     * @memberof AppSearchHistory
     */ 
    public async clearHistory(){
      const result = await this.$notice.confirm('提醒','是否清除搜索历史？',this.$store);
      if (result) {
          this.historyList = [];
          this.historyLists.historyList = [];
          this.historyStorage.splice(this.historyStorage.indexOf(this.historyLists),1);
          localStorage.setItem('historyStorage', JSON.stringify(this.historyStorage))
          return true;
      } else {
          return false;
      }
    }
};
</script>
<style lang = "less">
@import "./app-search-history.less";
</style>