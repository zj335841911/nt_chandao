import { Subject } from 'rxjs';
import { ViewBase } from '@/studio-core';
import FileService from '@/service/file/file-service';
import HtmlViewEngine from '@engine/view/html-view-engine';

/**
 * 附件下载视图基类
 *
 * @export
 * @class FileFileDowloadViewBase
 * @extends {ViewBase}
 */
export class FileFileDowloadViewBase extends ViewBase {

    /**
     * 实体服务对象
     *
     * @type {FileService}
     * @memberof FileFileDowloadViewBase
     */
    protected appEntityService: FileService = new FileService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof FileFileDowloadViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof FileFileDowloadViewBase
     */
    protected model: any = {
        srfCaption: 'entities.file.views.filedowloadview.caption',
        srfTitle: 'entities.file.views.filedowloadview.title',
        srfSubTitle: 'entities.file.views.filedowloadview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof FileFileDowloadViewBase
     */
    protected containerModel: any = {
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '1e4670d0cbac90b7321c40270ef28dec';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof FileFileDowloadViewBase
     */
    public engine: HtmlViewEngine = new HtmlViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof FileFileDowloadViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'file',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }


}