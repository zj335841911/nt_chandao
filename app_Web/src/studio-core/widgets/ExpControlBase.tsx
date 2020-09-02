import { Prop } from 'vue-property-decorator';
import { ControlBase } from './ControlBase';
import CodeListService from '@/service/app/codelist-service';

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

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof ExpControlBase
     */  
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 快速分组数据对象
     *
     * @memberof ExpControlBase
     */
    public quickGroupData:any;

    /**
     * 快速分组是否有抛值
     *
     * @memberof ExpControlBase
     */
    public isEmitQuickGroupValue:boolean = false;

    /**
     * 快速分组模型
     *
     * @memberof ExpControlBase
     */
    public quickGroupModel:Array<any> = [];

    /**
     * 加载快速分组模型
     *
     * @memberof ExpControlBase
     */
    public loadQuickGroupModel(){

    }

    /**
     * 处理快速分组模型动态数据部分(%xxx%)
     *
     * @memberof ExpControlBase
     */
    public handleDynamicData(inputArray:Array<any>){
        if(inputArray.length >0){
            inputArray[0].default = true;
            inputArray.forEach((item:any) =>{
               if(item.data && Object.keys(item.data).length >0){
                   Object.keys(item.data).forEach((name:any) =>{
                        let value: any = item.data[name];
                        if (value && typeof(value)=='string' && value.startsWith('%') && value.endsWith('%')) {
                            const key = (value.substring(1, value.length - 1)).toLowerCase();
                            if (this.context[key]) {
                                value = this.context[key];
                            } else if(this.viewparams[key]){
                                value = this.viewparams[key];
                            }
                        }
                        item.data[name] = value;
                   })
               }
            })
        }
        return inputArray;
    }

    /**
     * 快速分组值变化
     *
     * @memberof ExpControlBase
     */
    public quickGroupValueChange($event:any){
        if($event && $event.data){
            if(this.quickGroupData) {
                for(let key in this.quickGroupData) {
                    delete this.viewparams[key];
                }
            }
            this.quickGroupData = $event.data;
            Object.assign(this.viewparams, $event.data);
        }else{
            if(this.quickGroupData) {
                for(let key in this.quickGroupData) {
                    delete this.viewparams[key];
                }
            }
        }
        this.onSearch($event);
    }
}