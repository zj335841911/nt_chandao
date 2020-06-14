<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductBugTreeExpViewBase from './product-bug-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/product/bug-tree-exp-viewtreeexpbar-treeexpbar/bug-tree-exp-viewtreeexpbar-treeexpbar.vue';
@Component({
    components: {
        view_treeexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProductBugTreeExpView extends ProductBugTreeExpViewBase {

}
</script>