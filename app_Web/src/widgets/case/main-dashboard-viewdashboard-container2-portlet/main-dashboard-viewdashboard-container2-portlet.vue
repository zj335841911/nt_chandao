
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseMainDashboardViewdashboard_container2Base from './main-dashboard-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/case/main-info-portlet/main-info-portlet.vue';
import view_dashboard_sysportlet3 from '@/widgets/action/action-history-portlet/action-history-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_sysportlet3, 
 
    }
})
export default class CaseMainDashboardViewdashboard_container2 extends CaseMainDashboardViewdashboard_container2Base {

}
</script>