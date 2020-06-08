/**
 * 子任务
 *
 * @export
 * @interface IBZ_SUBTASK
 */
export interface IBZ_SUBTASK {

    /**
     * 由谁取消
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    canceledby?: any;

    /**
     * 预计剩余
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    left?: any;

    /**
     * 创建日期
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    openeddate?: any;

    /**
     * 标题颜色
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    color?: any;

    /**
     * 编号
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    id?: any;

    /**
     * 由谁完成
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    finishedby?: any;

    /**
     * 完成者列表
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    finishedlist?: any;

    /**
     * 实际开始
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    realstarted?: any;

    /**
     * 由谁关闭
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    closedby?: any;

    /**
     * 子状态
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    substatus?: any;

    /**
     * 关闭原因
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    closedreason?: any;

    /**
     * 最后修改日期
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    lastediteddate?: any;

    /**
     * 指派日期
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    assigneddate?: any;

    /**
     * 优先级
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    pri?: any;

    /**
     * 最后修改
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    lasteditedby?: any;

    /**
     * 任务状态
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    status?: any;

    /**
     * 任务名称
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    name?: any;

    /**
     * 关闭时间
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    closeddate?: any;

    /**
     * 任务类型
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    type?: any;

    /**
     * 指派给
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    assignedto?: any;

    /**
     * 任务描述
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    desc?: any;

    /**
     * 预计开始
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    eststarted?: any;

    /**
     * 截止日期
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    deadline?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    deleted?: any;

    /**
     * 抄送给
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    mailto?: any;

    /**
     * 总计消耗
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    consumed?: any;

    /**
     * 最初预计
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    estimate?: any;

    /**
     * 由谁创建
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    openedby?: any;

    /**
     * 取消时间
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    canceleddate?: any;

    /**
     * 实际完成
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    finisheddate?: any;

    /**
     * 所属模块
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    modulename?: any;

    /**
     * 相关需求
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    storyname?: any;

    /**
     * 所属项目
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    projectname?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    product?: any;

    /**
     * 需求版本
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    storyversion?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    productname?: any;

    /**
     * 父任务
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    parentname?: any;

    /**
     * 所属项目
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    project?: any;

    /**
     * 所属模块
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    module?: any;

    /**
     * 相关需求
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    story?: any;

    /**
     * 父任务
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    parent?: any;

    /**
     * 来源Bug
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    frombug?: any;

    /**
     * 持续时间
     *
     * @returns {*}
     * @memberof IBZ_SUBTASK
     */
    duration?: any;
}