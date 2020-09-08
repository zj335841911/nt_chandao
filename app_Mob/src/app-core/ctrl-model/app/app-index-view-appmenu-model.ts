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
	id: '6221be19414c86117e91659f4a19154b',
	name: 'menuitem5',
	text: '收藏',
	type: 'MENUITEM',
	counterid: 'myfavorites',
	tooltip: '收藏',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'heart-circle',
	icon: '',
	textcls: '',
	appfunctag: '_3',
	resourcetag: '',
},
        {
	id: 'c1a10404d32addccb3c940e05a11b920',
	name: 'menuitem1',
	text: '产品',
	type: 'MENUITEM',
	counterid: 'products',
	tooltip: '产品',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'home',
	icon: '',
	textcls: '',
	appfunctag: 'Auto13',
	resourcetag: '',
},
        {
	id: '62d00b8a490cf4b6ef758c0aa3814494',
	name: 'menuitem2',
	text: '项目',
	type: 'MENUITEM',
	counterid: 'projects',
	tooltip: '项目',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'cube',
	icon: '',
	textcls: '',
	appfunctag: 'Auto18',
	resourcetag: '',
},
        {
	id: '0cfef223143b6805dcf2d802b6e79ea0',
	name: 'menuitem3',
	text: '测试',
	type: 'MENUITEM',
	counterid: 'products',
	tooltip: '测试',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'clipboard',
	icon: '',
	textcls: '',
	appfunctag: 'Auto20',
	resourcetag: '',
},
        {
	id: '1ebe52baa4573adb6c5d44146d0da6a3',
	name: 'menuitem4',
	text: '我的',
	type: 'MENUITEM',
	counterid: 'myterritorycnt',
	tooltip: '我的',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'person',
	icon: '',
	textcls: '',
	appfunctag: '_2',
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
            appfunctag: 'Auto13',
            appfuncyype: 'APPVIEW',
            openmode: '', 
            componentname: 'product-mob-mdview', 
            codename: 'productmobmdview',
            deResParameters: [],
            routepath: '/appindexview/:appindexview?/products/:product?/mobmdview/:mobmdview?',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'mobmdview', parameterName: 'mobmdview' },
            ],
        },
        {
            appfunctag: 'Auto18',
            appfuncyype: 'APPVIEW',
            openmode: '', 
            componentname: 'project-mob-mdview', 
            codename: 'projectmobmdview',
            deResParameters: [],
            routepath: '/appindexview/:appindexview?/projects/:project?/mobmdview/:mobmdview?',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'mobmdview', parameterName: 'mobmdview' },
            ],
        },
        {
            appfunctag: 'Auto20',
            appfuncyype: 'APPVIEW',
            openmode: '', 
            componentname: 'product-test-mob-mdview', 
            codename: 'producttestmobmdview',
            deResParameters: [],
            routepath: '/appindexview/:appindexview?/products/:product?/testmobmdview/:testmobmdview?',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'testmobmdview', parameterName: 'testmobmdview' },
            ],
        },
        {
            appfunctag: '_2',
            appfuncyype: 'APPVIEW',
            openmode: '', 
            componentname: 'ibz-my-territory-mob-dashboard-view', 
            codename: 'ibzmyterritorymobdashboardview',
            deResParameters: [],
            routepath: '/appindexview/:appindexview?/ibzmyterritories/:ibzmyterritory?/mobdashboardview/:mobdashboardview?',
            parameters: [
                { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                { pathName: 'mobdashboardview', parameterName: 'mobdashboardview' },
            ],
        },
        {
            appfunctag: '_3',
            appfuncyype: 'APPVIEW',
            openmode: '', 
            componentname: 'ibz-favorites-mob-tab-exp-view', 
            codename: 'ibzfavoritesmobtabexpview',
            deResParameters: [],
            routepath: '/appindexview/:appindexview?/ibzfavorites/:ibzfavorites?/mobtabexpview/:mobtabexpview?',
            parameters: [
                { pathName: 'ibzfavorites', parameterName: 'ibzfavorites' },
                { pathName: 'mobtabexpview', parameterName: 'mobtabexpview' },
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