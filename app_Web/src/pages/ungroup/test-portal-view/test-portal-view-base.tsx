import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { PortalViewBase } from '@/studio-core';

/**
 * 测试主页视图基类
 *
 * @export
 * @class TestPortalViewBase
 * @extends {PortalViewBase}
 */
export class TestPortalViewBase extends PortalViewBase {


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestPortalViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestPortalViewBase
     */
    protected model: any = {
        srfCaption: 'app.views.testportalview.caption',
        srfTitle: 'app.views.testportalview.title',
        srfSubTitle: 'app.views.testportalview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestPortalViewBase
     */
    protected containerModel: any = {
        view_dashboard: { name: 'dashboard', type: 'DASHBOARD' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'D1283E46-401A-4CFD-A7A1-BF5B90197463';


    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestPortalViewBase
     */
    public engineInit(): void {
    }




}