<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestModuleGridViewBranchBase from './test-module-grid-view-branch-base.vue';

import view_grid from '@widgets/test-module/main-branch-grid/main-branch-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TestModuleGridViewBranch extends TestModuleGridViewBranchBase {

}
</script>