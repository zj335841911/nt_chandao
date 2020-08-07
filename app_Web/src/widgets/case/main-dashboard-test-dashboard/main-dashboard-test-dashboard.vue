<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainDashboardTestBase from './main-dashboard-test-dashboard-base.vue';
import view_dashboard_container4 from '@widgets/case/test-main-dashboard-viewdashboard-container4-portlet/test-main-dashboard-viewdashboard-container4-portlet.vue';
import view_dashboard_container3 from '@widgets/case/test-main-dashboard-viewdashboard-container3-portlet/test-main-dashboard-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/case/test-main-dashboard-viewdashboard-container2-portlet/test-main-dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/case/test-main-dashboard-viewdashboard-container1-portlet/test-main-dashboard-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/case/test-dashboard-quick-action-portlet/test-dashboard-quick-action-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/case/test-main-detail-portlet/test-main-detail-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/case/main-info-portlet/main-info-portlet.vue';

 
@Component({
    components: {
        view_dashboard_container4, 
        view_dashboard_container3, 
        view_dashboard_container2, 
        view_dashboard_container1, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class MainDashboardTest extends MainDashboardTestBase {

}
</script>