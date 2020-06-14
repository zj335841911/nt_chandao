<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugReleaseSubGridView_DoneBase from './bug-release-sub-grid-view-done-base.vue';

import view_grid from '@widgets/bug/main-plan-sub-grid/main-plan-sub-grid.vue';
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
export default class BugReleaseSubGridView_Done extends BugReleaseSubGridView_DoneBase {

}
</script>