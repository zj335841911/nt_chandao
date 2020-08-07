<template>
    <div class='view-container'>
    <row class="app-layoutpanel">
        <i-col  style="" class="app-layoutpanel-container">
            <row style="height:100%;">
                
                <i-col  :md="24" style="" class="app-layoutpanel-field">
                    <div class="item-field">
                    <span class="item-field-label "></span>
                    <div class="item-field-content">
                    <span>{{data.title}}</span>
                    </div>
                </div>
                
                
                </i-col>
                
                <i-col  :md="24" style="" class="app-layoutpanel-rowitem">
                    <br/>
                
                
                </i-col>
                <i-col  :md="24" style="" class="app-layoutpanel-container">
                    <row style="height:100%;">
                        
                        <i-col  :lg="2" :md="24" style="" class="app-layoutpanel-field">
                            <div class="item-field">
                            <span class="item-field-label "></span>
                            <div class="item-field-content">
                            <span>{{data.pri}}</span>
                            </div>
                        </div>
                        
                        
                        </i-col>
                        
                        <i-col  :lg="14" :md="24" style="" class="app-layoutpanel-field">
                            <div class="item-field">
                            <span class="item-field-label ">状态</span>
                            <div class="item-field-content">
                            <span>{{data.status}}</span>
                            </div>
                        </div>
                        
                        
                        </i-col>
                        
                        <i-col  :lg="2" :md="24" style="" class="app-layoutpanel-field">
                            <div class="item-field">
                            <span class="item-field-label ">h</span>
                            <div class="item-field-content">
                            <span>{{data.estimate}}</span>
                            </div>
                        </div>
                        
                        
                        </i-col>
                        
                        <i-col  :lg="3" :md="24" style="" class="app-layoutpanel-rowitem">
                            h
                        
                        
                        </i-col>
                        
                        <i-col  :lg="3" :md="3" style="" class="app-layoutpanel-button">
                            <i-button type="primary" long @click="button1_click($event)"  style="height: 24px;">
                            <i class="fa fa-unlink"></i>
                        </i-button>
                        
                        
                        </i-col>
                    </row>
                </i-col>
            </row>
        </i-col>
        <i-col  style="" class="app-layoutpanel-container">
            <row style="height:100%;">
                !!!!模版产生代码错误:----
                FTL stack trace ("~" means nesting-related):
                	- Failed at: ${P.getEditorCode(item, "PANELEDITOR...  [in template "TEMPLCODE_en_US" at line 5, column 5]
                ----
                无法获取指定编辑器[HIDDEN]发布代码[PANELFIELD][PANELEDITOR.vue]模板
                !!!!模版产生代码错误:----
                FTL stack trace ("~" means nesting-related):
                	- Failed at: ${P.getEditorCode(item, "PANELEDITOR...  [in template "TEMPLCODE_en_US" at line 5, column 5]
                ----
                无法获取指定编辑器[HIDDEN]发布代码[PANELFIELD][PANELEDITOR.vue]模板
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
import StoryService from '@/service/story/story-service';
import StoryKanBanService from './story-kan-ban-panel-service';

import StoryUIService from '@/uiservice/story/story-ui-service';


@Component({
    components: {
      
    }
})
export default class StoryKanBanBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof StoryKanBan
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof StoryKanBan
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof StoryKanBan
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof StoryKanBan
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof StoryKanBan
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof StoryKanBan
     */
    protected getControlType(): string {
        return 'PANEL'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof StoryKanBan
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {StoryKanBanService}
     * @memberof StoryKanBan
     */
    protected service: StoryKanBanService = new StoryKanBanService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryKanBan
     */
    protected appEntityService: StoryService = new StoryService({ $store: this.$store });
    

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected itemlayoutpanel_button1_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        Object.assign(paramJO,{});
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ProjectUnlinkStory(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof StoryKanBan
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof StoryKanBan
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
     * @memberof StoryKanBan
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
     * @memberof StoryKanBan
     */
    @Prop() protected data?: any;

	/**
	 * 面板 移除 事件
	 *
	 * @memberof @memberof StoryKanBan
	 */
    protected button1_click($event: any): void {
        this.itemlayoutpanel_button1_click(null, null, $event);

    }

}
</script>

<style lang='less'>
@import './story-kan-ban-panel.less';
</style>

