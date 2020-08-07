<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseTestMainDashboardViewBase from './case-test-main-dashboard-view-base.vue';

import view_dashboard from '@widgets/case/main-dashboard-test-dashboard/main-dashboard-test-dashboard.vue';
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class CaseTestMainDashboardView extends CaseTestMainDashboardViewBase {

}
</script>