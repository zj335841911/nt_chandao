import { EntityServiceBase } from '@/ibiz-core';
import { HttpResponse } from '@/ibiz-core/utils';
import { GetModuleBranchLogic } from '@/app-core/service/bug/get-module-branch-logic';

/**
 * Bug服务对象基类
 *
 * @export
 * @class BugServiceBase
 * @extends {EntityServiceBase}
 */
export class BugServiceBase extends EntityServiceBase {

    /**
     * 当前实体主键标识
     * 
     * @protected
     * @type {(string)}
     * @memberof BugServiceBase
     */
    protected readonly key: string = 'id';

    /**
     * 当前实体名称
     * 
     * @protected
     * @type {(string)}
     * @memberof BugServiceBase
     */
    protected readonly dePath: string = 'bugs';

    /**
     * 当前实体主信息标识
     * 
     * @protected
     * @type {(string)}
     * @memberof BugServiceBase
     */
    protected readonly text: string = 'title';

    /**
     * 请求根路径
     *
     * @protected
     * @type {string}
     * @memberof BugServiceBase
     */
    protected readonly rootUrl: string = '';

    /**
     * 所有从实体
     *
     * @protected
     * @type {*}
     * @memberof BugServiceBase
     */
    protected allMinorAppEntity: any = {
    };

    /**
     * Creates an instance of Crm_leadServiceBase.
     * @memberof Crm_leadServiceBase
     */
    constructor() {
        super('bug');
    }

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async Select(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.get(`/stories/${context.story}/bugs/${context.bug}/select`);
            }
            return await this.http.get(`/bugs/${context.bug}/select`);
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
     * @memberof BugServiceBase
     */
    public async Create(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.post(`/stories/${context.story}/bugs`, data);
            }
            Object.assign(data, await this.getMinorLocalCache(context));
            data.bug = null;
            const res: any = await this.http.post(`/bugs`, data);
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
     * @memberof BugServiceBase
     */
    public async Update(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.put(`/stories/${context.story}/bugs/${context.bug}`, data);
            }
            Object.assign(data, await this.getMinorLocalCache(context));
            const res: any = await this.http.put(`/bugs/${context.bug}`, data);
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
     * @memberof BugServiceBase
     */
    public async Remove(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.delete(`/stories/${context.story}/bugs/${context.bug}`);
            }
            return await this.http.delete(`/bugs/${context.bug}`);
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
     * @memberof BugServiceBase
     */
    public async Get(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.get(`/stories/${context.story}/bugs/${context.bug}`);
            }
            const res: any = await this.http.get(`/bugs/${context.bug}`);
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
     * @memberof BugServiceBase
     */
    public async GetDraft(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/bugs/getdraft`);
            }
            const res: any = await this.http.get(`/bugs/getdraft`);
            res.data.bug = context.bug;
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
     * @memberof BugServiceBase
     */
    public async Activate(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/activate`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/activate`, data);
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
     * @memberof BugServiceBase
     */
    public async AssignTo(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/assignto`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/assignto`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async BatchUnlinkBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/batchunlinkbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/batchunlinkbug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BuildBatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async BuildBatchUnlinkBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/buildbatchunlinkbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/buildbatchunlinkbug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BuildLinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async BuildLinkBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/buildlinkbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/buildlinkbug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BuildUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async BuildUnlinkBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/buildunlinkbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/buildunlinkbug`, data);
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
     * @memberof BugServiceBase
     */
    public async CheckKey(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/checkkey`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/checkkey`, data);
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
     * @memberof BugServiceBase
     */
    public async Close(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/close`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/close`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Confirm接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async Confirm(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/confirm`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/confirm`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * LinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async LinkBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/linkbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/linkbug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ReleaaseBatchUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async ReleaaseBatchUnlinkBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/releaasebatchunlinkbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/releaasebatchunlinkbug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ReleaseLinkBugbyBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async ReleaseLinkBugbyBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/releaselinkbugbybug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/releaselinkbugbybug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ReleaseLinkBugbyLeftBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async ReleaseLinkBugbyLeftBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/releaselinkbugbyleftbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/releaselinkbugbyleftbug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ReleaseUnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async ReleaseUnlinkBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/releaseunlinkbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/releaseunlinkbug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Resolve接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async Resolve(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/resolve`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/resolve`, data);
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
     * @memberof BugServiceBase
     */
    public async Save(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/save`, data);
            }
            Object.assign(data, await this.getMinorLocalCache(context));
            const res: any = await this.http.post(`/bugs/${context.bug}/save`, data);
            await this.setMinorLocalCache(context, res.data);
            return res;
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async ToStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/tostory`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/tostory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * UnlinkBug接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async UnlinkBug(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story && context.bug) {
                return await this.http.post(`/stories/${context.story}/bugs/${context.bug}/unlinkbug`, data);
            }
            return await this.http.post(`/bugs/${context.bug}/unlinkbug`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchBuildBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async FetchBuildBugs(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/bugs/fetchbuildbugs`, data);
            }
            return await this.http.get(`/bugs/fetchbuildbugs`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchBuildLinkResolvedBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async FetchBuildLinkResolvedBugs(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/bugs/fetchbuildlinkresolvedbugs`, data);
            }
            return await this.http.get(`/bugs/fetchbuildlinkresolvedbugs`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchBuildOpenBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async FetchBuildOpenBugs(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/bugs/fetchbuildopenbugs`, data);
            }
            return await this.http.get(`/bugs/fetchbuildopenbugs`, data);
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
     * @memberof BugServiceBase
     */
    public async FetchDefault(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/bugs/fetchdefault`, data);
            }
            return await this.http.get(`/bugs/fetchdefault`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchReleaseBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async FetchReleaseBugs(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/bugs/fetchreleasebugs`, data);
            }
            return await this.http.get(`/bugs/fetchreleasebugs`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchReleaseLeftBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async FetchReleaseLeftBugs(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/bugs/fetchreleaseleftbugs`, data);
            }
            return await this.http.get(`/bugs/fetchreleaseleftbugs`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchReportBugs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof BugServiceBase
     */
    public async FetchReportBugs(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            if (context.story) {
                return await this.http.get(`/stories/${context.story}/bugs/fetchreportbugs`, data);
            }
            return await this.http.get(`/bugs/fetchreportbugs`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }
}