<template>
  <div class='tabviewpanel'>
        <tabs :value="activatedTabViewPanel" :animated="false" class='tabexppanel' name='maintabexpviewtabexppanel' @on-click="tabPanelClick">
        <tab-pane :index="0" name='tabviewpanel' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '概况'),
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
                    h('span', '需求'),
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
        <tab-pane :index="2" name='tabviewpanel3' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '计划'),
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
        <tab-pane :index="3" name='tabviewpanel4' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '发布'),
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
        <tab-pane :index="4" name='tabviewpanel9' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '路线图'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel9 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel9"
    name="tabviewpanel9"  
    ref='tabviewpanel9'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel9>
        </tab-pane>
        <tab-pane :index="5" name='tabviewpanel5' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '项目'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel5 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel5"
    name="tabviewpanel5"  
    ref='tabviewpanel5'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel5>
        </tab-pane>
        <tab-pane :index="6" name='tabviewpanel8' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '平台'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel8 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel8"
    name="tabviewpanel8"  
    ref='tabviewpanel8'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel8>
        </tab-pane>
        <tab-pane :index="7" name='tabviewpanel7' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '动态'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel7 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel7"
    name="tabviewpanel7"  
    ref='tabviewpanel7'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel7>
        </tab-pane>
        <tab-pane :index="8" name='tabviewpanel6' tab='maintabexpviewtabexppanel' class=''  
            :label="(h) =>{
                return h('div', [
                    h('span', '模块'),
                    h('Badge', {
                        props: {
                            count: undefined,
                            type: 'primary'
                        }
                    })
                ])
            }" >
            <view_tabviewpanel6 
    :viewState="viewState"  
    :viewparams="JSON.parse(JSON.stringify(viewparams))" 
    :context="JSON.parse(JSON.stringify(context))" 
    v-if="isInit.tabviewpanel6"
    name="tabviewpanel6"  
    ref='tabviewpanel6'
    @viewpanelDatasChange = "tabViewPanelDatasChange"
    @closeview="closeView($event)">
</view_tabviewpanel6>
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
import ProductService from '@/service/product/product-service';
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
     * @type {ProductService}
     * @memberof MainTabExpViewtabexppanel
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });
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
        tabviewpanel3:  false ,
        tabviewpanel4:  false ,
        tabviewpanel9:  false ,
        tabviewpanel5:  false ,
        tabviewpanel8:  false ,
        tabviewpanel7:  false ,
        tabviewpanel6:  false ,
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
        if (this.context.product) {
            Object.assign(this.context, { srfparentdename: 'Product', srfparentkey: this.context.product });
        }
        super.protected();
    }
}
</script>

<style lang='less'>
@import './main-tab-exp-viewtabexppanel-tabexppanel.less';
</style>