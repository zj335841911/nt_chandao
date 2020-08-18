import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

const datas: Array<any> = [
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
    }
];

// 获取全部数组
mock.onGet('./assets/json/data-dictionary.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, datas, config.headers, config];
});
