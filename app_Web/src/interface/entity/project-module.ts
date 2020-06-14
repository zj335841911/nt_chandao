/**
 * 任务模块
 *
 * @export
 * @interface ProjectModule
 */
export interface ProjectModule {

    /**
     * 类型（task）
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    type?: any;

    /**
     * collector
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    collector?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    id?: any;

    /**
     * 逻辑删除标志
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    deleted?: any;

    /**
     * 叶子模块
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    isleaf?: any;

    /**
     * path
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    path?: any;

    /**
     * owner
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    owner?: any;

    /**
     * 短名称
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    ibizshort?: any;

    /**
     * 名称
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    name?: any;

    /**
     * grade
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    grade?: any;

    /**
     * order
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    order?: any;

    /**
     * branch
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    branch?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    parent?: any;

    /**
     * 项目
     *
     * @returns {*}
     * @memberof ProjectModule
     */
    root?: any;
}