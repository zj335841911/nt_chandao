
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectMainDashboardViewdashboard_container2Base from './main-dashboard-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/burn/burn-down-chart-portlet/burn-down-chart-portlet.vue';
import view_dashboard_sysportlet2 from '@/widgets/action/project-trends-timeline-portlet/project-trends-timeline-portlet.vue';
import view_dashboard_sysportlet4 from '@/widgets/action/action-history-portlet/action-history-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_sysportlet2, 
view_dashboard_sysportlet4, 
 
    }
})
export default class ProjectMainDashboardViewdashboard_container2 extends ProjectMainDashboardViewdashboard_container2Base {

}
</script>