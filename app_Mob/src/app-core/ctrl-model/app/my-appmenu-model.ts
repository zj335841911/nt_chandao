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
	id: '74a220bb5c6ec3fe2ac72afb4c602c2d',
	name: 'menuitem6',
	text: '我的待办',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '我的待办',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'assets/images/mydb.svg',
	textcls: '',
	appfunctag: 'AppFunc7',
	resourcetag: '',
	authtag:'Mob-My-menuitem6',
},
        {
	id: '8e505026674c1486fd24ecf1b9efc969',
	name: 'menuitem5',
	text: '仪表盘',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '仪表盘',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'assets/images/dashboard.svg',
	textcls: '',
	appfunctag: 'AppFunc8',
	resourcetag: '',
	authtag:'Mob-My-menuitem5',
},
        {
	id: 'fbb4deb1f901ca7638ccc674b4d98790',
	name: 'menuitem15',
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
	icon: 'assets/images/mywork.svg',
	textcls: '',
	appfunctag: 'AppFunc6',
	resourcetag: '',
	authtag:'Mob-My-menuitem15',
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