
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainDashboardViewdashboard_container1Base from './main-dashboard-viewdashboard-container1-portlet-base.vue';

import view_dashboard_container2 from '@/widgets/task/main-dashboard-viewdashboard-container2-portlet/main-dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container3 from '@/widgets/task/main-dashboard-viewdashboard-container3-portlet/main-dashboard-viewdashboard-container3-portlet.vue';
 
@Component({
    components: {
        view_dashboard_container2, 
view_dashboard_container3, 
 
    }
})
export default class TaskMainDashboardViewdashboard_container1 extends TaskMainDashboardViewdashboard_container1Base {

}
</script>