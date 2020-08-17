import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { HttpResponse } from './http-response';
import { Util } from '../util/util';

/**
 * Http net 对象
 * 调用 getInstance() 获取实例
 *
 * @class Http
 */
export class Http {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {Http}
     * @memberof Http
     */
    private static readonly instance: Http = new Http();

    /**
     * Creates an instance of Http.
     * 私有构造，拒绝通过 new 创建对象
     * 
     * @memberof Http
     */
    constructor() {
        if (Http.instance) {
            return Http.instance;
        }
    }

    /**
     * 获取
     *
     * @param {string} url
     * @param {*} [params]
     * @returns {Promise<any>}
     * @memberof Http
     */
    public get(url: string, params?: any): Promise<any> {
        if (params) {
            params = this.handleRequestData(params);
            if ((Object.keys(params)).length > 0) {
                let tempParam: any = {};
                let sort: any = null;
                Object.keys(params).forEach((item: any) => {
                    if (params[item] || Object.is(params[item], 0)) {
                        if (Object.is(item, 'sort')) {
                            sort = params[item];
                        } else {
                            tempParam[item] = params[item];
                        }
                    }
                })
                url += `?${qs.stringify(tempParam)}`;
                if (sort) {
                    url += '&sort=' + sort;
                }
            }
        }
        return new Promise((resolve: any, reject: any) => {
            axios.get(url).then((response: AxiosResponse) => {
                resolve(this.handelResponseResult(response));
            }).catch((response: AxiosResponse) => {
                reject(this.handelResponseResult(response));
            });
        });
    }

    /**
     * 删除
     *
     * @param {string} url
     * @returns {Promise<any>}
     * @memberof Http
     */
    public delete(url: string): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            axios.delete(url).then((response: AxiosResponse) => {
                resolve(this.handelResponseResult(response));
            }).catch((response: AxiosResponse) => {
                reject(this.handelResponseResult(response));
            });
        });
    }

    /**
     * 
     *
     * @param {string} url
     * @returns {Promise<any>}
     * @memberof Http
     */
    public head(url: string): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            axios.head(url).then((response: AxiosResponse) => {
                resolve(this.handelResponseResult(response));
            }).catch((response: AxiosResponse) => {
                reject(this.handelResponseResult(response));
            });
        });
    }

    /**
     * 
     *
     * @param {string} url
     * @returns {Promise<any>}
     * @memberof Http
     */
    public options(url: string): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            axios.options(url).then((response: AxiosResponse) => {
                resolve(this.handelResponseResult(response));
            }).catch((response: AxiosResponse) => {
                reject(this.handelResponseResult(response));
            });
        });
    }

    /**
     * post请求
     *
     * @param {string} url
     * @param {*} [data]
     * @returns {Promise<any>}
     * @memberof Http
     */
    public post(url: string, data?: any): Promise<any> {
        if (data) {
            data = this.handleRequestData(data);
        }
        return new Promise((resolve: any, reject: any) => {
            axios.post(url,
                data,
                { headers: { 'Content-Type': 'application/json;charset=UTF-8', 'Accept': 'application/json' } }
            ).then((response: AxiosResponse) => {
                resolve(this.handelResponseResult(response));
            }).catch((response: AxiosResponse) => {
                reject(this.handelResponseResult(response));
            });
        });
    }

    /**
     * 修改数据
     *
     * @param {string} url
     * @param {*} data
     * @returns {Promise<any>}
     * @memberof Http
     */
    public put(url: string, data: any): Promise<any> {
        if (data) {
            data = this.handleRequestData(data);
        }
        return new Promise((resolve: any, reject: any) => {
            axios.put(url, data).then((response: AxiosResponse) => {
                resolve(this.handelResponseResult(response));
            }).catch((response: AxiosResponse) => {
                reject(this.handelResponseResult(response));
            });
        });
    }

    /**
     * 修改数据
     *
     * @param {string} url
     * @param {*} data
     * @returns {Promise<any>}
     * @memberof Http
     */
    public patch(url: string, data: any): Promise<any> {
        if (data) {
            data = this.handleRequestData(data);
        }
        return new Promise((resolve: any, reject: any) => {
            axios.patch(url, data).then((response: AxiosResponse) => {
                resolve(this.handelResponseResult(response));
            }).catch((response: AxiosResponse) => {
                reject(this.handelResponseResult(response));
            });
        });
    }

    /**
     * 处理响应结果
     *
     * @private
     * @param {*} response
     * @memberof Http
     */
    private handelResponseResult(response: any): HttpResponse {
        if (response) {
            if (response.status === 200) {
                return new HttpResponse(200, response.data, undefined, response.headers);
            }
            return new HttpResponse(response.status, response.data, { code: 101, message: HttpResponse.getStatusMessage(response.status) }, response.headers)
        }
        return new HttpResponse(500, null, { code: 100, message: '请求发生异常，无返回结果!' }, response.headers);
    }

    /**
     * 处理请求数据
     * 
     * @private
     * @param data 
     * @memberof Http
     */
    private handleRequestData(data: any) {
        data = Util.deepCopy(data);
        if (data.srfsessionkey) {
            delete data.srfsessionkey;
        }
        if (data.srfsessionid) {
            delete data.srfsessionid;
        }
        return data;
    }

    /**
     * 获取 Http 单例对象
     *
     * @static
     * @returns {Http}
     * @memberof Http
     */
    public static getInstance(): Http {
        return this.instance;
    }

}