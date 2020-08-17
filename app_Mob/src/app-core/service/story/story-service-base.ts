import { EntityServiceBase } from '@/ibiz-core';
import { HttpResponse } from '@/ibiz-core/utils';
import { GetStorySpecsLogic } from '@/app-core/service/story/get-story-specs-logic';
import { buildUnlinkStorysLogic } from '@/app-core/service/story/build-unlink-storys-logic';
import { projectUnlinkStorysLogic } from '@/app-core/service/story/project-unlink-storys-logic';

/**
 * 需求服务对象基类
 *
 * @export
 * @class StoryServiceBase
 * @extends {EntityServiceBase}
 */
export class StoryServiceBase extends EntityServiceBase {

    /**
     * 当前实体主键标识
     * 
     * @protected
     * @type {(string)}
     * @memberof StoryServiceBase
     */
    protected readonly key: string = 'id';

    /**
     * 当前实体名称
     * 
     * @protected
     * @type {(string)}
     * @memberof StoryServiceBase
     */
    protected readonly dePath: string = 'stories';

    /**
     * 当前实体主信息标识
     * 
     * @protected
     * @type {(string)}
     * @memberof StoryServiceBase
     */
    protected readonly text: string = 'title';

    /**
     * 请求根路径
     *
     * @protected
     * @type {string}
     * @memberof StoryServiceBase
     */
    protected readonly rootUrl: string = '';

    /**
     * 所有从实体
     *
     * @protected
     * @type {*}
     * @memberof StoryServiceBase
     */
    protected allMinorAppEntity: any = {
        'bugs': {
            name: 'bug'
        },
        'tasks': {
            name: 'task'
        },
    };

    /**
     * Creates an instance of Crm_leadServiceBase.
     * @memberof Crm_leadServiceBase
     */
    constructor() {
        super('story');
    }

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async Select(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/${context.story}/select`);
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
     * @memberof StoryServiceBase
     */
    public async Create(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            Object.assign(data, await this.getMinorLocalCache(context));
            data.story = null;
            const res: any = await this.http.post(`/stories`, data);
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
     * @memberof StoryServiceBase
     */
    public async Update(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            Object.assign(data, await this.getMinorLocalCache(context));
            const res: any = await this.http.put(`/stories/${context.story}`, data);
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
     * @memberof StoryServiceBase
     */
    public async Remove(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.delete(`/stories/${context.story}`);
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
     * @memberof StoryServiceBase
     */
    public async Get(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            const res: any = await this.http.get(`/stories/${context.story}`);
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
     * @memberof StoryServiceBase
     */
    public async GetDraft(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            const res: any = await this.http.get(`/stories/getdraft`);
            res.data.story = context.story;
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
     * @memberof StoryServiceBase
     */
    public async Activate(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/activate`, data);
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
     * @memberof StoryServiceBase
     */
    public async AssignTo(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/assignto`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchAssignTo接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BatchAssignTo(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/batchassignto`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchChangeBranch接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeBranch(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/batchchangebranch`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchChangeModule接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeModule(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/batchchangemodule`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchChangePlan接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BatchChangePlan(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/batchchangeplan`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchChangeStage接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BatchChangeStage(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/batchchangestage`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchClose接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BatchClose(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/batchclose`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchReview接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BatchReview(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/batchreview`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BatchUnlinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/batchunlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BugToStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BugToStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/bugtostory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BuildBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BuildBatchUnlinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/buildbatchunlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BuildLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BuildLinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/buildlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BuildUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BuildUnlinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/buildunlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * BuildUnlinkStorys接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async BuildUnlinkStorys(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/buildunlinkstorys`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Change接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async Change(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/change`, data);
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
     * @memberof StoryServiceBase
     */
    public async CheckKey(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/checkkey`, data);
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
     * @memberof StoryServiceBase
     */
    public async Close(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/close`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * GetStorySpec接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async GetStorySpec(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/getstoryspec`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * GetStorySpecs接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async GetStorySpecs(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            const res: any = await this.http.get(`/stories/${context.story}/getstoryspecs`);
            await this.setMinorLocalCache(context, res.data);
            return res;
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ImportPlanStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ImportPlanStories(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/importplanstories`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * LinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async LinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/linkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ProjectBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ProjectBatchUnlinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/projectbatchunlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ProjectLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ProjectLinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/projectlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ProjectUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ProjectUnlinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/projectunlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ProjectUnlinkStorys接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ProjectUnlinkStorys(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/projectunlinkstorys`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ReleaseBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ReleaseBatchUnlinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/releasebatchunlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ReleaseLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ReleaseLinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/releaselinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ReleaseUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ReleaseUnlinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/releaseunlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * ResetReviewedBy接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async ResetReviewedBy(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/resetreviewedby`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * Review接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async Review(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/review`, data);
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
     * @memberof StoryServiceBase
     */
    public async Save(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            Object.assign(data, await this.getMinorLocalCache(context));
            const res: any = await this.http.post(`/stories/${context.story}/save`, data);
            await this.setMinorLocalCache(context, res.data);
            return res;
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * UnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async UnlinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.post(`/stories/${context.story}/unlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchBuildLinkCompletedStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchBuildLinkCompletedStories(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchbuildlinkcompletedstories`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchBuildLinkableStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchBuildLinkableStories(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchbuildlinkablestories`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchBuildStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchBuildStories(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchbuildstories`, data);
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
     * @memberof StoryServiceBase
     */
    public async FetchByModule(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchbymodule`, data);
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
     * @memberof StoryServiceBase
     */
    public async FetchDefault(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchdefault`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchGetProductStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchGetProductStories(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchgetproductstories`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchProjectLinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchProjectLinkStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchprojectlinkstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchProjectStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchProjectStories(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchprojectstories`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchReleaseStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchReleaseStories(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchreleasestories`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchReportStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchReportStories(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchreportstories`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchStoryChild接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchStoryChild(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchstorychild`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchStoryRelated接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchStoryRelated(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchstoryrelated`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * FetchTaskRelatedStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async FetchTaskRelatedStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            return await this.http.get(`/stories/fetchtaskrelatedstory`, data);
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }

    /**
     * GetTaskReStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @returns {Promise<HttpResponse>}
     * @memberof StoryServiceBase
     */
    public async GetTaskReStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            throw new Error('URI参数传递情况未实现');
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
     * @memberof StoryServiceBase
     */
    public async ToStory(context: any = {}, data: any = {}): Promise<HttpResponse> {
        try {
            throw new Error('URI参数传递情况未实现');
        } catch (res) {
            return new HttpResponse(res.status, null);
        }
    }
}