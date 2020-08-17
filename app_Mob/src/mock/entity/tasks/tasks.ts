import { MockAdapter } from '@/mock/mock-adapter';
import { Util } from '@/ibiz-core/utils';
const mock = MockAdapter.getInstance();

// 模拟数据
const mockDatas: Array<any> = [
];

/**
 * 解析参数
 * 
 * @param paramArray 参数数组
 * @param regStr 路径正则
 * @param url 访问路径
 */
const parsingParameters = (paramArray: Array<string>, regStr: RegExp, url: string): any => {
    let params: any = {};
    const matchArray: any = new RegExp(regStr).exec(url);
    if (matchArray && matchArray.length > 1 && paramArray && paramArray.length > 0) {
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(params, item, {
                enumerable: true,
                value: matchArray[index + 1],
            });
        });
    }
    return params;
};

/**
 * 排队路径参数是否存在 null、undefined 或者空字符串等异常情况 
 * 
 * @param paramArray 
 * @param params 
 */
const judgmentParametersException = (paramArray: Array<string>, params: any): boolean => {
    let isParametersException = false;
    if (paramArray.length > 0) {
        let state = paramArray.some((key: string) => {
            let _value = params[key];
            if (!_value || Object.is(_value, '')) {
                return true;
            }
            return false;
        });
        if (state) {
            isParametersException = true;;
        }
    }
    return isParametersException;
};



//Create
mock.onPost(new RegExp(/^\/tasks$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    let data: any = JSON.parse(config.data);
    mockDatas.push(Object.assign({}, data, { taskid: Util.createUUID() }))

    return [status, mockDatas[mockDatas.length - 1], config.headers, config];
});

//Update
mock.onPut(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    // 遍历键值，获取数据
    let items: Array<any> = [];
    items = Util.deepCopy(mockDatas);
    let state2 = Object.keys(params).some((key: string) => {
        let _value = params[key];
        let _items = items.filter((data: any) => Object.is(data[key], _value));
        if (_items.length === 0) {
            return true;
        }
        items = [];
        items = Util.deepCopy(_items);
        return false;
    });
    if (state2) {
        return [403, null, config.headers, config];
    }

    let et_id = Object.keys(params)[Object.keys(params).length - 1]
    let et_id_value = params[et_id];
    let index = mockDatas.findIndex((data: any) => Object.is(data[et_id], et_id_value));

    let data: any = JSON.parse(config.data);
    Object.keys(mockDatas[index]).forEach((key: string) => {
        if (data.hasOwnProperty(key)) {
            Object.assign(mockDatas[index], { [key]: data[key] })
        }
    });

    return [status, mockDatas[index], config.headers, config];
});

//Remove
mock.onDelete(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    let et_id = Object.keys(params)[Object.keys(params).length - 1]
    let et_id_value = params[et_id];
    let index = mockDatas.findIndex((data: any) => Object.is(data[et_id], et_id_value));
    mockDatas.splice(index, 1);

    return [status, null, config.headers, config];
});

//Get
mock.onGet(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    // 遍历键值，获取数据
    let items: Array<any> = [];
    items = Util.deepCopy(mockDatas);
    let state2 = Object.keys(params).some((key: string) => {
        let _value = params[key];
        let _items = items.filter((data: any) => Object.is(data[key], _value));
        if (_items.length === 0) {
            return true;
        }
        items = [];
        items = Util.deepCopy(_items);
        return false;
    });
    if (state2) {
        return [403, null, config.headers, config];
    }
    return [status, items[0], config.headers, config];
});

//GetDraft
mock.onGet(new RegExp(/^\/tasks\/getdraft$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks\/getdraft$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {}, config.headers, config];
});

