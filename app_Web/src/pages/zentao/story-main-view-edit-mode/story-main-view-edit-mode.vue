<template src="./story-main-view-edit-mode.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainView_EditModeBase } from './story-main-view-edit-mode-base';
import view_dashboard from '@widgets/story/main-panel-edit-mode-dashboard/main-panel-edit-mode-dashboard.vue';

/**
 * 需求数据看板视图视图
 *
 * @export
 * @class StoryMainView_EditMode
 * @extends {StoryMainView_EditModeBase}
 */
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class StoryMainView_EditMode extends StoryMainView_EditModeBase {

}
</script>
