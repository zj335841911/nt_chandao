<template>
  <div class="container">
    <div class="onecontent" ref="onecontent">   
      <div v-for="item in items" :key="item.id" class="oneitem" ref="oneitem">
            <div class="header"><span>{{item.date}}</span> <span>{{item.method}}</span></div>
            <div v-if="item.item.length > 0" class="footer">
              <div v-for="(detail,index) in item.item" :key="index">
                <span>{{$t('by')}} </span>
                <strong>{{item.actor}}</strong> 
                {{item.method}} 
                <span v-if="item.actions !== 'closed'">
                  <span v-if="item.actions !=='suspended'">
                    <span v-if="item.actions !=='delayed'">
                    <strong>{{detail.file}} </strong>
                    </span>
                  </span>
                  <span v-if="item.actions == 'delayed'">
                  </span>
                  <span v-if="item.actions == 'commented' ">
                    <strong v-html="item.comment" class="comment"></strong>
                  </span>
                  <span v-if="item.actions == 'edited' ">
                    <span v-if="item.old">{{$t('oldvalue')}}</span> <span v-html="item.old"></span>,<span v-if="item.new">{{$t('newvalue')}}</span> <span v-html="item.new"></span>
                  </span>
                  <span v-if="item.actions == 'activated'">
                    <span v-if="item.old">{{$t('oldvalue')}}</span> <span v-html="item.old"></span>,<span v-if="item.new">{{$t('newvalue')}}</span> <span v-html="item.new"></span> 
                  </span>
                </span>
              </div>
            </div>
            <div v-else class="footer">
              <span>{{$t('by')}} </span>
                <strong>{{item.actor}}</strong> 
                {{item.method}} 
                <span v-if="item.actions !== 'closed'">
                  <span v-if="item.actions !=='suspended'">
                    <span v-if="item.actions !=='delayed'">
                    <strong>{{item.file}} </strong>
                    </span>
                  </span>
                  <span v-if="item.actions == 'delayed'">
                  </span>
                  <span v-if="item.actions == 'commented' ">
                    <strong v-html="item.comment" class="comment"></strong>
                  </span>
                  <span v-if="item.actions == 'edited' ">
                    <span v-if="detail.old">{{$t('oldvalue')}}</span> <span v-html="detail.old"></span>,<span v-if="detail.ibiznew">{{$t('newvalue')}}</span> <span v-html="detail.ibiznew"></span>
                  </span>
                  <span v-if="item.actions == 'activated'">
                    <span v-if="detail.old">{{$t('oldvalue')}}</span> <span v-html="detail.old"></span>,<span v-if="detail.ibiznew">{{$t('newvalue')}}</span> <span v-html="detail.ibiznew"></span> 
                  </span>
                </span>
            </div>
      </div>
    </div>
    <div class="button" v-if="items.length > 3" ref="loadMore">
      <div @click="loadMore"><span>{{text}}</span></div>
    </div>
    <div class="zero" v-if="items.length == 0">
      <div>{{$t('nodata')}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop,Watch } from 'vue-property-decorator';
import { CodeListService } from "@/ibiz-core";


@Component({
    components: {},
    i18n: {
        messages: {
            'ZH-CN': {
                by: '由',
                oldvalue: '旧值为',
                newvalue: '新值为',
                nodata: '暂无记录',
            },
            'EN-US': {
                by: 'By',
                oldvalue: 'Old value:',
                newvalue: 'New value:',
                nodata: 'No data',
            }
        }
    }
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

    public listItems:Array<any> = [];

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
      if (this.items && this.items.length !== 0) {
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
    public handler() {
      if (this.items) {
        console.log(this.items)
        this.items.forEach((v:any) => {
          let file:string = "";
          let method:string = "";
          if (v.actions) {
            let info:any = this.getCodeList(this.codeListStandard.actions.tag,'STATIC',v.actions);
              v.method = info.text;
              method = info.text;
          }
          if (v.item.length > 0) {
            v.item.forEach((i:any) => {
              i.file = (this.$t(v.objecttype+'.fields.'+i.field.toLowerCase()) as string);
              v.old = i.old;
              v.new = i.ibiznew;
            });
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
    public codeListStandard :any= {
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
            for (let i = 0; i < this.num; i++) {
              if (ite[i] != undefined) {
                this.startHeig += ite[i].offsetHeight;
              }
            }
            for (let i = 0; i <= ite.length; i++) {
              if (ite[i] != undefined) {              
                this.endHeig += ite[i].offsetHeight;
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
    public setHeight() {
      let ele:any =  document.querySelector('.onecontent');
      let ite:any =  this.$refs.oneitem;
      if (ite !== undefined) {
        for(let i:any = 0; i < this.num; i++){
          if (ite[i] !== undefined) {
            this.startHeig += ite[i].offsetHeight;
          }
        }
      }
      if (ele && ele.style) {
        ele.style.height = this.startHeig + 'px';
      }
      const userAgent:string = navigator.userAgent;
      let isIOS = (userAgent: string) => /iphone/i.test(userAgent) || /ipod/i.test(userAgent) || /iPad/i.test(userAgent);
      if (isIOS(userAgent)) {
        let loadMore:any = this.$refs.loadMore;
        if (loadMore) {
          loadMore.style.marginBottom = "10px";
        }
      }
    }

    /**
     * 生命周期mounted
     *
     * @returns {void}
     * @memberof APPHistoryList
     */
    public mounted(){
      this.setHeight();
      // console.log("this.items",this.items)
    }

}
</script>

<style lang="less">
@import "./app-history-list.less";
</style>