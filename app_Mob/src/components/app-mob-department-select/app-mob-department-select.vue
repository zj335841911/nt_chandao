<template>
  <div class="app-mob-department-select">
    <div class="checkField">
      <ion-input :disabled="disabled" :value="curValue" readonly @click="openModal">
        <div class="icon">
          <svg t="1608543874255" class="icon" viewBox="0 0 1165 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2970" width="200" height="200"><path d="M1107.30913719 909.45959375l-186.86323313-145.37686875a479.97811781 479.97811781 0 1 0-69.42107062 87.6783975q13.80107531-13.80107531 26.30518125-28.51668l185.08405875 143.96350594a36.58116281 36.58116281 0 1 0 44.89506375-57.73172719z m-594.79308657 9.37807969c-223.66055812 0-405.63521719-181.95803156-405.63521718-405.63521719S288.80560906 107.56723906 512.46616719 107.56723906 918.10138437 289.59178156 918.10138437 513.20245625 736.14335281 918.83767344 512.46616719 918.83767344z" fill="#474747" p-id="2971"></path></svg>
        </div>
      </ion-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Model } from 'vue-property-decorator';
import {CodeListService} from "@/ibiz-core";
@Component({
})
export default class AppMobDepartmentSelect extends Vue {

    /**
     * 接口url
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public url?: any;

    /**
     * 代码表标识
     * 
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public tag?:string;

    /**
     * 代码表类型
     * 
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public codelistType?:string;

    /**
     * 过滤项
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public filter?: any;

    /**
     * 过滤项
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public fillMap?: any;

    /**
     * 是否多选
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop({default:false}) public multiple?: any;

    /**
     * 是否禁用
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop({default:false}) public disabled?: boolean;

    /**
     * 表单数据
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public data!: any;

    /**
     * 上下文变量
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public context!: any;

    /**
     * 选中数值
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    public selectTreeValue:any = "";

    /**
     * 选中回填
     * 
     * @type {*}
     */
    public curValue: any = '';

    /**
     * 树节点数据
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    public Nodesdata: any[] = [];

    /**
     * 当前树节点数据的url
     *
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    public oldurl: any;

    /**
     * 获取节点数据
     *
     * @memberof AppMobDepartmentSelect
     */
    public handleFilter(){
      if(this.filter){
          if(this.data && this.data[this.filter]){
            return this.data[this.filter];
          }else if(this.context && this.context[this.filter]){
            return this.context[this.filter];
          }
      }else{
          return this.context.srforgid;
      }
    }

    /**
     * 获取节点数据
     *
     * @memberof AppMobDepartmentSelect
     */
    public searchNodesData(){
      // 处理过滤参数，生成url
      let param = this.handleFilter();
      let _url = this.url.replace('${orgid}',param)
      if(this.oldurl === _url){
          return;
      }
      this.oldurl = _url;
      // 缓存机制
      const result:any = this.$store.getters.getDepData(_url);
      if(result){
        this.Nodesdata = result;
        return;
      }
      this.$http.get(_url).then((response: any) => {
          this.Nodesdata = response.data;
          this.$store.commit('addDepData', { srfkey: _url, depData: response.data });
      }).catch((response: any) => {
          if (!response || !response.status || !response.data) {
            //   this.$Notice.error({ title: (this.$t('app.commonWords.error') as string), desc: (this.$t('app.commonWords.sysException') as string) });
              return;
          }
      });
    }

    /**
     * 值变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof AppMobDepartmentSelect
     */
    @Watch('data',{immediate:true,deep:true})
    public onValueChange(newVal: any, oldVal: any) {
        if(newVal){
          this.computedSelectedData();
          this.$nextTick(()=>{
            this.searchNodesData();
          });
        }
    }

