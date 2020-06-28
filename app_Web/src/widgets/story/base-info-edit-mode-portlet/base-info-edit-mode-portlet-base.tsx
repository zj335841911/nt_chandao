import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import BaseInfo_EditModeService from './base-info-edit-mode-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet2部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {BaseInfo_EditModePortletBase}
 */
export class BaseInfo_EditModePortletBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {BaseInfo_EditModeService}
     * @memberof BaseInfo_EditModePortletBase
     */
    public service: BaseInfo_EditModeService = new BaseInfo_EditModeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof BaseInfo_EditModePortletBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BaseInfo_EditModePortletBase
     */
    protected appDeName: string = 'story';

    /**
     * 长度
     *
     * @type {number}
     * @memberof BaseInfo_EditMode
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof BaseInfo_EditMode
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof BaseInfo_EditModeBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof BaseInfo_EditModeBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof BaseInfo_EditModeBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof BaseInfo_EditModeBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof BaseInfo_EditModeBase
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
     * @memberof BaseInfo_EditModeBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof BaseInfo_EditModeBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
