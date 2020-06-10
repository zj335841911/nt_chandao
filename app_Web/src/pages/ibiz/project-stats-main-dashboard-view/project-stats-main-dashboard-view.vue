<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectStatsMainDashboardViewBase from './project-stats-main-dashboard-view-base.vue';

import view_dashboard from '@widgets/project-stats/main-dashboard/main-dashboard.vue';
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectStatsMainDashboardView extends ProjectStatsMainDashboardViewBase {

}
</script>