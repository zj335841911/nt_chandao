<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MainBase from './main-dashboard-base.vue';
import view_dashboard_sysportlet2 from '@widgets/project-stats/stats-info-portlet/stats-info-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/project-stats/tasktime-portlet/tasktime-portlet.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet1, 
         
    }
})
export default class Main extends MainBase {

}
</script>