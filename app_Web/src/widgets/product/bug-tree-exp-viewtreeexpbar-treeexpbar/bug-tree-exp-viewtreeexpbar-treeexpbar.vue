<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugTreeExpViewtreeexpbarBase from './bug-tree-exp-viewtreeexpbar-treeexpbar-base.vue';
import view_treeexpbar_tree from '@widgets/product-module/bug-exp-treeview/bug-exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class BugTreeExpViewtreeexpbar
 * @extends {BugTreeExpViewtreeexpbarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
export default class BugTreeExpViewtreeexpbar extends BugTreeExpViewtreeexpbarBase { }
</script>