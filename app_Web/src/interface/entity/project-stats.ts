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

    /**
     * 未确认Bug总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    unconfirmedbugcnt?: any;

    /**
     * 未关闭Bug总数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    unclosedbugcnt?: any;

    /**
     * 总工时
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    totalwh?: any;

    /**
     * 已发布需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    releasedstorycnt?: any;

    /**
     * 昨日完成任务数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    yesterdayctaskcnt?: any;

    /**
     * 昨天解决Bug数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    yesterdayrbugcnt?: any;

    /**
     * 截止日期
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    end?: any;

    /**
     * 状态
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    status?: any;
}