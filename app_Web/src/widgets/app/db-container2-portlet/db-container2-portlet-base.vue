<template>
    <div class='portlet-container db-container2' :style="{}">
            <i-col :md="{ span: 24, offset: 0 }">
                <div class="portlet-without-title">
                                  <view_db_projectexpportlet 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="db_projectexpportlet"  
                      ref='db_projectexpportlet' 
                      @closeview="closeView($event)">
                  </view_db_projectexpportlet>
                </div>
            </i-col>
            <i-col :md="{ span: 24, offset: 0 }">
                <div class="portlet-without-title">
                                  <view_db_projectunclosedportlet 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="db_projectunclosedportlet"  
                      ref='db_projectunclosedportlet' 
                      @closeview="closeView($event)">
                  </view_db_projectunclosedportlet>
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
import Db_container2Service from './db-container2-portlet-service';



@Component({
    components: {
      
    }
})
export default class Db_container2Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Db_container2
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Db_container2
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Db_container2
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Db_container2
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof Db_container2
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Db_container2
     */
    public getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Db_container2
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {Db_container2Service}
     * @memberof Db_container2
     */
    public service: Db_container2Service = new Db_container2Service({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof Db_container2
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof Db_container2
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
     * @memberof Db_container2
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Db_container2
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Db_container2
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof Db_container2
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Db_container2
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
     * @memberof Db_container2
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Db_container2
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './db-container2-portlet.less';
</style>