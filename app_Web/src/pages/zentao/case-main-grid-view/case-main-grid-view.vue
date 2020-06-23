<template src="./case-main-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainGridViewBase } from './case-main-grid-view-base';
import view_grid from '@widgets/case/main-grid-grid/main-grid-grid.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseMainGridView
 * @extends {CaseMainGridViewBase}
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
export default class CaseMainGridView extends CaseMainGridViewBase {

}
</script>
