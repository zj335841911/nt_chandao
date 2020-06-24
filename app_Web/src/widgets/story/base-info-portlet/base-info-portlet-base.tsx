import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, CtrlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import BaseInfoService from './base-info-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet2部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {BaseInfoPortletBase}
 */
export class BaseInfoPortletBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {BaseInfoService}
     * @memberof BaseInfoPortletBase
     */
    public service: BaseInfoService = new BaseInfoService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof BaseInfoPortletBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

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
