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
mock.onPost(new RegExp(/^\/stories$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories$/;
    let url = config.url;
    let params = parsingParameters(paramArray, regStr, url);
    console.log(params);

    let state = judgmentParametersException(paramArray, params);
    if (state) {
        return [403, null, config.headers, config];
    }

    let data: any = JSON.parse(config.data);
    mockDatas.push(Object.assign({}, data, { storyid: Util.createUUID() }))

    return [status, mockDatas[mockDatas.length - 1], config.headers, config];
});

//Update
mock.onPut(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})$/;
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
mock.onDelete(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})$/;
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
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})$/;
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
mock.onGet(new RegExp(/^\/stories\/getdraft$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/getdraft$/;
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
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/activate$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/activate$/;
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
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/assignto$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/assignto$/;
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

//BatchAssignTo
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchassignto$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchassignto$/;
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

//BatchChangeBranch
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchchangebranch$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchchangebranch$/;
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

//BatchChangeModule
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchchangemodule$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchchangemodule$/;
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

//BatchChangePlan
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchchangeplan$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchchangeplan$/;
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

//BatchChangeStage
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchchangestage$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchchangestage$/;
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

//BatchClose
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchclose$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchclose$/;
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

//BatchReview
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchreview$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchreview$/;
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

//BatchUnlinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchunlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/batchunlinkstory$/;
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

//BugToStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/bugtostory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/bugtostory$/;
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

//BuildBatchUnlinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/buildbatchunlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/buildbatchunlinkstory$/;
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

//BuildLinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/buildlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/buildlinkstory$/;
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

//BuildUnlinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/buildunlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/buildunlinkstory$/;
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

//BuildUnlinkStorys
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/buildunlinkstorys$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/buildunlinkstorys$/;
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

//Change
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/change$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/change$/;
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
mock.onPost(new RegExp(/^\/stories\/checkkey$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/checkkey$/;
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
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/close$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/close$/;
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

//GetStorySpec
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/getstoryspec$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/getstoryspec$/;
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

//GetStorySpecs
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/getstoryspecs$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/getstoryspecs$/;
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

//ImportPlanStories
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/importplanstories$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/importplanstories$/;
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

//LinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/linkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/linkstory$/;
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

//ProjectBatchUnlinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/projectbatchunlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/projectbatchunlinkstory$/;
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

//ProjectLinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/projectlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/projectlinkstory$/;
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

//ProjectUnlinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/projectunlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/projectunlinkstory$/;
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

//ProjectUnlinkStorys
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/projectunlinkstorys$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/projectunlinkstorys$/;
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

//ReleaseBatchUnlinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/releasebatchunlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/releasebatchunlinkstory$/;
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

//ReleaseLinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/releaselinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/releaselinkstory$/;
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

//ReleaseUnlinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/releaseunlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/releaseunlinkstory$/;
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

//ResetReviewedBy
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/resetreviewedby$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/resetreviewedby$/;
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

//Review
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/review$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/review$/;
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
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/save$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/save$/;
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

//UnlinkStory
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/unlinkstory$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 'storyid'
    let paramArray: Array<string> = ['storyid'];
    let regStr: RegExp = /^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/unlinkstory$/;
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

//fetchBuildLinkCompletedStories
mock.onGet(new RegExp(/^\/stories\/fetchbuildlinkcompletedstories(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchbuildlinkcompletedstories(\?[\w-./?%&=]*)*$/;
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

//fetchBuildLinkableStories
mock.onGet(new RegExp(/^\/stories\/fetchbuildlinkablestories(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchbuildlinkablestories(\?[\w-./?%&=]*)*$/;
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

//fetchBuildStories
mock.onGet(new RegExp(/^\/stories\/fetchbuildstories(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchbuildstories(\?[\w-./?%&=]*)*$/;
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

//fetchByModule
mock.onGet(new RegExp(/^\/stories\/fetchbymodule(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchbymodule(\?[\w-./?%&=]*)*$/;
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
mock.onGet(new RegExp(/^\/stories\/fetchdefault(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchdefault(\?[\w-./?%&=]*)*$/;
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

//fetchGetProductStories
mock.onGet(new RegExp(/^\/stories\/fetchgetproductstories(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchgetproductstories(\?[\w-./?%&=]*)*$/;
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

//fetchProjectLinkStory
mock.onGet(new RegExp(/^\/stories\/fetchprojectlinkstory(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchprojectlinkstory(\?[\w-./?%&=]*)*$/;
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

//fetchProjectStories
mock.onGet(new RegExp(/^\/stories\/fetchprojectstories(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchprojectstories(\?[\w-./?%&=]*)*$/;
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

//fetchReleaseStories
mock.onGet(new RegExp(/^\/stories\/fetchreleasestories(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchreleasestories(\?[\w-./?%&=]*)*$/;
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

//fetchReportStories
mock.onGet(new RegExp(/^\/stories\/fetchreportstories(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchreportstories(\?[\w-./?%&=]*)*$/;
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

//fetchStoryChild
mock.onGet(new RegExp(/^\/stories\/fetchstorychild(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchstorychild(\?[\w-./?%&=]*)*$/;
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

//fetchStoryRelated
mock.onGet(new RegExp(/^\/stories\/fetchstoryrelated(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchstoryrelated(\?[\w-./?%&=]*)*$/;
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

//fetchTaskRelatedStory
mock.onGet(new RegExp(/^\/stories\/fetchtaskrelatedstory(\?[\w-./?%&=]*)*$/)).reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    // 
    let paramArray: Array<string> = [];
    let regStr: RegExp = /^\/stories\/fetchtaskrelatedstory(\?[\w-./?%&=]*)*$/;
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






