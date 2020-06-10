<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductMainDashboardViewBase from './product-main-dashboard-view-base.vue';

import view_dashboard from '@widgets/product/main-dashboard/main-dashboard.vue';
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
export default class ProductMainDashboardView extends ProductMainDashboardViewBase {

}
</script>