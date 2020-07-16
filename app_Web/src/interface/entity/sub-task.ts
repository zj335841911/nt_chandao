/**
 * 子任务
 *
 * @export
 * @interface SubTask
 */
export interface SubTask {

    /**
     * 由谁取消
     *
     * @returns {*}
     * @memberof SubTask
     */
    canceledby?: any;

    /**
     * 预计剩余
     *
     * @returns {*}
     * @memberof SubTask
     */
    left?: any;

    /**
     * 创建日期
     *
     * @returns {*}
     * @memberof SubTask
     */
    openeddate?: any;

    /**
     * 标题颜色
     *
     * @returns {*}
     * @memberof SubTask
     */
    color?: any;

    /**
     * 编号
     *
     * @returns {*}
     * @memberof SubTask
     */
    id?: any;

    /**
     * 由谁完成
     *
     * @returns {*}
     * @memberof SubTask
     */
    finishedby?: any;

    /**
     * 完成者列表
     *
     * @returns {*}
     * @memberof SubTask
     */
    finishedlist?: any;

    /**
     * 实际开始
     *
     * @returns {*}
     * @memberof SubTask
     */
    realstarted?: any;

    /**
     * 由谁关闭
     *
     * @returns {*}
     * @memberof SubTask
     */
    closedby?: any;

    /**
     * 子状态
     *
     * @returns {*}
     * @memberof SubTask
     */
    substatus?: any;

    /**
     * 关闭原因
     *
     * @returns {*}
     * @memberof SubTask
     */
    closedreason?: any;

    /**
     * 最后修改日期
     *
     * @returns {*}
     * @memberof SubTask
     */
    lastediteddate?: any;

    /**
     * 指派日期
     *
     * @returns {*}
     * @memberof SubTask
     */
    assigneddate?: any;

    /**
     * 优先级
     *
     * @returns {*}
     * @memberof SubTask
     */
    pri?: any;

    /**
     * 最后修改
     *
     * @returns {*}
     * @memberof SubTask
     */
    lasteditedby?: any;

    /**
     * 任务状态
     *
     * @returns {*}
     * @memberof SubTask
     */
    status?: any;

    /**
     * 任务名称
     *
     * @returns {*}
     * @memberof SubTask
     */
    name?: any;

    /**
     * 关闭时间
     *
     * @returns {*}
     * @memberof SubTask
     */
    closeddate?: any;

    /**
     * 任务类型
     *
     * @returns {*}
     * @memberof SubTask
     */
    type?: any;

    /**
     * 指派给
     *
     * @returns {*}
     * @memberof SubTask
     */
    assignedto?: any;

    /**
     * 任务描述
     *
     * @returns {*}
     * @memberof SubTask
     */
    desc?: any;

    /**
     * 预计开始
     *
     * @returns {*}
     * @memberof SubTask
     */
    eststarted?: any;

    /**
     * 截止日期
     *
     * @returns {*}
     * @memberof SubTask
     */
    deadline?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof SubTask
     */
    deleted?: any;

    /**
     * 抄送给
     *
     * @returns {*}
     * @memberof SubTask
     */
    mailto?: any;

    /**
     * 总计消耗
     *
     * @returns {*}
     * @memberof SubTask
     */
    consumed?: any;

    /**
     * 最初预计
     *
     * @returns {*}
     * @memberof SubTask
     */
    estimate?: any;

    /**
     * 由谁创建
     *
     * @returns {*}
     * @memberof SubTask
     */
    openedby?: any;

    /**
     * 取消时间
     *
     * @returns {*}
     * @memberof SubTask
     */
    canceleddate?: any;

    /**
     * 实际完成
     *
     * @returns {*}
     * @memberof SubTask
     */
    finisheddate?: any;

    /**
     * 所属模块
     *
     * @returns {*}
     * @memberof SubTask
     */
    modulename?: any;

    /**
     * 相关需求
     *
     * @returns {*}
     * @memberof SubTask
     */
    storyname?: any;

    /**
     * 所属项目
     *
     * @returns {*}
     * @memberof SubTask
     */
    projectname?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof SubTask
     */
    product?: any;

    /**
     * 需求版本
     *
     * @returns {*}
     * @memberof SubTask
     */
    storyversion?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof SubTask
     */
    productname?: any;

    /**
     * 父任务
     *
     * @returns {*}
     * @memberof SubTask
     */
    parentname?: any;

    /**
     * 所属项目
     *
     * @returns {*}
     * @memberof SubTask
     */
    project?: any;

    /**
     * 相关需求
     *
     * @returns {*}
     * @memberof SubTask
     */
    story?: any;

    /**
     * 父任务
     *
     * @returns {*}
     * @memberof SubTask
     */
    parent?: any;

    /**
     * 来源Bug
     *
     * @returns {*}
     * @memberof SubTask
     */
    frombug?: any;

    /**
     * 持续时间
     *
     * @returns {*}
     * @memberof SubTask
     */
    duration?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof SubTask
     */
    module?: any;

    /**
     * 模块路径
     *
     * @returns {*}
     * @memberof SubTask
     */
    path?: any;

    /**
     * 备注
     *
     * @returns {*}
     * @memberof SubTask
     */
    comment?: any;

    /**
     * 本次消耗
     *
     * @returns {*}
     * @memberof SubTask
     */
    currentconsumed?: any;

    /**
     * 总计耗时
     *
     * @returns {*}
     * @memberof SubTask
     */
    totaltime?: any;

    /**
     * 是否子任务
     *
     * @returns {*}
     * @memberof SubTask
     */
    isleaf?: any;

    /**
     * 所有模块
     *
     * @returns {*}
     * @memberof SubTask
     */
    allmodules?: any;

    /**
     * 多人任务
     *
     * @returns {*}
     * @memberof SubTask
     */
    multiple?: any;
}