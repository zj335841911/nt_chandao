<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseMainDashboardViewBase from './case-main-dashboard-view-base.vue';

import view_dashboard from '@widgets/case/main-dashboard-dashboard/main-dashboard-dashboard.vue';
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
export default class CaseMainDashboardView extends CaseMainDashboardViewBase {

}
</script>