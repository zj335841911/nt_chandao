import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

const datas: Array<any> = [
        {
        "srfkey": "BugUserRealName",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"",
        "appdedataset":"",
        "items": []
    },
    {
        srfkey: 'Product__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                value: 'normal',
                disabled: false,
            },
            {
                id: 'closed',
                label: '结束',
                text: '结束',
                value: 'closed',
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__stage',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'wait',
                label: '未开始',
                text: '未开始',
                value: 'wait',
                disabled: false,
            },
            {
                id: 'planned',
                label: '已计划',
                text: '已计划',
                value: 'planned',
                disabled: false,
            },
            {
                id: 'projected',
                label: '已立项',
                text: '已立项',
                value: 'projected',
                disabled: false,
            },
            {
                id: 'developing',
                label: '研发中',
                text: '研发中',
                value: 'developing',
                disabled: false,
            },
            {
                id: 'developed',
                label: '研发完毕',
                text: '研发完毕',
                value: 'developed',
                disabled: false,
            },
            {
                id: 'testing',
                label: '测试中',
                text: '测试中',
                value: 'testing',
                disabled: false,
            },
            {
                id: 'tested',
                label: '测试完毕',
                text: '测试完毕',
                value: 'tested',
                disabled: false,
            },
            {
                id: 'verified',
                label: '已验收',
                text: '已验收',
                value: 'verified',
                disabled: false,
            },
            {
                id: 'released',
                label: '已发布',
                text: '已发布',
                value: 'released',
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                value: 'closed',
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'draft',
                label: '草稿',
                text: '草稿',
                value: 'draft',
                disabled: false,
            },
            {
                id: 'active',
                label: '激活',
                text: '激活',
                value: 'active',
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                value: 'closed',
                disabled: false,
            },
            {
                id: 'changed',
                label: '已变更',
                text: '已变更',
                value: 'changed',
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'active',
                label: '激活',
                text: '激活',
                value: 'active',
                disabled: false,
            },
            {
                id: 'resolved',
                label: '已解决',
                text: '已解决',
                value: 'resolved',
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                value: 'closed',
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealName",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"",
        "appdedataset":"",
        "items": []
    },
    {
        srfkey: 'Product__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                value: 'normal',
                disabled: false,
            },
            {
                id: 'branch',
                label: '多分支',
                text: '多分支',
                value: 'branch',
                disabled: false,
            },
            {
                id: 'platform',
                label: '多平台',
                text: '多平台',
                value: 'platform',
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__resolution',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'bydesign',
                label: '设计如此',
                text: '设计如此',
                value: 'bydesign',
                disabled: false,
            },
            {
                id: 'duplicate',
                label: '重复Bug',
                text: '重复Bug',
                value: 'duplicate',
                disabled: false,
            },
            {
                id: 'external',
                label: '外部原因',
                text: '外部原因',
                value: 'external',
                disabled: false,
            },
            {
                id: 'fixed',
                label: '已解决',
                text: '已解决',
                value: 'fixed',
                disabled: false,
            },
            {
                id: 'notrepro',
                label: '无法重现',
                text: '无法重现',
                value: 'notrepro',
                disabled: false,
            },
            {
                id: 'postponed',
                label: '延期处理',
                text: '延期处理',
                value: 'postponed',
                disabled: false,
            },
            {
                id: 'willnotfix',
                label: '不予解决',
                text: '不予解决',
                value: 'willnotfix',
                disabled: false,
            },
            {
                id: 'tostory',
                label: '转为需求',
                text: '转为需求',
                value: 'tostory',
                disabled: false,
            },
        ]
    }
];

// 获取全部数组
mock.onGet('./assets/json/data-dictionary.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, datas, config.headers, config];
});
