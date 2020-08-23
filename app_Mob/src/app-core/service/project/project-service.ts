import { Http,Util } from '@/ibiz-core/utils';
import {ProjectServiceBase} from './project-service-base';


/**
 * 项目服务对象
 *
 * @export
 * @class ProjectService
 * @extends {ProjectServiceBase}
 */
export class ProjectService extends ProjectServiceBase {

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
// 默认导出
export default ProjectService;