/**
 * ImgswipeStyleMenu 部件模型
 *
 * @export
 * @class ImgswipeStyleMenuModel
 */
export class ImgswipeStyleMenuModel {

    /**
     * 菜单项集合
     *
     * @private
     * @type {any[]}
     * @memberof ImgswipeStyleMenuModel
     */
    private items: any[] = [
        {
	id: '000d9220401358534fd0d34ccc145d9d',
	name: 'menuitem1',
	text: '京东',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '京东',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'http://img.itmop.com/upload/2016-1/2016116172054.jpg',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ImgswipeStyleMenu-menuitem1',
},
        {
	id: 'bc0a0736c36a3723eede9e8424c931f9',
	name: 'menuitem2',
	text: '天猫',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '天猫',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'https://consumer.gucheng.com/UploadFiles_6578/201711/2017112810575805.jpg',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ImgswipeStyleMenu-menuitem2',
},
        {
	id: 'ea1afc1ded5298692e0151a04ec18ac3',
	name: 'menuitem3',
	text: '亚马逊',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '亚马逊',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3696020296,2643788514&fm=26&gp=0.jpg',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
	authtag:'Mob-ImgswipeStyleMenu-menuitem3',
},
    ];

	/**
	 * 应用功能集合
	 *
	 * @private
	 * @type {any[]}
	 * @memberof ImgswipeStyleMenuModel
	 */
	private funcs: any[] = [
	];

    /**
     * 获取所有菜单项集合
     *
     * @returns {any[]}
     * @memberof ImgswipeStyleMenuModel
     */
    public getAppMenuItems(): any[] {
        return this.items;
    }

    /**
     * 获取所有应用功能集合
     *
     * @returns {any[]}
     * @memberof ImgswipeStyleMenuModel
     */
    public getAppFuncs(): any[] {
        return this.funcs;
    }
}
// 默认导出
export default ImgswipeStyleMenuModel;