import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, MainControlBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import AssignedToMeStoryService from './assigned-to-me-story-portlet-service';
import StoryUIService from '@/uiservice/story/story-ui-service';
import { Environment } from '@/environments/environment';


/**
 * dashboard_sysportlet5部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {AssignedToMeStoryPortletBase}
 */
export class AssignedToMeStoryPortletBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof AssignedToMeStoryPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {AssignedToMeStoryService}
     * @memberof AssignedToMeStoryPortletBase
     */
    public service: AssignedToMeStoryService = new AssignedToMeStoryService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof AssignedToMeStoryPortletBase
     */
    public appEntityService: StoryService = new StoryService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssignedToMeStoryPortletBase
     */
    protected appDeName: string = 'story';

    /**
     * 长度
     *
     * @type {number}
     * @memberof AssignedToMeStory
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof AssignedToMeStory
     */
    @Prop() public width?: number;



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof AssignedToMeStoryBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof AssignedToMeStoryBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof AssignedToMeStoryBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof AssignedToMeStoryBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return '200px';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof AssignedToMeStoryBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof AssignedToMeStoryBase
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
     * @memberof AssignedToMeStoryBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof AssignedToMeStoryBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }


}
