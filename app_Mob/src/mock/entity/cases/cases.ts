import qs from 'qs';
import { MockAdapter } from '@/mock/mock-adapter';
const mock = MockAdapter.getInstance();

// 模拟数据
const mockDatas: Array<any> = [
];


//getwflink
mock.onGet(new RegExp(/^\/wfcore\/pms-app-mob\/cases\/[a-zA-Z0-9\-\;]+\/usertasks\/[a-zA-Z0-9\-\;]+\/ways$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: getwflink");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status,[
        {"sequenceFlowId":"dfdsfdsfdsfdsfds","sequenceFlowName":"同意",
         "taskId":"aaaaddddccccddddd","processDefinitionKey":"support-workorders-approve-v1",
         "processInstanceId":"ddlfldldfldsfds","refViewKey":""},
        {"sequenceFlowId":"ddssdfdfdfdfsfdf","sequenceFlowName":"不同意",
         "taskId":"aaaaddddccccddddd","processDefinitionKey":"support-workorders-approve-v1",
         "processInstanceId":"ddfdsldlfdlldsf","refViewKey":"workorder_ltform_editview"}
        ]];
});

// getwfstep
mock.onGet(new RegExp(/^\/wfcore\/pms-app-mob\/cases\/process-definitions-nodes$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: getwfstep");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, [
        {"userTaskId":"sddfddfd-dfdf-fdfd-fdf-dfdfd",
        "userTaskName":"待审",
        "cnt":0,
        "processDefinitionKey":"support-workorders-approve-v1",
        "processDefinitionName":"工单审批流程v1"
        },
        {"userTaskId":"sddfddfd-dfdf-fdfd-fdf-87927",
        "userTaskName":"待分配",
        "cnt":3,
        "processDefinitionKey":"support-workorders-approve-v1",
        "processDefinitionName":"工单审批流程v1"}
        ]];
});

// createBatch
mock.onPost(new RegExp(/^\/cases\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: createBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});

// updateBatch
mock.onPut(new RegExp(/^\/cases\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: updateBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});

// removeBatch
mock.onDelete(new RegExp(/^\/cases\/batch$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: removeBatch");
    console.table({url:config.url, method: config.method, data:config.data});
    console.groupEnd();
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, {}];
    }
    return [status, {}];
});



// Select
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/select$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Select");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/select$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items);
    console.groupEnd();
    console.groupEnd();
    return [status, _items];
});


// Select
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/select$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Select");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/select$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items);
    console.groupEnd();
    console.groupEnd();
    return [status, _items];
});


// Select
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/select$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Select");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/select$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items);
    console.groupEnd();
    console.groupEnd();
    return [status, _items];
});

// Select
mock.onGet(new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/select$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Select");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/select$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items);
    console.groupEnd();
    console.groupEnd();
    return [status, _items];
});

    
// Create
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Create");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// Create
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Create");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// Create
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Create");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// Create
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Create");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas[0]);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas[0]];
});

    
// Update
mock.onPut(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Update");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// Update
mock.onPut(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Update");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// Update
mock.onPut(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Update");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// Update
mock.onPut(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Update");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});








// GetDraft
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/getdraft$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: GetDraft");
    console.table({url:config.url, method: config.method, data:config.data});
    // GetDraft
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});


// GetDraft
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/getdraft$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: GetDraft");
    console.table({url:config.url, method: config.method, data:config.data});
    // GetDraft
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});


// GetDraft
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/getdraft$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: GetDraft");
    console.table({url:config.url, method: config.method, data:config.data});
    // GetDraft
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

