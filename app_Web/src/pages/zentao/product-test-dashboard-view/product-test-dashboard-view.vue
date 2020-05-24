<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductTestDashboardViewBase from './product-test-dashboard-view-base.vue';

import view_dashboard from '@widgets/product/test-dashboard/test-dashboard.vue';
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
export default class ProductTestDashboardView extends ProductTestDashboardViewBase {

}
</script>