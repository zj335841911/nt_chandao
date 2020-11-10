/**
 * 文档库分类
 *
 * @export
 * @interface DocLibModule
 */
export interface DocLibModule {

    /**
     * 叶子模块
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    isleaf?: any;

    /**
     * 名称
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    name?: any;

    /**
     * 简称
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    ibizshort?: any;

    /**
     * grade
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    grade?: any;

    /**
     * collector
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    collector?: any;

    /**
     * branch
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    branch?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    id?: any;

    /**
     * 排序值
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    order?: any;

    /**
     * 逻辑删除标志
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    deleted?: any;

    /**
     * path
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    path?: any;

    /**
     * owner
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    owner?: any;

    /**
     * 类型
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    type?: any;

    /**
     * 编号
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    root?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    parent?: any;

    /**
     * 所属文档库
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    doclibname?: any;

    /**
     * 上级模块
     *
     * @returns {*}
     * @memberof DocLibModule
     */
    modulename?: any;
}