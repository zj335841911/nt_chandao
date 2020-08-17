<template src="./ibz-lib-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibGridViewBase } from './ibz-lib-grid-view-base';
import view_grid from '@widgets/ibz-lib/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibz-lib/default-searchform/default-searchform.vue';

/**
 * 用例库表格视图视图
 *
 * @export
 * @class IbzLibGridView
 * @extends {IbzLibGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibGridView extends IbzLibGridViewBase { }
</script>
