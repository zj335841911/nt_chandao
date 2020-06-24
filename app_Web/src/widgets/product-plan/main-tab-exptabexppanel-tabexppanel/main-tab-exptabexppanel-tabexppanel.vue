<template src="./main-tab-exptabexppanel-tabexppanel.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainTabExptabexppanelTabexppanelBase } from './main-tab-exptabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/product-plan/main-tab-exptabviewpanel-tabviewpanel/main-tab-exptabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/product-plan/main-tab-exptabviewpanel2-tabviewpanel/main-tab-exptabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/product-plan/main-tab-exptabviewpanel3-tabviewpanel/main-tab-exptabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/product-plan/main-tab-exptabviewpanel4-tabviewpanel/main-tab-exptabviewpanel4-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class MainTabExptabexppanelTabexppanel
 * @extends {MainTabExptabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
        view_tabviewpanel3, 
        view_tabviewpanel4, 
         
    }
})
@VueLifeCycleProcessing()
export default class MainTabExptabexppanelTabexppanel extends MainTabExptabexppanelTABEXPPANELBase { }
</script>
