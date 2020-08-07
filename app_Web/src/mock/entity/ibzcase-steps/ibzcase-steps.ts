import qs from 'qs';
import { MockAdapter } from '@/mock/mock-adapter';
const mock = MockAdapter.getInstance();

// 模拟数据
const mockDatas: Array<any> = [
];

// createBatch
mock.onPost(new RegExp(/^\/ibzcasesteps\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:ibzcasestep 方法: createBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});

// updateBatch
mock.onPut(new RegExp(/^\/ibzcasesteps\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:ibzcasestep 方法: updateBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});

// removeBatch
mock.onDelete(new RegExp(/^\/ibzcasesteps\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:ibzcasestep 方法: removeBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});


