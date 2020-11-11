/**
 * 项目
 *
 * @export
 * @interface Project
 */
export interface Project {

    /**
     * 当前系统版本
     *
     * @returns {*}
     * @memberof Project
     */
    openedversion?: any;

    /**
     * 开始时间
     *
     * @returns {*}
     * @memberof Project
     */
    begin?: any;

    /**
     * 访问控制
     *
     * @returns {*}
     * @memberof Project
     */
    acl?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof Project
     */
    deleted?: any;

    /**
     * 项目描述
     *
     * @returns {*}
     * @memberof Project
     */
    desc?: any;

    /**
     * 项目负责人
     *
     * @returns {*}
     * @memberof Project
     */
    pm?: any;

    /**
     * 项目编号
     *
     * @returns {*}
     * @memberof Project
     */
    id?: any;

    /**
     * 项目名称
     *
     * @returns {*}
     * @memberof Project
     */
    name?: any;

    /**
     * 子状态
     *
     * @returns {*}
     * @memberof Project
     */
    substatus?: any;

    /**
     * 项目排序
     *
     * @returns {*}
     * @memberof Project
     */
    order?: any;

    /**
     * 发布负责人
     *
     * @returns {*}
     * @memberof Project
     */
    rd?: any;

    /**
     * 分组白名单
     *
     * @returns {*}
     * @memberof Project
     */
    whitelist?: any;

    /**
     * 优先级
     *
     * @returns {*}
     * @memberof Project
     */
    pri?: any;

    /**
     * 结束日期
     *
     * @returns {*}
     * @memberof Project
     */
    end?: any;

    /**
     * 取消日期
     *
     * @returns {*}
     * @memberof Project
     */
    canceleddate?: any;

    /**
     * 项目代号
     *
     * @returns {*}
     * @memberof Project
     */
    code?: any;

    /**
     * catID
     *
     * @returns {*}
     * @memberof Project
     */
    catid?: any;

    /**
     * statge
     *
     * @returns {*}
     * @memberof Project
     */
    statge?: any;

    /**
     * 由谁取消
     *
     * @returns {*}
     * @memberof Project
     */
    canceledby?: any;

    /**
     * isCat
     *
     * @returns {*}
     * @memberof Project
     */
    iscat?: any;

    /**
     * 创建日期
     *
     * @returns {*}
     * @memberof Project
     */
    openeddate?: any;

    /**
     * 由谁关闭
     *
     * @returns {*}
     * @memberof Project
     */
    closedby?: any;

    /**
     * 项目类型
     *
     * @returns {*}
     * @memberof Project
     */
    type?: any;

    /**
     * 产品负责人
     *
     * @returns {*}
     * @memberof Project
     */
    po?: any;

    /**
     * 项目状态
     *
     * @returns {*}
     * @memberof Project
     */
    status?: any;

    /**
     * 可用工作日
     *
     * @returns {*}
     * @memberof Project
     */
    days?: any;

    /**
     * 团队名称
     *
     * @returns {*}
     * @memberof Project
     */
    team?: any;

    /**
     * 关闭日期
     *
     * @returns {*}
     * @memberof Project
     */
    closeddate?: any;

    /**
     * 由谁创建
     *
     * @returns {*}
     * @memberof Project
     */
    openedby?: any;

    /**
     * 测试负责人
     *
     * @returns {*}
     * @memberof Project
     */
    qd?: any;

    /**
     * parent
     *
     * @returns {*}
     * @memberof Project
     */
    parentname?: any;

    /**
     * 父项目
     *
     * @returns {*}
     * @memberof Project
     */
    parent?: any;

    /**
     * 任务总数
     *
     * @returns {*}
     * @memberof Project
     */
    taskcnt?: any;

    /**
     * Bug总数
     *
     * @returns {*}
     * @memberof Project
     */
    bugcnt?: any;

    /**
     * 需求总数
     *
     * @returns {*}
     * @memberof Project
     */
    storycnt?: any;

    /**
     * 关联产品
     *
     * @returns {*}
     * @memberof Project
     */
    products?: any;

    /**
     * 关联产品平台集合
     *
     * @returns {*}
     * @memberof Project
     */
    branchs?: any;

