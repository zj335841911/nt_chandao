import { HttpResponse } from '@/ibiz-core/utils';
import  BugUserRealName  from '@/app-core/code-list/bug-user-real-name';
import  CurCaseVersion  from '@/app-core/code-list/cur-case-version';
import  UserRealNameProject  from '@/app-core/code-list/user-real-name-project';
import  UserRealName  from '@/app-core/code-list/user-real-name';

/**
 * 动态代码表服务类
 *
 * @export
 * @class CodeListService
 */
export class CodeListService {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {CodeListService}
     * @memberof CodeListService
     */
    private static readonly instance: CodeListService = new CodeListService();

    /**
     * Creates an instance of CodeListService.
     * @memberof CodeListService
     */
    constructor() {
        if (CodeListService.instance) {
            return CodeListService.instance;
        }
    }

    /**
     * 所有代码表
     *
     * @protected
     * @type {any[]}
     * @memberof CodeListService
     */
    protected allCodeList: any = {
        // 用户真实名称（动态）（Bug）
        BugUserRealName: new BugUserRealName(),
        // 当前用例版本（动态）
        CurCaseVersion: new CurCaseVersion(),
        // 用户真实名称（项目团队成员）
        UserRealNameProject: new UserRealNameProject(),
        // 用户真实名称（动态）
        UserRealName: new UserRealName(),
    };

    /**
     * 代码表缓存
     *
     * @protected
     * @type {Map<string, HttpResponse>}
     * @memberof CodeListService
     */
    protected codeListCache: Map<string, HttpResponse> = new Map();

    /**
     * 获取动态代码表
     *
     * @param {string} tag 代码表标识
     * @param {boolean} [isCache] 是否缓存
     * @param {*} [context] 上下文
     * @param {*} [data] 参数
     * @returns {(Promise<any | HttpResponse>)}
     * @memberof CodeListService
     */
    public async getItems(tag: string, isCache?: boolean, context?: any, data?: any): Promise<any | HttpResponse> {
        if (!this.allCodeList[tag]) {
            return new HttpResponse(200, []);
        }
        if (isCache && this.codeListCache.has(tag)) {
            return this.codeListCache.get(tag);
        }
        const response = await this.allCodeList[tag].getItems(context, data);
        this.codeListCache.set(tag, response);
        return response;
    }

    /**
     * 获取实例
     *
     * @static
     * @returns {CodeListService}
     * @memberof CodeListService
     */
    public static getInstance(): CodeListService {
        return this.instance;
    }

}
// 默认导出
export default CodeListService;