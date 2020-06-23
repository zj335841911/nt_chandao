<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import DashboardBase from './dash-board-dashboard-base.vue';
import view_dashboard_sysportlet4 from '@widgets/test-task/action-bar-portlet/action-bar-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/test-task/main-info-portlet/main-info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/test-task/main-detail-portlet/main-detail-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class Dashboard extends DashboardBase {

}
</script> 