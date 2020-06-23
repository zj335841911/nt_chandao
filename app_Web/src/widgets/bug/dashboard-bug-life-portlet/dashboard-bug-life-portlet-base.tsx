import { Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { CtrlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import DashboardBugLifeService from './dashboard-bug-life-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {DashboardBugLifeBase}
 */
export class DashboardBugLifeBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {DashboardBugLifeService}
     * @memberof DashboardBugLife
     */
    public service: DashboardBugLifeService = new DashboardBugLifeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof DashboardBugLife
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 长度
     *
     * @type {number}
     * @memberof DashboardBugLife
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof DashboardBugLife
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof DashboardBugLifeBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DashboardBugLifeBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DashboardBugLifeBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof DashboardBugLifeBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DashboardBugLifeBase
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
     * @memberof DashboardBugLifeBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DashboardBugLifeBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
