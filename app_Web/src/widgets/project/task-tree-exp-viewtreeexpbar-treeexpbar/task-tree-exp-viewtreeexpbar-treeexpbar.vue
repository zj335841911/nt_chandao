<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskTreeExpViewtreeexpbarBase from './task-tree-exp-viewtreeexpbar-treeexpbar-base.vue';
import view_treeexpbar_tree from '@widgets/project-module/task-module-exp-treeview/task-module-exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class TaskTreeExpViewtreeexpbar
 * @extends {TaskTreeExpViewtreeexpbarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
export default class TaskTreeExpViewtreeexpbar extends TaskTreeExpViewtreeexpbarBase { }
</script>