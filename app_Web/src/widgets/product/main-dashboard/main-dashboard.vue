<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/action/product-trends-timeline-portlet/product-trends-timeline-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/product/product-info-portlet/product-info-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/product-life/get-roadmap-portlet/get-roadmap-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class Main extends MainBase {

}
</script> 