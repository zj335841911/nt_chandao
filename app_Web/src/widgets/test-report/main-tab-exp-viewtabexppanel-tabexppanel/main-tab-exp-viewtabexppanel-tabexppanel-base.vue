<template>
  <div class='tabviewpanel'>
        <tabs :value="activatedTabViewPanel" :animated="false" class='tabexppanel' name='maintabexpviewtabexppanel' @on-click="tabPanelClick">
        <tab-pane :index="0" name='tabviewpanel' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '概要'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel"
    name="tabviewpanel"  
    ref='tabviewpanel'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel>
        </tab-pane>
        <tab-pane :index="1" name='tabviewpanel2' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '测试范围'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel2 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel2"
    name="tabviewpanel2"  
    ref='tabviewpanel2'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel2>
        </tab-pane>
    </tabs>
  </div>
</template>
<script lang='tsx'>
import { Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool, Util } from '@/utils';
import { VueLifeCycleProcessing, TabExpPanel } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import MainTabExpViewtabexppanelService from './main-tab-exp-viewtabexppanel-tabexppanel-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class TabExpPanel
 * @extends {MainTabExpViewtabexppanelBase}
 */
@Component({
    components: {
      
    }
})
@VueLifeCycleProcessing()
export default class MainTabExpViewtabexppanelBase extends TabExpPanel {

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExpViewtabexppanelService}
     * @memberof MainTabExpViewtabexppanel
     */
    public service: MainTabExpViewtabexppanelService = new MainTabExpViewtabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof MainTabExpViewtabexppanel
     */
    public appEntityService: TestReportService = new TestReportService({ $store: this.$store });
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MainTabExpViewtabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MainTabExpViewtabexppanel
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MainTabExpViewtabexppanel
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.testreport) {
            Object.assign(this.context, { srfparentdename: 'TestReport', srfparentkey: this.context.testreport });
        }
        super.ctrlCreated();
    }

    /**
     * 分页面板选中
     *
     * @protected
     * @param {*} e
     * @returns
     * @memberof MainTabExpViewtabexppanel
     */
    protected tabPanelClick(e: any): void {
        super.tabPanelClick(e);
    }
}
</script>
<style lang='less'>
@import './main-tab-exp-viewtabexppanel-tabexppanel.less';
</style>