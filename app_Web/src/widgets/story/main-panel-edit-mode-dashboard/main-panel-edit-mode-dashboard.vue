<template src="./main-panel-edit-mode-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainPanel_EditModeBase } from './main-panel-edit-mode-dashboard-base';
import view_dashboard_sysportlet2 from '@widgets/story/base-info-edit-mode-portlet/base-info-edit-mode-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/story/storyspec-portlet/storyspec-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainPanel_EditMode
 * @extends {MainPanel_EditModeBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class MainPanel_EditMode extends MainPanel_EditModeBase { }
</script>
