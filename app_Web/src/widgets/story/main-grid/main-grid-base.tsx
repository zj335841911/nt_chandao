import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import MainService from './main-grid-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {MainGridBase}
 */
export class MainGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainGridBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof MainGridBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'story';

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u7b97712_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_ChangeStoryDetail(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u824d7d6_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_CloseStory(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u7480d3d_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_OpenBaseInfoEditView(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u5aaa4ae_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:StoryUIService  = new StoryUIService();
        curUIService.Story_OpenCaseCreateView(datas,contextJO, paramJO,  $event, xData,this,"Story");
    }

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainGridBase
     */
    public minorSortDir: string = '';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.story.main_grid.columns.id',
            show: true,
            util: 'PX'
        },
        {
            name: 'pri',
            label: 'P',
            langtag: 'entities.story.main_grid.columns.pri',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '需求名称',
            langtag: 'entities.story.main_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'modulename',
            label: '所属模块名称',
            langtag: 'entities.story.main_grid.columns.modulename',
            show: true,
            util: 'PX'
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.story.main_grid.columns.uagridcolumn1',
            show: true,
            util: 'PX'
        },
    ]


    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof MainGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
        if(Object.is('ChangeStoryDetail', tag)) {
            this.grid_uagridcolumn1_u7b97712_click(row, tag, $event);
        }
        if(Object.is('CloseStory', tag)) {
            this.grid_uagridcolumn1_u824d7d6_click(row, tag, $event);
        }
        if(Object.is('OpenBaseInfoEditView', tag)) {
            this.grid_uagridcolumn1_u7480d3d_click(row, tag, $event);
        }
        if(Object.is('OpenCaseCreateView', tag)) {
            this.grid_uagridcolumn1_u5aaa4ae_click(row, tag, $event);
        }
    }

    /**
     * 设置列状态
     *
     * @memberof MainGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_story_main_grid');
		if (_data) {
			let columns = JSON.parse(_data);
			columns.forEach((col: any) => {
				let column = this.allColumns.find((item) => Object.is(col.name, item.name));
				if (column) {
					Object.assign(column, col);
				}
			});
		}
    }

    /**
     * 列变化
     *
     * @memberof MainGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_story_main_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof MainGridBase
     */
    public createDefault(row: any): void {
    }
}