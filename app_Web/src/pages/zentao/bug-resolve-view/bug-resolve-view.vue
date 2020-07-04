<template src="./bug-resolve-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolveViewBase } from './bug-resolve-view-base';
import view_form from '@widgets/bug/resolve-form/resolve-form.vue';

/**
 * 解决Bug视图
 *
 * @export
 * @class BugResolveView
 * @extends {BugResolveViewBase}
 */
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class BugResolveView extends BugResolveViewBase { }
</script>
