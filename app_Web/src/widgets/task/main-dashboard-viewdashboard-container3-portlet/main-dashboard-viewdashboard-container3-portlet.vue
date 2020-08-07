
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainDashboardViewdashboard_container3Base from './main-dashboard-viewdashboard-container3-portlet-base.vue';

import view_dashboard_sysportlet3 from '@/widgets/task/main-info-portlet/main-info-portlet.vue';
import view_dashboard_sysportlet5 from '@/widgets/task/work-info-portlet/work-info-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet3, 
view_dashboard_sysportlet5, 
 
    }
})
export default class TaskMainDashboardViewdashboard_container3 extends TaskMainDashboardViewdashboard_container3Base {

}
</script>