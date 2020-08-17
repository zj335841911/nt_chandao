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
mock.onPost(new RegExp(/^\/bugs$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    let data: any = JSON.parse(config.data);
    mockDatas.push(Object.assign({}, data, { bugid: Util.createUUID() }))

    return [status, mockDatas[mockDatas.length - 1], config.headers, config];
});

//Update
mock.onPut(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})$/;
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
mock.onDelete(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})$/;
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
mock.onGet(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})$/;
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
mock.onGet(new RegExp(/^\/bugs\/getdraft$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/getdraft$/;
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
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/activate$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/activate$/;
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
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/assignto$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/assignto$/;
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

//BatchUnlinkBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/batchunlinkbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/batchunlinkbug$/;
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

//BuildBatchUnlinkBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/buildbatchunlinkbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/buildbatchunlinkbug$/;
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

//BuildLinkBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/buildlinkbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/buildlinkbug$/;
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

//BuildUnlinkBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/buildunlinkbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/buildunlinkbug$/;
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
mock.onPost(new RegExp(/^\/bugs\/checkkey$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/checkkey$/;
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
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/close$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/close$/;
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

//Confirm
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/confirm$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/confirm$/;
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

//LinkBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/linkbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/linkbug$/;
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

//ReleaaseBatchUnlinkBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/releaasebatchunlinkbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/releaasebatchunlinkbug$/;
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

//ReleaseLinkBugbyBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/releaselinkbugbybug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/releaselinkbugbybug$/;
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

//ReleaseLinkBugbyLeftBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/releaselinkbugbyleftbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/releaselinkbugbyleftbug$/;
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

//ReleaseUnlinkBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/releaseunlinkbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/releaseunlinkbug$/;
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

//Resolve
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/resolve$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/resolve$/;
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
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/save$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/save$/;
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

//ToStory
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/tostory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/tostory$/;
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

//UnlinkBug
mock.onPost(new RegExp(/^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/unlinkbug$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'bugid'
    let paramArray: Array<string> = ['bugid'];
    let regStr: RegExp = /^\/bugs\/([a-zA-Z0-9\-\;]{1,35})\/unlinkbug$/;
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

//fetchBuildBugs
mock.onGet(new RegExp(/^\/bugs\/fetchbuildbugs(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/fetchbuildbugs(\?[\w-./?%&=]*)*$/;
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

//fetchBuildLinkResolvedBugs
mock.onGet(new RegExp(/^\/bugs\/fetchbuildlinkresolvedbugs(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/fetchbuildlinkresolvedbugs(\?[\w-./?%&=]*)*$/;
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

//fetchBuildOpenBugs
mock.onGet(new RegExp(/^\/bugs\/fetchbuildopenbugs(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/fetchbuildopenbugs(\?[\w-./?%&=]*)*$/;
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
mock.onGet(new RegExp(/^\/bugs\/fetchdefault(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/fetchdefault(\?[\w-./?%&=]*)*$/;
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

//fetchReleaseBugs
mock.onGet(new RegExp(/^\/bugs\/fetchreleasebugs(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/fetchreleasebugs(\?[\w-./?%&=]*)*$/;
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

//fetchReleaseLeftBugs
mock.onGet(new RegExp(/^\/bugs\/fetchreleaseleftbugs(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/fetchreleaseleftbugs(\?[\w-./?%&=]*)*$/;
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

//fetchReportBugs
mock.onGet(new RegExp(/^\/bugs\/fetchreportbugs(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/bugs\/fetchreportbugs(\?[\w-./?%&=]*)*$/;
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
mock.onPost('/stories/{storyid}/bugs').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Update
mock.onPut('/stories/{storyid}/bugs/{bugid').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Remove
mock.onDelete('/stories/{storyid}/bugs/{bugid}').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Get
mock.onGet('/stories/{storyid}/bugs/{bugid').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//GetDraft
mock.onGet('/stories/{storyid}/bugs/getdraft').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Activate
mock.onPost('/stories/{storyid}/bugs/{bugid}/activate').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//AssignTo
mock.onPost('/stories/{storyid}/bugs/{bugid}/assignto').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//BatchUnlinkBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/batchunlinkbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//BuildBatchUnlinkBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/buildbatchunlinkbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//BuildLinkBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/buildlinkbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//BuildUnlinkBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/buildunlinkbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//CheckKey
mock.onPost('/stories/{storyid}/bugs/checkkey').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Close
mock.onPost('/stories/{storyid}/bugs/{bugid}/close').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Confirm
mock.onPost('/stories/{storyid}/bugs/{bugid}/confirm').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//LinkBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/linkbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//ReleaaseBatchUnlinkBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/releaasebatchunlinkbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//ReleaseLinkBugbyBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/releaselinkbugbybug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//ReleaseLinkBugbyLeftBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/releaselinkbugbyleftbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//ReleaseUnlinkBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/releaseunlinkbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Resolve
mock.onPost('/stories/{storyid}/bugs/{bugid}/resolve').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//Save
mock.onPost('/stories/{storyid}/bugs/{bugid}/save').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//ToStory
mock.onPost('/stories/{storyid}/bugs/{bugid}/tostory').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//UnlinkBug
mock.onPost('/stories/{storyid}/bugs/{bugid}/unlinkbug').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//UnlinkBug
mock.onGet('/stories/{storyid}/bugs/fetchbuildbugs').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//UnlinkBug
mock.onGet('/stories/{storyid}/bugs/fetchbuildlinkresolvedbugs').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//UnlinkBug
mock.onGet('/stories/{storyid}/bugs/fetchbuildopenbugs').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//UnlinkBug
mock.onGet('/stories/{storyid}/bugs/fetchdefault').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//UnlinkBug
mock.onGet('/stories/{storyid}/bugs/fetchreleasebugs').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//UnlinkBug
mock.onGet('/stories/{storyid}/bugs/fetchreleaseleftbugs').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});

//UnlinkBug
mock.onGet('/stories/{storyid}/bugs/fetchreportbugs').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    return [status, {
    }];
});


