import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import ActionBarService from './action-bar-portlet-service';
import TestTaskUIService from '@/uiservice/test-task/test-task-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ActionBarPortletBase}
 */
export class ActionBarPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ActionBarPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {ActionBarService}
     * @memberof ActionBarPortletBase
     */
    public service: ActionBarService = new ActionBarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof ActionBarPortletBase
     */
    public appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ActionBarPortletBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_uc625844_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_LinkCase(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet4_uf762ea8_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:TestTaskUIService  = new TestTaskUIService();
        curUIService.TestTask_EditEdit(datas,contextJO, paramJO,  $event, xData,this,"TestTask");
    }

    /**
     * 长度
     *
     * @type {number}
     * @memberof ActionBar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ActionBar
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof ActionBarBase
     */
    public actionBarModelData:any[] =[
        { viewlogicname:"dashboard_sysportlet4_uc625844_click",
        text: "关联用例",
        iconcls: "fa fa-link",
        icon: "",
        },
        { viewlogicname:"dashboard_sysportlet4_uf762ea8_click",
        text: "编辑",
        iconcls: "fa fa-edit",
        icon: "",
        }
    ];

    /**
     * 触发界面行为
     *
     * @memberof ActionBarBase
     */
    public handleItemClick($event:any){
        if(Object.is($event,'dashboard_sysportlet4_uc625844_click')){
            this.dashboard_sysportlet4_uc625844_click(null);
        }
        if(Object.is($event,'dashboard_sysportlet4_uf762ea8_click')){
            this.dashboard_sysportlet4_uf762ea8_click(null);
        }
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ActionBarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ActionBarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ActionBarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof ActionBarBase
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
     * @memberof ActionBarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ActionBarBase
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
     * @memberof ActionBarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ActionBarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
