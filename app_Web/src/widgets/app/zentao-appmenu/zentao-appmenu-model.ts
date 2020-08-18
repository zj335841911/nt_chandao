import { ViewTool } from '@/utils';

/**
 * Zentao 部件模型
 *
 * @export
 * @class ZentaoModel
 */
export default class ZentaoModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ZentaoModel
     */
    private items: any[] = [
                {
        	id: '2be499b03e8aba2785cf63e079c901d4',
        	name: 'top_menus',
        	text: '顶部菜单',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: '顶部菜单',
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
        	items: [
                		        {
                	id: '885119A5-EBD5-42E2-A9AD-CECBF403ADE6',
                	name: 'menuitem9',
                	text: '我的地盘',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '我的地盘',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto10',
                	appfuncyype: 'APPVIEW',
                	viewname: 'ibz-my-territory-tab-exp-view',
                	resourcetag: '',
                }
                ,
                		        {
                	id: '326619b4fb6af93bdeed04e5dcbf029a',
                	name: 'menuitem3',
                	text: '产品主页',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '产品主页',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto1',
                	appfuncyype: 'APPVIEW',
                	viewname: 'product-portal-view',
                	resourcetag: '',
                }
                ,
                		        {
                	id: '743c132e78e3c231d195ecd66fbd4a85',
                	name: 'menuitem2',
                	text: '项目主页',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '项目主页',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto6',
                	appfuncyype: 'APPVIEW',
                	viewname: 'project-portal-view',
                	resourcetag: '',
                }
                ,
                		        {
                	id: '8c190ff0dc037afa1c9bd4c6a473313d',
                	name: 'menuitem1',
                	text: '测试主页',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '测试主页',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto9',
                	appfuncyype: 'APPVIEW',
                	viewname: 'test-portal-view',
                	resourcetag: '',
                }
                ,
                		        {
                	id: '1064218E-C42A-4534-9402-5ECFD4697951',
                	name: 'menuitem10',
                	text: '用例库',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '用例库',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: '_2',
                	appfuncyype: 'APPVIEW',
                	viewname: 'ibz-lib-grid-view',
                	resourcetag: 'IBZ_LIB_M',
                }
                ,
                		        {
                	id: 'AAADCE5D-2685-4C0A-9251-8731E49443A0',
                	name: 'menuitem7',
                	text: 'iBiz软件生产管理',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: 'iBiz软件生产管理',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: true,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto8',
                	appfuncyype: 'APPVIEW',
                	viewname: 'product-html-view',
                	resourcetag: '',
                }
                ,
        	],
        }
        ,
                {
        	id: '0c09750969133187f7284fc78d6abb46',
        	name: 'left_exp',
        	text: '左侧分页导航',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: '左侧分页导航',
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
        	items: [
                		        {
                	id: 'd69dc5da5fec042124ed71785112a2ed',
                	name: 'menuitem4',
                	text: '产品',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '产品',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: 'fa fa-cubes',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto2',
                	appfuncyype: 'APPVIEW',
                	viewname: 'product-left-sidebar-list-view',
                	resourcetag: 'PRODUCTLEFT',
                }
                ,
                		        {
                	id: '1bc9bde6c2735da9d300fc5925d5ecf8',
                	name: 'menuitem5',
                	text: '项目',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '项目',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: 'fa fa-stack-exchange',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto5',
                	appfuncyype: 'APPVIEW',
                	viewname: 'project-left-sidebar-list-view',
                	resourcetag: '',
                }
                ,
                		        {
                	id: '8786ECB6-7892-4548-943A-C94D05E9CA86',
                	name: 'menuitem6',
                	text: '测试',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '测试',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: 'fa fa-cogs',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto11',
                	appfuncyype: 'APPVIEW',
                	viewname: 'product-test-left-sidebar-list-view',
                	resourcetag: '',
                }
                ,
        	],
        }
        ,
                {
        	id: 'fa4f78c182d429862b14a5a2f7c516e1',
        	name: 'bottom_exp',
        	text: '底部导航区',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: '底部导航区',
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
        }
        ,
                {
        	id: '65951b0f0e0015d9af6f4f0e0ee337ae',
        	name: 'footer_center',
        	text: '底部中间菜单',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: '底部中间菜单',
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
        }
        ,
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ZentaoModel
	 */
	private funcs: any[] = [
        {
            appfunctag: 'Auto11',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'producttestleftsidebarlistview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/products/:product?/testleftsidebarlistview/:testleftsidebarlistview?',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'testleftsidebarlistview', parameterName: 'testleftsidebarlistview' },
            ],
        },
        {
            appfunctag: 'Auto5',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'projectleftsidebarlistview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/projects/:project?/leftsidebarlistview/:leftsidebarlistview?',
            parameters: [
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
            ],
        },
        {
            appfunctag: 'Auto8',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'producthtmlview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/products/:product?/htmlview/:htmlview?',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'htmlview', parameterName: 'htmlview' },
            ],
        },
        {
            appfunctag: '_2',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'ibzlibgridview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/ibzlibs/:ibzlib?/gridview/:gridview?',
            parameters: [
                { pathName: 'ibzlibs', parameterName: 'ibzlib' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
        },
        {
            appfunctag: 'Auto2',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'productleftsidebarlistview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/products/:product?/leftsidebarlistview/:leftsidebarlistview?',
            parameters: [
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
            ],
        },
        {
            appfunctag: 'Auto6',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'projectportalview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/projectportalview/:projectportalview?',
            parameters: [
                { pathName: 'projectportalview', parameterName: 'projectportalview' },
            ],
        },
        {
            appfunctag: 'Auto1',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'productportalview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/productportalview/:productportalview?',
            parameters: [
                { pathName: 'productportalview', parameterName: 'productportalview' },
            ],
        },
        {
            appfunctag: 'Auto10',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'ibzmyterritorytabexpview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/ibzmyterritories/:ibzmyterritory?/tabexpview/:tabexpview?',
            parameters: [
                { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                { pathName: 'tabexpview', parameterName: 'tabexpview' },
            ],
        },
        {
            appfunctag: 'Auto9',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'testportalview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/testportalview/:testportalview?',
            parameters: [
                { pathName: 'testportalview', parameterName: 'testportalview' },
            ],
        },
	];

	/**
	 * 根据当前路由查找激活菜单
	 *
	 * @param {*} route
	 * @returns {*}
	 * @memberof ZentaoModel
	 */
	public findActiveMenuByRoute(route: any): any {
		if (route) {
			const func = this.funcs.find((item: any) => {
				if (item.openmode === '') {
					const url: string = ViewTool.buildUpRoutePath(route, route.params, [], item.parameters, [], {});
					return url === route.fullPath;
				}
			});
            if (func) {
			    return this.findMenuByFuncTag(func.appfunctag);
            }
		}
	}

	/**
	 * 根据应用功能id查找菜单项
	 *
	 * @param {string} tag
	 * @param {any[]} [menus=this.items]
	 * @returns {*}
	 * @memberof ZentaoModel
	 */
	public findMenuByFuncTag(tag: string, menus: any[] = this.items): any {
		let menu: any;
		menus.every((item: any) => {
			if (item.appfunctag === tag) {
				menu = item;
				return false;
			}
			if (item.items) {
				menu = this.findMenuByFuncTag(tag, item.items);
				if (menu) {
					return false;
				}
			}
			return true;
		});
		return menu;
	}

	/**
	 * 查找默认打开菜单
	 *
	 * @param {any[]} [menus=this.items]
	 * @returns {*}
	 * @memberof ZentaoModel
	 */
	public findDefaultOpenMenu(menus: any[] = this.items): any {
		let menu: any;
		menus.every((item: any) => {
			if (item.opendefault === true) {
				menu = item;
				return false;
			}
			if (item.items) {
				menu = this.findMenuByFuncTag(item.items);
				if (menu) {
					return false;
				}
			}
			return true;
		});
		return menu;
	}

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ZentaoModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

	/**
	 * 根据名称获取菜单组
	 *
	 * @param {string} name
	 * @returns {*}
	 * @memberof ZentaoModel
	 */
	public getMenuGroup(name: string): any {
		return this.items.find((item: any) => Object.is(item.name, name));
	}

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ZentaoModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}