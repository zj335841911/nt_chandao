
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugMainDashboardViewdashboard_container2Base from './main-dashboard-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/bug/steps-info-portlet/steps-info-portlet.vue';
import view_dashboard_sysportlet2 from '@/widgets/bug/action-history-list-portlet/action-history-list-portlet.vue';
import view_dashboard_container4 from '@/widgets/bug/main-dashboard-viewdashboard-container4-portlet/main-dashboard-viewdashboard-container4-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_sysportlet2, 
view_dashboard_container4, 
 
    }
})
export default class BugMainDashboardViewdashboard_container2 extends BugMainDashboardViewdashboard_container2Base {

}
</script>