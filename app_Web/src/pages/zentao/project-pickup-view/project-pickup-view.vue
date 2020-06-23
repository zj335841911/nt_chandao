<template src="project-pickup-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectPickupViewBase } from './project-pickup-view-base';
import view_pickupviewpanel from '@widgets/project/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * project数据选择视图视图
 *
 * @export
 * @class ProjectPickupView
 * @extends {ProjectPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProjectPickupView extends ProjectPickupViewBase {

}
</script>
