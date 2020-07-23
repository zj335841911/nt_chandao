<template src="./story-grid-view9-my-assigned-to-me.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryGridView9_MyAssignedToMeBase } from './story-grid-view9-my-assigned-to-me-base';
import view_grid from '@widgets/story/main-grid/main-grid.vue';

/**
 * 需求表格视图视图
 *
 * @export
 * @class StoryGridView9_MyAssignedToMe
 * @extends {StoryGridView9_MyAssignedToMeBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryGridView9_MyAssignedToMe extends StoryGridView9_MyAssignedToMeBase { }
</script>
