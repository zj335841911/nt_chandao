/**
 * 计数器服务基类
 *
 * @export
 * @class CounterServiceBase
 */
export class CounterServiceBase {

    /**
     * 当前计数器数据对象
     *
     * @memberof  CounterServiceBase
     */
    public counterData: any = {};

    /**
     * 定时器实例
     *
     * @type {*}
     * @memberof CounterServiceBase
     */
    public timer: any;

    /**
     * Creates an instance of CounterServiceBase.
     * @memberof CounterServiceBase
     */
    constructor() {
        this.initCounterData();
        this.timer = setInterval(() => {
            this.fetchCounterData();
        }, 60000);
    }

    /**
     * 初始化计数器
     *
     * @protected
     * @memberof CounterServiceBase
     */
    protected initCounterData(): void {
        this.fetchCounterData();
    }

    /**
     * 查询数据
     *
     * @protected
     * @returns {Promise<any>}
     * @memberof CounterServiceBase
     */
    protected async fetchCounterData(): Promise<any> {
        for (let i: number = 0; i < 10; i++) {
            this.counterData['item' + i] = Math.floor(Math.random() * 10);
        }
    }

    /**
     * 刷新数据
     *
     * @protected
     * @returns {Promise<any>}
     * @memberof CounterServiceBase
     */
    protected refreshData(): Promise<any> {
        return this.fetchCounterData();
    }

    /**
     * 定时器销毁
     *
     * @memberof CounterServiceBase
     */
    public destroy(): void {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

}