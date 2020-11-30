<template src="./ibz-daily-my-daily-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyMyDailyGridViewBase } from './ibz-daily-my-daily-grid-view-base';
import view_grid from '@widgets/ibz-daily/my-main-grid/my-main-grid.vue';
import view_searchform from '@widgets/ibz-daily/default-searchform/default-searchform.vue';

/**
 * 日报表格视图视图
 *
 * @export
 * @class IbzDailyMyDailyGridView
 * @extends {IbzDailyMyDailyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyMyDailyGridView extends IbzDailyMyDailyGridViewBase {}
</script>
