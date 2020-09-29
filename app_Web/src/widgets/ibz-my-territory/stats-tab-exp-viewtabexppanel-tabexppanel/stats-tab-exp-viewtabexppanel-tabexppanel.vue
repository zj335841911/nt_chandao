<template src="./stats-tab-exp-viewtabexppanel-tabexppanel.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StatsTabExpViewtabexppanelTabexppanelBase } from './stats-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel4 from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel4-tabviewpanel/stats-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel3-tabviewpanel/stats-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel-tabviewpanel/stats-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel2-tabviewpanel/stats-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class StatsTabExpViewtabexppanelTabexppanel
 * @extends {StatsTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel4, 
        view_tabviewpanel3, 
        view_tabviewpanel, 
        view_tabviewpanel2, 
         
    }
})
@VueLifeCycleProcessing()
export default class StatsTabExpViewtabexppanelTabexppanel extends StatsTabExpViewtabexppanelTabexppanelBase { }
</script>
