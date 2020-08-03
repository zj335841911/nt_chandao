/**
 * 任务
 *
 * @export
 * @interface Task
 */
export interface Task {

    /**
     * 由谁取消
     *
     * @returns {*}
     * @memberof Task
     */
    canceledby?: any;

    /**
     * 预计剩余
     *
     * @returns {*}
     * @memberof Task
     */
    left?: any;

    /**
     * 创建日期
     *
     * @returns {*}
     * @memberof Task
     */
    openeddate?: any;

    /**
     * 标题颜色
     *
     * @returns {*}
     * @memberof Task
     */
    color?: any;

    /**
     * 编号
     *
     * @returns {*}
     * @memberof Task
     */
    id?: any;

    /**
     * 由谁完成
     *
     * @returns {*}
     * @memberof Task
     */
    finishedby?: any;

    /**
     * 完成者列表
     *
     * @returns {*}
     * @memberof Task
     */
    finishedlist?: any;

    /**
     * 实际开始
     *
     * @returns {*}
     * @memberof Task
     */
    realstarted?: any;

    /**
     * 由谁关闭
     *
     * @returns {*}
     * @memberof Task
     */
    closedby?: any;

    /**
     * 子状态
     *
     * @returns {*}
     * @memberof Task
     */
    substatus?: any;

    /**
     * 关闭原因
     *
     * @returns {*}
     * @memberof Task
     */
    closedreason?: any;

    /**
     * 最后修改日期
     *
     * @returns {*}
     * @memberof Task
     */
    lastediteddate?: any;

    /**
     * 指派日期
     *
     * @returns {*}
     * @memberof Task
     */
    assigneddate?: any;

    /**
     * 优先级
     *
     * @returns {*}
     * @memberof Task
     */
    pri?: any;

    /**
     * 最后修改
     *
     * @returns {*}
     * @memberof Task
     */
    lasteditedby?: any;

    /**
     * 任务状态
     *
     * @returns {*}
     * @memberof Task
     */
    status?: any;

    /**
     * 任务名称
     *
     * @returns {*}
     * @memberof Task
     */
    name?: any;

    /**
     * 关闭时间
     *
     * @returns {*}
     * @memberof Task
     */
    closeddate?: any;

    /**
     * 任务类型
     *
     * @returns {*}
     * @memberof Task
     */
    type?: any;

    /**
     * 指派给
     *
     * @returns {*}
     * @memberof Task
     */
    assignedto?: any;

    /**
     * 任务描述
     *
     * @returns {*}
     * @memberof Task
     */
    desc?: any;

    /**
     * 预计开始
     *
     * @returns {*}
     * @memberof Task
     */
    eststarted?: any;

    /**
     * 截止日期
     *
     * @returns {*}
     * @memberof Task
     */
    deadline?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof Task
     */
    deleted?: any;

    /**
     * 抄送给
     *
     * @returns {*}
     * @memberof Task
     */
    mailto?: any;

    /**
     * 总计消耗
     *
     * @returns {*}
     * @memberof Task
     */
    consumed?: any;

    /**
     * 最初预计
     *
     * @returns {*}
     * @memberof Task
     */
    estimate?: any;

    /**
     * 由谁创建
     *
     * @returns {*}
     * @memberof Task
     */
    openedby?: any;

    /**
     * 取消时间
     *
     * @returns {*}
     * @memberof Task
     */
    canceleddate?: any;

    /**
     * 实际完成
     *
     * @returns {*}
     * @memberof Task
     */
    finisheddate?: any;

    /**
     * 所属模块
     *
     * @returns {*}
     * @memberof Task
     */
    modulename?: any;

    /**
     * 相关需求
     *
     * @returns {*}
     * @memberof Task
     */
    storyname?: any;

    /**
     * 所属项目
     *
     * @returns {*}
     * @memberof Task
     */
    projectname?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof Task
     */
    product?: any;

    /**
     * 需求版本
     *
     * @returns {*}
     * @memberof Task
     */
    storyversion?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof Task
     */
    productname?: any;

    /**
     * 父任务
     *
     * @returns {*}
     * @memberof Task
     */
    parentname?: any;

    /**
     * 所属项目
     *
     * @returns {*}
     * @memberof Task
     */
    project?: any;

    /**
     * 相关需求
     *
     * @returns {*}
     * @memberof Task
     */
    story?: any;

    /**
     * 父任务
     *
     * @returns {*}
     * @memberof Task
     */
    parent?: any;

    /**
     * 来源Bug
     *
     * @returns {*}
     * @memberof Task
     */
    frombug?: any;

    /**
     * 持续时间
     *
     * @returns {*}
     * @memberof Task
     */
    duration?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof Task
     */
    module?: any;

    /**
     * 模块路径
     *
     * @returns {*}
     * @memberof Task
     */
    path?: any;

    /**
     * 备注
     *
     * @returns {*}
     * @memberof Task
     */
    comment?: any;

    /**
     * 本次消耗
     *
     * @returns {*}
     * @memberof Task
     */
    currentconsumed?: any;

    /**
     * 总计耗时
     *
     * @returns {*}
     * @memberof Task
     */
    totaltime?: any;

    /**
     * 是否子任务
     *
     * @returns {*}
     * @memberof Task
     */
    isleaf?: any;

    /**
     * 所有模块
     *
     * @returns {*}
     * @memberof Task
     */
    allmodules?: any;

    /**
     * 多人任务
     *
     * @returns {*}
     * @memberof Task
     */
    multiple?: any;

    /**
     * 项目团队成员
     *
     * @returns {*}
     * @memberof Task
     */
    taskteams?: any;

    /**
     * 所属模块
     *
     * @returns {*}
     * @memberof Task
     */
    modulename1?: any;

    /**
     * 预计工时
     *
     * @returns {*}
     * @memberof Task
     */
    taskestimates?: any;
}