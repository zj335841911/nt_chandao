import { IndexedDBServiceBase } from './indexeddb-service-base';

/**
 * IndexedDB数据库服务
 *
 * @export
 * @class IndexedDBService
 * @extends {IndexedDBServiceBase}
 */
export class IndexedDBService extends IndexedDBServiceBase {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {IndexedDBService}
     * @memberof IndexedDBService
     */
    private static readonly instance: IndexedDBService = new IndexedDBService();

    /**
     * Creates an instance of IndexedDBService.
     * @memberof IndexedDBService
     */
    protected constructor() {
        if (IndexedDBService.instance) {
            return IndexedDBService.instance;
        }
        super('Aug 18, 2020');
    }

    /**
     * 实体配置初始化
     *
     * @protected
     * @memberof IndexedDBServiceBase
     */
    protected entityConfigInit(): void {
        this.entityConfigs.push({ name: 'user', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'projectteam', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'task', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'product', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'project', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'todo', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'story', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'ibzmyterritory', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'productplan', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'projectstats', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'bug', keyPath: 'srfsessionkey' });
        this.entityConfigs.push({ name: 'productstats', keyPath: 'srfsessionkey' });
    }

    /**
     * 获取实例
     *
     * @returns {IndexedDBService}
     * @memberof IndexedDBService
     */
    public static getInstance(): IndexedDBService {
        return IndexedDBService.instance;
    }

}