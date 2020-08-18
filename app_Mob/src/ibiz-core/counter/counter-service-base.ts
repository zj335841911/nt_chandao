/**
 * 计数器服务基类
 *
 * @export
 * @class CounterService
 */
export  class CounterService {

    /**
     * Creates an instance of CounterService.
     * 
     * @param {*} [opts={}]
     * @memberof CounterService
     */
    constructor(opts: any = {}) {

    }

    /**
     * 获取计数器服务
     *
     * @protected
     * @param {string} name 实体名称
     * @returns {Promise<any>}
     * @memberof CounterService
     */
    public getService(name: string): Promise<any> {
        return window.counterServiceConstructor.getService(name);
    }

   
}