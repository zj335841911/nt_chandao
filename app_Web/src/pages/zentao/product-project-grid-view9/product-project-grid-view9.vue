<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductProjectGridView9Base from './product-project-grid-view9-base.vue';

import view_grid from '@widgets/product/main-project-grid/main-project-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductProjectGridView9 extends ProductProjectGridView9Base {

}
</script>