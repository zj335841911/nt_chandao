<template src="./case-grid-view9-my.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseGridView9_MyBase } from './case-grid-view9-my-base';
import view_grid from '@widgets/case/main-grid/main-grid.vue';

/**
 * 测试用例表格视图视图
 *
 * @export
 * @class CaseGridView9_My
 * @extends {CaseGridView9_MyBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseGridView9_My extends CaseGridView9_MyBase { }
</script>
