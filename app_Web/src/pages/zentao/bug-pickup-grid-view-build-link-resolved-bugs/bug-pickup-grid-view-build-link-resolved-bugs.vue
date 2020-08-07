<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugPickupGridView_buildLinkResolvedBugsBase from './bug-pickup-grid-view-build-link-resolved-bugs-base.vue';

import view_grid from '@widgets/bug/pickup-gird-grid/pickup-gird-grid.vue';
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
export default class BugPickupGridView_buildLinkResolvedBugs extends BugPickupGridView_buildLinkResolvedBugsBase {

}
</script>