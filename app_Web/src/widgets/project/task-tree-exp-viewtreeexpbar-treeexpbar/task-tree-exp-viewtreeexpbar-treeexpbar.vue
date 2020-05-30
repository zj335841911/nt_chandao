<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskTreeExpViewtreeexpbarBase from './task-tree-exp-viewtreeexpbar-treeexpbar-base.vue';
import view_treeexpbar_tree from '@widgets/product-module/task-exp-treeview/task-exp-treeview.vue';

 
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
export default class TaskTreeExpViewtreeexpbar extends TaskTreeExpViewtreeexpbarBase {

}
</script>