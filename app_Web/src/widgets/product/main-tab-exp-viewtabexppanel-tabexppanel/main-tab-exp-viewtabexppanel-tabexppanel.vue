<template src="./main-tab-exp-viewtabexppanel-tabexppanel.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainTabExpViewtabexppanelBase } from './main-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/product/main-tab-exp-viewtabviewpanel-tabviewpanel/main-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/product/main-tab-exp-viewtabviewpanel2-tabviewpanel/main-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/product/main-tab-exp-viewtabviewpanel3-tabviewpanel/main-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/product/main-tab-exp-viewtabviewpanel4-tabviewpanel/main-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel9 from '@widgets/product/main-tab-exp-viewtabviewpanel9-tabviewpanel/main-tab-exp-viewtabviewpanel9-tabviewpanel.vue';
import view_tabviewpanel5 from '@widgets/product/main-tab-exp-viewtabviewpanel5-tabviewpanel/main-tab-exp-viewtabviewpanel5-tabviewpanel.vue';
import view_tabviewpanel8 from '@widgets/product/main-tab-exp-viewtabviewpanel8-tabviewpanel/main-tab-exp-viewtabviewpanel8-tabviewpanel.vue';
import view_tabviewpanel7 from '@widgets/product/main-tab-exp-viewtabviewpanel7-tabviewpanel/main-tab-exp-viewtabviewpanel7-tabviewpanel.vue';
import view_tabviewpanel6 from '@widgets/product/main-tab-exp-viewtabviewpanel6-tabviewpanel/main-tab-exp-viewtabviewpanel6-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class MainTabExpViewtabexppanel
 * @extends {MainTabExpViewtabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel2, 
        view_tabviewpanel3, 
        view_tabviewpanel4, 
        view_tabviewpanel9, 
        view_tabviewpanel5, 
        view_tabviewpanel8, 
        view_tabviewpanel7, 
        view_tabviewpanel6, 
         
    }
})
@VueLifeCycleProcessing()
export default class MainTabExpViewtabexppanel extends MainTabExpViewtabexppanelBase { }
</script>
