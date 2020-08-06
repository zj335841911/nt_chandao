/**
 * 文档库
 *
 * @export
 * @interface DocLib
 */
export interface DocLib {

    /**
     * 文档类型
     *
     * @returns {*}
     * @memberof DocLib
     */
    type?: any;

    /**
     * 收藏者
     *
     * @returns {*}
     * @memberof DocLib
     */
    collector?: any;

    /**
     * 权限
     *
     * @returns {*}
     * @memberof DocLib
     */
    acl?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof DocLib
     */
    deleted?: any;

    /**
     * 分组
     *
     * @returns {*}
     * @memberof DocLib
     */
    groups?: any;

    /**
     * 编号
     *
     * @returns {*}
     * @memberof DocLib
     */
    id?: any;

    /**
     * 用户
     *
     * @returns {*}
     * @memberof DocLib
     */
    users?: any;

    /**
     * 是否是主库
     *
     * @returns {*}
     * @memberof DocLib
     */
    main?: any;

    /**
     * 文档库名称
     *
     * @returns {*}
     * @memberof DocLib
     */
    name?: any;

    /**
     * 排序
     *
     * @returns {*}
     * @memberof DocLib
     */
    order?: any;

    /**
     * 项目库
     *
     * @returns {*}
     * @memberof DocLib
     */
    project?: any;

    /**
     * 产品库
     *
     * @returns {*}
     * @memberof DocLib
     */
    product?: any;
}