
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestSuiteMainDashboardViewdashboard_container3Base from './main-dashboard-viewdashboard-container3-portlet-base.vue';

import view_dashboard_sysportlet2 from '@/widgets/test-suite/main-info-view-portlet/main-info-view-portlet.vue';
import view_dashboard_sysportlet3 from '@/widgets/action/action-history-portlet/action-history-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet2, 
view_dashboard_sysportlet3, 
 
    }
})
export default class TestSuiteMainDashboardViewdashboard_container3 extends TestSuiteMainDashboardViewdashboard_container3Base {

}
</script>