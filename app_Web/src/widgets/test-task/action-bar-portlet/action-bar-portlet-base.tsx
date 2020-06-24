import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, CtrlBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import ActionBarService from './action-bar-portlet-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet4部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {ActionBarPortletBase}
 */
export class ActionBarPortletBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {ActionBarService}
     * @memberof ActionBarPortletBase
     */
    public service: ActionBarService = new ActionBarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof ActionBarPortletBase
     */
    public appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });

    /**
     * 长度
     *
     * @type {number}
     * @memberof ActionBar
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof ActionBar
     */
    @Prop() public width?: number;

    /**
     * 操作栏模型数据
     *
     * @returns {any[]}
     * @memberof ActionBarBase
     */
    public actionBarModelData:any[] =[
    ];

    /**
     * 触发界面行为
     *
     * @memberof ActionBarBase
     */
    public handleItemClick($event:any){
    }


    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof ActionBarBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof ActionBarBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof ActionBarBase
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof ActionBarBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ActionBarBase
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
     * @memberof ActionBarBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ActionBarBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
