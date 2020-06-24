import { Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { CtrlBase } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import AssignedToMeBugService from './assigned-to-me-bug-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * db_assigntomebugportlet1部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {AssignedToMeBugPortletBase}
 */
export class AssignedToMeBugPortletBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {AssignedToMeBugService}
     * @memberof AssignedToMeBug
     */
    public service: AssignedToMeBugService = new AssignedToMeBugService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof AssignedToMeBug
     */
    public appEntityService: BugService = new BugService({ $store: this.$store });

    /**
     * 长度
     *
     * @type {number}
     * @memberof AssignedToMeBug
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof AssignedToMeBug
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof AssignedToMeBugBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AssignedToMeBugBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AssignedToMeBugBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof AssignedToMeBugBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof AssignedToMeBugBase
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
     * @memberof AssignedToMeBugBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AssignedToMeBugBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
