import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import BatchNewService from './batch-new-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {BatchNewGridBase}
 */
export class BatchNewGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {BatchNewService}
     * @memberof BatchNewGridBase
     */
    public service: BatchNewService = new BatchNewService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof BatchNewGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BatchNewGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof BatchNewGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof BatchNewGridBase
     */
    public minorSortDir: string = '';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof BatchNewGridBase
     */
    public limit: number = 100;
false;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof BatchNewGridBase
     */
    public allColumns: any[] = [
        {
            name: 'modulename',
            label: '所属模块',
            langtag: 'entities.case.batchnew_grid.columns.modulename',
            show: true,
            util: 'PX'
        },
        {
            name: 'storyname',
            label: '相关需求',
            langtag: 'entities.case.batchnew_grid.columns.storyname',
            show: true,
            util: 'PX'
        },
        {
            name: 'title',
            label: '用例标题',
            langtag: 'entities.case.batchnew_grid.columns.title',
            show: true,
            util: 'STAR'
        },
        {
            name: 'type',
            label: '用例类型',
            langtag: 'entities.case.batchnew_grid.columns.type',
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
     * @memberof BatchNewGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }

    /**
     * 设置列状态
     *
     * @memberof BatchNewGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_case_batchnew_grid');
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
     * @memberof BatchNewGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_case_batchnew_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 表格编辑项值变化
     *
     * @public
     * @param row 行数据
     * @param property 列编辑项名
     * @param row 列编辑项值
     * @returns {void}
     * @memberof BatchNewGridBase
     */
    public gridEditItemChange(row: any, property: string, value: any, rowIndex: number): void {
        super.gridEditItemChange(row, property, value, rowIndex);
    }

    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof BatchNewGridBase
     */
    public createDefault(row: any): void {
    }
}