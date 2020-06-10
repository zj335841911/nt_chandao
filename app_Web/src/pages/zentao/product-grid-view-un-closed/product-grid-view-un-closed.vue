<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductGridView_UnClosedBase from './product-grid-view-un-closed-base.vue';

import view_grid from '@widgets/product/main2-grid/main2-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProductGridView_UnClosed extends ProductGridView_UnClosedBase {

}
</script>