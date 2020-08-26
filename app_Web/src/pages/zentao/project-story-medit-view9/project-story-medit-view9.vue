<template src="./project-story-medit-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStoryMEditView9Base } from './project-story-medit-view9-base';
import view_meditviewpanel from '@widgets/project/main-multieditviewpanel/main-multieditviewpanel.vue';

/**
 * 项目多表单编辑视图（需求相关）视图
 *
 * @export
 * @class ProjectStoryMEditView9
 * @extends {ProjectStoryMEditView9Base}
 */
@Component({
    components: {
        view_meditviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStoryMEditView9 extends ProjectStoryMEditView9Base { }
</script>
