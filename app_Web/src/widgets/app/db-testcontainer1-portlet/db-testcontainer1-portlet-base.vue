<template>
    <div class='portlet-container db-testcontainer1 ' :style="{}">
            <i-col :xs="{ span: 16, offset: 0 }" :sm="{ span: 16, offset: 0 }" :md="{ span: 16, offset: 0 }" :lg="{ span: 16, offset: 0 }">
                <div class="portlet-without-title">
                                  <view_db_testcontainer2 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="db_testcontainer2"  
                      ref='db_testcontainer2' 
                      @closeview="closeView($event)">
                  </view_db_testcontainer2>
                </div>
            </i-col>
            <i-col :xs="{ span: 8, offset: 0 }" :sm="{ span: 8, offset: 0 }" :md="{ span: 8, offset: 0 }" :lg="{ span: 8, offset: 0 }">
                <div class="portlet-without-title">
                                  <view_db_testcontainer3 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="db_testcontainer3"  
                      ref='db_testcontainer3' 
                      @closeview="closeView($event)">
                  </view_db_testcontainer3>
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
import Db_testcontainer1Service from './db-testcontainer1-portlet-service';



@Component({
    components: {
      
    }
})
export default class Db_testcontainer1Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Db_testcontainer1
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Db_testcontainer1
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Db_testcontainer1
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Db_testcontainer1
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof Db_testcontainer1
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Db_testcontainer1
     */
    public getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Db_testcontainer1
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {Db_testcontainer1Service}
     * @memberof Db_testcontainer1
     */
    public service: Db_testcontainer1Service = new Db_testcontainer1Service({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof Db_testcontainer1
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof Db_testcontainer1
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
     * @memberof Db_testcontainer1Base
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Db_testcontainer1Base
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Db_testcontainer1Base
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof Db_testcontainer1Base
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Db_testcontainer1Base
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
     * @memberof Db_testcontainer1Base
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Db_testcontainer1Base
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './db-testcontainer1-portlet.less';
</style>