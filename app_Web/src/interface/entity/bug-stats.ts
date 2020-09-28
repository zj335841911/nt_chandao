/**
 * Bug统计
 *
 * @export
 * @interface BugStats
 */
export interface BugStats {

    /**
     * 标识
     *
     * @returns {*}
     * @memberof BugStats
     */
    id?: any;

    /**
     * 名称
     *
     * @returns {*}
     * @memberof BugStats
     */
    title?: any;

    /**
     * 由谁创建
     *
     * @returns {*}
     * @memberof BugStats
     */
    openedby?: any;

    /**
     * 未解决
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugwjj?: any;

    /**
     * 设计如此
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugbydesign?: any;

    /**
     * 重复Bug
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugduplicate?: any;

    /**
     * 外部原因
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugexternal?: any;

    /**
     * 已解决
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugfixed?: any;

    /**
     * 无法重现
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugnotrepro?: any;

    /**
     * 延期处理
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugpostponed?: any;

    /**
     * 不予解决
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugwillnotfix?: any;

    /**
     * 转为需求
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugtostory?: any;

    /**
     * 有效率
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugefficient?: any;

    /**
     * 总计
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugtotal?: any;

    /**
     * 编号
     *
     * @returns {*}
     * @memberof BugStats
     */
    product?: any;

    /**
     * 产品名称
     *
     * @returns {*}
     * @memberof BugStats
     */
    productname?: any;

    /**
     * Bug
     *
     * @returns {*}
     * @memberof BugStats
     */
    bugcnt?: any;

    /**
     * 指派给
     *
     * @returns {*}
     * @memberof BugStats
     */
    assignedto?: any;
}