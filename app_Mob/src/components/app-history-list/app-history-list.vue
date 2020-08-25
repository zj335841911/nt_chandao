<template>
  <div class="container">
    <div class="content">   
      <div v-for="item in infos" :key="item.id" class="item">
            <div class="header"><span>{{item.time}}</span> <span>{{item.method}}</span></div>
            <div class="footer">{{item.info}}</div>
      </div>
    </div>
    <div class="button">
      <div @click="loadMore"><span>{{text}}</span></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    components: {}
})
export default class APPHistoryList extends Vue {

    /**
     * 传入数据
     *
     * @type {Array}
     * @memberof APPHistoryList
     */
    @Prop({default:()=>{ return [
          {time:'2020-08-20',method:'手动变更',info:'胡维将状态由"实现中"修改为"已实现"；将完成时间由"空"修改为"2020-08-20 14：00：31"'},
          {time:'2020-08-21',method:'自动变更',info:'胡维将状态由"实现中"修改为"已实现"；将完成时间由"空"修改为"2020-08-20 14：00：31"'},
          {time:'2020-08-22',method:'自动变更',info:'胡维将状态由"规划中"修改为"实现中"'},
          {time:'2020-08-23',method:'手动变更',info:'胡维将状态由"实现中"修改为"已实现"；将完成时间由"空"修改为"2020-08-20 14：00：31"'},
    ]}}) public infos ?: Array<any>;

    /**
     * 按钮文本
     *
     * @type {String}
     * @memberof APPHistoryList
     */
    public text = '查看更多记录';

    /**
     * 文本切换
     *
     * @type {Boolean}
     * @memberof APPHistoryList
     */
    public isShow = false;


    /**
     * 初始个数
     *
     * @type {Number}
     * @memberof APPHistoryList
     */
    public num = 3;


    /**
     * 点击展开
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    public loadMore(): void {
          this.isShow = !this.isShow;
          this.text = this.isShow?  '收起':'查看更多记录';
          let ele:any =  document.querySelector('.content');
          let ite:any =  document.querySelectorAll('.item');
          let startHeig:number = 0;
          let endHeig:number = 0;
          for(let i = 0; i <= this.num; i++){
            startHeig += ite[i].offsetHeight
          }
          for(let i = 0; i < ite.length; i++){
            endHeig += ite[i].offsetHeight + 30
          }
          ele.style.height = this.isShow?endHeig+'px':  + startHeig+'px';
    }

}
</script>

<style lang="less">
@import "./app-history-list.less";
</style>