/**
 * 测试用例统计
 *
 * @export
 * @interface IBZ_CASESTATS
 */
export interface IBZ_CASESTATS {

    /**
     * 用例编号
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    id?: any;

    /**
     * 用例标题
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    title?: any;

    /**
     * 模块
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    module?: any;

    /**
     * 模块名称
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    modulename?: any;

    /**
     * 总用例数
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    totalcase?: any;

    /**
     * 通过用例数
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    passcase?: any;

    /**
     * 失败用例数
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    failcase?: any;

    /**
     * 阻塞用例数
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    blockedcase?: any;

    /**
     * 总执行数
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    totalruncase?: any;

    /**
     * 用例通过率
     *
     * @returns {*}
     * @memberof IBZ_CASESTATS
     */
    passrate?: any;
}