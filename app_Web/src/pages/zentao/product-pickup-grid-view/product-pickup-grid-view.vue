<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPickupGridViewBase from './product-pickup-grid-view-base.vue';

import view_grid from '@widgets/product/main-grid/main-grid.vue';
import view_searchform from '@widgets/product/default-searchform/default-searchform.vue';
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductPickupGridView extends ProductPickupGridViewBase {

}
</script>