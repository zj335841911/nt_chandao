import { Route } from 'vue-router';
import qs from 'qs';

export class ViewTool {

    /**
     * 唯一实例
     *
     * @private

     * @type {ViewTool}
     * @memberof ViewTool
     */
    private static readonly instance: ViewTool = new ViewTool();

    /**
     * Creates an instance of ViewTool.
     * 私有构造，拒绝通过 new 创建对象
     * @memberof ViewTool
     */
    private constructor() {
        if (ViewTool.instance) {
            return ViewTool.instance;
        }
    }


    /**
     * 获取 ViewTool 单例对象
     *

     * @returns {ViewTool}
     * @memberof ViewTool
     */
    public static getInstance(): ViewTool {
        return this.instance;
    }
    /**
     * 解析参数，返回viewdata
     *

     * @param {any[]} [args] 多项数据
     * @param {*} [viewParam] 视图参数
     * @param {any[]} [deResParameters] 关系实体参数对象
     * @param {any[]} [parameters] 当前应用视图参数对象
     * @param {*} [data] 行为参数
     * @returns
     * @memberof ViewTool
     */
    public getViewdata(viewParam: any = {}, deResParameters: any[], parameters: any[], args: any[], data: any = {}): any {
        let viewdata: any = {};

        let [arg] = args;
        arg = arg ? arg : {};

        // 首页视图参数
        const indexViewParam: any = this.getIndexViewParam();
        Object.assign(viewdata, indexViewParam);

        // 关系应用实体参数
        deResParameters.forEach(({ pathName, parameterName }: { pathName: string, parameterName: string }) => {
            if (viewParam[parameterName] && !Object.is(viewParam[parameterName], '')) {
                Object.assign(viewdata, { [parameterName]: viewParam[parameterName] });
            } else if (arg[parameterName] && !Object.is(arg[parameterName], '')) {
                Object.assign(viewdata, { [parameterName]: arg[parameterName] });
            }
        });

        // 当前视图参数（应用实体视图）
        parameters.forEach(({ pathName, parameterName }: { pathName: string, parameterName: string }) => {
            if (arg[parameterName] && !Object.is(arg[parameterName], '')) {
                Object.assign(viewdata, { [parameterName]: arg[parameterName] });
            }
        });

        // 视图常规参数
        Object.assign(viewdata, data);
        // 传入父视图的srfsessionid
        Object.assign(viewdata, { srfsessionid: viewParam['srfsessionid'] });
        return viewdata;
    }

    /**
     * 处理路由路径
     *

     * @param {Route} route 路由
     * @param {*} [viewParam={}]
     * @param {any[]} deResParameters 关系实体参数对象
     * @param {any[]} parameters 当前应用视图参数对象
     * @param {any[]} args 多项数据
     * @param {*} data 行为参数
     * @returns {string}
     * @memberof ViewTool
     */
    public buildUpRoutePath(route: Route, viewParam: any = {}, deResParameters: any[], parameters: any[], args: any[], data: any, isDefaultPage?: boolean): string {
        const indexRoutePath = this.getIndexRoutePath(route, isDefaultPage);
        const deResRoutePath = this.getDeResRoutePath(viewParam, deResParameters, args);
        const deRoutePath = this.getActiveRoutePath(parameters, args, data);
        return `${indexRoutePath}${deResRoutePath}${deRoutePath}`;
    }

    /**
     * 获取首页根路由路径
     *
     * @private
     * @param {Route} route
     * @param {boolean} [isDefaultPage]
     * @returns {string}
     * @memberof ViewTool
     */
    private getIndexRoutePath(route: Route, isDefaultPage?: boolean): string {
        const { parameters: _parameters }: { parameters: any[] } = route.meta;
        let { pathName: _pathName, parameterName: _parameterName }: { pathName: string, parameterName: string } = _parameters[0];
        const param = route.params[_parameterName];
        if (!isDefaultPage) {
            _pathName = 'viewshell';
        }
        if (param && !Object.is(param, '')) {
            return `/${_pathName}/${param}`;
        }
        return `/${_pathName}/null`;
    }

