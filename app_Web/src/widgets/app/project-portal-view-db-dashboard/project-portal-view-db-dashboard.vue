<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectPortalView_dbBase from './project-portal-view-db-dashboard-base.vue';
import view_db_container1 from '@widgets/app/db-container1-portlet/db-container1-portlet.vue';
import view_db_sysportlet4 from '@widgets/project/project-status-bar-portlet/project-status-bar-portlet.vue';
import view_db_sysportlet3 from '@widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
import view_db_container3 from '@widgets/app/db-container3-portlet/db-container3-portlet.vue';
import view_db_sysportlet2 from '@widgets/project/project-status-bar-portlet/project-status-bar-portlet.vue';
import view_db_container2 from '@widgets/app/db-container2-portlet/db-container2-portlet.vue';
import view_db_sysportlet1 from '@widgets/project/un-closed-project-portlet/un-closed-project-portlet.vue';

 
@Component({
    components: {
        view_db_container1, 
        view_db_sysportlet4, 
        view_db_sysportlet3, 
        view_db_container3, 
        view_db_sysportlet2, 
        view_db_container2, 
        view_db_sysportlet1, 
         
    }
})
export default class ProjectPortalView_db extends ProjectPortalView_dbBase {

}
</script>