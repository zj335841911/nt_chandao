<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugTreeExpViewtreeexpbarBase from './bug-tree-exp-viewtreeexpbar-treeexpbar-base.vue';
import view_treeexpbar_tree from '@widgets/product-module/feature-case-exp-treeview/feature-case-exp-treeview.vue';

 
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
export default class BugTreeExpViewtreeexpbar extends BugTreeExpViewtreeexpbarBase {

}
</script>