// GetDraft
mock.onGet(new RegExp(/^\/cases\/getdraft$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: GetDraft");
    console.table({url:config.url, method: config.method, data:config.data});
    // GetDraft
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// CheckKey
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/checkkey$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: CheckKey");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/checkkey$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// CheckKey
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/checkkey$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: CheckKey");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/checkkey$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// CheckKey
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/checkkey$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: CheckKey");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/checkkey$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// CheckKey
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/checkkey$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: CheckKey");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/checkkey$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// ConfirmChange
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmchange$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: ConfirmChange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmchange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// ConfirmChange
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmchange$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: ConfirmChange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmchange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// ConfirmChange
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmchange$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: ConfirmChange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmchange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// ConfirmChange
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/confirmchange$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: ConfirmChange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmchange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// Confirmstorychange
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmstorychange$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Confirmstorychange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmstorychange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// Confirmstorychange
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmstorychange$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Confirmstorychange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmstorychange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// Confirmstorychange
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmstorychange$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Confirmstorychange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmstorychange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// Confirmstorychange
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/confirmstorychange$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Confirmstorychange");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/confirmstorychange$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});




    
// HuaFavorite
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/huafavorite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: HuaFavorite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/huafavorite$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// HuaFavorite
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/huafavorite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: HuaFavorite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/huafavorite$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// HuaFavorite
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/huafavorite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: HuaFavorite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/huafavorite$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// HuaFavorite
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/huafavorite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: HuaFavorite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/huafavorite$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// LinkCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/linkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: LinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/linkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// LinkCase
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/linkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: LinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/linkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// LinkCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/linkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: LinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/linkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// LinkCase
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/linkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: LinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/linkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// RunCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: RunCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// RunCase
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: RunCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// RunCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: RunCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// RunCase
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/runcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: RunCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// RunCases
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: RunCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// RunCases
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: RunCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// RunCases
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: RunCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// RunCases
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/runcases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: RunCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/runcases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// Save
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/save$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Save");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/save$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// Save
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/save$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Save");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/save$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// Save
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/save$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Save");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/save$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// Save
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/save$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Save");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/save$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// TestRunCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestRunCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// TestRunCase
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestRunCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// TestRunCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestRunCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// TestRunCase
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/testruncase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestRunCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// TestRunCases
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestRunCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// TestRunCases
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestRunCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// TestRunCases
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestRunCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// TestRunCases
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/testruncases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestRunCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testruncases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// TestsuitelinkCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testsuitelinkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestsuitelinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testsuitelinkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// TestsuitelinkCase
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testsuitelinkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestsuitelinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testsuitelinkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// TestsuitelinkCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testsuitelinkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestsuitelinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testsuitelinkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// TestsuitelinkCase
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/testsuitelinkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: TestsuitelinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/testsuitelinkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// UnlinkCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// UnlinkCase
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// UnlinkCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// UnlinkCase
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/unlinkcase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// UnlinkCases
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// UnlinkCases
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// UnlinkCases
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// UnlinkCases
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/unlinkcases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinkcases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// UnlinkSuiteCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkSuiteCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// UnlinkSuiteCase
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkSuiteCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// UnlinkSuiteCase
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkSuiteCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// UnlinkSuiteCase
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/unlinksuitecase$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkSuiteCase");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecase$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});

    
// UnlinkSuiteCases
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkSuiteCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// UnlinkSuiteCases
mock.onPost(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkSuiteCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});

    
// UnlinkSuiteCases
mock.onPost(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkSuiteCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table({});
    console.groupEnd();
    console.groupEnd();
    return [status, {}];
});
        
// UnlinkSuiteCases
mock.onPost(new RegExp(/^\/cases\/?([a-zA-Z0-9\-\;]{0,35})\/unlinksuitecases$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: UnlinkSuiteCases");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/unlinksuitecases$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    //let items = mockDatas ? mockDatas : [];
    //let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
      let data = JSON.parse(config.data);
    mockDatas.forEach((item)=>{
        if(item['id'] == tempValue['id'] ){
            for(let value in data){
              if(item.hasOwnProperty(value)){
                  item[value] = data[value];
              }
            }
        }
    })
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(data);
    console.groupEnd();
    console.groupEnd();
    return [status, data];
});


// FetchBatchNew
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchbatchnew$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchBatchNew");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchbatchnew$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchBatchNew
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchbatchnew$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchBatchNew");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchbatchnew$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchBatchNew
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchbatchnew$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchBatchNew");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchbatchnew$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});
    
