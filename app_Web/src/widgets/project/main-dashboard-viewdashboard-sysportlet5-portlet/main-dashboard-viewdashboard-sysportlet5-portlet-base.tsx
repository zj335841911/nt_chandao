import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import MainDashboardViewdashboard_sysportlet5Service from './main-dashboard-viewdashboard-sysportlet5-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet5部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainDashboardViewdashboard_sysportlet5PortletBase}
 */
export class MainDashboardViewdashboard_sysportlet5PortletBase extends MainControlBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainDashboardViewdashboard_sysportlet5Service}
     * @memberof MainDashboardViewdashboard_sysportlet5PortletBase
     */
    public service: MainDashboardViewdashboard_sysportlet5Service = new MainDashboardViewdashboard_sysportlet5Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof MainDashboardViewdashboard_sysportlet5PortletBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainDashboardViewdashboard_sysportlet5PortletBase
     */
    protected appDeName: string = 'project';

    /**
     * 长度
     *
     * @type {number}
     * @memberof MainDashboardViewdashboard_sysportlet5
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof MainDashboardViewdashboard_sysportlet5
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof MainDashboardViewdashboard_sysportlet5Base
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainDashboardViewdashboard_sysportlet5Base
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainDashboardViewdashboard_sysportlet5Base
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof MainDashboardViewdashboard_sysportlet5Base
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return 'auto';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MainDashboardViewdashboard_sysportlet5Base
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainDashboardViewdashboard_sysportlet5Base
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
     * @memberof MainDashboardViewdashboard_sysportlet5Base
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainDashboardViewdashboard_sysportlet5Base
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
