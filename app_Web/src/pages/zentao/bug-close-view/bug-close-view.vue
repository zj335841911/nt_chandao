<template src="./bug-close-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugCloseViewBase } from './bug-close-view-base';
import view_form from '@widgets/bug/close-form/close-form.vue';

/**
 * 关闭Bug视图
 *
 * @export
 * @class BugCloseView
 * @extends {BugCloseViewBase}
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
export default class BugCloseView extends BugCloseViewBase { }
</script>
