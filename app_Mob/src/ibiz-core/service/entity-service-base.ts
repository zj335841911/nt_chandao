import { Http, Util, HttpResponse } from '../utils';
import { DBService } from './db-service';

/**
 * 实体服务基类
 *
 * @export
 * @class EntityServiceBase
 */
export class EntityServiceBase {

    /**
     * 实体本地数据库
     *
     * @protected
     * @type {DBService}
     * @memberof EntityServiceBase
     */
    protected db: DBService;

    /**
     * http请求工具实例
     *
     * @protected
     * @type {Http}
     * @memberof EntityServiceBase
     */
    protected http: Http = Http.getInstance();

    /**
     * 所有从实体
     *
     * @protected
     * @type {*}
     * @memberof EntityServiceBase
     */
    protected allMinorAppEntity: any = {};

    /**
     * 当前实体主键标识
     * 
     * @protected
     * @type {(string)}
     * @memberof EntityServiceBase
     */
    protected readonly key: string = '';

    /**
     * 当前实体名称
     * 
     * @protected
     * @type {(string)}
     * @memberof EntityServiceBase
     */
    protected readonly dePath: string = '';

    /**
     * 实体名称
     *
     * @protected
     * @type {string}
     * @memberof EntityServiceBase
     */
    protected readonly deName: string;

    /**
     * 当前实体主信息标识
     * 
     * @protected
     * @type {(string)}
     * @memberof EntityServiceBase
     */
    protected readonly text: string = '';

    /**
     * 请求根路径
     *
     * @protected
     * @type {string}
     * @memberof EntityServiceBase
     */
    protected readonly rootUrl: string = '';

    /**
     * Creates an instance of EntityServiceBase.
     * @param {string} deName
     * @memberof EntityServiceBase
     */
    constructor(deName: string) {
        this.deName = deName;
        this.db = new DBService(deName);
    }

    /**
     * 设置从实体本地缓存
     *
     * @protected
     * @param {*} [context={}]
     * @param {*} [data]
     * @returns {Promise<void>}
     * @memberof EntityServiceBase
     */
    protected async setMinorLocalCache(context: any = {}, data: any): Promise<void> {
        if (data) {
            for (const key in this.allMinorAppEntity) {
                if (data.hasOwnProperty(key) && this.allMinorAppEntity.hasOwnProperty(key)) {
                    const config: any = this.allMinorAppEntity[key];
                    await this.setLocalCache(context, data[key], config.name);
                }
            }
        }
    }

    /**
     * 设置本地缓存
     *
     * @protected
     * @param {*} [context={}]
     * @param {*} data
     * @param {string} [entityName] 指定实体
     * @returns {Promise<boolean>}
     * @memberof EntityServiceBase
     */
    protected async setLocalCache(context: any = {}, data: any, entityName?: string): Promise<boolean> {
        if (data) {
            if (entityName) {
                const service: EntityServiceBase = await this.getService(entityName);
                if (service) {
                    return service.setLocalCache(context, data);
                }
            } else {
                data = Util.deepCopy(data);
                return this.db.set({ srfsessionkey: context.srfsessionkey, data });
            }
        }
        return false;
    }

    /**
     * 获取所有从实体本地缓存数据
     *
     * @protected
     * @param {*} [context={}]
     * @returns {Promise<any>}
     * @memberof EntityServiceBase
     */
    protected async getMinorLocalCache(context: any = {}): Promise<any> {
        const data: any = {};
        for (const key in this.allMinorAppEntity) {
            if (this.allMinorAppEntity.hasOwnProperty(key)) {
                const config: any = this.allMinorAppEntity[key];
                const results: any[] = await this.getLocalCache(context, config.name);
                if (results) {
                    results.forEach((item: any) => {
                        if (item.srfuf == 0) {
                            delete item[this.key];
                        }
                    });
                }
                data[key] = results || [];
            }
        }
        return data;
    }

    /**
     * 获取本地缓存数据
     *
     * @protected
     * @param {*} [context={}]
     * @param {string} [entityName] 指定实体
     * @returns {Promise<any>}
     * @memberof EntityServiceBase
     */
    protected async getLocalCache(context: any = {}, entityName?: string): Promise<any> {
        if (entityName) {
            const service: EntityServiceBase = await this.getService(entityName);
            if (service) {
                return service.getLocalCache(context);
            }
        } else {
            const item: any = await this.db.get(context.srfsessionkey);
            if (item) {
                return item.data;
            }
        }
    }

    /**
     * 删除本地缓存
     *
     * @protected
     * @param {*} [context={}]
     * @returns {Promise<boolean>}
     * @memberof EntityServiceBase
     */
    protected async removeLocalCache(context: any = {}, entityName?: string): Promise<boolean> {
        if (entityName) {
            const service: EntityServiceBase = await this.getService(entityName);
            if (service) {
                return service.removeLocalCache(context);
            }
        } else {
            return this.db.remove(context.srfsessionkey);
        }
        return false;
    }

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async Select(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「Select」未实现' });
    }

