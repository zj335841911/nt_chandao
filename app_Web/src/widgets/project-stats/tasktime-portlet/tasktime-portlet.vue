
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectStatsTASKTIMEBase from './tasktime-portlet-base.vue';
import view_dashboard_sysportlet1_chart from '@widgets/project-stats/tasktime-chart/tasktime-chart.vue';

 
@Component({
    components: {
        view_dashboard_sysportlet1_chart, 
         
    }
})
export default class ProjectStatsTASKTIME extends ProjectStatsTASKTIMEBase {

}
</script>