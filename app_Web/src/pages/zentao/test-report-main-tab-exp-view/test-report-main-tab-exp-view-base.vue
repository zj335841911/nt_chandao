<template>
<studio-view viewName="testreportmaintabexpview" viewTitle="测试报告分页导航视图" class='detabexpview test-report-main-tab-exp-view'>
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
import TestReportService from '@/service/test-report/test-report-service';

import TabExpViewEngine from '@engine/view/tab-exp-view-engine';


/**
 * 测试报告分页导航视图视图基类
 *
 * @export
 * @class TestReportMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
@Component({})
@VueLifeCycleProcessing()
export default class TestReportMainTabExpViewBase extends TabExpViewBase {

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof TestReportMainTabExpViewBase
     */
    protected appEntityService: TestReportService = new TestReportService;


    /**
     * 计数器服务对象集合
     *
     * @protected
     * @type {Array<*>}
     * @memberof TestReportMainTabExpViewBase
     */    
    protected counterServiceArray: Array<any> = [];

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestReportMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testreport.views.maintabexpview.caption',
        srfTitle: 'entities.testreport.views.maintabexpview.title',
        srfSubTitle: 'entities.testreport.views.maintabexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestReportMainTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: { name: 'tabexppanel', type: 'TABEXPPANEL' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = 'ea7a4f0ccc237a45f39ffb2e3df7e9fd';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestReportMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestReportMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'testreport',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }



    /**
     * 加载模型
     *
     * @protected
     * @memberof TestReportMainTabExpViewBase
     */
    protected async loadModel(): Promise<any> {
        if(this.context.testreport){
            this.appEntityService.getDataInfo(JSON.parse(JSON.stringify(this.context)),{},false).then((response:any) =>{
                if (!response || response.status !== 200) {
                    return;
                }
                const { data: _data } = response;
                if (_data.title) {
                    Object.assign(this.model, { dataInfo: _data.title });
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
@import './test-report-main-tab-exp-view.less';
</style>