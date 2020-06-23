<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TreeExpViewtreeexpbarBase from './tree-exp-viewtreeexpbar-treeexpbar-base.vue';
import view_treeexpbar_tree from '@widgets/project-module/module-exp-treeview/module-exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class TreeExpViewtreeexpbar
 * @extends {TreeExpViewtreeexpbarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
export default class TreeExpViewtreeexpbar extends TreeExpViewtreeexpbarBase { }
</script>