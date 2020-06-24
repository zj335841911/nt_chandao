import { Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { CtrlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import UnClosedProjectService from './un-closed-project-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * db_projectunclosedportlet部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {UnClosedProjectPortletBase}
 */
export class UnClosedProjectPortletBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {UnClosedProjectService}
     * @memberof UnClosedProject
     */
    public service: UnClosedProjectService = new UnClosedProjectService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof UnClosedProject
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 长度
     *
     * @type {number}
     * @memberof UnClosedProject
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof UnClosedProject
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof UnClosedProjectBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof UnClosedProjectBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof UnClosedProjectBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof UnClosedProjectBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof UnClosedProjectBase
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
     * @memberof UnClosedProjectBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof UnClosedProjectBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
