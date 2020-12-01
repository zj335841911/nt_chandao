/**
 * My 部件模型
 *
 * @export
 * @class MyModel
 */
export class MyModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof MyModel
     */
    private items: any[] = [
        {
	id: '7F346864-D529-43AF-9112-3540450CCAA3',
	name: 'menuitem6',
	text: '我的工作',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '我的工作',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'AppFunc6',
	resourcetag: '',
	authtag:'Mob-My-menuitem6',
},
        {
	id: '0F22BCF9-770A-4291-B3C7-5706A95817D8',
	name: 'menuitem5',
	text: '汇报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '汇报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-My-menuitem5',
	items: [
		{
	id: '35246485-9127-474F-8647-B2B7DF0400C7',
	name: 'menuitem1',
	text: '新建',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '新建',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-My-menuitem1',
	items: [
		{
	id: '40F8A004-5346-4D6D-A3CE-34563BD23294',
	name: 'menuitem2',
	text: '日报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '日报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'AppFunc5',
	resourcetag: '',
	authtag:'Mob-My-menuitem2',
},
	],
},
		{
	id: 'A05B72C1-9E92-4C42-9EC1-5FAB870B7091',
	name: 'menuitem3',
	text: '我提交的',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '我提交的',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-My-menuitem3',
},
		{
	id: '4A0D772F-F970-4102-8F86-4393B0A2F2C7',
	name: 'menuitem4',
	text: '我收到的',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '我收到的',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-My-menuitem4',
},
	],
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof MyModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof MyModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof MyModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default MyModel;