<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BranchPMGridViewBase from './branch-pmgrid-view-base.vue';

import view_grid from '@widgets/branch/platform-management-grid/platform-management-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class BranchPMGridView extends BranchPMGridViewBase {

}
</script>