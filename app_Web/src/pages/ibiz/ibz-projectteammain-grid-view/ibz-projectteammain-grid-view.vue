<template src="./ibz-projectteammain-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZ_PROJECTTEAMMainGridViewBase } from './ibz-projectteammain-grid-view-base';
import view_grid from '@widgets/project-team/main-grid/main-grid.vue';

/**
 * 项目团队表格视图视图
 *
 * @export
 * @class IBZ_PROJECTTEAMMainGridView
 * @extends {IBZ_PROJECTTEAMMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    }
})
@VueLifeCycleProcessing()
export default class IBZ_PROJECTTEAMMainGridView extends IBZ_PROJECTTEAMMainGridViewBase { }
</script>
