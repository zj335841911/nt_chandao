<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductModuleGridViewBranchBase from './product-module-grid-view-branch-base.vue';

import view_grid from '@widgets/product-module/main-branch-grid/main-branch-grid.vue';
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
export default class ProductModuleGridViewBranch extends ProductModuleGridViewBranchBase {

}
</script>