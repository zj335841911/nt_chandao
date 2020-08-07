<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import HomeBase from './home-dashboard-base.vue';
import view_dashboard_container5 from '@widgets/ibz-my-territory/dashboard-viewdashboard-container5-portlet/dashboard-viewdashboard-container5-portlet.vue';
import view_dashboard_container4 from '@widgets/ibz-my-territory/dashboard-viewdashboard-container4-portlet/dashboard-viewdashboard-container4-portlet.vue';
import view_dashboard_container3 from '@widgets/ibz-my-territory/dashboard-viewdashboard-container3-portlet/dashboard-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/ibz-my-territory/dashboard-viewdashboard-container2-portlet/dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_sysportlet9 from '@widgets/product/text-exp-view-portlet/text-exp-view-portlet.vue';
import view_dashboard_container1 from '@widgets/ibz-my-territory/dashboard-viewdashboard-container1-portlet/dashboard-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet10 from '@widgets/todo/my-upcoming-portlet/my-upcoming-portlet.vue';
import view_dashboard_sysportlet8 from '@widgets/project/project-exp-view-portlet/project-exp-view-portlet.vue';
import view_dashboard_sysportlet6 from '@widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
import view_dashboard_sysportlet7 from '@widgets/product/product-exp-view-portlet/product-exp-view-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/bug/assigned-to-me-bug-portlet/assigned-to-me-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/story/assigned-to-me-story-portlet/assigned-to-me-story-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/ibz-my-territory/my-work-portlet/my-work-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/all-trends-portlet/all-trends-portlet.vue';

 
@Component({
    components: {
        view_dashboard_container5, 
        view_dashboard_container4, 
        view_dashboard_container3, 
        view_dashboard_container2, 
        view_dashboard_sysportlet9, 
        view_dashboard_container1, 
        view_dashboard_sysportlet10, 
        view_dashboard_sysportlet8, 
        view_dashboard_sysportlet6, 
        view_dashboard_sysportlet7, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
         
    }
})
export default class Home extends HomeBase {

}
</script>