    /**
     * 获取关系实体路径
     *
     * @private
     * @param {*} [viewParam={}] 视图参数
     * @param {any[]} deResParameters 关系实体参数对象
     * @param {any[]} args 多项数据
     * @returns {string}
     * @memberof ViewTool
     */
    private getDeResRoutePath(viewParam: any = {}, deResParameters: any[], args: any[]): string {
        let routePath: string = '';
        let [arg] = args;
        arg = arg ? arg : {};
        deResParameters.forEach(({ pathName, parameterName }: { pathName: string, parameterName: string }) => {
            let value: any = null;
            if (viewParam[parameterName] && !Object.is(viewParam[parameterName], '') && !Object.is(viewParam[parameterName], 'null')) {
                value = viewParam[parameterName];
            } else if (arg[parameterName] && !Object.is(arg[parameterName], '') && !Object.is(arg[parameterName], 'null')) {
                value = arg[parameterName];
            }
            routePath = `${routePath}/${pathName}/${value}`;
        });
        return routePath;
    }

    /**
     * 当前激活路由路径
     *
     * @private
     * @param {any[]} parameters 当前应用视图参数对象
     * @param {any[]} args 多项数据
     * @param {*} data 行为参数
     * @returns {string}
     * @memberof ViewTool
     */
    private getActiveRoutePath(parameters: any[], args: any[], data: any): string {
        let routePath: string = '';
        // 不存在应用实体
        if (parameters.length === 1) {
            const [{ pathName, parameterName }] = parameters;
            routePath = `/${pathName}`;
            if (Object.keys(data).length > 0) {
                routePath = `${routePath}/${qs.stringify(data, { delimiter: ';' })}`;
            }
        } else if (parameters.length === 2) {
            let [arg] = args;
            arg = arg ? arg : {};
            const [{ pathName: _pathName, parameterName: _parameterName }, { pathName: _pathName2, parameterName: _parameterName2 }] = parameters;
            const _value: any = arg[_parameterName] && !Object.is(arg[_parameterName], '') ?
                arg[_parameterName] : null;
            routePath = `/${_pathName}/${_value}/${_pathName2}`;
            if (Object.keys(data).length > 0) {
                routePath = `${routePath}/${qs.stringify(data, { delimiter: ';' })}`;
            }
        }
        return routePath;
    }

    /**
     * 格式化路由参数
     *
     * @param {*} params
     * @param {Route} route
     * @param {*} context
     * @param {*} viewparams
     * @memberof ViewTool
     */
    public formatRouteParams(params: any, route: Route, context: any, viewparams: any): void {
        Object.keys(params).forEach((key: string, index: number) => {
            const param: string | null | undefined = params[key];
            if (!param || Object.is(param, '') || Object.is(param, 'null')) {
                return;
            }
            if (param.indexOf('=') > 0) {
                const _param = qs.parse(param, { delimiter: ';' });
                Object.assign(context, _param);
            } else {
                Object.assign(context, { [key]: param });
            }
        });
        if (route && route.fullPath && route.fullPath.indexOf("?") > -1) {
            const _viewparams: any = route.fullPath.slice(route.fullPath.indexOf("?") + 1);
            const _viewparamArray: Array<string> = decodeURIComponent(_viewparams).split(";")
            if (_viewparamArray.length > 0) {
                _viewparamArray.forEach((item: any) => {
                    Object.assign(viewparams, qs.parse(item));
                })
            }
        }
    }

    /**
     * 首页路由结构参数
     *
     * @private
     * @type {any[]}
     * @memberof ViewTool
     */
    private indexParameters: any[] = [];

    /**
     * 设置首页路由结构参数
     *
     * @param {any[]} parameters
     * @memberof ViewTool
     */
    public setIndexParameters(parameters: any[]): void {
        this.indexParameters = [...parameters]
    }

    /**
     * 获取首页路由结构参数
     *
     * @returns {any[]}
     * @memberof ViewTool
     */
    public getIndexParameters(): any[] {
        return this.indexParameters;
    }

    /**
     * 首页视图参数
     *
     * @type {*}
     * @memberof ViewTool
     */
    public indexViewParam: any = {};

    /**
     * 设置首页视图参数
     *
     * @param {*} [viewParam={}]
     * @memberof ViewTool
     */
    public setIndexViewParam(viewParam: any = {}): void {
        Object.assign(this.indexViewParam, viewParam);
    }

    /**
     * 获取首页视图参数
     *
     * @returns {*}
     * @memberof ViewTool
     */
    public getIndexViewParam(): any {
        return this.indexViewParam;
    }
}