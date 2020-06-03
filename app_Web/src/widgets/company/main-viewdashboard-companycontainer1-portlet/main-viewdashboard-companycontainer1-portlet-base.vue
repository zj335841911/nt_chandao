<template>
    <div class='portlet-container main-viewdashboard-companycontainer1 ' :style="{}">
            <i-col :md="{ span: 8, offset: 8 }" :lg="{ span: 8, offset: 8 }">
                <div class="portlet-without-title">
                                  <view_dashboard_companyInfo 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="dashboard_companyInfo"  
                      ref='dashboard_companyInfo' 
                      @closeview="closeView($event)">
                  </view_dashboard_companyInfo>
                </div>
            </i-col>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import CompanyService from '@/service/company/company-service';
import MainViewdashboard_companycontainer1Service from './main-viewdashboard-companycontainer1-portlet-service';



@Component({
    components: {
      
    }
})
export default class CompanyMainViewdashboard_companycontainer1Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainViewdashboard_companycontainer1
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainViewdashboard_companycontainer1
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainViewdashboard_companycontainer1
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainViewdashboard_companycontainer1
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MainViewdashboard_companycontainer1
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainViewdashboard_companycontainer1
     */
    public getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainViewdashboard_companycontainer1
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainViewdashboard_companycontainer1Service}
     * @memberof MainViewdashboard_companycontainer1
     */
    public service: MainViewdashboard_companycontainer1Service = new MainViewdashboard_companycontainer1Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CompanyService}
     * @memberof MainViewdashboard_companycontainer1
     */
    public appEntityService: CompanyService = new CompanyService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainViewdashboard_companycontainer1
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainViewdashboard_companycontainer1
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
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof MainViewdashboard_companycontainer1Base
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainViewdashboard_companycontainer1Base
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainViewdashboard_companycontainer1Base
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof MainViewdashboard_companycontainer1Base
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainViewdashboard_companycontainer1Base
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MainViewdashboard_companycontainer1Base
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainViewdashboard_companycontainer1Base
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './main-viewdashboard-companycontainer1-portlet.less';
</style>