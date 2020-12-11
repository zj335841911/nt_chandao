<template>
    <div class="app-task-list-item">
        <div class="app-task-list-item_top">
            <div class="multiple" v-if="item.multiple == '1'">多</div>
            <div class="multiple" v-else-if="item.parent == '1'">父</div>
            <div class="multiple" v-else-if="item.isleaf == '1'">子</div>
            <strong><div class="name" :style="{'color':item.color}"> {{item.srfmajortext}}</div></strong>
            <!-- <div class="pri">{{item.pri_text}}</div> -->
        </div>
        <div class="app-task-list-item_bottom">
            <div class="speace">{{item.tasktype_text}}</div>
            <div class="status" :style="{'color':item.status_color}">{{item.status_text}}</div>
            <div class="openeddate">{{item.openeddate}}</div>
            <div class="assignedto"><div class="assignedto_item">{{item.assignedto_text}}</div></div>
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
export default class appTaskList extends Vue {

    /**
     * 列表项
     */
    @Prop() protected item?: any;
    @Watch('item')
    on_item_change(){
        this.parseData();
    }

    /**
     * 任务优先级代码表
     */
    public Task__pri: any;

    /**
     * 任务状态代码表
     */
    public Task__status: any;
    
    /**
     * 用户真实名称
     */
    public UserRealName: any;

    /**
     * 任务类型
     */
    public Task__type : any;

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
        this.item.pri_text = this.getCodeListText('Task__pri',this.item.pri).label;
        this.item.status_text = this.getCodeListText('Task__status',this.item.status).label;
        this.item.status_color = this.getCodeListText('Task__status',this.item.status).color;
        this.item.assignedto_text = this.getCodeListText('UserRealName',this.item.assignedto).label;
        this.item.tasktype_text = this.getCodeListText('Task__type',this.item.type).label;

        this.item.openeddate = this.item.openeddate.substring(5,10);
        this.item.assignedto_text = this.item.assignedto_text.substring(0,1);
        this.$forceUpdate();
    }

    /**
     * 初始化代码表
     */
    public async initCodeList():Promise<any>{
        this.Task__pri = this.$store.getters.getCodeList('Task__pri').items;
        this.Task__status = this.$store.getters.getCodeList('Task__status').items;
        this.Task__type =this.$store.getters.getCodeList('Task__type').items;
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
@import "./app-task-list";
</style>