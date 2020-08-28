import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControlBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import SidebarService from './sidebar-list-service';
import ProjectUIService from '@/uiservice/project/project-ui-service';


/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {SidebarListBase}
 */
export class SidebarListBase extends ListControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof SidebarListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {SidebarService}
     * @memberof SidebarListBase
     */
    public service: SidebarService = new SidebarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof SidebarListBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SidebarListBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof SidebarListBase
     */
    protected appDeLogicName: string = '项目';

    /**
     * 界面UI服务对象
     *
     * @type {ProjectUIService}
     * @memberof SidebarBase
     */  
    public appUIService:ProjectUIService = new ProjectUIService(this.$store);

    /**
     * list_quicktoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SidebarListBase
     */
    public list_quicktoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.list_quicktoolbar_deuiaction1_click(null, 'list_quicktoolbar', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.list_quicktoolbar_deuiaction2_click(null, 'list_quicktoolbar', $event2);
        }
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public list_quicktoolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectUIService  = new ProjectUIService();
        curUIService.Project_ProjectTop(datas,contextJO, paramJO,  $event, xData,this,"Project");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public list_quicktoolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProjectUIService  = new ProjectUIService();
        curUIService.Project_CancelProjectTop(datas,contextJO, paramJO,  $event, xData,this,"Project");
    }

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof SidebarListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof SidebarListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof SidebarListBase
     */
    public minorSortPSDEF: string = 'id';
}