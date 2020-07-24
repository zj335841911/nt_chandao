import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, ListControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ExpService from './exp-list-service';
import ProductUIService from '@/uiservice/product/product-ui-service';


/**
 * listexpbar_list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {ExpListBase}
 */
export class ExpListBase extends ListControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ExpListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {ExpService}
     * @memberof ExpListBase
     */
    public service: ExpService = new ExpService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ExpListBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ExpListBase
     */
    protected appDeName: string = 'product';

    /**
     * listexpbar_list_quicktoolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ExpListBase
     */
    public listexpbar_list_quicktoolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.listexpbar_list_quicktoolbar_deuiaction1_click(null, 'listexpbar_list_quicktoolbar', $event2);
        }
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public listexpbar_list_quicktoolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.New(datas, contextJO,paramJO,  $event, xData,this,"Product");
    }

    /**
     * 新建
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProductListExpViewBase
     */
    public New(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
         const _this: any = this;
        if (_this.newdata && _this.newdata instanceof Function) {
            const data: any = {};
            _this.newdata([{ ...data }],[{ ...data }], params, $event, xData);
        } else {
            _this.$Notice.error({ title: '错误', desc: 'newdata 视图处理逻辑不存在，请添加!' });
        }
    }

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof ExpListBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof ExpListBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * this引用
     *
     * @type {number}
     * @memberof ExpBase
     */
    public thisRef: any = this;
}