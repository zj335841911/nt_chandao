<template src="./project-team-pc-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamPcListBase } from './project-team-pc-list-base';
import layout_list_itempanel from '@widgets/project-team/project-team-panel/project-team-panel.vue';
 

/**
 * list部件
 *
 * @export
 * @class ProjectTeamPcList
 * @extends {ProjectTeamPcListBase}
 */
@Component({
    components: {
        layout_list_itempanel,
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTeamPcList extends ProjectTeamPcListBase {}
</script>
