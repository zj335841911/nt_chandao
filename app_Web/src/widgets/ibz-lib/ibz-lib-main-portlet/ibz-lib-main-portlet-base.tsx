import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import IbzLibService from '@/service/ibz-lib/ibz-lib-service';
import IbzLibMainService from './ibz-lib-main-portlet-service';
import IbzLibUIService from '@/uiservice/ibz-lib/ibz-lib-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet1部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {IbzLibMainPortletBase}
 */
export class IbzLibMainPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof IbzLibMainPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {IbzLibMainService}
     * @memberof IbzLibMainPortletBase
     */
    public service: IbzLibMainService = new IbzLibMainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzLibService}
     * @memberof IbzLibMainPortletBase
     */
    public appEntityService: IbzLibService = new IbzLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibMainPortletBase
     */
    protected appDeName: string = 'ibzlib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibMainPortletBase
     */
    protected appDeLogicName: string = '用例库';

    /**
     * 界面UI服务对象
     *
     * @type {IbzLibUIService}
     * @memberof IbzLibMainBase
     */  
    public appUIService:IbzLibUIService = new IbzLibUIService(this.$store);

    /**
     * 长度
     *
     * @type {number}
     * @memberof IbzLibMain
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof IbzLibMain
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof IbzLibMainBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof IbzLibMainBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof IbzLibMainBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof IbzLibMainBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return '300px';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof IbzLibMainBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof IbzLibMainBase
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
     * @memberof IbzLibMainBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof IbzLibMainBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
