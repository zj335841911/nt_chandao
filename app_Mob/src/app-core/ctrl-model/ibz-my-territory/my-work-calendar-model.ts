/**
 * MyWork 部件模型
 *
 * @export
 * @class MyWorkModel
 */
export class MyWorkModel {

	/**
	 * 日历项类型
	 *
	 * @returns {any[]}
	 * @memberof MyWorkCalendarMode
	 */
	public itemType: string = "";

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyWorkCalendarMode
	 */
	public getDataItems(): any[] {
        let dataItems: any = [
            {
                name: 'queryStart',
                prop: 'n_start_gtandeq'
            },
            {
                name: 'queryEnd',
                prop: 'n_end_ltandeq'
            },
            {
                name: 'color',
            },
            {
                name: 'textColor',
            },
            {
                name: 'itemType',
            },
        ];
        switch (this.itemType) {
            case "bug":
                dataItems = 
                    [
                        ...dataItems,
                        {
                            name: 'bug',
                            prop: 'id'
                        },
                        {
                            name: 'title',
                            prop: 'title'
                        },
                        {
                            name:'start',
                            prop:'n_assigneddate_gtandeq'
                        },
                        {
                            name:'end',
                            prop:'n_resolveddate_ltandeq'
                        },
                    ];
                break;
            case "task":
                dataItems = 
                    [
                        ...dataItems,
                        {
                            name: 'task',
                            prop: 'id'
                        },
                        {
                            name: 'title',
                            prop: 'name'
                        },
                        {
                            name:'start',
                            prop:'n_assigneddate_gtandeq'
                        },
                        {
                            name:'end',
                            prop:'n_finisheddate_ltandeq'
                        },
                    ];
                break;
        }
        return dataItems;
	}

}
// 默认导出
export default MyWorkModel;