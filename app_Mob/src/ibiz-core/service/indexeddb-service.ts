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
        super('Aug 17, 2020');
    }

    /**
     * 实体配置初始化
     *
     * @protected
     * @memberof IndexedDBServiceBase
     */
    protected entityConfigInit(): void {
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