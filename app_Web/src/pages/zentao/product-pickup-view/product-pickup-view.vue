<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPickupViewBase from './product-pickup-view-base.vue';

import view_pickupviewpanel from '@widgets/product/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';
@Component({
    components: {
        view_pickupviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProductPickupView extends ProductPickupViewBase {

}
</script>