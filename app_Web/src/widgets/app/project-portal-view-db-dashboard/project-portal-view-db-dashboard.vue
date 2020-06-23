<template src="./project-portal-view-db-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectPortalView_dbBase } from './project-portal-view-db-dashboard-base';
import view_db_assignedtometaskportlet from '@widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
import view_db_projectstatusportlet from '@widgets/project/project-status-bar-portlet/project-status-bar-portlet.vue';
import view_db_rightcontainer3 from '@widgets/app/db-rightcontainer3-portlet/db-rightcontainer3-portlet.vue';
import view_db_projectexpportlet from '@widgets/project/project-exp-view-portlet/project-exp-view-portlet.vue';
import view_db_totalcontainer1 from '@widgets/app/db-totalcontainer1-portlet/db-totalcontainer1-portlet.vue';
import view_db_projectunclosedportlet from '@widgets/project/un-closed-project-portlet/un-closed-project-portlet.vue';
import view_db_leftcontainer2 from '@widgets/app/db-leftcontainer2-portlet/db-leftcontainer2-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class ProjectPortalView_db
 * @extends {ProjectPortalView_dbBase}
 */
@Component({
    components: {
        view_db_assignedtometaskportlet, 
        view_db_projectstatusportlet, 
        view_db_rightcontainer3, 
        view_db_projectexpportlet, 
        view_db_totalcontainer1, 
        view_db_projectunclosedportlet, 
        view_db_leftcontainer2, 
         
    }
})
@VueLifeCycleProcessing()
export default class ProjectPortalView_db extends ProjectPortalView_dbBase { }
</script>
