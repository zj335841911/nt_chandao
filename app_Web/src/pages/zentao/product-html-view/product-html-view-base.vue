<template>
<studio-view viewName="producthtmlview" viewTitle="iBiz软件生产管理" class='dehtmlview product-html-view'>
    <iframe class="iframe-container" src="./assets/html/iBizPMS.html"/>
</studio-view>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import ProductService from '@/service/product/product-service';

import HtmlViewEngine from '@engine/view/html-view-engine';


/**
 * iBiz软件生产管理视图基类
 *
 * @export
 * @class ProductHtmlViewBase
 * @extends {Vue}
 */
@Component({})
export default class ProductHtmlViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductHtmlViewBase
     */
    protected appEntityService: ProductService = new ProductService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ProductHtmlViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductHtmlViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductHtmlViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductHtmlViewBase
     */
    protected model: any = {
        srfCaption: 'entities.product.views.htmlview.caption',
        srfTitle: 'entities.product.views.htmlview.title',
        srfSubTitle: 'entities.product.views.htmlview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductHtmlViewBase
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
	protected viewtag: string = '0846a45e5ffdd4d8f857575cfa955dce';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductHtmlViewBase
     */
    public engine: HtmlViewEngine = new HtmlViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductHtmlViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'product',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}
</script>

<style lang='less'>
@import './product-html-view.less';
</style>