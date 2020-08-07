import { Http,Util } from '@/utils';
import ProjectTeamServiceBase from './project-team-service-base';


/**
 * 项目团队服务对象
 *
 * @export
 * @class ProjectTeamService
 * @extends {ProjectTeamServiceBase}
 */
export default class ProjectTeamService extends ProjectTeamServiceBase {

    /**
     * Creates an instance of  ProjectTeamService.
     * 
     * @param {*} [opts={}]
     * @memberof  ProjectTeamService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}