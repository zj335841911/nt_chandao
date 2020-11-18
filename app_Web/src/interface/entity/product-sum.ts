/**
 * 产品汇总表
 *
 * @export
 * @interface ProductSum
 */
export interface ProductSum {

    /**
     * 主键标识
     *
     * @returns {*}
     * @memberof ProductSum
     */
    id?: any;

    /**
     * 产品名称
     *
     * @returns {*}
     * @memberof ProductSum
     */
    name?: any;

    /**
     * 产品负责人
     *
     * @returns {*}
     * @memberof ProductSum
     */
    po?: any;

    /**
     * 计划
     *
     * @returns {*}
     * @memberof ProductSum
     */
    plan?: any;

    /**
     * 开始日期
     *
     * @returns {*}
     * @memberof ProductSum
     */
    begin?: any;

    /**
     * 结束日期
     *
     * @returns {*}
     * @memberof ProductSum
     */
    end?: any;

    /**
     * 草稿
     *
     * @returns {*}
     * @memberof ProductSum
     */
    waitstorycnt?: any;

    /**
     * 激活
     *
     * @returns {*}
     * @memberof ProductSum
     */
    activestorycnt?: any;

    /**
     * 已变更
     *
     * @returns {*}
     * @memberof ProductSum
     */
    changedstorycnt?: any;

    /**
     * 已关闭
     *
     * @returns {*}
     * @memberof ProductSum
     */
    closedstorycnt?: any;

    /**
     * 总计
     *
     * @returns {*}
     * @memberof ProductSum
     */
    storycnt?: any;

    /**
     * Bug数
     *
     * @returns {*}
     * @memberof ProductSum
     */
    bugcnt?: any;

    /**
     * 未开始阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    waitstagestorycnt?: any;

    /**
     * 已计划阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    planedstagestorycnt?: any;

    /**
     * 已立项阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    projectedstagestorycnt?: any;

    /**
     * 研发中阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    developingstagestorycnt?: any;

    /**
     * 研发完毕阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    developedstagestorycnt?: any;

    /**
     * 测试中阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    testingstagestorycnt?: any;

    /**
     * 测试完毕阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    testedstagestorycnt?: any;

    /**
     * 已验收阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    verifiedstagestorycnt?: any;

    /**
     * 已发布阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    releasedstagestorycnt?: any;

    /**
     * 已关闭阶段需求数量
     *
     * @returns {*}
     * @memberof ProductSum
     */
    closedstagestorycnt?: any;
}