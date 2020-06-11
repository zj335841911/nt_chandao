<template>
    <div class='panel-container'>
    <row class="app-layoutpanel">
        <i-col v-show="detailsModel.container1.visible"  style="" class="app-layoutpanel-container">
            <row style="height:100%;">
                      
                <i-col v-show="detailsModel.name.visible"  :md="{ span: 24, offset: 0 }" style="" class="app-layoutpanel-field">
                    <div class="item-field">
                    
                    <div class="item-field-content">
                    <span>{{data.name}}</span>
                    </div>
                </div>
                
                
                </i-col>
                      <i-col v-show="detailsModel.container2.visible"  :md="{ span: 24, offset: 0 }" style="" class="app-layoutpanel-container">
                    <row style="height:100%;">
                              
                        <i-col v-show="detailsModel.assignedto.visible"  :md="{ span: 12, offset: 2 }" :lg="{ span: 12, offset: 2 }" style="" class="app-layoutpanel-field">
                            <div class="item-field">
                            
                            <div class="item-field-content">
                            <span>{{data.assignedto}}</span>
                            </div>
                        </div>
                        
                        
                        </i-col>
                              
                        <i-col v-show="detailsModel.estimate.visible"  :md="{ span: 2, offset: 0 }" :lg="{ span: 2, offset: 8 }" style="" class="app-layoutpanel-field">
                            <div class="item-field">
                            
                            <div class="item-field-content">
                            <span>{{data.estimate}}</span>
                            </div>
                        </div>
                        
                        
                        </i-col>
                    </row>
                </i-col>
            </row>
        </i-col>
    </row>
</div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import TaskService from '@/service/task/task-service';
import TaskKanBanService from './task-kan-ban-panel-service';

import { FormItemModel } from '@/model/form-detail';
import TaskKanBanModel from './task-kan-ban-panel-model';
import CodeListService from "@service/app/codelist-service";


