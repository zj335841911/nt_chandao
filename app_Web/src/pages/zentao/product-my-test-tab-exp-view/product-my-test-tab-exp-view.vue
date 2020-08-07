<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductMyTestTabExpViewBase from './product-my-test-tab-exp-view-base.vue';

import view_tabexppanel from '@widgets/product/my-test-tab-exp-viewtabexppanel-tabexppanel/my-test-tab-exp-viewtabexppanel-tabexppanel.vue';
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
export default class ProductMyTestTabExpView extends ProductMyTestTabExpViewBase {

}
</script>