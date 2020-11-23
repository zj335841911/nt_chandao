<template src="./usr3-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Usr3TabExpViewtabexppanelTabexppanelBase } from './usr3-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/ibz-my-territory/usr3-tab-exp-viewtabviewpanel-tabviewpanel/usr3-tab-exp-viewtabviewpanel-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class Usr3TabExpViewtabexppanelTabexppanel
 * @extends {Usr3TabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
         
    },
})
@VueLifeCycleProcessing()
export default class Usr3TabExpViewtabexppanelTabexppanel extends Usr3TabExpViewtabexppanelTabexppanelBase {}
</script>
