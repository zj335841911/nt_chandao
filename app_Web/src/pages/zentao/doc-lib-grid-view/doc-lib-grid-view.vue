<template src="./doc-lib-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibGridViewBase } from './doc-lib-grid-view-base';
import view_grid from '@widgets/doc-lib/main-grid/main-grid.vue';
import view_searchform from '@widgets/doc-lib/default-searchform/default-searchform.vue';

/**
 * doclib表格视图视图
 *
 * @export
 * @class DocLibGridView
 * @extends {DocLibGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibGridView extends DocLibGridViewBase { }
</script>
