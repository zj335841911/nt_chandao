<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskMainDashboardViewBase from './test-task-main-dashboard-view-base.vue';

import view_dashboard from '@widgets/test-task/dash-board-dashboard/dash-board-dashboard.vue';
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
export default class TestTaskMainDashboardView extends TestTaskMainDashboardViewBase {

}
</script>