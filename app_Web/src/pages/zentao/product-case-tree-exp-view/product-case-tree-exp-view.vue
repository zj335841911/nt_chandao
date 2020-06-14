<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductCaseTreeExpViewBase from './product-case-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/product/case-tree-exp-viewtreeexpbar-treeexpbar/case-tree-exp-viewtreeexpbar-treeexpbar.vue';
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
export default class ProductCaseTreeExpView extends ProductCaseTreeExpViewBase {

}
</script>