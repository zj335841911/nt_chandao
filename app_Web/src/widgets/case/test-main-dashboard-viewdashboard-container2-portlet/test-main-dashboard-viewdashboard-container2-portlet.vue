
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseTestMainDashboardViewdashboard_container2Base from './test-main-dashboard-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/case/main-info-portlet/main-info-portlet.vue';
import view_dashboard_sysportlet3 from '@/widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_container4 from '@/widgets/case/test-main-dashboard-viewdashboard-container4-portlet/test-main-dashboard-viewdashboard-container4-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_sysportlet3, 
view_dashboard_container4, 
 
    }
})
export default class CaseTestMainDashboardViewdashboard_container2 extends CaseTestMainDashboardViewdashboard_container2Base {

}
</script>