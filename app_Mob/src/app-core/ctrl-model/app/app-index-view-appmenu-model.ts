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
	text: '产品',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '产品',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'home',
	icon: '',
	textcls: '',
	appfunctag: '_3',
	resourcetag: '',
},
        {
	id: 'B578310F-43D0-4142-9323-F619297E717A',
	name: 'menuitem2',
	text: '项目',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '项目',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'cube',
	icon: '',
	textcls: '',
	appfunctag: '_6',
	resourcetag: '',
},
        {
	id: '9218AC38-DA73-4891-B93D-EF38795487C6',
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
	iconcls: 'paper',
	icon: '',
	textcls: '',
	appfunctag: '_7',
	resourcetag: '',
},
        {
	id: 'ECEF3D08-7FE9-4A0D-9493-9EEEF6BD1CDE',
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
	appfunctag: '_9',
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
            appfunctag: '_9',
            appfuncyype: 'APPVIEW',
            openmode: '', 
            componentname: 'ibz-my-territory-mob-tab-exp-view', 
            codename: 'ibzmyterritorymobtabexpview',
            deResParameters: [],
            routepath: '/appindexview/:appindexview?/ibzmyterritories/:ibzmyterritory?/mobtabexpview/:mobtabexpview?',
            parameters: [
                { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
                { pathName: 'mobtabexpview', parameterName: 'mobtabexpview' },
            ],
        },
        {
            appfunctag: '_3',
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
            appfunctag: '_6',
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
            appfunctag: '_7',
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