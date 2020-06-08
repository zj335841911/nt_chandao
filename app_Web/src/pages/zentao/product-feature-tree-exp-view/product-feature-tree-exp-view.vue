<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductFeatureTreeExpViewBase from './product-feature-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/product/feature-tree-exp-viewtreeexpbar-treeexpbar/feature-tree-exp-viewtreeexpbar-treeexpbar.vue';
@Component({
    components: {
        view_treeexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductFeatureTreeExpView extends ProductFeatureTreeExpViewBase {

}
</script>