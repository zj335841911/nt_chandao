import { Http,Util } from '@/utils';
import ProjectServiceBase from './project-service-base';


/**
 * 项目服务对象
 *
 * @export
 * @class ProjectService
 * @extends {ProjectServiceBase}
 */
export default class ProjectService extends ProjectServiceBase {

    /**
     * Creates an instance of  ProjectService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * UpdateProjectCycle接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof ProjectService
     */
    public async UpdateProjectCycle(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let res: any = { status: 200, data: {} };
        if(!data && data.begin && data.period) {
            return res;
        }
        let begin: Date = new Date(data.begin);
        let period = parseInt(data.period);
        let days: number = 0;
        let curWeek: number = begin.getDay();
        begin.setDate(begin.getDate() + period);
        for(; period > 0; period--, curWeek++) {
            curWeek = curWeek > 6 ? (curWeek - 7) : curWeek;
            if(curWeek > 0 && curWeek < 6) {
                days++;
            }
        }
        let year = begin.getFullYear();
        let month = begin.getMonth() + 1;
        let day = begin.getDate();
        Object.assign(res.data, {
            end: `${year}-${month < 10 ? ('0' + month) : month}-${day < 10 ? ('0' + day) : day}`,
            days: days
        });
        return res;
    }
}