import { EntityServiceBase } from '@/ibiz-core';
import { HttpResponse } from '@/ibiz-core/utils';

/**
 * 任务服务对象基类
 *
 * @export
 * @class TaskServiceBase
 * @extends {EntityServiceBase}
 */
export class TaskServiceBase extends EntityServiceBase {

    /**
     * 当前实体主键标识
     * 
     * @protected
     * @type {(string)}
     * @memberof TaskServiceBase
     */
    protected readonly key: string = 'id';

    /**
     * 当前实体名称
     * 
     * @protected
     * @type {(string)}
     * @memberof TaskServiceBase
     */
    protected readonly dePath: string = 'tasks';

    /**
     * 当前实体主信息标识
     * 
     * @protected
     * @type {(string)}
     * @memberof TaskServiceBase
     */
    protected readonly text: string = 'name';

    /**
     * 请求根路径
     *
     * @protected
     * @type {string}
     * @memberof TaskServiceBase
     */
    protected readonly rootUrl: string = '';

    /**
     * 所有从实体
     *
     * @protected
     * @type {*}
     * @memberof TaskServiceBase
     */
    protected allMinorAppEntity: any = {
    };

    /**
     * Creates an instance of Crm_leadServiceBase.
     * @memberof Crm_leadServiceBase
     */
    constructor() {
        super('task');
    }

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Select(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.get(`/stories/${context.story}/tasks/${context.task}/select`);
            }
            return await this.http.get(`/tasks/${context.task}/select`);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Create接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Create(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.post(`/stories/${context.story}/tasks`, data);
            }
            Object.assign(data, await this.getMinorLocalCache(context));
            data.task = null;
            const res: any = await this.http.post(`/tasks`, data);
            await this.setMinorLocalCache(context, res.data);
            return res;
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Update接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Update(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.put(`/stories/${context.story}/tasks/${context.task}`, data);
            }
            Object.assign(data, await this.getMinorLocalCache(context));
            const res: any = await this.http.put(`/tasks/${context.task}`, data);
            await this.setMinorLocalCache(context, res.data);
            return res;
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Remove接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Remove(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.delete(`/stories/${context.story}/tasks/${context.task}`);
            }
            return await this.http.delete(`/tasks/${context.task}`);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Get接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Get(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.get(`/stories/${context.story}/tasks/${context.task}`);
            }
            const res: any = await this.http.get(`/tasks/${context.task}`);
            await this.setMinorLocalCache(context, res.data);
            return res;
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * GetDraft接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async GetDraft(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/getdraft`);
            }
            const res: any = await this.http.get(`/tasks/getdraft`);
            res.data.task = context.task;
            await this.setMinorLocalCache(context, res.data);
            return res;
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Activate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Activate(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/activate`, data);
            }
            return await this.http.post(`/tasks/${context.task}/activate`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * AssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async AssignTo(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/assignto`, data);
            }
            return await this.http.post(`/tasks/${context.task}/assignto`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Cancel接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Cancel(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/cancel`, data);
            }
            return await this.http.post(`/tasks/${context.task}/cancel`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * CheckKey接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async CheckKey(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/checkkey`, data);
            }
            return await this.http.post(`/tasks/${context.task}/checkkey`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Close接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Close(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/close`, data);
            }
            return await this.http.post(`/tasks/${context.task}/close`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * DeleteEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async DeleteEstimate(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/deleteestimate`, data);
            }
            return await this.http.post(`/tasks/${context.task}/deleteestimate`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * EditEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async EditEstimate(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/editestimate`, data);
            }
            return await this.http.post(`/tasks/${context.task}/editestimate`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Finish接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Finish(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/finish`, data);
            }
            return await this.http.post(`/tasks/${context.task}/finish`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Pause接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Pause(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/pause`, data);
            }
            return await this.http.post(`/tasks/${context.task}/pause`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * RecordEstimate接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async RecordEstimate(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/recordestimate`, data);
            }
            return await this.http.post(`/tasks/${context.task}/recordestimate`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Restart接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Restart(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/restart`, data);
            }
            return await this.http.post(`/tasks/${context.task}/restart`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Save接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Save(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/save`, data);
            }
            Object.assign(data, await this.getMinorLocalCache(context));
            const res: any = await this.http.post(`/tasks/${context.task}/save`, data);
            await this.setMinorLocalCache(context, res.data);
            return res;
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Start接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async Start(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.task) {
                return await this.http.post(`/stories/${context.story}/tasks/${context.task}/start`, data);
            }
            return await this.http.post(`/tasks/${context.task}/start`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchByModule(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchbymodule`, data);
            }
            return await this.http.get(`/tasks/fetchbymodule`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchDefault(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchdefault`, data);
            }
            return await this.http.get(`/tasks/fetchdefault`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchDefaultRow接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchDefaultRow(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchdefaultrow`, data);
            }
            return await this.http.get(`/tasks/fetchdefaultrow`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchProjectTASK接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchProjectTASK(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchprojecttask`, data);
            }
            return await this.http.get(`/tasks/fetchprojecttask`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchRootTask(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchroottask`, data);
            }
            return await this.http.get(`/tasks/fetchroottask`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchTypeGroup(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchtypegroup`, data);
            }
            return await this.http.get(`/tasks/fetchtypegroup`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * CalcTime接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async CalcTime(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            throw new Error('URI参数传递情况未实现');
            throw new Error('URI参数传递情况未实现');
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchTempByModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchTempByModule(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchtypegroup`, data);
            }
            return await this.http.get(`/tasks/fetchtypegroup`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchTempDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchTempDefault(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchtypegroup`, data);
            }
            return await this.http.get(`/tasks/fetchtypegroup`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchTempDefaultRow接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchTempDefaultRow(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchtypegroup`, data);
            }
            return await this.http.get(`/tasks/fetchtypegroup`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchTempProjectTASK接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchTempProjectTASK(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchtypegroup`, data);
            }
            return await this.http.get(`/tasks/fetchtypegroup`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchTempRootTask接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchTempRootTask(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchtypegroup`, data);
            }
            return await this.http.get(`/tasks/fetchtypegroup`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchTempTypeGroup接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof TaskServiceBase
     */
    public async FetchTempTypeGroup(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/tasks/fetchtypegroup`, data);
            }
            return await this.http.get(`/tasks/fetchtypegroup`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }
}