<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import IbzMyTerritoryDashboardViewBase from './ibz-my-territory-dashboard-view-base.vue';

import view_dashboard from '@widgets/ibz-my-territory/home-dashboard/home-dashboard.vue';
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
export default class IbzMyTerritoryDashboardView extends IbzMyTerritoryDashboardViewBase {

}
</script>