import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import IBIZPRO_INDEXService from '@/service/ibizpro-index/ibizpro-index-service';
import IndexMobService from './index-mob-list-service';
import IBIZPRO_INDEXUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';

/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {IndexMobListBase}
 */
export class IndexMobListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {IndexMobService}
     * @memberof IndexMobListBase
     */
    public service: IndexMobService = new IndexMobService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IBIZPRO_INDEXService}
     * @memberof IndexMobListBase
     */
    public appEntityService: IBIZPRO_INDEXService = new IBIZPRO_INDEXService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected appDeName: string = 'ibizpro_index';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected appDeLogicName: string = '索引检索';

    /**
     * 界面UI服务对象
     *
     * @type {IBIZPRO_INDEXUIService}
     * @memberof IndexMobBase
     */  
    public appUIService: IBIZPRO_INDEXUIService = new IBIZPRO_INDEXUIService(this.$store);


    /**
     * 排序方向
     *
     * @type {string}
     * @memberof IndexMobListBase
     */
    public minorSortDir: string = '';


	/**
     * 部件挂载完毕
     *
     * @protected
     * @memberof IndexMobListBase
     */
    protected ctrlMounted(): void {
        this.initViewMap();
    }

    /**
     * 所有重定向视图
     * 
     * @memberof  IndexMobListBase
     */ 
    public allRedirectViewMap: Map<string, Object> = new Map();

    /**
     * 初始化重定向视图Map
     * 
     * @memberof  IndexMobListBase
     */  
    public initViewMap(){
        this.allRedirectViewMap.set('EDITVIEW:DOC', {
            viewname: 'dashboardview',
            srfappde: 'doc',
            component: 'doc-dashboard-view',
            openmode: 'DRAWER_TOP',
            viewmodel: 'DRAWER_TOP',
            title: '文档',
            width: 0,
            height: 0
        })
        this.allRedirectViewMap.set('EDITVIEW:PRODUCT', {
            viewname: 'maintabexpview',
            srfappde: 'product',
            component: 'product-main-tab-exp-view',
            openmode: '',
            viewmodel: '',
            title: '产品',
            width: 0,
            height: 0
        })
        this.allRedirectViewMap.set('EDITVIEW:TASK', {
            viewname: 'maindashboardview',
            srfappde: 'task',
            component: 'task-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            viewmodel: 'DRAWER_TOP',
            title: '任务',
            width: 1360,
            height: 0
        })
        this.allRedirectViewMap.set('EDITVIEW:PROJECT', {
            viewname: 'maintabexpview',
            srfappde: 'project',
            component: 'project-main-tab-exp-view',
            openmode: '',
            viewmodel: '',
            title: '项目',
            width: 0,
            height: 0
        })
        this.allRedirectViewMap.set('EDITVIEW:CASE', {
            viewname: 'maindashboardview',
            srfappde: 'case',
            component: 'case-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            viewmodel: 'DRAWER_TOP',
            title: '功能测试',
            width: 0,
            height: 0
        })
        this.allRedirectViewMap.set('EDITVIEW:BUG', {
            viewname: 'maindashboardview',
            srfappde: 'bug',
            component: 'bug-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            viewmodel: 'DRAWER_TOP',
            title: 'Bug',
            width: 0,
            height: 0
        })
        this.allRedirectViewMap.set('EDITVIEW:STORY', {
            viewname: 'mainview',
            srfappde: 'story',
            component: 'story-main-view',
            openmode: 'DRAWER_TOP',
            viewmodel: 'DRAWER_TOP',
            title: '需求',
            width: 0,
            height: 0
        })
    }

    /**
     * 打开重定向视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IndexMobListBase
     */
    public openRedirectView(curData: any) {
        let tempContext = JSON.parse(JSON.stringify(this.context));
        Object.assign(tempContext,curData);
        this.appUIService.getService('ibizpro_index').then((service) => {
            if(!service) {
                this.$Notice.error({desc: '重定向服务不存在！'})
                return;
            }
            const srfkey: any = tempContext.ibizpro_index;
            service.getDESDDEViewPDTParam(curData,false,false).then((res:any) =>{
                if(res && this.allRedirectViewMap.get(res)){
                    this.$openViewService.openView(this.allRedirectViewMap.get(res), tempContext, { ...this.viewparams, srfkey });
                }else{
                    console.error("未查找到重定向视图")
                }
            })
        })
    }

    /**
     * 页面变化
     *
     * @param {*} $event
     * @returns {void}
     * @memberof IndexMobListBase
     */
    public pageOnChange($event: any): void {
        if (!$event || $event === this.curPage) {
            return;
        }
        this.curPage = $event;
        this.load({});
    }

    /**
     * 分页条数变化
     *
     * @param {*} $event
     * @returns {void}
     * @memberof IndexMobListBase
     */
    public onPageSizeChange($event: any): void {
        if (!$event || $event === this.limit) {
            return;
        }
        this.limit = $event;
        if (this.curPage === 1) {
            this.load({});
        }
    }

    /**
     * 分页刷新
     *
     * @memberof IndexMobListBase
     */
    public pageRefresh(): void {
        this.load({});
    }

}