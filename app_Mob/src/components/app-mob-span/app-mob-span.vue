<template>
    <div class="app-mob-span">
        <ion-icon v-if="currentItem && currentItem.iconcls" :name="currentItem.iconcls"></ion-icon><ion-input :style="{color:currentItem && currentItem.color?currentItem.color:''}" v-if="!codeListType" readonly :value="text" ></ion-input>
        <ion-input :style="{color:currentItem && currentItem.color?currentItem.color:''}" v-if="codeListType == 'DYNAMIC'" readonly :value="($t('userCustom.'+tag+'.'+value)!== ('userCustom.'+tag+'.'+value))?$t('userCustom.'+tag+'.'+value) : text" ></ion-input>
        <ion-input :style="{color:currentItem && currentItem.color?currentItem.color:''}" v-if="codeListType == 'STATIC'" readonly :value="($t('codelist.'+tag+'.'+value)!== ('codelist.'+tag+'.'+value))?$t('codelist.'+tag+'.'+value) : text" ></ion-input>
    </div>
</template>


<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, } from "vue-property-decorator";
import { CodeListService } from "@/ibiz-core";
import { Loading } from '@/ibiz-core/utils';
@Component({
  components: {}
})
export default class AppSpan extends Vue {

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppSelect
     */
    public codeListService: CodeListService = new CodeListService();

    /**
     * 代码表标识
     *
     * @type {string}
     * @memberof AppSelect
     */
    @Prop() public tag!: string;

    /**
     * 代码表类型 
     * STATIC：静态
     * DYNAMIC：动态
     *
     * @type {(string | 'STATIC' | 'DYNAMIC')}
     * @memberof Login
     */
    @Prop() public codeListType!: string | 'STATIC' | 'DYNAMIC';

    /**
     * 值
     *
     * @type {string}
     * @memberof AppSpan
     */
    @Prop() public value?: any;

    /**
     * 查询参数
     * @type {*}
     * @memberof AppSpan
     */
    public queryParam: any;


    /**
     * 当前选中值
     * @memberof AppSpan
     */
    public curValue:any = this.value

    /**
     * 代码表
     *
     * @type {any[]}
     * @memberof AppSpan
     */
    public items: any[] = [];

    /**
     * 显示值
     * @type {*}
     * @memberof AppSpan
     */
    public text:any = '';

    /**
     * vue  生命周期
     *
     * @memberof AppSpan
     */
    public created() {
        if (Object.is(this.codeListType, "STATIC")) {
            this.items = this.$store.getters.getCodeListItems(this.tag);
            this.setText();
        } else if(Object.is(this.codeListType, "DYNAMIC")) {
            this.load();
        }else{
            this.setText();
        }
    }

  /**
     * 是否缓存
     *
     * @type {*}
     * @memberof AppSelect
     */
    @Prop({ default: true }) protected isCache?: boolean;

    /**
     * 是否被缓存
     *
     * @type {*}
     * @memberof AppSpan
     */
    public isCached: boolean = false;

   /**
     * 应用上下文
     *
     * @type {*}
     * @memberof AppSpan
     */
    @Prop({ default: {} }) protected context?: any;

   /**
     * 当前值项
     *
     * @type {*}
     * @memberof AppSpan
     */
    public currentItem :any = {};


    /**
     * 监控值
     *
     * @memberof AppSpan
     */
    @Watch('value')
    public itemChange(){
        if(this.tag && Object.is(this.codeListType,"DYNAMIC")){
            this.load();
        }else{
            this.setText();
        }
    }

    /**
     * 加载代码表
     * 
     * @memberof AppSpan
     */
    public async load(): Promise<any>{
        if (Object.is(this.codeListType, "STATIC")) {
            return;
        }
        if (!this.isCached) {
            // Loading.show(this.$t('app.loadding'));
        }
        let response: any = await  this.codeListService.getItems(this.tag, this.isCache, { ...this.context }, this.queryParam);
        if (!this.isCached) {
            // Loading.hidden();
        }
        if (response) {
            this.items = response;
            this.setText();
            if (this.isCache) {
                this.isCached = true;
            }
        } else {
            this.items = [];
        }
    }

    /**
     * 设置显示值
     * @memberof AppSpan
     */
    public setText(){
      if(this.items.length>0){
          this.currentItem= this.items.find((item:any)=>{
              return item.value == this.value;
          });
          if(this.currentItem){
              this.text = this.currentItem.text;
          }else{
              // 不匹配显示原值，不存在显示空值
              if(this.value){
                  this.text = this.value;
              }
          }
      }else{
          this.text = this.value;
      }
    }

}
</script>
<style lang="less">
.app-mob-span{
    width: 100%;
    display: flex;
}
</style>