    /**
     * 关联计划
     *
     * @returns {*}
     * @memberof Project
     */
    plans?: any;

    /**
     * 关联数据数组
     *
     * @returns {*}
     * @memberof Project
     */
    srfarray?: any;

    /**
     * 备注
     *
     * @returns {*}
     * @memberof Project
     */
    comment?: any;

    /**
     * 时间段
     *
     * @returns {*}
     * @memberof Project
     */
    period?: any;

    /**
     * 项目团队成员
     *
     * @returns {*}
     * @memberof Project
     */
    account?: any;

    /**
     * 加盟日
     *
     * @returns {*}
     * @memberof Project
     */
    join?: any;

    /**
     * 可用工时/天
     *
     * @returns {*}
     * @memberof Project
     */
    hours?: any;

    /**
     * 角色
     *
     * @returns {*}
     * @memberof Project
     */
    role?: any;

    /**
     * 任务消耗总工时
     *
     * @returns {*}
     * @memberof Project
     */
    totalconsumed?: any;

    /**
     * 总工时
     *
     * @returns {*}
     * @memberof Project
     */
    totalwh?: any;

    /**
     * 任务预计剩余总工时
     *
     * @returns {*}
     * @memberof Project
     */
    totalleft?: any;

    /**
     * 任务最初预计总工时
     *
     * @returns {*}
     * @memberof Project
     */
    totalestimate?: any;

    /**
     * 可用工时
     *
     * @returns {*}
     * @memberof Project
     */
    totalhours?: any;

    /**
     * 移动端图片
     *
     * @returns {*}
     * @memberof Project
     */
    mobimage?: any;

    /**
     * 项目团队相关成员
     *
     * @returns {*}
     * @memberof Project
     */
    accounts?: any;

    /**
     * 项目排序
     *
     * @returns {*}
     * @memberof Project
     */
    order1?: any;

    /**
     * 是否置顶
     *
     * @returns {*}
     * @memberof Project
     */
    istop?: any;

    /**
     * 选择部门
     *
     * @returns {*}
     * @memberof Project
     */
    dept?: any;

    /**
     * 复制团队
     *
     * @returns {*}
     * @memberof Project
     */
    managemembers?: any;

    /**
     * 版本总数
     *
     * @returns {*}
     * @memberof Project
     */
    buildcnt?: any;

    /**
     * 团队成员总数
     *
     * @returns {*}
     * @memberof Project
     */
    teamcnt?: any;

    /**
     * 所有任务数
     *
     * @returns {*}
     * @memberof Project
     */
    alltaskcnt?: any;

    /**
     * 未关闭任务数
     *
     * @returns {*}
     * @memberof Project
     */
    unclosetaskcnt?: any;

    /**
     * 指派给我任务数
     *
     * @returns {*}
     * @memberof Project
     */
    asstomytaskcnt?: any;

    /**
     * 未开始任务数
     *
     * @returns {*}
     * @memberof Project
     */
    unstarttaskcnt?: any;

    /**
     * 更多任务数
     *
     * @returns {*}
     * @memberof Project
     */
    moretaskcnt?: any;

    /**
     * 进行中任务数
     *
     * @returns {*}
     * @memberof Project
     */
    ystarttaskcnt?: any;

    /**
     * 未完成任务数
     *
     * @returns {*}
     * @memberof Project
     */
    uncompletetaskcnt?: any;

    /**
     * 已完成任务数
     *
     * @returns {*}
     * @memberof Project
     */
    ycompletetaskcnt?: any;

    /**
     * 我完成任务数
     *
     * @returns {*}
     * @memberof Project
     */
    mycompletetaskcnt?: any;

    /**
     * 关闭任务数
     *
     * @returns {*}
     * @memberof Project
     */
    closetaskcnt?: any;

    /**
     * 取消任务数
     *
     * @returns {*}
     * @memberof Project
     */
    canceltaskcnt?: any;

    /**
     * 需求变更数
     *
     * @returns {*}
     * @memberof Project
     */
    storychangecnt?: any;

    /**
     * 消息通知用户
     *
     * @returns {*}
     * @memberof Project
     */
    noticeusers?: any;

    /**
     * 文档数量
     *
     * @returns {*}
     * @memberof Project
     */
    doclibcnt?: any;
}