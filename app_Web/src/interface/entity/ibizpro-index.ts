/**
 * 索引检索
 *
 * @export
 * @interface IBIZPRO_INDEX
 */
export interface IBIZPRO_INDEX {

    /**
     * 类型
     *
     * @returns {*}
     * @memberof IBIZPRO_INDEX
     */
    indextype?: any;

    /**
     * 主键
     *
     * @returns {*}
     * @memberof IBIZPRO_INDEX
     */
    indexid?: any;

    /**
     * 支持搜索[需求、Bug、任务、项目、产品、文档、用例]
     *
     * @returns {*}
     * @memberof IBIZPRO_INDEX
     */
    indexname?: any;

    /**
     * 逻辑标识
     *
     * @returns {*}
     * @memberof IBIZPRO_INDEX
     */
    deleted?: any;

    /**
     * 组织标识
     *
     * @returns {*}
     * @memberof IBIZPRO_INDEX
     */
    orgid?: any;

    /**
     * 部门标识
     *
     * @returns {*}
     * @memberof IBIZPRO_INDEX
     */
    mdeptid?: any;
}