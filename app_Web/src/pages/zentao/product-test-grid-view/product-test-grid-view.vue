<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductTestGridViewBase from './product-test-grid-view-base.vue';

import view_grid from '@widgets/product/test-grid/test-grid.vue';
import view_searchform from '@widgets/product/default-searchform/default-searchform.vue';
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
export default class ProductTestGridView extends ProductTestGridViewBase {

}
</script>