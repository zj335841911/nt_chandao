<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugBuildSubGridView_New_9212Base from './bug-build-sub-grid-view-new-9212-base.vue';

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
export default class BugBuildSubGridView_New_9212 extends BugBuildSubGridView_New_9212Base {

}
</script>