<template>
    <div class="app-projectteam-list-item">
        <div class="app-projectteam-list-item_top">
            <div class="account_part">
              <div class="account_part_item">{{item.account_part}}</div>
            </div>
            <div>{{item.account_text}}</div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from "vue-property-decorator";
import { ImagePreview } from 'vant';
import { Environment } from "@/environments/environment";
import { CodeListService } from "@/ibiz-core";
@Component({
  components: { [ImagePreview.Component.name]: ImagePreview.Component, }
})
export default class appProjectTeamList extends Vue {
    /**
     * 列表项
     */
    @Prop() protected item?: any;
    @Watch('item')
    on_item_change(){
      this.parseData();
    }

    /**
     * 用户真实名称
     */
    public UserRealName: any;

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof AppReportList
     */
    public codeListService: CodeListService = new CodeListService();

    /**
     * 解析
     */
    public parseData(){
        this.item.account_text = this.getCodeListText('UserRealName',this.item.account).label;
        this.item.account_part = this.item.assignedto_text.substring(0, 1);
        this.$forceUpdate();
    }

    /**
     * 初始化代码表
     */
    public async initCodeList():Promise<any>{

        this.UserRealName = await this.codeListService.getItems('UserRealName');
        return true
    }

    /**
     * 获取代码表文本
     */
    public getCodeListText(tag:string,id:string):any{
        let _this: any = this;
        if(!_this[tag]){
          return id;
        }
        let index = _this[tag].findIndex((item:any) => { return item.value == id })
        return index > -1 ? _this[tag][index]: id;
    }

    /**
     * 生命周期
     */
    public created(){
        this.initCodeList().then((res)=>{
          this.parseData();
        });
    }
}
</script>
<style lang="less">
@import "./app-projectteam-list";
</style>