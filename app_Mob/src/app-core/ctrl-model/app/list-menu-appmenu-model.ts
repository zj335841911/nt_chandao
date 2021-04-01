/**
 * ListMenu 部件模型
 *
 * @export
 * @class ListMenuModel
 */
export class ListMenuModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ListMenuModel
     */
    private items: any[] = [
        {
	id: 'c60026dfda907708885a896956178969',
	name: 'menuitem1',
	text: '电脑',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '电脑',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'desktop',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem1',
},
        {
	id: 'e3cb7af25910c2e741571b7ab0e3d215',
	name: 'menuitem8',
	text: '个人信息',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '个人信息',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'AppFunc',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem8',
},
        {
	id: 'd3bb6d2fc5745dd743a97c9d7d228303',
	name: 'menuitem2',
	text: '手机',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '手机',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'phone-portrait',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem2',
},
        {
	id: 'b29cd7917804afb319818da7423c2392',
	name: 'menuitem3',
	text: '杯子',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '杯子',
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
	authtag:'Mob-ListMenu-menuitem3',
},
        {
	id: '88b287f74a0085be1d60a63385536f42',
	name: 'menuitem4',
	text: '用户',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '用户',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'people',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem4',
},
        {
	id: '04559148546e609c502692b7de820ac9',
	name: 'menuitem5',
	text: '相机',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '相机',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'camera',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem5',
},
        {
	id: '38d03f4406c61c0fdf58840ac2d11f12',
	name: 'menuitem6',
	text: '望远镜',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '望远镜',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'flask',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem6',
},
        {
	id: '0394f1f5151d8868d07655342c31bdd6',
	name: 'menuitem7',
	text: '更多',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '更多',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'pagelines',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ListMenu-menuitem7',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ListMenuModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ListMenuModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ListMenuModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ListMenuModel;