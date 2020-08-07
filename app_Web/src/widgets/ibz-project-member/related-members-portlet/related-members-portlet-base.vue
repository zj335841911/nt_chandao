<template>
    <div class='porlet related-members' :style="{'height': isAdaptiveSize ? '100%' : '300px',}">
        <p class='porlet-title'>
            相关成员
        </p>
        <div class="portlet-width-title">
        <ibz-project-member-edit-view9 :viewdata="JSON.stringify(context)" :viewDefaultUsage="false" ></ibz-project-member-edit-view9>
        </div>
    </div>
</template>
<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import IbzProjectMemberService from '@/service/ibz-project-member/ibz-project-member-service';
import RelatedMembersService from './related-members-portlet-service';



@Component({
    components: {
      
    }
})
export default class IbzProjectMemberRelatedMembersBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof RelatedMembers
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof RelatedMembers
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof RelatedMembers
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof RelatedMembers
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof RelatedMembers
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof RelatedMembers
     */
    protected getControlType(): string {
        return 'PORTLET'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof RelatedMembers
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {RelatedMembersService}
     * @memberof RelatedMembers
     */
    protected service: RelatedMembersService = new RelatedMembersService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzProjectMemberService}
     * @memberof RelatedMembers
     */
    protected appEntityService: IbzProjectMemberService = new IbzProjectMemberService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof RelatedMembers
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof RelatedMembers
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof RelatedMembers
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof RelatedMembers
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof RelatedMembers
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof RelatedMembers
     */
    protected created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof RelatedMembers
     */    
    protected afterCreated(){
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
     * @memberof RelatedMembers
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof RelatedMembers
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

}
</script>

<style lang='less'>
@import './related-members-portlet.less';
</style>