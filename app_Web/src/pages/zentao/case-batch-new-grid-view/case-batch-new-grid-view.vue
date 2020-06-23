<template src="./case-batch-new-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseBatchNewGridViewBase } from './case-batch-new-grid-view-base';
import view_grid from '@widgets/case/batch-new-grid/batch-new-grid.vue';

/**
 * 测试用例视图
 *
 * @export
 * @class CaseBatchNewGridView
 * @extends {CaseBatchNewGridViewBase}
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
export default class CaseBatchNewGridView extends CaseBatchNewGridViewBase {

}
</script>
