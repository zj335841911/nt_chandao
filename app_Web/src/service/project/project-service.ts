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


}