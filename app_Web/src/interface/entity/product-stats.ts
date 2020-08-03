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
     * 维护中发布数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    normalreleasecnt?: any;

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

    /**
     * 产品名称
     *
     * @returns {*}
     * @memberof ProductStats
     */
    name?: any;

    /**
     * 指派给我的Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    assigntomebugcnt?: any;

    /**
     * 未关闭Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    notclosedbugcnt?: any;

    /**
     * 所有Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    bugcnt?: any;

    /**
     * 未确认Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    unconfirmbugcnt?: any;

    /**
     * 昨天关闭Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    yesterdayclosedbugcnt?: any;

    /**
     * 昨天确认Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    yesterdayconfirmbugcnt?: any;

    /**
     * 昨天解决Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    yesterdayresolvedbugcnt?: any;

    /**
     * 已延期
     *
     * @returns {*}
     * @memberof ProductStats
     */
    postponedprojectcnt?: any;
}