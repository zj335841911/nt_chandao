 
<template>
<studio-view viewName="releasemaintabexpview" viewTitle="发布分页导航视图" class='detabexpview release-main-tab-exp-view'>
    <template slot='title'>
    <span class='caption-info'>{{$t(model.srfTitle)}}</span>
    </template>
    <view_tabexppanel 
        :viewState="viewState"  
        :viewparams="viewparams" 
        :context="context" 
        name="tabexppanel"  
        ref='tabexppanel' 
        @closeview="closeView($event)">
    </view_tabexppanel>
</studio-view>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import ReleaseService from '@/service/release/release-service';

import TabExpViewEngine from '@engine/view/tab-exp-view-engine';


/**
 * 发布分页导航视图视图基类
 *
 * @export
 * @class ReleaseMainTabExpViewBase
 * @extends {Vue}
 */
@Component({})
export default class ReleaseMainTabExpViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected appEntityService: ReleaseService = new ReleaseService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof ReleaseMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ReleaseMainTabExpViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ReleaseMainTabExpViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.release.views.maintabexpview.caption',
        srfTitle: 'entities.release.views.maintabexpview.title',
        srfSubTitle: 'entities.release.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };



    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ReleaseMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ReleaseMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'release',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     * 
     * @memberof ReleaseMainTabExpViewBase
     */
    public loadModel(){
        if(this.context.release){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                if (_data.name) {
                    Object.assign(this.model, { dataInfo: _data.name });
                    if (this.$tabPageExp) {
                        this.$tabPageExp.setCurPageCaption(this.model.srfTitle, this.model.srfTitle, this.model.dataInfo);
                    }
                    if(this.$route){
                        this.$route.meta.info = this.model.dataInfo;
                    }
                    Object.assign(this.model, { srfTitle: `${this.$t(this.model.srfTitle)} - ${this.model.dataInfo}` });
                }
            })
        }
    }


}
</script>

<style lang='less'>
@import './release-main-tab-exp-view.less';
</style>