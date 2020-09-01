<template src="./project-mgedit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMGEditViewBase } from './project-mgedit-view-base';
import view_form from '@widgets/project/project-mg-form/project-mg-form.vue';

/**
 * 项目编辑视图（团队管理）视图
 *
 * @export
 * @class ProjectMGEditView
 * @extends {ProjectMGEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectMGEditView extends ProjectMGEditViewBase { }
</script>
