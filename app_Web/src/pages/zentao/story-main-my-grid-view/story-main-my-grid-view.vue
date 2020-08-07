<template src="./story-main-my-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainMyGridViewBase } from './story-main-my-grid-view-base';
import view_grid from '@widgets/story/main-grid/main-grid.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryMainMyGridView
 * @extends {StoryMainMyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainMyGridView extends StoryMainMyGridViewBase { }
</script>
