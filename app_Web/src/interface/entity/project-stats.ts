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

    /**
     * 项目排序
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    order1?: any;

    /**
     * 是否置顶
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    istop?: any;

    /**
     * 已关闭任务数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    closedtaskcnt?: any;

    /**
     * 已取消任务数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    canceltaskcnt?: any;

    /**
     * 已暂停任务数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    pausetaskcnt?: any;

    /**
     * 未开始任务数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    waittaskcnt?: any;

    /**
     * 进行中任务数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    doingtaskcnt?: any;

    /**
     * 已完成任务数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    donetaskcnt?: any;

    /**
     * 设计类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    designtaskcnt?: any;

    /**
     * 讨论类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    discusstaskcnt?: any;

    /**
     * 研究类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    studytaskcnt?: any;

    /**
     * 界面类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    uitaskcnt?: any;

    /**
     * 测试类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    testtaskcnt?: any;

    /**
     * 服务类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    servetaskcnt?: any;

    /**
     * 开发类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    develtaskcnt?: any;

    /**
     * 其他类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    misctaskcnt?: any;

    /**
     * 事务类型任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    affairtaskcnt?: any;

    /**
     * 完成需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    completestorycnt?: any;

    /**
     * 完成任务数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    completetaskcnt?: any;

    /**
     * Bug/完成需求
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    bugstory?: any;

    /**
     * Bug/完成任务
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    bugtask?: any;

    /**
     * 重要Bug数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    importantbugcnt?: any;

    /**
     * 严重Bug比率
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    seriousbugproportion?: any;

    /**
     * 代码错误
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    codeerror?: any;

    /**
     * 配置相关
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    config?: any;

    /**
     * 安装部署
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    install?: any;

    /**
     * 安全相关
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    security?: any;

    /**
     * 性能问题
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    performance?: any;

    /**
     * 标准规范
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    standard?: any;

    /**
     * 测试脚本
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    automation?: any;

    /**
     * 人数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    membercnt?: any;

    /**
     * 设计缺陷
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    designdefect?: any;

    /**
     * 其他
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    others?: any;

    /**
     * 项目消耗总工时
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    projecttotalconsumed?: any;

    /**
     * 工期
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    timescale?: any;

    /**
     * 剩余需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    leftstorycnt?: any;

    /**
     * 空需求
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    emptystory?: any;

    /**
     * 草稿需求
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    draftstory?: any;

    /**
     * 激活需求
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    activestory?: any;

    /**
     * 已关闭需求
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    closedstory?: any;

    /**
     * 已变更需求
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    changedstory?: any;

    /**
     * 空阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    emptystagestorycnt?: any;

    /**
     * 未开始阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    waitstagestorycnt?: any;

    /**
     * 已计划阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    plannedstagestorycnt?: any;

    /**
     * 已立项阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    projectedstagestorycnt?: any;

    /**
     * 研发中阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    developingstagestorycnt?: any;

    /**
     * 研发完毕阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    developedstagestorycnt?: any;

    /**
     * 测试中阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    testingstagestorycnt?: any;

    /**
     * 测试完毕阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    testedstagestorycnt?: any;

    /**
     * 已验收阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    verifiedstagestorycnt?: any;

    /**
     * 已发布阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    releasedstagestorycnt?: any;

    /**
     * 已关闭阶段需求数
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    closedstagestorycnt?: any;

    /**
     * 进度
     *
     * @returns {*}
     * @memberof ProjectStats
     */
    progress?: any;
}