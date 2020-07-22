<template src="./ibz-my-territory-list-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryListViewBase } from './ibz-my-territory-list-view-base';
import view_list from '@widgets/ibz-my-territory/welcome-list/welcome-list.vue';

/**
 * 欢迎视图
 *
 * @export
 * @class IbzMyTerritoryListView
 * @extends {IbzMyTerritoryListViewBase}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryListView extends IbzMyTerritoryListViewBase { }
</script>
