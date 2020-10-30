<template src="./sys-update-log-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateLogGridViewBase } from './sys-update-log-grid-view-base';
import view_grid from '@widgets/sys-update-log/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-update-log/default-searchform/default-searchform.vue';

/**
 * 系统更新日志表格视图视图
 *
 * @export
 * @class SysUpdateLogGridView
 * @extends {SysUpdateLogGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateLogGridView extends SysUpdateLogGridViewBase { }
</script>
