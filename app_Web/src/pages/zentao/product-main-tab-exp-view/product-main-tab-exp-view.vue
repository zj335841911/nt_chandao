<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductMainTabExpViewBase from './product-main-tab-exp-view-base.vue';

import view_tabexppanel from '@widgets/product/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';
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
export default class ProductMainTabExpView extends ProductMainTabExpViewBase {

}
</script>