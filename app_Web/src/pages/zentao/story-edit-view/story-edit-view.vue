<template src="./story-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryEditViewBase } from './story-edit-view-base';
import view_form from '@widgets/story/main-new-mode-form/main-new-mode-form.vue';

/**
 * story编辑视图视图
 *
 * @export
 * @class StoryEditView
 * @extends {StoryEditViewBase}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class StoryEditView extends StoryEditViewBase {

}
</script>
