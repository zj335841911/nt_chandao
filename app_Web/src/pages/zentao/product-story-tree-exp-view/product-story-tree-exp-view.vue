<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductStoryTreeExpViewBase from './product-story-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/product/story-tree-exp-viewtreeexpbar-treeexpbar/story-tree-exp-viewtreeexpbar-treeexpbar.vue';
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
export default class ProductStoryTreeExpView extends ProductStoryTreeExpViewBase {

}
</script>