<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ModuleTreeExpViewBase from './module-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';
@Component({
    components: {
        view_treeexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ModuleTreeExpView extends ModuleTreeExpViewBase {

}
</script>