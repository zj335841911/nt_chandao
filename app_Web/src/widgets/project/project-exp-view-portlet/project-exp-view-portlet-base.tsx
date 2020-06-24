import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, CtrlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ProjectExpViewService from './project-exp-view-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * db_projectexpportlet部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {ProjectExpViewPortletBase}
 */
export class ProjectExpViewPortletBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {ProjectExpViewService}
     * @memberof ProjectExpViewPortletBase
     */
    public service: ProjectExpViewService = new ProjectExpViewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectExpViewPortletBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 长度
     *
     * @type {number}
     * @memberof ProjectExpView
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ProjectExpView
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ProjectExpViewBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ProjectExpViewBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ProjectExpViewBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ProjectExpViewBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ProjectExpViewBase
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
     * @memberof ProjectExpViewBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ProjectExpViewBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
