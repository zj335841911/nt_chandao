import { ControlServiceBase } from './control-service-base';
import { HttpResponse, Util } from '../utils';

/**
 * 表单部件服务基类
 *
 * @export
 * @class FormServiceBase
 * @extends {ControlServiceBase}
 */
export class FormServiceBase extends ControlServiceBase {

    /**
     * 处理数据
     *
     * @protected
     * @param {HttpResponse} res
     * @returns {Promise<any[]>}
     * @memberof GridServiceBase
     */
    protected async doItems(res: HttpResponse): Promise<any[]> {
        if (res.status === 200) {
            return [res.data];
        }
        return [];
    }

    /**
     * 启动工作流
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof FormServiceBase
     */
    public async wfstart(action: string, context: any = {}, data: any = {}, isLoading: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data);
        } else {
            response = await this.service.Create(context, data);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        await this.onAfterAction(action, context, response);
        return response;
    }

    /**
     * 提交工作流
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof FormServiceBase
     */
    public async wfsubmit(action: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data);
        } else {
            response = await this.service.Create(context, data);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        await this.onAfterAction(action, context, response);
        return response;
    }

    /**
     * 处理返回数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isCreate]
     * @returns {*}
     * @memberof FormServiceBase
     */
    public handleResponseData(action: string, data: any = {}, isCreate?: boolean): any {
        if (!this.model || !Util.isFunction(this.model.getDataItems)) {
            return data;
        }
        const item: any = {};
        const dataItems: any[] = this.model.getDataItems();
        dataItems.forEach(dataitem => {
            let val = data.hasOwnProperty(dataitem.prop) ? data[dataitem.prop] : null;
            if (!val) {
                val = data.hasOwnProperty(dataitem.name) ? data[dataitem.name] : null;
            }
            if ((isCreate === undefined || isCreate === null) && Object.is(dataitem.dataType, 'GUID') && Object.is(dataitem.name, 'srfkey') && (val && !Object.is(val, ''))) {
                isCreate = true;
            }
            item[dataitem.name] = val;
        });
        if (isCreate) {
            if (!item.srfuf) {
                Object.assign(item, { srfuf: '0' });
            }
        } else {
            if (!item.srfuf) {
                Object.assign(item, { srfuf: '1' });
            }
        }
        Object.assign(data, item);
        return data;
    }

}