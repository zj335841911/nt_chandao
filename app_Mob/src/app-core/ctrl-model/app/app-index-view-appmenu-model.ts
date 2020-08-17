/**
 * AppIndexView 部件模型
 *
 * @export
 * @class AppIndexViewModel
 */
export class AppIndexViewModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof AppIndexViewModel
     */
    private items: any[] = [
        {
	id: '53549F95-1F2F-44E3-8943-0789AC42088D',
	name: 'menuitem1',
	text: '工作台',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '工作台',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'home',
	icon: '',
	textcls: '',
	appfunctag: '_2',
	resourcetag: '',
},
        {
	id: 'B578310F-43D0-4142-9323-F619297E717A',
	name: 'menuitem2',
	text: '待办',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '待办',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'alarm',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
},
        {
	id: '9218AC38-DA73-4891-B93D-EF38795487C6',
	name: 'menuitem3',
	text: '看板',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '看板',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'snow',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
},
        {
	id: 'BB744C8A-9FFA-4159-82FF-2D8B46CA4FC9',
	name: 'menuitem4',
	text: '我的',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '我的',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'person',
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
	 * @memberof AppIndexViewModel
	 */
	private funcs: any[] = [
        {
            appfunctag: '_2',
            appfuncyype: 'APPVIEW',
            openmode: '', 
            componentname: 'app-portal-view', 
            codename: 'appportalview',
            deResParameters: [],
            routepath: '/appindexview/:appindexview?/appportalview/:appportalview?',
            parameters: [
                { pathName: 'appportalview', parameterName: 'appportalview' },
            ],
        },
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof AppIndexViewModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof AppIndexViewModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default AppIndexViewModel;