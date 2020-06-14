<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductModuleGridViewBase from './product-module-grid-view-base.vue';

import view_grid from '@widgets/product-module/main-grid/main-grid.vue';
import view_searchform from '@widgets/product-module/default-searchform/default-searchform.vue';
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProductModuleGridView extends ProductModuleGridViewBase {

}
</script>