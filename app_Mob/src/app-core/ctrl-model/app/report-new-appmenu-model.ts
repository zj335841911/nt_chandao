/**
 * ReportNew 部件模型
 *
 * @export
 * @class ReportNewModel
 */
export class ReportNewModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ReportNewModel
     */
    private items: any[] = [
        {
	id: '833da28842c93ba4072811fb42ee75ed',
	name: 'menuitem1',
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
	icon: 'assets/images/daily.svg',
	textcls: '',
	appfunctag: 'AppFunc5',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem1',
},
        {
	id: '9f68bb18d313df8409ff7de50e813514',
	name: 'menuitem2',
	text: '周报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '周报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'assets/images/weekly.svg',
	textcls: '',
	appfunctag: 'AppFunc9',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem2',
},
        {
	id: 'bdb40ef1d23d8b53a573fabd01ded34a',
	name: 'menuitem3',
	text: '月报',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '月报',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'assets/images/monthly.svg',
	textcls: '',
	appfunctag: 'Monthly',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem3',
},
        {
	id: '6e607bbc18a631d63ad35116f561d2ac',
	name: 'menuitem6',
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
	icon: 'assets/images/report.svg',
	textcls: '',
	appfunctag: 'Reportly',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem6',
},
        {
	id: 'd0339eb7529c998d2cb0671a7d914352',
	name: 'menuitem4',
	text: '我收到的',
	type: 'MENUITEM',
	counterid: 'myunreadreportcnt',
	tooltip: '我收到的',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'assets/images/myreview.svg',
	textcls: '',
	appfunctag: 'AppFunc12',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem4',
},
        {
	id: 'c35b4b4a24cf08c3cb6fa8a5bc2e45df',
	name: 'menuitem5',
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
	icon: 'assets/images/submit.svg',
	textcls: '',
	appfunctag: 'AppFunc11',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem5',
},
        {
	id: 'b87833770d09a63869655a25b19368b8',
	name: 'menuitem7',
	text: '月报（待阅）',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '月报（待阅）',
	expanded: false,
	separator: false,
	hidden: true,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'NeedLookMonthly',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem7',
},
        {
	id: '9118e752cea79b2a40a8c0416629d78a',
	name: 'menuitem8',
	text: '周报(待阅)',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '周报(待阅)',
	expanded: false,
	separator: false,
	hidden: true,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'AppFunc13',
	resourcetag: '',
	authtag:'Mob-reportNew-menuitem8',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ReportNewModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ReportNewModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ReportNewModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ReportNewModel;