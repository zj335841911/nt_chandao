/**
 * 产品统计
 *
 * @export
 * @interface ProductStats
 */
export interface ProductStats {

    /**
     * 产品编号
     *
     * @returns {*}
     * @memberof ProductStats
     */
    id?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof ProductStats
     */
    deleted?: any;

    /**
     * 需求总数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    storycnt?: any;

    /**
     * 计划总数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    productplancnt?: any;

    /**
     * 发布总数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    releasecnt?: any;

    /**
     * 未开始需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    waitstorycnt?: any;

    /**
     * 已计划需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    plannedstorycnt?: any;

    /**
     * 开发中需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    developingstorycnt?: any;

    /**
     * 测试中需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    testingstorycnt?: any;

    /**
     * 已发布需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    releasedstorycnt?: any;

    /**
     * 未过期计划数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    unendproductplancnt?: any;

    /**
     * 剩余计划率
     *
     * @returns {*}
     * @memberof ProductStats
     */
    unendproductplanrate?: any;

    /**
     * 关联项目数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    resprojectcnt?: any;

    /**
     * 未完成关联项目数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    undoneresprojectcnt?: any;

    /**
     * 进行项目率
     *
     * @returns {*}
     * @memberof ProductStats
     */
    undoneresprojectrate?: any;

    /**
     * 维护中发布数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    normalreleasecnt?: any;

    /**
     * 维护发布率
     *
     * @returns {*}
     * @memberof ProductStats
     */
    normalreleaserate?: any;

    /**
     * 激活需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    activestorycnt?: any;

    /**
     * 未解决Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    activebugcnt?: any;
}