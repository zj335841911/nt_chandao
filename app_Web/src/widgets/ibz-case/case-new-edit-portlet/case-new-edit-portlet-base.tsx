import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import IbzCaseService from '@/service/ibz-case/ibz-case-service';
import CaseNewEditService from './case-new-edit-portlet-service';
import IbzCaseUIService from '@/uiservice/ibz-case/ibz-case-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {CaseNewEditPortletBase}
 */
export class CaseNewEditPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CaseNewEditPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {CaseNewEditService}
     * @memberof CaseNewEditPortletBase
     */
    public service: CaseNewEditService = new CaseNewEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzCaseService}
     * @memberof CaseNewEditPortletBase
     */
    public appEntityService: IbzCaseService = new IbzCaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseNewEditPortletBase
     */
    protected appDeName: string = 'ibzcase';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CaseNewEditPortletBase
     */
    protected appDeLogicName: string = '用例库用例';

    /**
     * 界面UI服务对象
     *
     * @type {IbzCaseUIService}
     * @memberof CaseNewEditBase
     */  
    public appUIService:IbzCaseUIService = new IbzCaseUIService(this.$store);

    /**
     * 长度
     *
     * @type {number}
     * @memberof CaseNewEdit
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof CaseNewEdit
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof CaseNewEditBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof CaseNewEditBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof CaseNewEditBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof CaseNewEditBase
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
     * @memberof CaseNewEditBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof CaseNewEditBase
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
     * @memberof CaseNewEditBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof CaseNewEditBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
