/**
 * 发布
 *
 * @export
 * @interface Release
 */
export interface Release {

    /**
     * 完成的需求
     *
     * @returns {*}
     * @memberof Release
     */
    stories?: any;

    /**
     * 里程碑
     *
     * @returns {*}
     * @memberof Release
     */
    marker?: any;

    /**
     * ID
     *
     * @returns {*}
     * @memberof Release
     */
    id?: any;

    /**
     * 遗留的Bug
     *
     * @returns {*}
     * @memberof Release
     */
    leftbugs?: any;

    /**
     * 解决的Bug
     *
     * @returns {*}
     * @memberof Release
     */
    bugs?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof Release
     */
    deleted?: any;

    /**
     * 发布名称
     *
     * @returns {*}
     * @memberof Release
     */
    name?: any;

    /**
     * 发布日期
     *
     * @returns {*}
     * @memberof Release
     */
    date?: any;

    /**
     * 状态
     *
     * @returns {*}
     * @memberof Release
     */
    status?: any;

    /**
     * 子状态
     *
     * @returns {*}
     * @memberof Release
     */
    substatus?: any;

    /**
     * 描述
     *
     * @returns {*}
     * @memberof Release
     */
    desc?: any;

    /**
     * 版本
     *
     * @returns {*}
     * @memberof Release
     */
    buildname?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof Release
     */
    product?: any;

    /**
     * 版本
     *
     * @returns {*}
     * @memberof Release
     */
    build?: any;

    /**
     * 平台/分支
     *
     * @returns {*}
     * @memberof Release
     */
    branch?: any;

    /**
     * 产品名称
     *
     * @returns {*}
     * @memberof Release
     */
    productname?: any;

    /**
     * 附件
     *
     * @returns {*}
     * @memberof Release
     */
    files?: any;

    /**
     * 后台服务标识
     *
     * @returns {*}
     * @memberof Release
     */
    backgroundid?: any;

    /**
     * 数据库标识
     *
     * @returns {*}
     * @memberof Release
     */
    sqlid?: any;

    /**
     * 前端应用标识
     *
     * @returns {*}
     * @memberof Release
     */
    frontapplication?: any;

    /**
     * 重新构建
     *
     * @returns {*}
     * @memberof Release
     */
    rebuild?: any;

    /**
     * 发布类型
     *
     * @returns {*}
     * @memberof Release
     */
    releasetype?: any;
}