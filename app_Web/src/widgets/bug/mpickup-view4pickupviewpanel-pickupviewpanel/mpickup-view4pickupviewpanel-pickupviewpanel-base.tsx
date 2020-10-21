import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import MPickupView4pickupviewpanelService from './mpickup-view4pickupviewpanel-pickupviewpanel-service';
import BugUIService from '@/uiservice/bug/bug-ui-service';
import MPickupView4pickupviewpanelModel from './mpickup-view4pickupviewpanel-pickupviewpanel-model';


/**
 * pickupviewpanel部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MPickupView4pickupviewpanelPickupviewpanelBase}
 */
export class MPickupView4pickupviewpanelPickupviewpanelBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MPickupView4pickupviewpanelPickupviewpanelBase
     */
    protected controlType: string = 'PICKUPVIEWPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MPickupView4pickupviewpanelService}
     * @memberof MPickupView4pickupviewpanelPickupviewpanelBase
     */
    public service: MPickupView4pickupviewpanelService = new MPickupView4pickupviewpanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof MPickupView4pickupviewpanelPickupviewpanelBase
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MPickupView4pickupviewpanelPickupviewpanelBase
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MPickupView4pickupviewpanelPickupviewpanelBase
     */
    protected appDeLogicName: string = 'Bug';

    /**
     * 界面UI服务对象
     *
     * @type {BugUIService}
     * @memberof MPickupView4pickupviewpanelBase
     */  
    public appUIService:BugUIService = new BugUIService(this.$store);



    /**
     * 选中数据字符串
     *
     * @type {string}
     * @memberof MPickupView4pickupviewpanel
     */
    @Prop() public selectedData?: string;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MPickupView4pickupviewpanel
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MPickupView4pickupviewpanel
     */
    public getData(): any {
        return {};
    }

    /**
     * 视图名称
     *
     * @type {*}
     * @memberof MPickupView4pickupviewpanel
     */
    public view: any = {
        viewname: 'bug-pickup-grid-view4',
        data: {},
    }

    /**
     * 局部上下文
     *
     * @type {*}
     * @memberof MPickupView4pickupviewpanel
     */
    public localContext: any = null;

    /**
     * 局部视图参数
     *
     * @type {*}
     * @memberof PickupViewpickupviewpanel
     */
    public localViewParam: any = null;

    /**
     * 视图数据
     *
     * @type {*}
     * @memberof MPickupView4pickupviewpanel
     */
    public viewdata: string  = JSON.stringify(this.context);

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof PickupViewpickupviewpanel
     */
    public viewparam: string  = JSON.stringify(this.viewparams);

    /**
     * 是否显示按钮
     *
     * @type {boolean}
     * @memberof MPickupView4pickupviewpanel
     */
    @Prop({default: true}) public isShowButton!: boolean;

    /**
     * 是否单选
     *
     * @type {boolean}
     * @memberof MPickupView4pickupviewpanel
     */
    @Prop() public isSingleSelect?: boolean;

    /**
     * 初始化完成
     *
     * @type {boolean}
     * @memberof MPickupView4pickupviewpanel
     */
    public inited: boolean = false;

    /**
     * 视图数据变化
     *
     * @param {*} $event
     * @memberof MPickupView4pickupviewpanel
     */
    public onViewDatasChange($event: any): void {
        if($event.length>0){
          $event.forEach((item:any,index:any) => {
              let srfmajortext = item['title'];
              if(srfmajortext){
                Object.assign($event[index],{srfmajortext: srfmajortext});
              }
          });
        }
        this.$emit('selectionchange', $event);
    }

    /**
     * 视图数据被激活
     *
     * @param {*} $event
     * @memberof MPickupView4pickupviewpanel
     */
    public viewDatasActivated($event: any): void {
        this.$emit('activated', $event);
    }

    /**
     * 视图加载完成
     *
     * @param {*} $event
     * @memberof MPickupView4pickupviewpanel
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }

    /**
     * vue 生命周期
     *
     * @memberof MPickupView4pickupviewpanel
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MPickupView4pickupviewpanel
     */    
    public afterCreated(){
        this.initNavParam();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.viewdata = JSON.stringify(this.context);
                    this.viewparam = JSON.stringify(Object.assign(data, this.viewparams));
                    this.inited = true;
                }
            });
        }
    }

    /**
     * 初始化导航参数
     *
     *  @memberof MPickupView4pickupviewpanel
     */  
    public initNavParam(){
        if(this.localContext && Object.keys(this.localContext).length >0){
            let _context:any = this.$util.computedNavData({},this.context,this.viewparams,this.localContext);
            Object.assign(this.context,_context);
        }
        if(this.localViewParam && Object.keys(this.localViewParam).length >0){
            let _param:any = this.$util.computedNavData({},this.context,this.viewparams,this.localViewParam);
            Object.assign(this.viewparams,_param);
        }
        this.viewdata = JSON.stringify(this.context);
        this.viewparam = JSON.stringify(this.viewparams);
    }


    /**
     * vue 生命周期
     *
     * @memberof MPickupView4pickupviewpanel
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MPickupView4pickupviewpanel
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}