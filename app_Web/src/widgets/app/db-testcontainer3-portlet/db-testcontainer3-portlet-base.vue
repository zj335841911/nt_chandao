<template>
    <div class='porlet db-testcontainer3' :style="{}">
            <i-col :md="{ span: 24, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_db_assigntomebugportlet1 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="db_assigntomebugportlet1"  
                      ref='db_assigntomebugportlet1' 
                      @closeview="closeView($event)">
                  </view_db_assigntomebugportlet1>
                </div>
            </i-col>
            <i-col :md="{ span: 24, offset: 0 }">
                <div class="portlet-widthout-title">
                                  <view_db_assigntomecaseportlet1 
                      :viewState="viewState"  
                      :viewparams="viewparams" 
                      :context="context" 
                      name="db_assigntomecaseportlet1"  
                      ref='db_assigntomecaseportlet1' 
                      @closeview="closeView($event)">
                  </view_db_assigntomecaseportlet1>
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
import Db_testcontainer3Service from './db-testcontainer3-portlet-service';



@Component({
    components: {
      
    }
})
export default class Db_testcontainer3Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Db_testcontainer3
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Db_testcontainer3
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Db_testcontainer3
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Db_testcontainer3
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Db_testcontainer3
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Db_testcontainer3
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Db_testcontainer3
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {Db_testcontainer3Service}
     * @memberof Db_testcontainer3
     */
    protected service: Db_testcontainer3Service = new Db_testcontainer3Service({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof Db_testcontainer3
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof Db_testcontainer3
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
     * @memberof Db_testcontainer3
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Db_testcontainer3
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Db_testcontainer3
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof Db_testcontainer3
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Db_testcontainer3
     */    
    protected afterCreated(){
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
     * @memberof Db_testcontainer3
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Db_testcontainer3
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './db-testcontainer3-portlet.less';
</style>