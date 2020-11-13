/**
 * 员工负载表
 *
 * @export
 * @interface EmpLoyeeload
 */
export interface EmpLoyeeload {

    /**
     * 主键
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    id?: any;

    /**
     * 任务名
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    name?: any;

    /**
     * 任务数
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    taskcnt?: any;

    /**
     * 项目编号
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    project?: any;

    /**
     * 项目
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    projectname?: any;

    /**
     * 总任务数
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    totaltaskcnt?: any;

    /**
     * 总工时
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    totalleft?: any;

    /**
     * 剩余工时
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    left?: any;

    /**
     * 工作负载
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    workload?: any;

    /**
     * 指派给
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    assignedto?: any;

    /**
     * 部门
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    dept?: any;

    /**
     * 属性
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    begin?: any;

    /**
     * 结束
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    end?: any;

    /**
     * 工作日天数
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    workday?: any;

    /**
     * 是否指派
     *
     * @returns {*}
     * @memberof EmpLoyeeload
     */
    assign?: any;
}