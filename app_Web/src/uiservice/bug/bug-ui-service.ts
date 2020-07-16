import { Environment } from '@/environments/environment';
import { Subject } from 'rxjs';
import BugUIServiceBase from './bug-ui-service-base';
import { UIActionTool, Util } from '@/utils';

/**
 * BugUI服务对象
 *
 * @export
 * @class BugUIService
 */
export default class BugUIService extends BugUIServiceBase {

    /**
     * Creates an instance of  BugUIService.
     * 
     * @param {*} [opts={}]
     * @memberof  BugUIService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 提需求
     *
     * @param {any[]} args 当前数据
     * @param {any} context 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @param {*} [srfParentDeName] 父实体名称
     * @returns {Promise<any>}
     */
    public async Bug_toStory(args: any[], context: any = {}, params: any = {}, $event?: any, xData?: any, actionContext?: any, srfParentDeName?: string) {
        let data: any = {};
        let parentContext:any = {};
        let parentViewParam:any = {};
        const _this: any = actionContext;
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(context, { bug: '%bug%' });
        Object.assign(params, { id: '%bug%' });
        Object.assign(params, { title: '%title%' });
        if(_this.context){
            parentContext = _this.context;
        }
        if(_this.viewparams){
            parentViewParam = _this.viewparams;
        }
        context = UIActionTool.handleContextParam(actionTarget,_args,parentContext,parentViewParam,context);
        data = UIActionTool.handleActionParam(actionTarget,_args,parentContext,parentViewParam,params);
        context = Object.assign({},actionContext.context,context);
        let response: any = await this.dataService.Get(context, data, false);
        if (!response || response.status != 200) {
            return;
        }
        let parentObj: any = { srfparentdename: srfParentDeName ? srfParentDeName : null, srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null };
        Object.assign(data, {
            srfmajortext: response.data.title,
            product: response.data.product,
            productname: response.data.productname,
            module: response.data.module,
            steps: response.data.steps,
            branch: response.data.branch,
            branchname: response.data.branchname,
            assignedto: response.data.assignedto,
            mailto: response.data.mailto,
            ...parentObj
        });

        Object.assign(context, parentObj);
        let deResParameters: any[] = [];
        if (context.product && true) {
            deResParameters = [
                { pathName: 'products', parameterName: 'product' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
        ];
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = actionContext.$appdrawer.openDrawer(view, context, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                const _this: any = actionContext;
                if (window.opener) {
                    window.opener.postMessage({ status: 'OK', identification: 'WF' }, Environment.uniteAddress);
                    window.close();
                }
                return result.datas;
            });
        }
        const view: any = {
            viewname: 'storyto-story-edit-view',
            height: 0,
            width: 0,
            title: actionContext.$t('entities.story.views.tostoryeditview.title'),
            placement: 'DRAWER_RIGHT',
        };
        openDrawer(view, data);
    }

}