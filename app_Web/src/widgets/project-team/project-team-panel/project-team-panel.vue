<template src="./project-team-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamPanelBase } from './project-team-panel-base';
 

/**
 * list_itempanel部件
 *
 * @export
 * @class ProjectTeamPanel
 * @extends {ProjectTeamPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTeamPanel extends ProjectTeamPanelBase {}
</script>
