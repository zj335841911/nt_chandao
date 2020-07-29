import { Prop } from 'vue-property-decorator';
import { ControlBase } from './ControlBase';

/**
 * 导航部件基类
 *
 * @export
 * @class ExpControlBase
 * @extends {ControlBase}
 */
export class ExpControlBase extends ControlBase {

    /**
     * 打开新建数据视图
     *
     * @type {any}
     * @memberof ExpControlBase
     */
    @Prop()
    public newdata: any;

    /**
     * 打开编辑数据视图
     *
     * @type {any}
     * @memberof ExpControlBase
     */
    @Prop()
    public opendata: any;

    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof ExpControlBase
     */
    @Prop()
    public viewUID!: string;

    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof ExpControlBase
     */
    public ctrlWidth: number = 500;

    /**
     * 控件高度
     *
     * @type {number}
     * @memberof ExpControlBase
     */
    public ctrlHeight: number = 500;

    /**
     * 导航过滤项
     *
     * @type {string}
     * @memberof ExpControlBase
     */
    public navFilter: string = '';

    /**
     * 导航关系
     *
     * @type {string}
     * @memberof ExpControlBase
     */
    public navPSDer: string = '';

    /**
     * 导航上下文参数
     *
     * @type {*}
     * @memberof ExpControlBase
     */
    public navigateContext: any = null;

    /**
     * 导航视图名称
     *
     * @type {string}
     * @memberof ExpControlBase
     */
    public navViewName: string = '';

    /**
     * 导航视图参数
     *
     * @type {*}
     * @memberof ExpControlBase
     */
    public navigateParams: any = null;

    /**
     * 呈现模式，可选值：horizontal或者vertical
     * 
     * @public
     * @type {(string)}
     * @memberof ExpControlBase
     */
    public showMode: string = "horizontal";

    /**
     * 选中数据
     *
     * @type {*}
     * @memberof ExpControlBase
     */
    public selection: any = {};

    /**
     * 搜素值
     * 
     * @public
     * @type {(string)}
     * @memberof ExpControlBase
     */
    public searchText: string = "";
}