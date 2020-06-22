<template>
  <div class='tabviewpanel'>
        <tabs :value="activatedTabViewPanel" :animated="false" class='tabexppanel' name='maintabexptabexppanel' @on-click="tabPanelClick">
        <tab-pane :index="0" name='tabviewpanel' tab='maintabexptabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '需求'),
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
        <tab-pane :index="1" name='tabviewpanel2' tab='maintabexptabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', 'Bug'),
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
        <tab-pane :index="2" name='tabviewpanel3' tab='maintabexptabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '子计划'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel3 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel3"
    name="tabviewpanel3"  
    ref='tabviewpanel3'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel3>
        </tab-pane>
        <tab-pane :index="3" name='tabviewpanel4' tab='maintabexptabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '计划详情'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel4 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel4"
    name="tabviewpanel4"  
    ref='tabviewpanel4'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel4>
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
import ProductPlanService from '@/service/product-plan/product-plan-service';
import MainTabExptabexppanelService from './main-tab-exptabexppanel-tabexppanel-service';


/**
 * tabexppanel部件基类
 *
 * @export
 * @class CtrlBase
 * @extends {MainTabExptabexppanelBase}
 */
@Component({
    components: {
      
    }
})
@VueLifeCycleProcessing()
export default class MainTabExptabexppanelBase extends CtrlBase {

    /**
     * 建构部件服务对象
     *
     * @type {MainTabExptabexppanelService}
     * @memberof MainTabExptabexppanel
     */
    public service: MainTabExptabexppanelService = new MainTabExptabexppanelService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductPlanService}
     * @memberof MainTabExptabexppanel
     */
    public appEntityService: ProductPlanService = new ProductPlanService({ $store: this.$store });
    /**
     * 是否初始化
     *
     * @protected
     * @returns {any}
     * @memberof MainTabExptabexppanel
     */
    protected isInit: any = {
        tabviewpanel:  true ,
        tabviewpanel2:  false ,
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
    }

    /**
     * 被激活的分页面板
     *
     * @protected
     * @type {string}
     * @memberof MainTabExptabexppanel
     */
    protected activatedTabViewPanel: string = 'tabviewpanel';

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof MainTabExptabexppanel
     */
    protected ctrlCreated(): void {
        //设置分页导航srfparentdename和srfparentkey
        if (this.context.productplan) {
            Object.assign(this.context, { srfparentdename: 'ProductPlan', srfparentkey: this.context.productplan });
        }
        super.protected();
    }
}
</script>

<style lang='less'>
@import './main-tab-exptabexppanel-tabexppanel.less';
</style>