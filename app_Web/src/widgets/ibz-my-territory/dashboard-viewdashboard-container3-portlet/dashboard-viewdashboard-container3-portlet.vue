
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import IbzMyTerritoryDashboardViewdashboard_container3Base from './dashboard-viewdashboard-container3-portlet-base.vue';

import view_dashboard_sysportlet3 from '@/widgets/action/all-trends-portlet/all-trends-portlet.vue';
import view_dashboard_sysportlet10 from '@/widgets/todo/my-upcoming-portlet/my-upcoming-portlet.vue';
import view_dashboard_sysportlet4 from '@/widgets/bug/assigned-to-me-bug-portlet/assigned-to-me-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@/widgets/story/assigned-to-me-story-portlet/assigned-to-me-story-portlet.vue';
import view_dashboard_sysportlet6 from '@/widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet3, 
view_dashboard_sysportlet10, 
view_dashboard_sysportlet4, 
view_dashboard_sysportlet5, 
view_dashboard_sysportlet6, 
 
    }
})
export default class IbzMyTerritoryDashboardViewdashboard_container3 extends IbzMyTerritoryDashboardViewdashboard_container3Base {

}
</script>