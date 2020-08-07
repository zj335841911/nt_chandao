
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugMainDashboardViewdashboard_container3Base from './main-dashboard-viewdashboard-container3-portlet-base.vue';

import view_dashboard_sysportlet3 from '@/widgets/bug/dashboard-bug-main-portlet/dashboard-bug-main-portlet.vue';
import view_dashboard_sysportlet4 from '@/widgets/bug/dashboard-bug-life-portlet/dashboard-bug-life-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet3, 
view_dashboard_sysportlet4, 
 
    }
})
export default class BugMainDashboardViewdashboard_container3 extends BugMainDashboardViewdashboard_container3Base {

}
</script>