/**
 * 测试用例统计
 *
 * @export
 * @interface CaseStats
 */
export interface CaseStats {

    /**
     * 用例编号
     *
     * @returns {*}
     * @memberof CaseStats
     */
    id?: any;

    /**
     * 用例标题
     *
     * @returns {*}
     * @memberof CaseStats
     */
    title?: any;

    /**
     * 模块
     *
     * @returns {*}
     * @memberof CaseStats
     */
    module?: any;

    /**
     * 模块名称
     *
     * @returns {*}
     * @memberof CaseStats
     */
    modulename?: any;

    /**
     * 总用例数
     *
     * @returns {*}
     * @memberof CaseStats
     */
    totalcase?: any;

    /**
     * 通过用例数
     *
     * @returns {*}
     * @memberof CaseStats
     */
    passcase?: any;

    /**
     * 失败用例数
     *
     * @returns {*}
     * @memberof CaseStats
     */
    failcase?: any;

    /**
     * 阻塞用例数
     *
     * @returns {*}
     * @memberof CaseStats
     */
    blockedcase?: any;

    /**
     * 总执行数
     *
     * @returns {*}
     * @memberof CaseStats
     */
    totalruncase?: any;

    /**
     * 用例通过率
     *
     * @returns {*}
     * @memberof CaseStats
     */
    passrate?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof CaseStats
     */
    product?: any;
}