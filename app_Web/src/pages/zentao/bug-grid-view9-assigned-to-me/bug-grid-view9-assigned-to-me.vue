<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugGridView9_AssignedToMeBase from './bug-grid-view9-assigned-to-me-base.vue';

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
export default class BugGridView9_AssignedToMe extends BugGridView9_AssignedToMeBase {

}
</script>