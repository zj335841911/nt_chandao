
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainDashboardViewdashboard_container2Base from './main-dashboard-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/task/main-detail-portlet/main-detail-portlet.vue';
import view_dashboard_sysportlet4 from '@/widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_container4 from '@/widgets/task/main-dashboard-viewdashboard-container4-portlet/main-dashboard-viewdashboard-container4-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_sysportlet4, 
view_dashboard_container4, 
 
    }
})
export default class TaskMainDashboardViewdashboard_container2 extends TaskMainDashboardViewdashboard_container2Base {

}
</script>