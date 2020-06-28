import { Environment } from '@/environments/environment';

/**
 * 添加代码表
 * 
 * @param state 
 * @param codelists 
 */
export const addCodeLists = (state: any, codelists: any) => {
    state.codelists = [];
    state.codelists = [...codelists];
}

/**
 * 添加本地应用数据
 * 
 * @param state 
 * @param localdata 
 */
export const addLocalData = (state: any, localdata: any = {}) => {
    state.localdata = {};
    Object.assign(state.localdata, localdata);
}

/**
 * 添加应用数据
 * 
 * @param state 
 * @param localdata 
 */
export const addAppData = (state: any, appdata: string) => {
    state.appdata = appdata;
}

/**
 * 修改应用数据
 * 
 * @param state 
 * @param localdata 
 */
export const updateAppData = (state: any, appdata: string) => {
    state.appdata = appdata;
}

/**
 * 更新代码表值
 * 
 * @param state 
 * @param param1 
 */
export const updateCodeList = (state: any, { srfkey, items }: { srfkey: string, items: any[] }) => {
    const index = state.codelists.findIndex((_codelist: any) => Object.is(_codelist.srfkey, srfkey));
    if (index === -1) {
        console.log(`${srfkey} ---- 代码表不存在`);
        return;
    }
    state.codelists[index].items = [...items];
}

/**
 * 修改主题
 * 
 * @param state 
 * @param val 
 */
export const setCurrentSelectTheme = (state: any, val: any) => {
    state.selectTheme = val;
}

/**
 * 修改字体
 * 
 * @param state 
 * @param val 
 */
export const setCurrentSelectFont = (state: any, val: any) => {
    state.selectFont = val;
}

/**
 * 重置分页导航数据
 * 
 * @param state 
 */
export const resetRootStateData = (state: any) => {
    state.pageTagList = [];
    state.pageMetas = [];
    state.historyPathList = [];
}

/**
 * 导航缓存，忽略判断的导航参数正则
 */
const navIgnoreParameters: RegExp = new RegExp(/(srftabactivate|srftreeexpactivate)/);

/**
 * 查找路由缓存
 *
 * @param {any[]} list
 * @param {*} page
 * @returns {number}
 */
function findPageListIndex(list: any[], page: any): number {
    if (page === undefined || page === null) {
        return -1;
    }
    return list.findIndex((item: any) => {
        // 基本路径是否一致
        if (Object.is(item.path, page.path)) {
            // 历史路径是否存在参数
            if (item.query) {
                let judge: boolean = true;
                // 新路径是否存在参数
                if (page.query) {
                    for (const key in page.query) {
                        // 忽略的参数略过
                        if (navIgnoreParameters.test(`|${key}|`)) {
                            continue;
                        }
                        if (item.query[key] === undefined || item.query[key] === null) {
                            judge = false;
                        }
                    }
                } else {
                    judge = false;
                }
                return judge;
            }
            return true;
        }
        return false;
    });;
}

/**
 * 添加导航页面
 * 
 * @param state 
 * @param arg 
 */
export const addPage = (state: any, page: any) => {
    if (!page) {
        return;
    }
    if (Object.is(page.meta.viewType, 'APPINDEX')) {
        window.sessionStorage.setItem(Environment.AppName, page.fullPath);
    } else {
        const pageMeta: any = { ...page.meta, info: null };
        const index = findPageListIndex(state.pageTagList, page);
        if (index === -1) {
            state.pageTagList.push(page);
            state.pageMetas.push(pageMeta);
        } else {
            const index2 = state.historyPathList.indexOf(page.fullPath);
            if (index2 >= 0) {
                state.historyPathList.splice(index2, 1);
            }
        }
        state.historyPathList.push(page.fullPath);
    }
}

/**
 * 删除导航页面
 * 
 * @param state 
 * @param arg 
 */
export const deletePage = (state: any, arg: any) => {
    let delPage: any = null;
    if (isNaN(arg)) {
        // const index = state.pageTagList.findIndex((page: any) => Object.is(page.fullPath, arg));
        // if (index >= 0) {
        //     delPage = state.pageTagList[index];
        //     state.pageTagList.splice(index, 1);
        //     state.pageMetas.splice(index, 1);
        // }
    } else {
        delPage = state.pageTagList[arg];
        state.pageTagList.splice(arg, 1);
        state.pageMetas.splice(arg, 1);
    }
    const index = state.historyPathList.findIndex((path: any) => Object.is(path, delPage.fullPath));
    if (index >= 0) {
        state.historyPathList.splice(index, 1);
    }
}

