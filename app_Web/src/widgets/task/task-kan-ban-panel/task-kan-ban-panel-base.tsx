import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TaskKanBanService from './task-kan-ban-panel-service';
import TaskUIService from '@/uiservice/task/task-ui-service';
import { FormItemModel } from '@/model/form-detail';
import TaskKanBanModel from './task-kan-ban-panel-model';
import CodeListService from "@service/app/codelist-service";


/**
 * itemlayoutpanel部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TaskKanBanPanelBase}
 */
export class TaskKanBanPanelBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {TaskKanBanService}
     * @memberof TaskKanBanPanelBase
     */
    public service: TaskKanBanService = new TaskKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TaskKanBanPanelBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TaskKanBanPanelBase
     */
    protected appDeName: string = 'task';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public itemlayoutpanel_button1_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:TaskUIService  = new TaskUIService();
        curUIService.Task_AssignTask(datas,contextJO, paramJO,  $event, xData,this,"Task");
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
        rawitem1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        button1: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        assignedto: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        deadline: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        rawitem2: new FormItemModel({ visible: false, disabled: false, enableCond: 3 }), 
        container4: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container2: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        estimate: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container3: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        project: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        module: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        story: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        pri: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        desc: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        mailto: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        parent: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        eststarted: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        consumed: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        color: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
        container5: new FormItemModel({ visible: true, disabled: false, enableCond: 3 }), 
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
                





        if (Object.is(name, '') || Object.is(name, 'deadline')) {
            let ret = false;
            const _deadline = this.data.deadline;
            if (this.$verify.testCond(_deadline, 'LT', '%SRFCURDATA%')) {
                ret = true;
            }
            this.detailsModel.rawitem2.setVisible(ret);
        }

















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
                        panelData[item.prop]  = res.get(item.codelist.tag).get(this.data[item.name]);
                    }else{
                        panelData[item.prop] = this.data[item.name];
                    }
                })
            }else{
                this.dataModel.getDataItems().forEach((item:any) =>{
                    panelData[item.prop] = this.data[item.name];
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
        if(Object.is('AssignTask', tag)) {
            this.itemlayoutpanel_button1_click(row, tag, $event);
        }
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

    
    /**
     * 设置面板编辑项值变更
     *  
     * @param data 面板数据
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof TaskKanBan
     */
    public onPanelItemValueChange(data: any,$event: { name: string, value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !data.hasOwnProperty($event.name)) {
            return;
        }
        data[$event.name] = $event.value;
        this.panelEditItemChange(data, $event.name, $event.value);
    }

    /**
     * 面板编辑项值变化
     *
     * @public
     * @param data 面板数据
     * @param property 编辑项名
     * @param value 编辑项值
     * @returns {void}
     * @memberof TaskKanBan
     */
    public panelEditItemChange(data: any, property: string, value: any){
        

    }

}