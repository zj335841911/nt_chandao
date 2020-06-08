<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseFeatureDashboardViewBase from './case-feature-dashboard-view-base.vue';

import view_dashboard from '@widgets/case/feature-dashboard-dashboard/feature-dashboard-dashboard.vue';
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
export default class CaseFeatureDashboardView extends CaseFeatureDashboardViewBase {

}
</script>