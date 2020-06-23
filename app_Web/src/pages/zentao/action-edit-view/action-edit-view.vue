<template src="action-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionEditViewBase } from './action-edit-view-base';
import view_form from '@widgets/action/main-form/main-form.vue';

/**
 * action编辑视图视图
 *
 * @export
 * @class ActionEditView
 * @extends {ActionEditViewBase}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ActionEditView extends ActionEditViewBase {

}
</script>
