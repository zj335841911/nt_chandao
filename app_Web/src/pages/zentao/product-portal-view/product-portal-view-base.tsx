import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { PortalViewBase } from '@/studio-core';

/**
 * 产品主页视图基类
 *
 * @export
 * @class ProductPortalViewBase
 * @extends {PortalViewBase}
 */
export class ProductPortalViewBase extends PortalViewBase {

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPortalViewBase
     */
    protected model: any = {
        srfCaption: 'app.views.productportalview.caption',
        srfTitle: 'app.views.productportalview.title',
        srfSubTitle: 'app.views.productportalview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPortalViewBase
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
	protected viewtag: string = 'A49E5FD9-FC90-434B-9E13-192873F6F2AC';



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductPortalViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPortalViewBase
     */
    public engineInit(): void {
    }




}