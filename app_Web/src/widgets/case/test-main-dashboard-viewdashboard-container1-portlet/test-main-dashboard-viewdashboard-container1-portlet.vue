
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseTestMainDashboardViewdashboard_container1Base from './test-main-dashboard-viewdashboard-container1-portlet-base.vue';

import view_dashboard_container2 from '@/widgets/case/test-main-dashboard-viewdashboard-container2-portlet/test-main-dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container3 from '@/widgets/case/test-main-dashboard-viewdashboard-container3-portlet/test-main-dashboard-viewdashboard-container3-portlet.vue';
 
@Component({
    components: {
        view_dashboard_container2, 
view_dashboard_container3, 
 
    }
})
export default class CaseTestMainDashboardViewdashboard_container1 extends CaseTestMainDashboardViewdashboard_container1Base {

}
</script>