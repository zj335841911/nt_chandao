<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugPickupGridViewBase from './bug-pickup-grid-view-base.vue';

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
export default class BugPickupGridView extends BugPickupGridViewBase {

}
</script>