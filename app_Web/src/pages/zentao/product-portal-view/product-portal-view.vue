<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPortalViewBase from './product-portal-view-base.vue';

import view_dashboard from '@widgets/app/product-portal-view-db-dashboard/product-portal-view-db-dashboard.vue';
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
export default class ProductPortalView extends ProductPortalViewBase {

}
</script>