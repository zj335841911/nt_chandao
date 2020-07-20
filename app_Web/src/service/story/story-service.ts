import { Http,Util } from '@/utils';
import StoryServiceBase from './story-service-base';


/**
 * 需求服务对象
 *
 * @export
 * @class StoryService
 * @extends {StoryServiceBase}
 */
export default class StoryService extends StoryServiceBase {

    /**
     * Creates an instance of  StoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  StoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * GetTaskReStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetTaskReStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/getdraft`,isloading);
            res.data.story = data.story;
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs ? res.data.storyspecs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            return res;
        }
        if(context.story && true) {
            let res:any = await Http.getInstance().get(`/stories/${context.story}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs ? res.data.storyspecs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            return res;
        }
        let res:any = await  Http.getInstance().get(`/stories/getdraft`,isloading);
        res.data.story = data.story;
        this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs ? res.data.storyspecs : []));
        this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
        this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
        return res;
    }


}