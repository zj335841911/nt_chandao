<template src="./case-grid-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseGridView9Base } from './case-grid-view9-base';
import view_grid from '@widgets/case/main2-grid/main2-grid.vue';

/**
 * 测试用例表格视图视图
 *
 * @export
 * @class CaseGridView9
 * @extends {CaseGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class CaseGridView9 extends CaseGridView9Base { }
</script>
