<template src="./tab-exp-viewtabexppanel-tabexppanel.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TabExpViewtabexppanelTabexppanelBase } from './tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/ibz-my-territory/tab-exp-viewtabviewpanel-tabviewpanel/tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-my-territory/tab-exp-viewtabviewpanel3-tabviewpanel/tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/ibz-my-territory/tab-exp-viewtabviewpanel4-tabviewpanel/tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel5 from '@widgets/ibz-my-territory/tab-exp-viewtabviewpanel5-tabviewpanel/tab-exp-viewtabviewpanel5-tabviewpanel.vue';
import view_tabviewpanel6 from '@widgets/ibz-my-territory/tab-exp-viewtabviewpanel6-tabviewpanel/tab-exp-viewtabviewpanel6-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/tab-exp-viewtabviewpanel2-tabviewpanel/tab-exp-viewtabviewpanel2-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class TabExpViewtabexppanelTabexppanel
 * @extends {TabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel, 
        view_tabviewpanel3, 
        view_tabviewpanel4, 
        view_tabviewpanel5, 
        view_tabviewpanel6, 
        view_tabviewpanel2, 
         
    }
})
@VueLifeCycleProcessing()
export default class TabExpViewtabexppanelTabexppanel extends TabExpViewtabexppanelTabexppanelBase { }
</script>
