<template src="./task-main-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainGridViewBase } from './task-main-grid-view-base';
import view_grid from '@widgets/task/main-grid/main-grid.vue';

/**
 * task表格视图视图
 *
 * @export
 * @class TaskMainGridView
 * @extends {TaskMainGridViewBase}
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
export default class TaskMainGridView extends TaskMainGridViewBase { }
</script>