    /**
     * 计算选中值
     * 
     * @memberof AppOrgSelect
     */
    public computedSelectedData(){
      // 单选
      if(!this.multiple){
        if(this.fillMap && Object.keys(this.fillMap).length >0){
        let templateValue:any = {};
        Object.keys(this.fillMap).forEach((item:any) =>{
          if(this.data && this.data[this.fillMap[item]]){
            Object.assign(templateValue,{[item]:this.data[this.fillMap[item]]});
          }
        })
          if(!templateValue.label && templateValue.id && this.tag && this.codelistType && Object.is(this.codelistType,"DYNAMIC")){
            this.fillLabel(templateValue,templateValue.id,(templateValue:any) =>{
              this.selectTreeValue = JSON.stringify([templateValue]);
            });
          }else{
            this.selectTreeValue = JSON.stringify([templateValue]);
          }
        }
      }else{
      // 多选
        if(this.fillMap && Object.keys(this.fillMap).length >0){
          let tempArray:Array<any> = [];
          Object.keys(this.fillMap).forEach((item:any) =>{
            if(this.data && this.data[this.fillMap[item]]){
              let tempDataArray:Array<any> = (this.data[this.fillMap[item]]).split(",");
              tempDataArray.forEach((tempData:any,index:number) =>{
                if(tempArray.length < tempDataArray.length){
                  let singleData:any ={[item]:tempData};
                  tempArray.push(singleData);
                }else{
                  Object.assign(tempArray[index],{[item]:tempData});
                }
              })
            }
          })
          let tempflag:boolean = false;
          if(tempArray.length >0 && tempArray.length >0){
            tempArray.forEach((item:any) =>{
              if(!item.label) tempflag = true;
            })
          }
          if(tempflag && this.tag && this.codelistType && Object.is(this.codelistType,"DYNAMIC")){
            let tempStatus:number = 0;
            tempArray.forEach((item:any) =>{
              if(!item.label){
                tempStatus += 1;
                this.fillLabel(item,item.id,(result:any) =>{
                  item = result;
                  tempStatus -= 1;
                  if(tempStatus === 0){
                    this.selectTreeValue = JSON.stringify(tempArray);
                  }
                })
              }
            })
          }else{
            this.selectTreeValue = JSON.stringify(tempArray);
          }
        }
      }
    } 

    /**
     * select事件处理
     * 
     * @param {*} $event
     * @memberof AppMobDepartmentSelect
     */
    public onSelect($event:any){
        // 组件自身抛值事件
        let selectArr = JSON.parse($event);
        // fillMap抛值事件
        if(this.fillMap && Object.keys(this.fillMap).length > 0){
            Object.keys(this.fillMap).forEach((attribute:string) => {
                let _name = this.fillMap[attribute];
                let values = selectArr.map((item:any) => item[attribute]);
                let _value = $event === "[]" ? null : values.join(",");
                setTimeout(() => {
                  this.$emit('select-change',{name: this.fillMap[attribute], value: _value});
                },0);
            });
        }
    }

  /**
   * 填充label
   * 
   * @memberof AppOrgSelect
   */
  public fillLabel(tempObject:any,valueItem:any,callback:any){
    if(!tempObject.label && tempObject.id && this.tag && this.codelistType && Object.is(this.codelistType,"DYNAMIC")){
      let codeListService:CodeListService = new CodeListService();
      codeListService.getItems(this.tag).then((items:any) =>{
        if(items && items.length >0){
          let result:any = items.find((item:any) =>{
            return item.id === valueItem;
          })
          Object.assign(tempObject,{label:result.label});
        }
        callback(tempObject);
      }).catch((error:any) =>{
        console.log(error);
      })
    }
  }
  
  /**
   * 打开模态
   * 
   * @memberof AppOrgSelect
   */
  public async openModal(){
    const view: any = {
        viewname: 'app-tree',
        title: (this.$t('components.AppMobGroupSelect.groupSelect') as string)
    };
    const context: any = JSON.parse(JSON.stringify(this.context));
    let filtervalue:string = "";
    if(this.filter){
        if(this.data[this.filter]){
            filtervalue = this.data[this.filter];
        }else if(context[this.filter]){
            filtervalue = context[this.filter];
        }else{
            filtervalue = context.srforgid;
        }
    }else{
        filtervalue = context.srforgid;
    }
    const param: any = {};
    Object.assign(param, {
      selectTreeValue:this.selectTreeValue,
      multiple:this.multiple,
      nodesData: this.Nodesdata
    });
    let container: any = await this.$appmodal.openModal(view, context, param);
    this.closeModal(container);
  }

  /**
     * 模态关闭
     *
     * @memberof AppOrgSelect
     */  
    public closeModal(result: any) {
       let checkValue: any[] = [];
       result.datas.forEach((item: any)=>{
         checkValue.push(item.label);
       })
       this.curValue = checkValue.join(',');
       this.$emit('select-change',{name: this.fillMap.label, value: this.curValue });
    }

}
</script>

<style lang='less'>
@import './app-mob-department-select.less';
</style>