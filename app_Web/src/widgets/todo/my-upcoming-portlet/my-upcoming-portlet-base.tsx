import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import TodoService from '@/service/todo/todo-service';
import MyUpcomingService from './my-upcoming-portlet-service';
import TodoUIService from '@/uiservice/todo/todo-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet10部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MyUpcomingPortletBase}
 */
export class MyUpcomingPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyUpcomingPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {MyUpcomingService}
     * @memberof MyUpcomingPortletBase
     */
    public service: MyUpcomingService = new MyUpcomingService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TodoService}
     * @memberof MyUpcomingPortletBase
     */
    public appEntityService: TodoService = new TodoService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyUpcomingPortletBase
     */
    protected appDeName: string = 'todo';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyUpcomingPortletBase
     */
    protected appDeLogicName: string = '待办事宜表';

    /**
     * 界面UI服务对象
     *
     * @type {TodoUIService}
     * @memberof MyUpcomingBase
     */  
    public appUIService:TodoUIService = new TodoUIService(this.$store);

    /**
     * 长度
     *
     * @type {number}
     * @memberof MyUpcoming
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof MyUpcoming
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof MyUpcomingBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MyUpcomingBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MyUpcomingBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof MyUpcomingBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return 'auto';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MyUpcomingBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MyUpcomingBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MyUpcomingBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyUpcomingBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}