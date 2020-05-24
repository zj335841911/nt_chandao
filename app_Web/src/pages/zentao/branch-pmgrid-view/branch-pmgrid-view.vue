<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BranchPMGridViewBase from './branch-pmgrid-view-base.vue';

import view_grid from '@widgets/branch/platform-management-grid/platform-management-grid.vue';
import view_searchform from '@widgets/branch/default-searchform/default-searchform.vue';
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class BranchPMGridView extends BranchPMGridViewBase {

}
</script>