/**
 * 设置导航页面
 * 
 * @param state 
 * @param arg 
 */
export const setCurPage = (state: any, arg: any) => {
    let page: any = null;
    if (isNaN(arg)) {
        // const index = state.pageTagList.findIndex((page: any) => Object.is(page.fullPath, arg));
        // if (index >= 0) {
        //     page = state.pageTagList[index];
        // }
    } else {
        page = state.pageTagList[arg];
    }
    if (page) {
        const index = state.historyPathList.findIndex((path: any) => Object.is(path, page.fullPath));
        if (index >= 0) {
            state.historyPathList.splice(index, 1);
            state.historyPathList.push(page.fullPath);
        }
    }
}

/**
 * 设置导航页面标题
 * 
 * @param state 
 * @param param1 
 */
export const setCurPageCaption = (state: any, { route, caption, info }: { route: any, caption: string | null, info: string | null }) => {
    if (route) {
        const index = findPageListIndex(state.pageTagList, route);
        if (index >= 0) {
            state.pageMetas[index].caption = caption;
            state.pageMetas[index].info = info;
        }
    }
}

/**
 * 添加当前视图视图标识
 * 
 * @param state 
 * @param param1 
 */
export const addCurPageViewtag = (state: any, { route, viewtag }: { route: any, viewtag: string }) => {
    const index = findPageListIndex(state.pageTagList, route);
    
    if (index >= 0 && Object.isExtensible(state.pageTagList[index])) {
        state.pageTagList[index].viewtag = viewtag;
    }
}

/**
 * 删除所有导航页面
 * 
 * @param state 
 */
export const removeAllPage = (state: any) => {
    if (state.pageTagList.length > 0) {
        state.pageMetas = [];
        state.pageTagList = [];
        state.historyPathList = [];
    }
}

/**
 * 删除其他导航页面
 * 
 * @param state 
 */
export const removeOtherPage = (state: any) => {
    if (state.historyPathList.length > 0) {
        const curPath = state.historyPathList[state.historyPathList.length - 1];
        // const index = state.pageTagList.findIndex((page: any) => Object.is(page.fullPath, curPath));
        // if (index >= 0) {
        //     const page = state.pageTagList[index];
        //     const meta: any = {};
        //     Object.assign(meta, page.meta);
        //     state.pageTagList = [];
        //     state.pageMetas = [];
        //     state.historyPathList = [];
        //     state.historyPathList.push(page.fullPath);
        //     state.pageTagList.push(page);
        //     state.pageMetas.push(meta);
        // }
    }
}

/**
 * 更新 z-index 
 * 
 * @param state 
 * @param zIndex 
 */
export const updateZIndex = (state: any, zIndex: number) => {
    state.zIndex = zIndex;
}

/**
 * 设置视图split
 * 
 * @param state 
 * @param {viewSplit: number, viewUID: string} 
 */
export const setViewSplit = (state: any, args: { viewSplit: number, viewUID: string }) => {
    state.viewSplit[args.viewUID] = args.viewSplit;
}

/**
 * 添加拷贝数据
 * 
 * @param state 
 * @param localdata 
 */
export const addCopyData = (state: any, args: { srfkey: string, copyData: any }) => {
    if (args && args.srfkey && args.copyData) {
        state.copyDataMap[args.srfkey] = JSON.parse(JSON.stringify(args.copyData));
    }
}

/**
 * 添加单位数据
 * 
 * @param state 
 * @param args 
 */
export const addOrgData = (state: any, args: { srfkey: string, orgData: any }) => {
    if (args && args.srfkey && args.orgData) {
        state.orgDataMap[args.srfkey] = JSON.parse(JSON.stringify(args.orgData));
    }
}

/**
 * 添加部门数据
 * 
 * @param state 
 * @param args 
 */
export const addDepData = (state: any, args: { srfkey: string, depData: any }) => {
    if (args && args.srfkey && args.depData) {
        state.depDataMap[args.srfkey] = JSON.parse(JSON.stringify(args.depData));
    }
}