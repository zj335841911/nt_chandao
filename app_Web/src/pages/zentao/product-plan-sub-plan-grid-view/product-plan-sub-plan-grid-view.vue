<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPlanSubPlanGridViewBase from './product-plan-sub-plan-grid-view-base.vue';

import view_grid from '@widgets/sub-product-plan/main-sub-plan-grid/main-sub-plan-grid.vue';
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
export default class ProductPlanSubPlanGridView extends ProductPlanSubPlanGridViewBase {

}
</script>