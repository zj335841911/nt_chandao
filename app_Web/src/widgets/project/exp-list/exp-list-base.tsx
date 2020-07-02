import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControllerBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ExpService from './exp-list-service';


/**
 * listexpbar_list部件基类
 *
 * @export
 * @class ListControllerBase
 * @extends {ExpListBase}
 */
export class ExpListBase extends ListControllerBase {

    /**
     * 建构部件服务对象
     *
     * @type {ExpService}
     * @memberof ExpListBase
     */
    public service: ExpService = new ExpService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ExpListBase
     */
    public appEntityService: ProjectService = new ProjectService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ExpListBase
     */
    protected appDeName: string = 'project';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof ExpListBase
     */
    public limit: number = 1000;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof ExpListBase
     */
    public minorSortDir: string = '';
}