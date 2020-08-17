import { HttpResponse } from '../utils';

/**
 * 代码表基类
 *
 * @export
 * @class CodeListBase
 */
export class CodeListBase {

    /**
     * 代码表项主键标识
     *
     * @protected
     * @type {string}
     * @memberof CodeListBase
     */
    protected idKey: string = '';

    /**
     * 代码表项值项标识
     *
     * @protected
     * @type {string}
     * @memberof CodeListBase
     */
    protected valueKey: string = '';

    /**
     * 代码表项文本标识
     *
     * @protected
     * @type {string}
     * @memberof CodeListBase
     */
    protected textKey: string = '';

    /**
     * 处理数据
     *
     * @protected
     * @param {any[]} items
     * @returns {any[]}
     * @memberof CodeListBase
     */
    protected doItems(items: any[]): any[] {
        return items.map((item: any) => {
            const data: any = {};
            Object.assign(data, { id: item[this.idKey] });
            Object.assign(data, { value: item[this.valueKey] });
            Object.assign(data, { text: item[this.textKey] });
            return data;
        });;
    }

    /**
     * 获取数据项
     *
     * @param {*} data
     * @returns {Promise<any>}
     * @memberof SysOperator
     */
    public async getItems(data: any = {}): Promise<any> {
        return new HttpResponse(200, []);
    }

    /**
     * 根据实体名称获取service
     *
     * @protected
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof CodeListBase
     */
    protected getService(name: string): Promise<any> {
        return window.appEntityServiceConstructor.getService(name);
    }

}