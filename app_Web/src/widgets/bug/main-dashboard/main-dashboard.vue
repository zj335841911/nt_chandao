<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_sysportlet4 from '@widgets/bug/dashboard-bug-life-portlet/dashboard-bug-life-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/bug/bug-dashboard-actions-portlet/bug-dashboard-actions-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/bug/action-history-list-portlet/action-history-list-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/bug/dashboard-bug-main-portlet/dashboard-bug-main-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/bug/steps-info-portlet/steps-info-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class Main extends MainBase {

}
</script> 