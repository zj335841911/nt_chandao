<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/task/work-info-portlet/work-info-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/task/toolbar-portlet/toolbar-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/task/main-info-portlet/main-info-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/task/main-detail-portlet/main-detail-portlet.vue';

 
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