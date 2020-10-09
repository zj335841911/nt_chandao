<template src="./project-usr2-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectUsr2GridViewBase } from './project-usr2-grid-view-base';
import view_grid from '@widgets/project/involved-project-grid/involved-project-grid.vue';
import view_searchform from '@widgets/project/default-searchform/default-searchform.vue';

/**
 * 项目实体表格视图(参与项目)视图
 *
 * @export
 * @class ProjectUsr2GridView
 * @extends {ProjectUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectUsr2GridView extends ProjectUsr2GridViewBase { }
</script>
