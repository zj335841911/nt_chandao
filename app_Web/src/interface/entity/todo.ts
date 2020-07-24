/**
 * 待办事宜表
 *
 * @export
 * @interface Todo
 */
export interface Todo {

    /**
     * 编号
     *
     * @returns {*}
     * @memberof Todo
     */
    id?: any;

    /**
     * 所有者
     *
     * @returns {*}
     * @memberof Todo
     */
    account?: any;

    /**
     * 关闭时间
     *
     * @returns {*}
     * @memberof Todo
     */
    closeddate?: any;

    /**
     * 由谁关闭
     *
     * @returns {*}
     * @memberof Todo
     */
    closedby?: any;

    /**
     * 类型
     *
     * @returns {*}
     * @memberof Todo
     */
    type?: any;

    /**
     * 结束
     *
     * @returns {*}
     * @memberof Todo
     */
    end?: any;

    /**
     * 描述
     *
     * @returns {*}
     * @memberof Todo
     */
    desc?: any;

    /**
     * 由谁完成
     *
     * @returns {*}
     * @memberof Todo
     */
    finishedby?: any;

    /**
     * 开始
     *
     * @returns {*}
     * @memberof Todo
     */
    begin?: any;

    /**
     * 关联编号
     *
     * @returns {*}
     * @memberof Todo
     */
    idvalue?: any;

    /**
     * 由谁指派
     *
     * @returns {*}
     * @memberof Todo
     */
    assignedby?: any;

    /**
     * 完成时间
     *
     * @returns {*}
     * @memberof Todo
     */
    finisheddate?: any;

    /**
     * 周期
     *
     * @returns {*}
     * @memberof Todo
     */
    cycle?: any;

    /**
     * 指派给
     *
     * @returns {*}
     * @memberof Todo
     */
    assignedto?: any;

    /**
     * 状态
     *
     * @returns {*}
     * @memberof Todo
     */
    status?: any;

    /**
     * 待办名称
     *
     * @returns {*}
     * @memberof Todo
     */
    name?: any;

    /**
     * 指派日期
     *
     * @returns {*}
     * @memberof Todo
     */
    assigneddate?: any;

    /**
     * 优先级
     *
     * @returns {*}
     * @memberof Todo
     */
    pri?: any;

    /**
     * 日期
     *
     * @returns {*}
     * @memberof Todo
     */
    date?: any;

    /**
     * 私人事务
     *
     * @returns {*}
     * @memberof Todo
     */
    ibizprivate?: any;

    /**
     * config
     *
     * @returns {*}
     * @memberof Todo
     */
    config?: any;

    /**
     * 间隔天数
     *
     * @returns {*}
     * @memberof Todo
     */
    config_day?: any;

    /**
     * 提前生成待办天数
     *
     * @returns {*}
     * @memberof Todo
     */
    config_beforedays?: any;

    /**
     * 周期设置周几
     *
     * @returns {*}
     * @memberof Todo
     */
    config_week?: any;

    /**
     * 周期设置月
     *
     * @returns {*}
     * @memberof Todo
     */
    config_month?: any;

    /**
     * 周期类型
     *
     * @returns {*}
     * @memberof Todo
     */
    config_type?: any;

    /**
     * 过期时间
     *
     * @returns {*}
     * @memberof Todo
     */
    config_end?: any;

    /**
     * bug
     *
     * @returns {*}
     * @memberof Todo
     */
    bug?: any;

    /**
     * 项目任务
     *
     * @returns {*}
     * @memberof Todo
     */
    task?: any;

    /**
     * 项目需求
     *
     * @returns {*}
     * @memberof Todo
     */
    story?: any;
}