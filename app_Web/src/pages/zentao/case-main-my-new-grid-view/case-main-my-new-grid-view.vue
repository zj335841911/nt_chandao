<template src="./case-main-my-new-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainMyNewGridViewBase } from './case-main-my-new-grid-view-base';
import view_grid from '@widgets/case/main-grid-grid/main-grid-grid.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseMainMyNewGridView
 * @extends {CaseMainMyNewGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseMainMyNewGridView extends CaseMainMyNewGridViewBase { }
</script>
