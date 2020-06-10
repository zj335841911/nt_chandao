<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugReleaseSubGridView_UndoneBase from './bug-release-sub-grid-view-undone-base.vue';

import view_grid from '@widgets/bug/main-grid/main-grid.vue';
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
export default class BugReleaseSubGridView_Undone extends BugReleaseSubGridView_UndoneBase {

}
</script>