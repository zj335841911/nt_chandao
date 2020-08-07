
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TodoDashboardViewdashboard_container1Base from './dashboard-viewdashboard-container1-portlet-base.vue';

import view_dashboard_container2 from '@/widgets/todo/dashboard-viewdashboard-container2-portlet/dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container3 from '@/widgets/todo/dashboard-viewdashboard-container3-portlet/dashboard-viewdashboard-container3-portlet.vue';
 
@Component({
    components: {
        view_dashboard_container2, 
view_dashboard_container3, 
 
    }
})
export default class TodoDashboardViewdashboard_container1 extends TodoDashboardViewdashboard_container1Base {

}
</script>