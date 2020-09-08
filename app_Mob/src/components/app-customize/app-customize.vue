<template>
<ion-page :className="{ 'view-container': true, 'default-mode-view': true }">
      <ion-header>
        <ion-toolbar  class="ionoc-view-header">
            <ion-buttons slot="start">
                <ion-button @click="closeView">
                    <ion-icon name="chevron-back"></ion-icon>
                    {{$t('app.button.back')}}
                </ion-button>
            </ion-buttons>
            <ion-title class="view-title"><label class="title-label">自定义仪表盘</label></ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
  <div class="drag-list">
    <div class="drag-list-item added">
      <div class="header">已经添加的卡片</div>
      <draggable v-model="list_added" handle=".end" :animation="200" @end="dragEnd">
        <div class="content" v-for="item in list_added" :key="item.componentName">
          <div class="start" @click="delteItem(item.id)"><ion-icon name="remove-circle-outline"></ion-icon></div> 
          <div class="drag-list-pic"></div>
          <div class="drag-list-text">
            <div>{{item.appName}}</div>
            <div>{{item.portletName}}</div>
          </div>
          <div class="end">
            <ion-icon name = "drag-point"></ion-icon>
          </div>
        </div>
    </draggable>
    </div>

    <div class="drag-list-item add">
      <div class="header">可添加的卡片</div>
      <template v-for="item in list_add" >
        <div class="content" v-if="item.componentName"  :key="item.componentName">
            <div class="start" @click="addItem(item.id)"><ion-icon name="add-circle-outline"></ion-icon></div> 
          <div class="drag-list-pic"></div>
          <div class="drag-list-text">
            <div>{{item.appName}}</div>
            <div>{{item.portletName}}</div>
          </div>
         
        </div>
        </template>
    </div>
  </div>
  </ion-content>
  </ion-page >
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
import draggable from 'vuedraggable';
import { Http } from '@/ibiz-core/utils';
import UtilService from '@/utilservice/util-service';
@Component({
  components: {
    draggable,
  }
})
export default class App404 extends Vue {

  /**
   * 传入数据list_added
   *
   * @type {Array}
   * @memberof APPDragList
   */
  public list_added?:any = [
  ]

  /**
   * 视图参数
   *
   * @type {string}
   * @memberof AppRichTextEditor
   */
  @Prop() protected _viewparams!: string;

    /**
     * 工具服务对象
     *
     * @protected
     * @type {UtilService}
     * @memberof AppDashboardDesignService
     */
    protected utilService: UtilService = new UtilService();

  /**
   * 传入数据list_add
   *
   * @type {Array}
   * @memberof APPDragList
   */
  public list_add?:any = []

  /**
   * 减少item
   *
   * @returns {void}
   * @memberof APPDragList
   */
  public delteItem(id:any){
    let item:any = this.list_added.find((v:any) => v.id === id);
    let length:number = this.list_add.length;
    item.id = length + 1;
    this.list_added.splice(id-1, 1);
    this.list_added.forEach((v:any,i:any) => {
      v.id = i + 1;
    })
    this.list_add.push(item);
    this.customizeChange();
  }

  /**
   * 添加item
   *
   * @returns {void}
   * @memberof APPDragList
   */
  public addItem(id:any){
    let item:any = this.list_add.find((v:any) => v.id === id);
    let length:number = this.list_added.length;
    item.id = length + 1;
    this.list_add.splice(id-1, 1);
    this.list_add.forEach((v:any,i:any) => {
      v.id = i + 1
    })
    this.list_added.push(item);
    this.customizeChange();
  }

  /**
   * 拖拽结束
   *
   * @returns {void}
   * @memberof APPDragList
   */
  public dragEnd(){
    this.customizeChange();
    console.log(this.list_added)
  }

  /**
   * 监听list_added
   *
   * @returns {void}
   * @memberof APPDragList
   */
  @Watch('list_added',{immediate: true, deep: true})
  onListAdded(){
    this.list_added.forEach((v:any,i:any) => {
      v.id = i + 1;
    })
  }

  /**
   * 监听list_add
   *
   * @returns {void}
   * @memberof APPDragList
   */
  @Watch('list_add',{immediate: true, deep: true})
  onListAdd(){
    this.list_add.forEach((v:any,i:any) => {
      v.id = i + 1;
    })
  }

  /**
   * 生命周期created
   *
   * @returns {void}
   * @memberof APPDragList
   */
  public created(){
      this.loadPortletList({},{});
  }

  /**
   * 获取可添加仪表盘数据
   *
   * @memberof APPDragList
   */
  public loadPortletList(context: any, viewparams: any): Promise<any> {
      return new Promise((resolve: any, reject: any) => {
          Http.getInstance().get('./assets/json/portlet-data.json').then((response: any) => {
              if (response && response.status === 200 && response.data) {
                  let result:Array<any> = [];
                  if(typeof(response.data)=='string'){
                      const index:number = response.data.lastIndexOf(",");
                      result = JSON.parse((response.data));
                  }else{
                      result = response.data;
                  }
                  this.parseData(result);
                  console.log(result);
                  resolve({data: result});
              }
          }).catch((response: any) => {
              console.log(response);
          });
      });
  }

  /**
   * 解析data
   */
  public parseData(data:any) {
    this.selectMode.forEach((i:any,ins:number)=>{
          data.forEach((item:any,index:number) => {
            if(i.componentName == item.componentName){
              data.splice(index, 1);
            }
          });
    });
    this.list_add = data;
    this.list_added = this.selectMode;
    
  }

    /**
     * modleId
     *
     * @type {string}
     * @memberof MobHomeBase
     */
    public modelId:string = "";


    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof MobHomeBase
     */
    public utilServiceName:string = "";

  /**
   * customizeChange
   */
  public customizeChange() {
    this.saveModel(this.utilServiceName,{},{utilServiceName:this.utilServiceName,modelid:this.modelId,model:this.list_added});
  }

  /**
   * mounted
   */
  public mounted() {
    let parm :any= JSON.parse(this._viewparams);
    if(parm){
      this.modelId = parm.modelId?parm.modelId:"";
      this.utilServiceName =  parm.utilServiceName?parm.utilServiceName:"";
      this.selectMode =  parm.selectMode?parm.selectMode:"";
    }
    console.log(this.selectMode);
    
  }

  /**
   * 关闭视图
   */
  public closeView() {
    this.$emit("close", [this.selectMode]);
  }


  public selectMode = [];

    /**
     * 保存模型
     *
     * @param {string} serviceName
     * @param {*} context
     * @param {*} viewparams
     * @returns
     * @memberof AppDashboardDesignService
     */
    public saveModel(serviceName: string, context: any, viewparams: any) {
        return new Promise((resolve: any, reject: any) => {
            this.utilService.getService(serviceName).then((service: any) => {
                service.saveModelData(JSON.stringify(context), '', viewparams).then((response: any) => {
                    resolve(response);
                }).catch((response: any) => {
                    reject(response);
                });
            }).catch((response: any) => {
                reject(response);
            });
        });
    }


}
</script>
<style lang = "less">
@import "./app-customize.less";
</style>