import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, GridExpBarControlBase } from '@/studio-core';
import SysTeamMemberService from '@/service/sys-team-member/sys-team-member-service';
import GridExpViewTeamgridexpbarService from './grid-exp-view-teamgridexpbar-gridexpbar-service';
import SysTeamMemberUIService from '@/uiservice/sys-team-member/sys-team-member-ui-service';
import CodeListService from "@service/app/codelist-service";

/**
 * gridexpbar部件基类
 *
 * @export
 * @class GridExpBarControlBase
 * @extends {GridExpViewTeamgridexpbarGridexpbarBase}
 */
export class GridExpViewTeamgridexpbarGridexpbarBase extends GridExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof GridExpViewTeamgridexpbarGridexpbarBase
     */
    protected controlType: string = 'GRIDEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {GridExpViewTeamgridexpbarService}
     * @memberof GridExpViewTeamgridexpbarGridexpbarBase
     */
    public service: GridExpViewTeamgridexpbarService = new GridExpViewTeamgridexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SysTeamMemberService}
     * @memberof GridExpViewTeamgridexpbarGridexpbarBase
     */
    public appEntityService: SysTeamMemberService = new SysTeamMemberService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof GridExpViewTeamgridexpbarGridexpbarBase
     */
    protected appDeName: string = 'systeammember';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof GridExpViewTeamgridexpbarGridexpbarBase
     */
    protected appDeLogicName: string = '组成员';

    /**
     * 界面UI服务对象
     *
     * @type {SysTeamMemberUIService}
     * @memberof GridExpViewTeamgridexpbarBase
     */  
    public appUIService: SysTeamMemberUIService = new SysTeamMemberUIService(this.$store);

    /**
     * gridexpbar_grid 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof GridExpViewTeamgridexpbarGridexpbarBase
     */
    public gridexpbar_grid_selectionchange($event: any, $event2?: any) {
        this.gridexpbar_selectionchange($event, 'gridexpbar_grid', $event2);
    }

    /**
     * gridexpbar_grid 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof GridExpViewTeamgridexpbarGridexpbarBase
     */
    public gridexpbar_grid_load($event: any, $event2?: any) {
        this.gridexpbar_load($event, 'gridexpbar_grid', $event2);
    }


    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof GridExpViewTeamgridexpbarBase
     */
    public navViewName: string = 'sys-team-member-edit-view';

    /**
    * 刷新
    *
    * @memberof GridExpViewTeamgridexpbarBase
    */
    public refresh(args?: any): void {
        const refs: any = this.$refs;
        if (refs && refs.gridexpbar_grid) {
            refs.gridexpbar_grid.refresh();
        }
    }


    /**
     * gridexpbar的选中数据事件
     * 
     * @memberof GridExpViewTeamgridexpbarBase
     */
    public gridexpbar_selectionchange(args: any [], tag?: string, $event2?: any): void {
        let tempContext:any = {};
        let tempViewParam:any = {};
        if (args.length === 0) {
            this.selection = {};
            return ;
        }
        const arg:any = args[0];
        if(this.context){
            Object.assign(tempContext,JSON.parse(JSON.stringify(this.context)));
        }
        Object.assign(tempContext,{'systeammember':arg['systeammember']});
        Object.assign(tempContext,{srfparentdename:'SysTeamMember',srfparentkey:arg['systeammember']});
        if(this.navFilter && !Object.is(this.navFilter,"")){
            Object.assign(tempViewParam,{[this.navFilter]:arg['systeammember']});
        }
        if(this.navPSDer && !Object.is(this.navPSDer,"")){
            Object.assign(tempViewParam,{[this.navPSDer]:arg['systeammember']});
        }
        if(this.navigateContext && Object.keys(this.navigateContext).length >0){
            let _context:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navigateContext);
            Object.assign(tempContext,_context);
        }
        if(this.navigateParams && Object.keys(this.navigateParams).length >0){
            let _params:any = this.$util.computedNavData(arg,tempContext,tempViewParam,this.navigateParams);
            Object.assign(tempViewParam,_params);
        }
        this.selection = {};
        Object.assign(this.selection, { view: { viewname: this.navViewName },  context:tempContext,viewparam:tempViewParam });
        this.$forceUpdate();
    }
}