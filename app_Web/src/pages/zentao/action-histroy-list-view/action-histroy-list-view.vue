<template src="action-histroy-list-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionHistroyListViewBase } from './action-histroy-list-view-base';
import view_history from '@widgets/history/default-list/default-list.vue';
import view_list from '@widgets/action/classify-by-type-list/classify-by-type-list.vue';

/**
 * 历史记录视图
 *
 * @export
 * @class ActionHistroyListView
 * @extends {ActionHistroyListViewBase}
 */
@Component({
    components: {
        view_history, 
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ActionHistroyListView extends ActionHistroyListViewBase {

}
</script>
