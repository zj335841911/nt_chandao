
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestSuiteMainDashboardViewdashboard_container2Base from './main-dashboard-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/test-suite/cur-suit-case-grid-view-portlet/cur-suit-case-grid-view-portlet.vue';
import view_dashboard_container4 from '@/widgets/test-suite/main-dashboard-viewdashboard-container4-portlet/main-dashboard-viewdashboard-container4-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_container4, 
 
    }
})
export default class TestSuiteMainDashboardViewdashboard_container2 extends TestSuiteMainDashboardViewdashboard_container2Base {

}
</script>