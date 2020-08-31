<template src="./bug-my-favorite-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMyFavoriteGridViewBase } from './bug-my-favorite-grid-view-base';
import view_grid from '@widgets/bug/favorite-main-grid/favorite-main-grid.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugMyFavoriteGridView
 * @extends {BugMyFavoriteGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugMyFavoriteGridView extends BugMyFavoriteGridViewBase { }
</script>
