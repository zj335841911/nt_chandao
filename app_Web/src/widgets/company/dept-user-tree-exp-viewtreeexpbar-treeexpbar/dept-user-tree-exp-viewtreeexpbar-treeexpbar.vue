<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import DeptUserTreeExpViewtreeexpbarBase from './dept-user-tree-exp-viewtreeexpbar-treeexpbar-base.vue';
import view_treeexpbar_tree from '@widgets/company/dept-user-exp-treeview/dept-user-exp-treeview.vue';

 
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
export default class DeptUserTreeExpViewtreeexpbar extends DeptUserTreeExpViewtreeexpbarBase {

}
</script>