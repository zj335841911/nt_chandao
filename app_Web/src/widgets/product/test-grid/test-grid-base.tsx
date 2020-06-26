import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControllerBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import TestService from './test-grid-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControllerBase
 * @extends {TestGridBase}
 */
export class TestGridBase extends GridControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {TestService}
     * @memberof TestGridBase
     */
    public service: TestService = new TestService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof TestGridBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestGridBase
     */
    protected appDeName: string = 'product';

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof TestGridBase
     */
    public minorSortDir: string = '';
false;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof TestGridBase
     */
    public allColumns: any[] = [
        {
            name: 'name',
            label: '产品名称',
            langtag: 'entities.product.test_grid.columns.name',
            show: true,
            util: 'PX'
        },
        {
            name: 'code',
            label: '产品代号',
            langtag: 'entities.product.test_grid.columns.code',
            show: true,
            util: 'PX'
        },
        {
            name: 'status',
            label: '状态',
            langtag: 'entities.product.test_grid.columns.status',
            show: true,
            util: 'PX'
        },
        {
            name: 'type',
            label: '产品类型',
            langtag: 'entities.product.test_grid.columns.type',
            show: true,
            util: 'PX'
        },
        {
            name: 'linename',
            label: '产品线',
            langtag: 'entities.product.test_grid.columns.linename',
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
     * @memberof TestGridBase
     */
	public uiAction(row: any, tag: any, $event: any) {
        $event.stopPropagation();
    }

    /**
     * 设置列状态
     *
     * @memberof TestGridBase
     */
    public setColState() {
		const _data: any = localStorage.getItem('zt_product_test_grid');
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
     * @memberof TestGridBase
     */
    public onColChange() {
        localStorage.setItem('zt_product_test_grid', JSON.stringify(this.allColumns));
    }


    /**
     * 新建默认值
     * @param {*}  row 行数据
     * @memberof TestGridBase
     */
    public createDefault(row: any): void {
    }
}