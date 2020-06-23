<template src="./build-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildEditViewBase } from './build-edit-view-base';
import view_form from '@widgets/build/quick-create-form/quick-create-form.vue';

/**
 * build编辑视图视图
 *
 * @export
 * @class BuildEditView
 * @extends {BuildEditViewBase}
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
export default class BuildEditView extends BuildEditViewBase {

}
</script>
