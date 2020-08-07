<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_container4 from '@widgets/todo/dashboard-viewdashboard-container4-portlet/dashboard-viewdashboard-container4-portlet.vue';
import view_dashboard_container3 from '@widgets/todo/dashboard-viewdashboard-container3-portlet/dashboard-viewdashboard-container3-portlet.vue';
import view_dashboard_container2 from '@widgets/todo/dashboard-viewdashboard-container2-portlet/dashboard-viewdashboard-container2-portlet.vue';
import view_dashboard_container1 from '@widgets/todo/dashboard-viewdashboard-container1-portlet/dashboard-viewdashboard-container1-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/todo/todoaction-portlet/todoaction-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/todo/todo-dashboard-actions-portlet/todo-dashboard-actions-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/todo/todo-desc-portlet/todo-desc-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/todo/todo-base-portlet/todo-base-portlet.vue';

 
@Component({
    components: {
        view_dashboard_container4, 
        view_dashboard_container3, 
        view_dashboard_container2, 
        view_dashboard_container1, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class Main extends MainBase {

}
</script>