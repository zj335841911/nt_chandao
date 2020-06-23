<template src="./release-main-info-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReleaseMainInfoViewBase } from './release-main-info-view-base';
import view_form from '@widgets/release/main-form/main-form.vue';

/**
 * 发布编辑视图视图
 *
 * @export
 * @class ReleaseMainInfoView
 * @extends {ReleaseMainInfoViewBase}
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
export default class ReleaseMainInfoView extends ReleaseMainInfoViewBase {

}
</script>
