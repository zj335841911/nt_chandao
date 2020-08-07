<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_container4 from '@widgets/product/main-dashboard-viewdashboard-container4-portlet/main-dashboard-viewdashboard-container4-portlet.vue';
import view_dashboard_container3 from '@widgets/product/main-dashboard-viewdashboard-container3-portlet/main-dashboard-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/product/main-dashboard-viewdashboard-container2-portlet/main-dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/product/main-dashboard-viewdashboard-container1-portlet/main-dashboard-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/product/product-main-toolbar-portlet/product-main-toolbar-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/action/product-trends-timeline-portlet/product-trends-timeline-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/product/product-info-portlet/product-info-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/product-life/get-roadmaps-portlet/get-roadmaps-portlet.vue';

 
@Component({
    components: {
        view_dashboard_container4, 
        view_dashboard_container3, 
        view_dashboard_container2, 
        view_dashboard_container1, 
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