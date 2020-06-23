<template src="test-task-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskGridViewBase } from './test-task-grid-view-base';
import view_grid from '@widgets/test-task/main-grid/main-grid.vue';

/**
 * testtask表格视图视图
 *
 * @export
 * @class TestTaskGridView
 * @extends {TestTaskGridViewBase}
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
export default class TestTaskGridView extends TestTaskGridViewBase {

}
</script>
