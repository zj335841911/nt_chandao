/**
 * 项目统计
 *
 * @export
 * @interface ProjectStats
 */
export interface ProjectStats {

    /**
     * 项目编号
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    id?: any;

    /**
     * 需求总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    storycnt?: any;

    /**
     * 任务总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    taskcnt?: any;

    /**
     * 任务最初预计总工时
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    totalestimate?: any;

    /**
     * 任务消耗总工时
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    totalconsumed?: any;

    /**
     * 任务预计剩余总工时
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    totalleft?: any;

    /**
     * 未完成任务总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    undonetaskcnt?: any;

    /**
     * 关闭需求总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    closedstorycnt?: any;

    /**
     * Bug总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    bugcnt?: any;

    /**
     * 未解决Bug总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    activebugcnt?: any;

    /**
     * 未关闭需求总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    unclosedstorycnt?: any;

    /**
     * 已结束任务总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    finishtaskcnt?: any;

    /**
     * 已解决Bug总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    finishbugcnt?: any;

    /**
     * 完成任务率
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    donetaskrate?: any;

    /**
     * 关闭需求率
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    closedstoryrate?: any;

    /**
     * 解决Bug率
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    finishbugrate?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    deleted?: any;

    /**
     * 工时
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    time?: any;

    /**
     * 工时类型
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    type?: any;

    /**
     * 项目名称
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    name?: any;
}