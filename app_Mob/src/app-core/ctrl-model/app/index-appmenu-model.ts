/**
 * Index 部件模型
 *
 * @export
 * @class IndexModel
 */
export class IndexModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof IndexModel
     */
    private items: any[] = [
        {
	id: 'EB555878-8CAE-49DC-94A3-929F117B1BE7',
	name: 'menuitem1',
	text: '项目',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '项目',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'cafe',
	icon: '',
	textcls: '',
	appfunctag: '_2',
	resourcetag: '',
},
        {
	id: '9C02CB34-33C5-457C-92BD-F547462AC763',
	name: 'menuitem2',
	text: '分类',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '分类',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'fa fa-facebook-square',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
},
        {
	id: 'CF004977-344D-4A02-B6F8-014CF1361201',
	name: 'menuitem3',
	text: '测试',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '测试',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'cafe',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof IndexModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof IndexModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof IndexModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default IndexModel;