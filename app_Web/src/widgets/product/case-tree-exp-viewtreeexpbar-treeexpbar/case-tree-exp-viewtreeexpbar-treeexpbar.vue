<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseTreeExpViewtreeexpbarBase from './case-tree-exp-viewtreeexpbar-treeexpbar-base.vue';
import view_treeexpbar_tree from '@widgets/product-module/case-exp-treeview/case-exp-treeview.vue';

 
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
export default class CaseTreeExpViewtreeexpbar extends CaseTreeExpViewtreeexpbarBase {

}
</script>