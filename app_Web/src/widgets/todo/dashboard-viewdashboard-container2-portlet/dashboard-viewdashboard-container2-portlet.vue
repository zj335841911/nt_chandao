
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TodoDashboardViewdashboard_container2Base from './dashboard-viewdashboard-container2-portlet-base.vue';

import view_dashboard_sysportlet3 from '@/widgets/todo/todo-desc-portlet/todo-desc-portlet.vue';
import view_dashboard_sysportlet4 from '@/widgets/todo/todoaction-portlet/todoaction-portlet.vue';
import view_dashboard_container4 from '@/widgets/todo/dashboard-viewdashboard-container4-portlet/dashboard-viewdashboard-container4-portlet.vue';
 
@Component({
    components: {
        view_dashboard_sysportlet3, 
view_dashboard_sysportlet4, 
view_dashboard_container4, 
 
    }
})
export default class TodoDashboardViewdashboard_container2 extends TodoDashboardViewdashboard_container2Base {

}
</script>