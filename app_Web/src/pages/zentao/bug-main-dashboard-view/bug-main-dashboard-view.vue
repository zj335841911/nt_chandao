<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugMainDashboardViewBase from './bug-main-dashboard-view-base.vue';

import view_dashboard from '@widgets/bug/main-dashboard/main-dashboard.vue';
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
export default class BugMainDashboardView extends BugMainDashboardViewBase {

}
</script>