
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductMainDashboardViewdashboard_container2Base from './main-dashboard-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet1 from '@/widgets/product-life/get-roadmaps-portlet/get-roadmaps-portlet.vue';
import view_dashboard_sysportlet2 from '@/widgets/action/product-trends-timeline-portlet/product-trends-timeline-portlet.vue';
import view_dashboard_sysportlet4 from '@/widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_container4 from '@/widgets/product/main-dashboard-viewdashboard-container4-portlet/main-dashboard-viewdashboard-container4-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet1, 
view_dashboard_sysportlet2, 
view_dashboard_sysportlet4, 
view_dashboard_container4, 
 
    }
})
export default class ProductMainDashboardViewdashboard_container2 extends ProductMainDashboardViewdashboard_container2Base {

}
</script>