//Activate
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/activate$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/activate$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//AssignTo
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/assignto$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/assignto$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//Cancel
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/cancel$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/cancel$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//CheckKey
mock.onPost(new RegExp(/^\/tasks\/checkkey$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks\/checkkey$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//Close
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/close$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/close$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//DeleteEstimate
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/deleteestimate$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/deleteestimate$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//EditEstimate
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/editestimate$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/editestimate$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//Finish
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/finish$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/finish$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//Pause
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/pause$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/pause$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//RecordEstimate
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/recordestimate$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/recordestimate$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//Restart
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/restart$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/restart$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//Save
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/save$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/save$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//Start
mock.onPost(new RegExp(/^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/start$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'taskid'
    let paramArray: Array<string> = ['taskid'];
    let regStr: RegExp = /^\/tasks\/([a-zA-Z0-9\-\;]{1,35})\/start$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    return [status, {
    }];
});

//fetchByModule
mock.onGet(new RegExp(/^\/tasks\/fetchbymodule(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks\/fetchbymodule(\?[\w-./?%&=]*)*$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }
    
    let { headers } = config;
    let xTotal = mockDatas.length;
    let records: Array<any> = [];
    if (config.url.includes('page')) {
        let url = config.url;
        let xPage = url.split('page=')[1];
        let xPerPage = url.split('size=')[1].split('&')[0];
        Object.assign(headers, { 'x-page': xPage + '', 'x-per-page': xPerPage + '', 'x-total': xTotal + '' });
        let start = xTotal - (xPage * xPerPage);
        records = mockDatas.slice(xPage * xPerPage, xPerPage);
    } else {
        records = [...mockDatas];
    }
    return [status, records, config.headers, config];
});

//fetchDefault
mock.onGet(new RegExp(/^\/tasks\/fetchdefault(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks\/fetchdefault(\?[\w-./?%&=]*)*$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }
    
    let { headers } = config;
    let xTotal = mockDatas.length;
    let records: Array<any> = [];
    if (config.url.includes('page')) {
        let url = config.url;
        let xPage = url.split('page=')[1];
        let xPerPage = url.split('size=')[1].split('&')[0];
        Object.assign(headers, { 'x-page': xPage + '', 'x-per-page': xPerPage + '', 'x-total': xTotal + '' });
        let start = xTotal - (xPage * xPerPage);
        records = mockDatas.slice(xPage * xPerPage, xPerPage);
    } else {
        records = [...mockDatas];
    }
    return [status, records, config.headers, config];
});

//fetchDefaultRow
mock.onGet(new RegExp(/^\/tasks\/fetchdefaultrow(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks\/fetchdefaultrow(\?[\w-./?%&=]*)*$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }
    
    let { headers } = config;
    let xTotal = mockDatas.length;
    let records: Array<any> = [];
    if (config.url.includes('page')) {
        let url = config.url;
        let xPage = url.split('page=')[1];
        let xPerPage = url.split('size=')[1].split('&')[0];
        Object.assign(headers, { 'x-page': xPage + '', 'x-per-page': xPerPage + '', 'x-total': xTotal + '' });
        let start = xTotal - (xPage * xPerPage);
        records = mockDatas.slice(xPage * xPerPage, xPerPage);
    } else {
        records = [...mockDatas];
    }
    return [status, records, config.headers, config];
});

//fetchProjectTASK
mock.onGet(new RegExp(/^\/tasks\/fetchprojecttask(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks\/fetchprojecttask(\?[\w-./?%&=]*)*$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }
    
    let { headers } = config;
    let xTotal = mockDatas.length;
    let records: Array<any> = [];
    if (config.url.includes('page')) {
        let url = config.url;
        let xPage = url.split('page=')[1];
        let xPerPage = url.split('size=')[1].split('&')[0];
        Object.assign(headers, { 'x-page': xPage + '', 'x-per-page': xPerPage + '', 'x-total': xTotal + '' });
        let start = xTotal - (xPage * xPerPage);
        records = mockDatas.slice(xPage * xPerPage, xPerPage);
    } else {
        records = [...mockDatas];
    }
    return [status, records, config.headers, config];
});

//fetchRootTask
mock.onGet(new RegExp(/^\/tasks\/fetchroottask(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks\/fetchroottask(\?[\w-./?%&=]*)*$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }
    
    let { headers } = config;
    let xTotal = mockDatas.length;
    let records: Array<any> = [];
    if (config.url.includes('page')) {
        let url = config.url;
        let xPage = url.split('page=')[1];
        let xPerPage = url.split('size=')[1].split('&')[0];
        Object.assign(headers, { 'x-page': xPage + '', 'x-per-page': xPerPage + '', 'x-total': xTotal + '' });
        let start = xTotal - (xPage * xPerPage);
        records = mockDatas.slice(xPage * xPerPage, xPerPage);
    } else {
        records = [...mockDatas];
    }
    return [status, records, config.headers, config];
});

//fetchTypeGroup
mock.onGet(new RegExp(/^\/tasks\/fetchtypegroup(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/tasks\/fetchtypegroup(\?[\w-./?%&=]*)*$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }
    
    let { headers } = config;
    let xTotal = mockDatas.length;
    let records: Array<any> = [];
    if (config.url.includes('page')) {
        let url = config.url;
        let xPage = url.split('page=')[1];
        let xPerPage = url.split('size=')[1].split('&')[0];
        Object.assign(headers, { 'x-page': xPage + '', 'x-per-page': xPerPage + '', 'x-total': xTotal + '' });
        let start = xTotal - (xPage * xPerPage);
        records = mockDatas.slice(xPage * xPerPage, xPerPage);
    } else {
        records = [...mockDatas];
    }
    return [status, records, config.headers, config];
});
























//Create
mock.onPost('/stories/{storyid}/tasks').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Update
mock.onPut('/stories/{storyid}/tasks/{taskid').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Remove
mock.onDelete('/stories/{storyid}/tasks/{taskid}').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Get
mock.onGet('/stories/{storyid}/tasks/{taskid').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//GetDraft
mock.onGet('/stories/{storyid}/tasks/getdraft').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Activate
mock.onPost('/stories/{storyid}/tasks/{taskid}/activate').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//AssignTo
mock.onPost('/stories/{storyid}/tasks/{taskid}/assignto').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Cancel
mock.onPost('/stories/{storyid}/tasks/{taskid}/cancel').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//CheckKey
mock.onPost('/stories/{storyid}/tasks/checkkey').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Close
mock.onPost('/stories/{storyid}/tasks/{taskid}/close').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//DeleteEstimate
mock.onPost('/stories/{storyid}/tasks/{taskid}/deleteestimate').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//EditEstimate
mock.onPost('/stories/{storyid}/tasks/{taskid}/editestimate').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Finish
mock.onPost('/stories/{storyid}/tasks/{taskid}/finish').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Pause
mock.onPost('/stories/{storyid}/tasks/{taskid}/pause').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//RecordEstimate
mock.onPost('/stories/{storyid}/tasks/{taskid}/recordestimate').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Restart
mock.onPost('/stories/{storyid}/tasks/{taskid}/restart').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Save
mock.onPost('/stories/{storyid}/tasks/{taskid}/save').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Start
mock.onPost('/stories/{storyid}/tasks/{taskid}/start').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Start
mock.onGet('/stories/{storyid}/tasks/fetchbymodule').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Start
mock.onGet('/stories/{storyid}/tasks/fetchdefault').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Start
mock.onGet('/stories/{storyid}/tasks/fetchdefaultrow').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Start
mock.onGet('/stories/{storyid}/tasks/fetchprojecttask').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Start
mock.onGet('/stories/{storyid}/tasks/fetchroottask').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Start
mock.onGet('/stories/{storyid}/tasks/fetchtypegroup').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});
























