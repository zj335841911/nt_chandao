import { MockAdapter } from '@/mock/mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'
const Random = Mock.Random;

// 获取应用数据
mock.onGet('v7/indexappmenu').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, {
        name: 'appmenu',
        items:  [
            {
	id: 'EB555878-8CAE-49DC-94A3-929F117B1BE7',
	name: 'menuitem1',
	text: '项目',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '项目',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: true,
	iconcls: 'cafe',
	icon: '',
	textcls: '',
	appfunctag: '_2',
	resourcetag: '',
},
            {
	id: '9C02CB34-33C5-457C-92BD-F547462AC763',
	name: 'menuitem2',
	text: '分类',
	type: 'MENUITEM',
	counterid: '',
	tooltip: '分类',
	expanded: false,
	separator: false,
	hidden: false,
	hidesidebar: false,
	opendefault: false,
	iconcls: 'help-circle',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
},
            {
	id: 'CF004977-344D-4A02-B6F8-014CF1361201',
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
	iconcls: 'resize',
	icon: '',
	textcls: '',
	appfunctag: '',
	resourcetag: '',
},
        ],
    }];
});

