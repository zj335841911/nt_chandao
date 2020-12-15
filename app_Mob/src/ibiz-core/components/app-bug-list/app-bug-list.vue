<template>
    <div class="app-bug-list-item">
        <div class="app-bug-list-item_top">
            <strong><div class="name" :style="{'color':item.color}"> {{item.srfmajortext}}</div></strong>
            <div :class="item.pri_className">{{item.pri_text}}</div>
            <div class="severity" :style="{'color':item.severity_color}">{{item.severity_text}}</div>
        </div>
        <div class="app-bug-list-item_bottom">
            <div class="status" :style="{'color':item.status_color}">{{item.status_text}}</div>
            <div class="speace">{{item.tasktype_text}}</div>
            <div class="deadline">{{item.deadline}}</div>
            <div class="delayresolve" >{{item.delayresolve}}</div>
            <div class="assignedto" v-if="item.assignedto_text">
                <div  class="assignedto_item" >{{item.assignedto_text}}</div>
            </div>
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
export default class appBugList extends Vue {

    /**
     * 列表项
     */
    @Prop() protected item?: any;
    @Watch('item')
    on_item_change(){
        this.parseData();
    }


    /**
     * bug优先级代码表
     */
    public Bug__pri: any;

    /**
     * bug状态代码表
     */
    public Bug__status: any;

    /**
     * bug严重程度代码表
     */
    public Bug__severity:any;
    
    /**
     * 用户真实名称
     */
    public UserRealName: any;

    /**
     * bug类型
     */
    public Bug__type : any;

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
        this.item.pri_text = this.getCodeListText('Bug__pri',this.item.pri).label;
        this.item.pri_className = this.getCodeListText('Bug__pri',this.item.pri).className;
        this.item.status_text = this.getCodeListText('Bug__status',this.item.status).label;
        this.item.status_color = this.getCodeListText('Bug__status',this.item.status).color;
        this.item.severity_text = this.getCodeListText('Bug__severity',this.item.severity).label;
        this.item.severity_color = this.getCodeListText('Bug__severity',this.item.severity).color;
        this.item.tasktype_text = this.getCodeListText('Bug__type',this.item.type).label;
        // 设置指派名称
        this.item.assignedto_text = this.getCodeListText('UserRealName',this.item.assignedto).label;

        this.$forceUpdate();
    }

    /**
     * 初始化代码表
     */
    public async initCodeList():Promise<any>{
        this.Bug__pri = this.$store.getters.getCodeList('Bug__pri').items;
        this.Bug__status = this.$store.getters.getCodeList('Bug__status').items;
        this.Bug__type =this.$store.getters.getCodeList('Bug__type').items;
        this.Bug__severity = this.$store.getters.getCodeList('Bug__severity').items;
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
@import "./app-bug-list";
</style>