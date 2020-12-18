<template src="./ibizpro-index-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproIndexListViewBase } from './ibizpro-index-list-view-base';
import view_list from '@widgets/ibizpro-index/index-mob-list/index-mob-list.vue';
import view_searchform from '@widgets/ibizpro-index/default-searchform/default-searchform.vue';

/**
 * 索引检索列表视图视图
 *
 * @export
 * @class IbizproIndexListView
 * @extends {IbizproIndexListViewBase}
 */
@Component({
    components: {
        view_list, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproIndexListView extends IbizproIndexListViewBase {}
</script>
