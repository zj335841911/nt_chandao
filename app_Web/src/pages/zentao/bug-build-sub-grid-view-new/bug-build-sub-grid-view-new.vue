<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugBuildSubGridView_NewBase from './bug-build-sub-grid-view-new-base.vue';

import view_grid from '@widgets/bug/main-build-sub-grid/main-build-sub-grid.vue';
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
export default class BugBuildSubGridView_New extends BugBuildSubGridView_NewBase {

}
</script>