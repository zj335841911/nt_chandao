<template src="./project-main-tab-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainTabExpViewBase } from './project-main-tab-exp-view-base';
import view_tabexppanel from '@widgets/project/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 项目导航视图视图
 *
 * @export
 * @class ProjectMainTabExpView
 * @extends {ProjectMainTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class ProjectMainTabExpView extends ProjectMainTabExpViewBase { }
</script>
