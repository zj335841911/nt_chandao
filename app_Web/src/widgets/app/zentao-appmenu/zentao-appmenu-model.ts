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
        	authtag:'Web-zentao-top_menus',
        	items: [
                		        {
                	id: 'b454720d9937098dbf2a8c63ff255e49',
                	name: 'menuitem12',
                	text: '我的收藏',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '我的收藏',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: true,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: '_2',
                	appfuncyype: 'APPVIEW',
                	viewname: 'ibz-favorites-tab-exp-view',
                	resourcetag: '',
                	authtag:'Web-zentao-menuitem12',
                }
                ,
                		        {
                	id: 'abe5c771826140b55b809218260136c6',
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
                	authtag:'Web-zentao-menuitem9',
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
                	authtag:'Web-zentao-menuitem3',
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
                	authtag:'Web-zentao-menuitem2',
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
                	authtag:'Web-zentao-menuitem1',
                }
                ,
                		        {
                	id: '28e753fc0b33a6fadf12f5f37150bb5a',
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
                	appfunctag: 'Auto15',
                	appfuncyype: 'APPVIEW',
                	viewname: 'ibz-lib-grid-view',
                	resourcetag: 'IBZ_LIB_M',
                	authtag:'Web-zentao-menuitem10',
                }
                ,
                		        {
                	id: 'dd9b338bb75db00a0974af4a4669e432',
                	name: 'menuitem11',
                	text: '用户',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: '用户',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto19',
                	appfuncyype: 'APPVIEW',
                	viewname: 'user-tree-exp-view',
                	resourcetag: 'IBZ_LIB_M',
                	authtag:'Web-zentao-menuitem11',
                }
                ,
                		        {
                	id: 'b6196a3350c20e3bba9943cfba16be09',
                	name: 'menuitem7',
                	text: 'iBiz软件生产管理',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: 'iBiz软件生产管理',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: 'Auto8',
                	appfuncyype: 'APPVIEW',
                	viewname: 'product-html-view',
                	resourcetag: '',
                	authtag:'Web-zentao-menuitem7',
                }
                ,
                		        {
                	id: '9CDF7B6E-C426-410E-AD69-3F06CC4BE6AA',
                	name: 'menuitem16',
                	text: 'plus',
                	type: 'MENUITEM',
                	counterid: '',
                	tooltip: 'plus',
                	expanded: false,
                	separator: false,
                	hidden: false,
                	hidesidebar: false,
                	opendefault: false,
                	iconcls: '',
                	icon: '',
                	textcls: '',
                	appfunctag: '',
                	resourcetag: 'PLUS',
                	authtag:'Web-zentao-menuitem16',
                	items: [
                        		        {
                        	id: 'A3AFF7A2-3281-408C-91F9-FDC4E87954AA',
                        	name: 'menuitem19',
                        	text: '产品',
                        	type: 'MENUITEM',
                        	counterid: '',
                        	tooltip: '产品',
                        	expanded: false,
                        	separator: false,
                        	hidden: false,
                        	hidesidebar: false,
                        	opendefault: false,
                        	iconcls: '',
                        	icon: '',
                        	textcls: '',
                        	appfunctag: '_8',
                        	appfuncyype: 'APPVIEW',
                        	viewname: 'ibzpro-product-grid-view',
                        	resourcetag: '',
                        	authtag:'Web-zentao-menuitem19',
                        }
                        ,
                        		        {
                        	id: 'BF204127-161E-4825-9833-E1B47DD447A7',
                        	name: 'menuitem21',
                        	text: '模块',
                        	type: 'MENUITEM',
                        	counterid: '',
                        	tooltip: '模块',
                        	expanded: false,
                        	separator: false,
                        	hidden: false,
                        	hidesidebar: false,
                        	opendefault: false,
                        	iconcls: '',
                        	icon: '',
                        	textcls: '',
                        	appfunctag: '_4',
                        	appfuncyype: 'APPVIEW',
                        	viewname: 'ibzpro-story-module-grid-view',
                        	resourcetag: '',
                        	authtag:'Web-zentao-menuitem21',
                        }
                        ,
                        		        {
                        	id: '865A7F0C-1E1E-4400-89E5-DBD4EAC19426',
                        	name: 'menuitem17',
                        	text: '需求',
                        	type: 'MENUITEM',
                        	counterid: '',
                        	tooltip: '需求',
                        	expanded: false,
                        	separator: false,
                        	hidden: false,
                        	hidesidebar: false,
                        	opendefault: false,
                        	iconcls: '',
                        	icon: '',
                        	textcls: '',
                        	appfunctag: '_3',
                        	appfuncyype: 'APPVIEW',
                        	viewname: 'ibzpro-story-grid-view',
                        	resourcetag: '',
                        	authtag:'Web-zentao-menuitem17',
                        }
                        ,
                	],
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
        	authtag:'Web-zentao-left_exp',
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
                	authtag:'Web-zentao-menuitem4',
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
                	authtag:'Web-zentao-menuitem5',
                }
                ,
                		        {
                	id: 'da31be11a700a5b2f5f63874113a175d',
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
                	authtag:'Web-zentao-menuitem6',
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
        	authtag:'Web-zentao-bottom_exp',
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
        	authtag:'Web-zentao-footer_center',
        }
        ,
                {
        	id: '37a7f7d513421b09ab4a40876e30422b',
        	name: 'menuitem13',
        	text: 'bug菜单项',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: 'bug菜单项',
        	expanded: false,
        	separator: false,
        	hidden: true,
        	hidesidebar: false,
        	opendefault: false,
        	iconcls: '',
        	icon: '',
        	textcls: '',
        	appfunctag: '_5',
        	appfuncyype: 'APPVIEW',
        	viewname: 'bug-main-dashboard-view-link',
        	resourcetag: '',
        	authtag:'Web-zentao-menuitem13',
        }
        ,
                {
        	id: 'a6eb25e83c2701563f5f920bed8a04d1',
        	name: 'menuitem14',
        	text: '菜单项',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: '菜单项',
        	expanded: false,
        	separator: false,
        	hidden: true,
        	hidesidebar: false,
        	opendefault: false,
        	iconcls: '',
        	icon: '',
        	textcls: '',
        	appfunctag: '_5',
        	appfuncyype: 'APPVIEW',
        	viewname: 'bug-main-dashboard-view-link',
        	resourcetag: '',
        	authtag:'Web-zentao-menuitem14',
        }
        ,
                {
        	id: '42b1cfedaf40277bf4241f1c080be056',
        	name: 'menuitem15',
        	text: '菜单项',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: '菜单项',
        	expanded: false,
        	separator: false,
        	hidden: true,
        	hidesidebar: false,
        	opendefault: false,
        	iconcls: '',
        	icon: '',
        	textcls: '',
        	appfunctag: '_6',
        	appfuncyype: 'APPVIEW',
        	viewname: 'task-main-dashboard-view-link',
        	resourcetag: '',
        	authtag:'Web-zentao-menuitem15',
        }
        ,
                {
        	id: '000cbeeaea954c8c3760dae0abf16e48',
        	name: 'menuitem18',
        	text: '菜单项',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: '菜单项',
        	expanded: false,
        	separator: false,
        	hidden: true,
        	hidesidebar: false,
        	opendefault: false,
        	iconcls: '',
        	icon: '',
        	textcls: '',
        	appfunctag: '_7',
        	appfuncyype: 'APPVIEW',
        	viewname: 'todo-dashboard-view-link',
        	resourcetag: '',
        	authtag:'Web-zentao-menuitem18',
        }
        ,
                {
        	id: 'c74953e0910a0fe5f994dad32125ae76',
        	name: 'menuitem20',
        	text: '菜单项',
        	type: 'MENUITEM',
        	counterid: '',
        	tooltip: '菜单项',
        	expanded: false,
        	separator: false,
        	hidden: true,
        	hidesidebar: false,
        	opendefault: false,
        	iconcls: '',
        	icon: '',
        	textcls: '',
        	appfunctag: '_9',
        	appfuncyype: 'APPVIEW',
        	viewname: 'story-main-view-link',
        	resourcetag: '',
        	authtag:'Web-zentao-menuitem20',
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
            appfunctag: '_7',
            appfuncyype: 'APPVIEW',
            openmode: 'INDEXVIEWTAB',
            codename: 'tododashboardview_link',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/todos/:todo?/dashboardview_link/:dashboardview_link?',
            parameters: [
                { pathName: 'todos', parameterName: 'todo' },
                { pathName: 'dashboardview_link', parameterName: 'dashboardview_link' },
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
            appfunctag: '_6',
            appfuncyype: 'APPVIEW',
            openmode: 'INDEXVIEWTAB',
            codename: 'taskmaindashboardview_link',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/tasks/:task?/maindashboardview_link/:maindashboardview_link?',
            parameters: [
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
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
            appfunctag: '_2',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'ibzfavoritestabexpview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/ibzfavorites/:ibzfavorites?/tabexpview/:tabexpview?',
            parameters: [
                { pathName: 'ibzfavorites', parameterName: 'ibzfavorites' },
                { pathName: 'tabexpview', parameterName: 'tabexpview' },
            ],
        },
        {
            appfunctag: '_8',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'ibzproproductgridview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/ibzproproducts/:ibzproproduct?/gridview/:gridview?',
            parameters: [
                { pathName: 'ibzproproducts', parameterName: 'ibzproproduct' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
        },
        {
            appfunctag: 'Auto15',
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
            appfunctag: '_4',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'ibzprostorymodulegridview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/ibzprostorymodules/:ibzprostorymodule?/gridview/:gridview?',
            parameters: [
                { pathName: 'ibzprostorymodules', parameterName: 'ibzprostorymodule' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
        },
        {
            appfunctag: 'Auto19',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'usertreeexpview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/users/:user?/treeexpview/:treeexpview?',
            parameters: [
                { pathName: 'users', parameterName: 'user' },
                { pathName: 'treeexpview', parameterName: 'treeexpview' },
            ],
        },
        {
            appfunctag: '_3',
            appfuncyype: 'APPVIEW',
            openmode: '',
            codename: 'ibzprostorygridview',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/ibzprostories/:ibzprostory?/gridview/:gridview?',
            parameters: [
                { pathName: 'ibzprostories', parameterName: 'ibzprostory' },
                { pathName: 'gridview', parameterName: 'gridview' },
            ],
        },
        {
            appfunctag: '_9',
            appfuncyype: 'APPVIEW',
            openmode: 'INDEXVIEWTAB',
            codename: 'storymainview_link',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/stories/:story?/mainview_link/:mainview_link?',
            parameters: [
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview_link', parameterName: 'mainview_link' },
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
            appfunctag: '_5',
            appfuncyype: 'APPVIEW',
            openmode: 'INDEXVIEWTAB',
            codename: 'bugmaindashboardview_link',
            deResParameters: [],
            routepath: '/ibizpms/:ibizpms?/bugs/:bug?/maindashboardview_link/:maindashboardview_link?',
            parameters: [
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
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