<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectPortalView_dbBase from './project-portal-view-db-dashboard-base.vue';
import view_db_assignedtometaskportlet from '@widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
import view_db_projectstatusportlet from '@widgets/project/project-status-bar-portlet/project-status-bar-portlet.vue';
import view_db_projectexpportlet from '@widgets/project/project-exp-view-portlet/project-exp-view-portlet.vue';
import view_db_projectunclosedportlet from '@widgets/project/un-closed-project-portlet/un-closed-project-portlet.vue';

 
@Component({
    components: {
        view_db_assignedtometaskportlet, 
        view_db_projectstatusportlet, 
        view_db_projectexpportlet, 
        view_db_projectunclosedportlet, 
         
    }
})
export default class ProjectPortalView_db extends ProjectPortalView_dbBase {

}
</script> 