<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugBuildSubGridView_DoneBase from './bug-build-sub-grid-view-done-base.vue';

import view_grid from '@widgets/bug/main-build-sub2-grid/main-build-sub2-grid.vue';
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
export default class BugBuildSubGridView_Done extends BugBuildSubGridView_DoneBase {

}
</script>