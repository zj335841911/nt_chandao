<template>
<studio-view viewName="testtaskmaintabexpview" viewTitle="测试版本分页导航视图" class='detabexpview test-task-main-tab-exp-view'>
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
import { Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, TabExpViewBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';

import TabExpViewEngine from '@engine/view/tab-exp-view-engine';


/**
 * 测试版本分页导航视图视图基类
 *
 * @export
 * @class TestTaskMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class TestTaskMainTabExpViewBase extends TabExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected appEntityService: TestTaskService = new TestTaskService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestTaskMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestTaskMainTabExpViewBase
	 */
    protected customViewNavContexts: any = {
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestTaskMainTabExpViewBase
	 */
    protected customViewParams: any = {
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testtask.views.maintabexpview.caption',
        srfTitle: 'entities.testtask.views.maintabexpview.title',
        srfSubTitle: 'entities.testtask.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestTaskMainTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestTaskMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestTaskMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'testtask',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     *
     * @protected
     * @memberof TestTaskMainTabExpViewBase
     */
    protected async loadModel(): Promise<any> {
        if(this.context.testtask){
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
@import './test-task-main-tab-exp-view.less';
</style>