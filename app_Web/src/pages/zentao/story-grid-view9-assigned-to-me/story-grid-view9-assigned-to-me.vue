<template src="./story-grid-view9-assigned-to-me.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryGridView9_AssignedToMeBase } from './story-grid-view9-assigned-to-me-base';
import view_grid from '@widgets/story/main9-grid/main9-grid.vue';

/**
 * 需求表格视图视图
 *
 * @export
 * @class StoryGridView9_AssignedToMe
 * @extends {StoryGridView9_AssignedToMeBase}
 */
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class StoryGridView9_AssignedToMe extends StoryGridView9_AssignedToMeBase { }
</script>
