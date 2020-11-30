<template src="./my-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyTabExpViewtabexppanelTabexppanelBase } from './my-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/ibz-report/my-tab-exp-viewtabviewpanel-tabviewpanel/my-tab-exp-viewtabviewpanel-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class MyTabExpViewtabexppanelTabexppanel
 * @extends {MyTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
         
    },
})
@VueLifeCycleProcessing()
export default class MyTabExpViewtabexppanelTabexppanel extends MyTabExpViewtabexppanelTabexppanelBase {}
</script>
