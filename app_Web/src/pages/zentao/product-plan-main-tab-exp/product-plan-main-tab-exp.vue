<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductPlanMainTabExpBase from './product-plan-main-tab-exp-base.vue';

import view_tabexppanel from '@widgets/product-plan/main-tab-exptabexppanel-tabexppanel/main-tab-exptabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductPlanMainTabExp extends ProductPlanMainTabExpBase {

}
</script>