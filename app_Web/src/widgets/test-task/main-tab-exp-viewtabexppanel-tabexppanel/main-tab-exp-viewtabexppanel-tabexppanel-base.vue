<template>
  <div class='tabviewpanel'>
        <tabs :value="activatedTabViewPanel" :animated="false" class='tabexppanel' name='maintabexpviewtabexppanel' @on-click="tabPanelClick">
        <tab-pane :index="0" name='tabviewpanel' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '测试用例'),
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
                    h('span', '测试版本详情'),
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
import { VueLifeCycleProcessing, CtrlBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import MainTabExpViewtabexppanelService from './main-tab-exp-viewtabexppanel-tabexppanel-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {MainTabExpViewtabexppanelBase}
 */
@Component({
    components: {
      
    }
})
@VueLifeCycleProcessing()
export default class MainTabExpViewtabexppanelBase extends CtrlBase {

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
     * @type {TestTaskService}
     * @memberof MainTabExpViewtabexppanel
     */
    public appEntityService: TestTaskService = new TestTaskService({ $store: this.$store });
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
        if (this.context.testtask) {
            Object.assign(this.context, { srfparentdename: 'TestTask', srfparentkey: this.context.testtask });
        }
        super.protected();
    }
}
</script>

<style lang='less'>
@import './main-tab-exp-viewtabexppanel-tabexppanel.less';
</style>