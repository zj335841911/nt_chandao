import { Subject } from 'rxjs';
import { EditView9Base } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import EditView9Engine from '@engine/view/edit-view9-engine';

/**
 * 需求编辑视图视图基类
 *
 * @export
 * @class StoryMainView9_EditModeBase
 * @extends {EditView9Base}
 */
export class StoryMainView9_EditModeBase extends EditView9Base {

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryMainView9_EditModeBase
     */
    protected appEntityService: StoryService = new StoryService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof StoryMainView9_EditModeBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof StoryMainView9_EditModeBase
     */
    protected model: any = {
        srfCaption: 'entities.story.views.mainview9_editmode.caption',
        srfTitle: 'entities.story.views.mainview9_editmode.title',
        srfSubTitle: 'entities.story.views.mainview9_editmode.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryMainView9_EditModeBase
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '538555af88ea31549a5bc7dbf1e6286a';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryMainView9_EditModeBase
     */
    public engine: EditView9Engine = new EditView9Engine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryMainView9_EditModeBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMainView9_EditModeBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMainView9_EditModeBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMainView9_EditModeBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof StoryMainView9_EditModeBase
     */
    protected viewMounted(): void {
        if (this.panelState) {
            this.panelState.subscribe((res:any) => {
                if (Object.is(res.tag,'meditviewpanel')) {
                    if (Object.is(res.action,'save')) {
                        this.viewState.next({ tag:'form', action: 'save', data:res.data});
                    }
                    if (Object.is(res.action,'remove')) {
                        this.viewState.next({ tag:'form', action: 'remove', data:res.data});
                    }
                }
            });
        }
    }


}