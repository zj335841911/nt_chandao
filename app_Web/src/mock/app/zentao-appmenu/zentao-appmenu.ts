import { MockAdapter } from '@/mock/mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'
const Random = Mock.Random;

// 获取应用数据
mock.onGet('v7/zentaoappmenu').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, {
        name: 'appmenu',
        items:  [
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
	id: '326619b4fb6af93bdeed04e5dcbf029a',
	name: 'menuitem3',
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
	appfunctag: 'Auto1',
	resourcetag: '',
},
		{
	id: '743c132e78e3c231d195ecd66fbd4a85',
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
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'Auto4',
	resourcetag: '',
},
		{
	id: '8c190ff0dc037afa1c9bd4c6a473313d',
	name: 'menuitem1',
	text: '测试',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '测试',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: '',
	icon: '',
	textcls: '',
	appfunctag: 'Auto3',
	resourcetag: '',
},
	],
},
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
	resourcetag: '',
},
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
	resourcetag: '',
},
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
	appfunctag: '_2',
	resourcetag: '',
},
	],
},
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
},
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
},
        ],
    }];
});

