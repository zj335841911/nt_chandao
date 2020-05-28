
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectProjectStatusBarBase from './project-status-bar-portlet-base.vue';
import view_db_projectstatusportlet_chart from '@widgets/project/project-status-bar-chart/project-status-bar-chart.vue';

 
@Component({
    components: {
        view_db_projectstatusportlet_chart, 
         
    }
})
export default class ProjectProjectStatusBar extends ProjectProjectStatusBarBase {

}
</script>