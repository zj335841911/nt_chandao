<template>
    <div class='portlet base-info ' :style="{'height': 'auto',}">
        <div class="portlet-without-title">
        <story-main-view9 :viewdata="JSON.stringify(context)" :viewDefaultUsage="false" ></story-main-view9>
        </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import StoryService from '@/service/story/story-service';
import BaseInfoService from './base-info-portlet-service';

import { Environment } from '@/environments/environment';


@Component({
    components: {
      
    }
})
export default class StoryBaseInfoBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof BaseInfo
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof BaseInfo
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof BaseInfo
     */
    @Prop() public context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof BaseInfo
     */
    @Prop() public viewparams: any;

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof BaseInfo
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof BaseInfo
     */
    public getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BaseInfo
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {BaseInfoService}
     * @memberof BaseInfo
     */
    public service: BaseInfoService = new BaseInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof BaseInfo
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof BaseInfo
     */
    public closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof BaseInfo
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
     * 长度
     *
     * @type {number}
     * @memberof BaseInfo
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof BaseInfo
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof BaseInfoBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof BaseInfoBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof BaseInfoBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof BaseInfoBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof BaseInfoBase
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
     * @memberof BaseInfoBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof BaseInfoBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
</script>

<style lang='less'>
@import './base-info-portlet.less';
</style>