@Component({
    components: {
      
    }
})
export default class TaskKanBanBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TaskKanBan
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TaskKanBan
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof TaskKanBan
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TaskKanBan
     */
    public getControlType(): string {
        return 'PANEL'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TaskKanBan
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {TaskKanBanService}
     * @memberof TaskKanBan
     */
    public service: TaskKanBanService = new TaskKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskKanBan
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof TaskKanBan
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof TaskKanBan
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }


    /**
     * 接口实现
     *
     * @returns {any[]}
     * @memberof TaskKanBan
     */
    getDatas(): any[] {
        if (!this.panelData) {
            return [];
        }
        return [this.panelData];
    }

    /**
     * 接口实现
     *
     * @returns {*}
     * @memberof TaskKanBan
     */
    getData() {
        return this.data;
    }

    /**
     * 父级部件引用
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    @Prop() public parentRef?: any;

    /**
     * 面板数据对象
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    @Prop() public inputData?: any;

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof TaskKanBan
     */
    public codeListService:CodeListService = new CodeListService({ $store:this.$store });

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    public detailsModel: any = {
        name: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        assignedto: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        estimate: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container2: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
    };

    /**
     * 面板逻辑
     *
     * @public
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof TaskKanBan
     */
    public panelLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                





    }

    /**
     * 数据模型对象
     *
     * @type {TaskKanBanModel}
     * @memberof TaskKanBan
     */
    public dataModel:TaskKanBanModel = new TaskKanBanModel();

    /**
     * UI数据对象
     *
     * @type {*}
     * @memberof TaskKanBan
     */
    public data:any = {};

    /**
     * 面板数据对象
     *
     * @type {*}
     * @memberof Mob
     */
    public panelData:any = null;

    /**
     * 监听数据对象
     *
     * @memberof TaskKanBan
     */
    @Watch('inputData',{immediate:true})
    async onInputDataChange(newVal: any, oldVal: any){
        if(newVal){
            await this.computedUIData(newVal);
            this.panelLogic({ name: '', newVal: null, oldVal: null });
            this.$forceUpdate();
        }
    }

    /**
     * 计算UI展示数据
     * 
     * @param codelistArray 代码表模型数组
     * @memberof TaskKanBan
     */
    public async computedUIData(newVal:any){
        let codelistArray:Array<any> = [];
        if((this.dataModel.getDataItems instanceof Function) && this.dataModel.getDataItems().length >0){
            this.dataModel.getDataItems().forEach((item:any) =>{
                if(item.codelist){
                    codelistArray.push(item.codelist);
                }
            })
            if(codelistArray.length >0){
                let res:any = await this.getAllCodeList(codelistArray);
                this.dataModel.getDataItems().forEach((item:any) =>{
                    if(item.codelist){
                        this.data[item.name] = res.get(item.codelist.tag).get(newVal[item.prop]);
                    }else{
                        this.data[item.name] = newVal[item.prop];
                    }
                })
            }else{
                this.dataModel.getDataItems().forEach((item:any) =>{
                    this.data[item.name] = newVal[item.prop];
                }) 
            }
        }
    }

    /**
     * 计算面板数据
     * 
     * @param codelistArray 代码表模型数组
     * @memberof Mob
     */
    public async computePanelData(){
        let codelistArray:Array<any> = [];
        let panelData:any = {};
        if((this.dataModel.getDataItems instanceof Function) && this.dataModel.getDataItems().length >0){
            this.dataModel.getDataItems().forEach((item:any) =>{
                if(item.codelist){
                    codelistArray.push(item.codelist);
                }
            })
            if(codelistArray.length >0){
                let res:any = await this.getAllCodeList(codelistArray,true);
                this.dataModel.getDataItems().forEach((item:any) =>{
                    if(item.codelist){
                        panelData[item.prop]  = res.get(item.codelist.tag).get(this.inputData[item.name]);
                    }else{
                        panelData[item.prop] = this.inputData[item.name];
                    }
                })
            }else{
                this.dataModel.getDataItems().forEach((item:any) =>{
                    panelData[item.prop] = this.inputData[item.name];
                }) 
            }
        }
         this.panelData = Object.assign(JSON.parse(JSON.stringify(this.inputData)),panelData);
    }

    /**
     * 获取所有代码表
     * 
     * @param codelistArray 代码表模型数组
     * @memberof TaskKanBan
     */
    public getAllCodeList(codelistArray:Array<any>,reverse:boolean = false):Promise<any>{
        return new Promise((resolve:any,reject:any) =>{
            let codeListMap:Map<string,any> = new Map();
            let promiseArray:Array<any> = [];
            codelistArray.forEach((item:any) =>{
                if(!codeListMap.get(item.tag)){
                    promiseArray.push(this.getCodeList(item));
                    Promise.all(promiseArray).then((result:any) =>{
                        if(result && result.length >0){
                            result.forEach((codeList:any) =>{
                                let tempCodeListMap:Map<number,any> = new Map();
                                if(codeList.length >0){
                                    codeList.forEach((codeListItem:any) =>{
                                        if(reverse){
                                            tempCodeListMap.set(codeListItem.text,codeListItem.value);
                                        }else{
                                            tempCodeListMap.set(codeListItem.value,codeListItem.text);
                                        }
                                    })
                                }
                                codeListMap.set(item.tag,tempCodeListMap);       
                            })
                            resolve(codeListMap);
                        }
                    })
                }
            })
        })
    }

    /**
     * 获取代码表
     * 
     * @param codeListObject 传入代码表对象
     * @memberof TaskKanBan
     */
    public getCodeList(codeListObject:any):Promise<any>{
        return new Promise((resolve:any,reject:any) =>{
            if(codeListObject.tag && Object.is(codeListObject.codelistType,"STATIC")){
                const codelist = this.$store.getters.getCodeList(codeListObject.tag);
                if (codelist) {
                    resolve([...JSON.parse(JSON.stringify(codelist.items))]);
                } else {
                    resolve([]);
                    console.log(`----${codeListObject.tag}----代码表不存在`);
                }
            }else if(codeListObject.tag && Object.is(codeListObject.codelistType,"DYNAMIC")){
                this.codeListService.getItems(codeListObject.tag).then((res:any) => {
                    resolve(res);
                }).catch((error:any) => {
                    resolve([]);
                    console.log(`----${codeListObject.tag}----代码表不存在`);
                });
            }
        })
    }

    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof TaskKanBan
     */
    public async uiAction(row: any, tag: any, $event: any) {
        await this.computePanelData();
    }

    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof TaskKanBan
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any){
        if (this.parentRef.opendata && this.parentRef.opendata instanceof Function) {
            this.parentRef.opendata(args,fullargs,params, $event, xData);
        }
    }

    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof TaskKanBan
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        if (this.parentRef.newdata && this.parentRef.newdata instanceof Function) {
            this.parentRef.newdata(args,fullargs,params, $event, xData);
        }
    }
    
    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof TaskKanBan
     */
    public async remove(datas: any[]): Promise<any> {
        if (this.parentRef.remove && this.parentRef.remove instanceof Function) {
            return this.parentRef.remove(datas);
        }
    }

    /**
     * 刷新
     *
     * @param {*} [opt={}]
     * @memberof Main
     */
    public refresh(opt: any = {}) {
        if (this.parentRef.refresh && this.parentRef.refresh instanceof Function) {
            this.parentRef.refresh(opt);
        }
    }

}
</script>

<style lang='less'>
@import './task-kan-ban-panel.less';
</style>

