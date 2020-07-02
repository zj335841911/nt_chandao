<template src="./ibz-projectteammain-grid-view-edit-row.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZ_PROJECTTEAMMainGridView_EditRowBase } from './ibz-projectteammain-grid-view-edit-row-base';
import view_grid from '@widgets/ibz-projectteam/main-edit-row-grid/main-edit-row-grid.vue';

/**
 * 项目团队表格视图视图
 *
 * @export
 * @class IBZ_PROJECTTEAMMainGridView_EditRow
 * @extends {IBZ_PROJECTTEAMMainGridView_EditRowBase}
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
export default class IBZ_PROJECTTEAMMainGridView_EditRow extends IBZ_PROJECTTEAMMainGridView_EditRowBase { }
</script>