    /**
     * SelectTemp接口方法(暂未支持)
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async SelectTemp(context: any = {}, data: any = {}): Promise<HttpResponse> {
        if (context.srfsessionkey) {
            const result: any[] = await this.getLocalCache(context) || [];
            if (result) {
                return new HttpResponse(200, result);
            }
        }
        return new HttpResponse(500, null, { code: 5001 });
    }

    /**
     * CreateTemp接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async CreateTemp(context: any = {}, data: any = {}): Promise<HttpResponse> {
        if (data && context.srfsessionkey) {
            const result: any[] = await this.getLocalCache(context) || [];
            data.srfuf = 0;
            result.push(data);
            if (await this.setLocalCache(context, result)) {
                return new HttpResponse(200, data);
            }
        }
        return new HttpResponse(500, null, { code: 5003 });
    }

    /**
     * GetTemp接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async GetTemp(context: any = {}, data: any = {}): Promise<HttpResponse> {
        if (context.srfsessionkey) {
            const result: any[] = await this.getLocalCache(context) || [];
            const self: any = result.find((item: any) => Object.is(item[this.key], context[this.deName]));
            if (self) {
                return new HttpResponse(200, self);
            }
        }
        return new HttpResponse(500, null, { code: 5001 });
    }

    /**
     * UpdateTemp接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async UpdateTemp(context: any = {}, data: any = {}): Promise<HttpResponse> {
        if (context.srfsessionkey) {
            const result: any[] = await this.getLocalCache(context) || [];
            const num: number = result.findIndex((item: any) => Object.is(item[this.key], data[this.key]));
            if (num !== -1) {
                result[num] = data;
                if (await this.setLocalCache(context, result)) {
                    return new HttpResponse(200, data);
                }
            }
        }
        return new HttpResponse(500, null, { code: 5004 });
    }

    /**
     * RemoveTemp接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async RemoveTemp(context: any = {}, data: any = {}): Promise<HttpResponse> {
        if (context.srfsessionkey) {
            const result: any[] = await this.getLocalCache(context) || [];
            const str: string = context[this.deName];
            if (str && !Object.is(str, '')) {
                const keys: string[] = str.split(';');
                keys.forEach((key: string) => {
                    const num: number = result.findIndex((item: any) => item[this.key] == key);
                    if (num !== -1) {
                        result.splice(num, 1);
                    }
                });
                if (await this.setLocalCache(context, result)) {
                    return new HttpResponse(200, data);
                }
            }
        }
        return new HttpResponse(500, null, { code: 5005 });
    }

    /**
     * UpdateTempMajor接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async UpdateTempMajor(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.Update(context, data);
    }

    /**
     * CreateTempMajor接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async CreateTempMajor(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.Create(context, data);
    }

    /**
     * RemoveTempMajor接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async RemoveTempMajor(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.Remove(context, data);
    }

    /**
     * GetDraftTempMajor接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async GetDraftTempMajor(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.GetDraft(context, data);
    }

    /**
     * GetTempMajor接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async GetTempMajor(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.Get(context, data);
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FetchTempDefault(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「FetchTempDefault」未实现' });
    }

    /**
     * GetDraftTemp接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async GetDraftTemp(context: any = {}, data: any = {}): Promise<HttpResponse> {
        const tempData = { srfsessionkey: data.srfsessionkey };
        Object.defineProperty(tempData, this.key, {
            enumerable: true,
            value: data[this.key]
        });
        Object.assign(data, tempData);
        return new HttpResponse(200, data);
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async Update(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「Update」未实现' });
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async Save(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「Save」未实现' });
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async CheckKey(context: any = {}, data: any = {}): Promise<HttpResponse> {
        if (context.srfsessionkey) {
            const result = await this.getLocalCache(context)
            if (result) {
                return new HttpResponse(200, true);
            }
        }
        return new HttpResponse(200, false);
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async GetDraft(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「GetDraft」未实现' });
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async Remove(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「Remove」未实现' });
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async Get(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「Get」未实现' });
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async Create(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「Create」未实现' });
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FetchDefault(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return new HttpResponse(500, null, { code: 100, message: '预置实体行为「FetchDefault」未实现' });
    }

    /**
     * FilterUpdate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FilterUpdate(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.Update(context, data);
    }

    /**
     * FilterSearch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FilterSearch(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.FetchDefault(context, data);
    }

    /**
     * FilterGet接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FilterGet(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.Get(context, data);
    }

    /**
     * FilterCreate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FilterCreate(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.Create(context, data);
    }

    /**
     * FilterGetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FilterGetDraft(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.GetDraft(context, data);
    }

    /**
     * FilterRemove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FilterRemove(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.Remove(context, data);
    }

    /**
     * FilterFetch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async FilterFetch(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.FetchDefault(context, data);
    }

	/**
     * WFStart接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async WFStart(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.http.post(`/${this.dePath}/wfstart`, { wfdata: data });
    }

    /**
     * WFClose接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async WFClose(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.http.post(`/${this.dePath}/${context[this.key]}/wfclose`, data);
    }

    /**
     * WFMarkRead接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async WFMarkRead(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.http.post(`/${this.dePath}/${context[this.key]}/wfmarkread`, data);
    }

    /**
     * WFGoto接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async WFGoto(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.http.post(`/${this.dePath}/${context[this.key]}/wfgoto`, data);
    }

    /**
     * WFRollback接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async WFRollback(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.http.post(`/${this.dePath}/${context[this.key]}/wfrollback`, data);
    }

    /**
     * WFRestart接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async WFRestart(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.http.post(`/${this.dePath}/${context[this.key]}/wfrestart`, data);
    }

    /**
     * WFReassign接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async WFReassign(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.http.post(`/${this.dePath}/${context[this.key]}/wfreassign`, data);
    }

    /**
     * WFSubmit接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof EntityServiceBase
     */
    public async WFSubmit(context: any = {}, data: any = {}): Promise<HttpResponse> {
        return this.http.post(`/${this.dePath}/${context[this.key]}/wfsubmit`, data);
    }

    /**
     * 获取其他实体服务
     *
     * @protected
     * @param {string} name 实体名称
     * @returns {Promise<any>}
     * @memberof EntityServiceBase
     */
    protected getService(name: string): Promise<any> {
        return window.appEntityServiceConstructor.getService(name);
    }

}