/**
 * 索引检索
 *
 * @export
 * @interface IbizproIndex
 */
export interface IbizproIndex {

    /**
     * 类型
     *
     * @returns {*}
     * @memberof IbizproIndex
     */
    indextype?: any;

    /**
     * 主键
     *
     * @returns {*}
     * @memberof IbizproIndex
     */
    indexid?: any;

    /**
     * 支持搜索[需求、Bug、任务、项目、产品、文档、用例]
     *
     * @returns {*}
     * @memberof IbizproIndex
     */
    indexname?: any;

    /**
     * 逻辑标识
     *
     * @returns {*}
     * @memberof IbizproIndex
     */
    deleted?: any;

    /**
     * 组织标识
     *
     * @returns {*}
     * @memberof IbizproIndex
     */
    orgid?: any;

    /**
     * 部门标识
     *
     * @returns {*}
     * @memberof IbizproIndex
     */
    mdeptid?: any;

    /**
     * 描述
     *
     * @returns {*}
     * @memberof IbizproIndex
     */
    indexdesc?: any;
}