// FetchBatchNew
mock.onGet(new RegExp(/^\/cases\/fetchbatchnew$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchBatchNew");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchBatchNew
mock.onGet(new RegExp(/^\/cases\/fetchbatchnew(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchBatchNew");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});


// FetchCurSuite
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcursuite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcursuite$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchCurSuite
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcursuite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcursuite$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchCurSuite
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcursuite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcursuite$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});
    
// FetchCurSuite
mock.onGet(new RegExp(/^\/cases\/fetchcursuite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchCurSuite
mock.onGet(new RegExp(/^\/cases\/fetchcursuite(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});


// FetchCurTestTask
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcurtesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcurtesttask$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchCurTestTask
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcurtesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcurtesttask$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchCurTestTask
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcurtesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchcurtesttask$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});
    
// FetchCurTestTask
mock.onGet(new RegExp(/^\/cases\/fetchcurtesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchCurTestTask
mock.onGet(new RegExp(/^\/cases\/fetchcurtesttask(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});


// FetchDefault
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchdefault$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchDefault");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchdefault$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchDefault
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchdefault$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchDefault");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchdefault$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchDefault
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchdefault$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchDefault");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchdefault$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});
    
// FetchDefault
mock.onGet(new RegExp(/^\/cases\/fetchdefault$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchDefault");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchDefault
mock.onGet(new RegExp(/^\/cases\/fetchdefault(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchDefault");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});


// FetchNotCurTestSuite
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtestsuite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtestsuite$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchNotCurTestSuite
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtestsuite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtestsuite$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchNotCurTestSuite
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtestsuite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtestsuite$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});
    
// FetchNotCurTestSuite
mock.onGet(new RegExp(/^\/cases\/fetchnotcurtestsuite$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchNotCurTestSuite
mock.onGet(new RegExp(/^\/cases\/fetchnotcurtestsuite(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestSuite");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});


// FetchNotCurTestTask
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id','id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtesttask$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchNotCurTestTask
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtesttask$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});


// FetchNotCurTestTask
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    const paramArray:Array<any> = ['id'];
    let tempValue: any = {};
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/fetchnotcurtesttask$/).exec(config.url);
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    if (items.length > 0 && paramArray.length > 0) {
        paramArray.forEach((paramkey: any) => {
            if (tempValue[paramkey] && tempValue[paramkey].indexOf(";") > 0) {
                let keysGrounp: Array<any> = tempValue[paramkey].split(new RegExp(/[\;]/));
                let tempArray: Array<any> = [];
                keysGrounp.forEach((singlekey: any) => {
                    let _items =  items.filter((item: any) => { return item[paramkey] == singlekey });
                   if(_items.length >0){
                    tempArray.push(..._items);
                   }
                })
                items = tempArray;
            } else {
                items = items.filter((item: any) => { return item[paramkey] == tempValue[paramkey] });
            }
        })
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(items);
    console.groupEnd();
    console.groupEnd();
    return [status, items];
});
    
// FetchNotCurTestTask
mock.onGet(new RegExp(/^\/cases\/fetchnotcurtesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(mockDatas);
    console.groupEnd();
    console.groupEnd();
    return [status, mockDatas ? mockDatas : []];
});

// FetchNotCurTestTask
mock.onGet(new RegExp(/^\/cases\/fetchnotcurtesttask(\?[\w-./?%&=,]*)*$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: FetchNotCurTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    if(config.url.includes('page')){
        let url = config.url.split('?')[1];
        let params  =  qs.parse(url);
        Object.assign(config, params);
    }
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }
    let total = mockDatas.length;
    let records: Array<any> = [];
    if(!config.page || !config.size){
        records = mockDatas;
    }else{
        if((config.page-1)*config.size < total){
          records = mockDatas.slice(config.page,config.size);
        }
    }
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(records ?  records : []);
    console.groupEnd();
    console.groupEnd();
    return [status, records ?  records : []];
});

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现

// URI参数传递情况未实现
// URI参数传递情况未实现


// Remove
mock.onDelete(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Remove");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// Remove
mock.onDelete(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Remove");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// Remove
mock.onDelete(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Remove");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// Remove
mock.onDelete(new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Remove");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// Get
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Get");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// Get
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Get");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// Get
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Get");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// Get
mock.onGet(new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: Get");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// GetByTestTask
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/getbytesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: GetByTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/getbytesttask$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// GetByTestTask
mock.onGet(new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/getbytesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: GetByTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/stories\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/getbytesttask$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// GetByTestTask
mock.onGet(new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/getbytesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: GetByTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id','id'];
    const matchArray:any = new RegExp(/^\/products\/([a-zA-Z0-9\-\;]{1,35})\/cases\/([a-zA-Z0-9\-\;]{1,35})\/getbytesttask$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});

// GetByTestTask
mock.onGet(new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/getbytesttask$/)).reply((config: any) => {
    console.groupCollapsed("实体:case 方法: GetByTestTask");
    console.table({url:config.url, method: config.method, data:config.data});
    let status = MockAdapter.mockStatus(config);
    if (status !== 200) {
        return [status, null];
    }    
    const paramArray:Array<any> = ['id'];
    const matchArray:any = new RegExp(/^\/cases\/([a-zA-Z0-9\-\;]{1,35})\/getbytesttask$/).exec(config.url);
    let tempValue: any = {};
    if(matchArray && matchArray.length >1 && paramArray && paramArray.length >0){
        paramArray.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
    }
    let items = mockDatas ? mockDatas : [];
    let _items = items.find((item: any) => Object.is(item.id, tempValue.id));
    console.groupCollapsed("response数据  status: "+status+" data: ");
    console.table(_items?_items:{});
    console.groupEnd();
    console.groupEnd();
    return [status, _items?_items:{}];
});