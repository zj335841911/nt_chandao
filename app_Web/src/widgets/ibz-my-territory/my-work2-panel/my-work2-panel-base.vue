<template>
    <div class='view-container'>
    <row class="app-layoutpanel">
        <div class="app-layoutpanel-container" style="">
            <div style="height:100%;display: flex;">
                <div class="app-layoutpanel-container container-top-margin" style="width: 230px;">
                    <div style="height:100%;display: flex;justify-content: flex-start;align-items: flex-start;">
                        
                        <div style="font-size:20px;font-weight:bold" class="app-layoutpanel-field  panelitem-20px">
                            <div class="item-field">
                            <span class="item-field-label "></span>
                            <div class="item-field-content">
                            <span>{{data.realname}}</span>
                            </div>
                        </div>
                        
                        
                        </div>
                    </div>
                </div>
                <div class="app-layoutpanel-container" style="flex-grow: 1;">
                    <div style="height:100%;display: flex;flex-direction: column;">
                        <div class="app-layoutpanel-container container-updown-margin" style="">
                            <div style="height:100%;display: flex;flex-direction: row;">
                                
                                <div style="" class="app-layoutpanel-rowitem">
                                    今天剩余工作总计
                                
                                
                                </div>
                            </div>
                        </div>
                        <div class="app-layoutpanel-container container-left-border" style="flex-grow: 1;">
                            <div style="height:100%;display: flex;justify-content: space-around;align-items: flex-start;">
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            我的任务
                                        
                                        
                                        </div>
                                        
                                        <div style="text-align:center" class="app-layoutpanel-field  text-center">
                                            <div class="item-field">
                                            <span class="item-field-label "></span>
                                            <div class="item-field-content">
                                            <span>{{data.mytasks}}</span>
                                            </div>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-field  text-center-red">
                                            <div class="item-field">
                                            <span class="item-field-label "></span>
                                            <div class="item-field-content">
                                            <span>{{data.myetasks}}</span>
                                            </div>
                                        </div>
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            我的bug
                                        
                                        
                                        </div>
                                        
                                        <div style="text-align:center" class="app-layoutpanel-field  text-center">
                                            <div class="item-field">
                                            <span class="item-field-label "></span>
                                            <div class="item-field-content">
                                            <span>{{data.mybugs}}</span>
                                            </div>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-field  text-center-red">
                                            <div class="item-field">
                                            <span class="item-field-label "></span>
                                            <div class="item-field-content">
                                            <span>{{data.myebugs}}</span>
                                            </div>
                                        </div>
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            我的需求
                                        
                                        
                                        </div>
                                        
                                        <div style="text-align:center" class="app-layoutpanel-field  text-center">
                                            <div class="item-field">
                                            <span class="item-field-label "></span>
                                            <div class="item-field-content">
                                            <span>{{data.mystorys}}</span>
                                            </div>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-rowitem text-center-red">
                                            ---
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            未关闭的项目
                                        
                                        
                                        </div>
                                        
                                        <div style="text-align:center" class="app-layoutpanel-field  text-center">
                                            <div class="item-field">
                                            <span class="item-field-label "></span>
                                            <div class="item-field-content">
                                            <span>{{data.projects}}</span>
                                            </div>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-field  text-center-red">
                                            <div class="item-field">
                                            <span class="item-field-label "></span>
                                            <div class="item-field-content">
                                            <span>{{data.eprojects}}</span>
                                            </div>
                                        </div>
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="app-layoutpanel-container" style="">
                                    <div style="height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                        
                                        <div style="" class="app-layoutpanel-rowitem">
                                            未关闭的产品
                                        
                                        
                                        </div>
                                        
                                        <div style="text-align:center" class="app-layoutpanel-field  text-center">
                                            <div class="item-field">
                                            <span class="item-field-label "></span>
                                            <div class="item-field-content">
                                            <span>{{data.products}}</span>
                                            </div>
                                        </div>
                                        
                                        
                                        </div>
                                        
                                        <div style="color:rgba(255, 93, 93, 1);text-align:center" class="app-layoutpanel-rowitem text-center-red">
                                            ---
                                        
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </row>
</div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import MyWork2Service from './my-work2-panel-service';



@Component({
    components: {
      
    }
})
export default class MyWork2Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyWork2
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyWork2
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyWork2
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyWork2
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyWork2
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyWork2
     */
    protected getControlType(): string {
        return 'PANEL'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MyWork2
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MyWork2Service}
     * @memberof MyWork2
     */
    protected service: MyWork2Service = new MyWork2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MyWork2
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MyWork2
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MyWork2
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
     * @memberof MyWork2
     */
    getDatas(): any[] {
        if (!this.data) {
            return [];
        }
        return [this.data];
    }
    getData() {
        return this.data;
    }

    /**
     * 面板数据对象
     *
     * @type {*}
     * @memberof MyWork2
     */
    @Prop() protected data?: any;


}
</script>

<style lang='less'>
@import './my-work2-panel.less';
</style>

