/**
 * Vue多层继承生命周期处理装饰器
 *
 * @export
 * @param {*} [params]
 * @returns {*}
 */
export function VueLifeCycleProcessing(params?: any): any {
    /**
     * 装饰器处理
     */
    return function(constructor: Function) {
        // 原型
        const p = constructor.prototype;
        // 方法名数组
        const methodNames: string[] = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'beforeDestroy', 'destroyed', 'errorCaptured'];
        methodNames.forEach((name: string) => {
            if (!p.hasOwnProperty(name) && p[name]) {
                p[name] = function () {
                    if (this[name]) {
                        this[name]();
                    }
                }
            }
        });
        if (!p.hasOwnProperty('render') && p.render) {
            p.render = function (h: any) {
                if (this.render) {
                    return this.render(h);
                }
            }
        }
    }
}