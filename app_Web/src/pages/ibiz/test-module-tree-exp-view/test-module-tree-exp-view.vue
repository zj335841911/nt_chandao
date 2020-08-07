<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestModuleTreeExpViewBase from './test-module-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/test-module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';
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
export default class TestModuleTreeExpView extends TestModuleTreeExpViewBase {

}
</script>