<template>
  <div class="container">
    <div class="onecontent" ref="onecontent">   
      <div v-for="item in items" :key="item.id" class="oneitem" ref="oneitem">
            <div class="header"><span>{{item.date}}</span> <span>{{item.method}}</span></div>
            <div class="footer" v-for="i in item.items" :key="i"> 
              <strong>{{item.actor}}</strong> 
              {{item.method}} 
              <span v-if="item.actions !== 'closed'">
              <strong>{{item.file}}</strong>
              <strong v-html="item.comment" class="comment"></strong>
              {{i}}
              </span>
            </div>
      </div>
    </div>
    <div class="button">
      <div @click="loadMore"><span>{{text}}</span></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop,Watch } from 'vue-property-decorator';
import { CodeListService } from "@/ibiz-core";

@Component({
    components: {}
})
export default class APPHistoryList extends Vue {
    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof APPHistoryList
     */

    public codeListService: CodeListService = new CodeListService();

    /**
     * 传入数据items
     *
     * @type {Array}
     * @memberof APPHistoryList
     */
    @Prop() public items?: Array<any>;

    /**
     * 传入数据itemNameDetail
     *
     * @type {any}
     * @memberof APPHistoryList
     */
    @Prop() public itemNameDetail?:any;

    /**
     * 监听itemNameDetail
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    @Watch('itemNameDetail')
    itemNameDetailChange(){
      this.handler();
    }

    /**
     * 监听items
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    @Watch('items',{immediate: true, deep: true})
    itemsChange(){
      if (this.items!=undefined && this.items.length !== 0) {
        this.text = '查看更多记录';
      } else {
        this.text = '暂无更多记录';
      }
      this.handler();
      this.setHeight();
    }

    /**
     * 获取代码表
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    public getCodeList(tag:string,type:string,value:any){
      if (type == 'STATIC') {
        let infos:any = this.$store.getters.getCodeListItems(tag);
        let info:any = infos.find((v:any)=>v.value == value);
        return info;
      }
    }

    /**
     * 解析代码表获取数据
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    public handler(){
      if (this.items != undefined) {
        this.items.forEach((v:any)=>{
          console.log('item',v);
          let file:string = "";
          let method:string = "";
          if(v.objecttype){

          }
          if(v.actions){
            let info:any = this.getCodeList(this.codeListAAA.actions.tag,'STATIC',v.actions);
              v.method = info.text;
              method = info.text;
          }
          if(v.item){
            v.items = [];
            v.item.forEach((i:any) => {
              v.file = (this.$t(v.objecttype+'.fields.'+i.field) as string);
              v.items.push( '旧值为'+'"'+ i.old +'"'+ ',新值为' +'"'+ i.ibiznew+'"');
            });
          }
          if(v.item.length == 0){
            v.items = [];
            v.items.push('');
          }
        })
      }
    }     

    /**
     * 按钮文本
     *
     * @type {String}
     * @memberof APPHistoryList
     */
    public text:string = '查看更多记录';

    /**
     * 文本切换
     *
     * @type {Boolean}
     * @memberof APPHistoryList
     */
    public isShow:boolean = false;

    /**
     * 代码表规范
     *
     * @memberof APPHistoryList
     */
    public codeListAAA :any= {
      "actions":{
        type:"static",
        tag:"Action__type"
      },
      "old":{
        type:"static",
        tag:"Product__status"
      }
    }

    /**
     * 初始个数
     *
     * @type {Number}
     * @memberof APPHistoryList
     */
    public num:number = 3;

    /**
     * 初始高度
     *
     * @type {Number}
     * @memberof APPHistoryList
     */
    public startHeig:number = 0;

    /**
     * 终止高度
     *
     * @type {Number}
     * @memberof APPHistoryList
     */
    public endHeig:number = 0;

    /**
     * 点击展开
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    public loadMore():void {
          this.isShow = !this.isShow;
          this.text = this.isShow?  '收起':'查看更多记录';
          let ele:any =  document.querySelector('.onecontent');
          let ite:any =  document.querySelectorAll('.oneitem');
          this.startHeig = 0;
          this.endHeig = 0;
            for(let i = 0; i <= this.num; i++){
              if (ite[i] != undefined) {
                this.startHeig += ite[i].offsetHeight;
              }
            }
            for(let i = 0; i < ite.length; i++){
              if (ite[i] != undefined) {              
              this.endHeig += ite[i].offsetHeight + 20;
              }
            }  
          ele.style.height = this.isShow?this.endHeig+'px':  + this.startHeig+'px';

    }

    /**
     * 生命周期created
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    public created(){
      this.handler();
    }

    /**
     * 设置初始高度
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    public setHeight(){

      let ele:any =  document.querySelector('.onecontent');
      let ite:any =  this.$refs.oneitem;
      if (ite !== undefined) {
        for(let i:any = 0; i <= this.num; i++){
          if (ite[i] !== undefined) {
            this.startHeig += ite[i].offsetHeight;
          }
        }
      }
      if(ele && ele.style){
        ele.style.height = this.startHeig + 'px';
      }
    }

    /**
     * 生命周期mounted
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    public mounted(){}

}
</script>

<style lang="less">
@import "./app-history-list.less";
</style>