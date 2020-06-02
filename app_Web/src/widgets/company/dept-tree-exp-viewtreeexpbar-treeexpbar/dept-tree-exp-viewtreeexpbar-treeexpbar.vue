<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import DeptTreeExpViewtreeexpbarBase from './dept-tree-exp-viewtreeexpbar-treeexpbar-base.vue';
import view_treeexpbar_tree from '@widgets/company/dept-exp-treeview/dept-exp-treeview.vue';

 
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
export default class DeptTreeExpViewtreeexpbar extends DeptTreeExpViewtreeexpbarBase {

}
</script>