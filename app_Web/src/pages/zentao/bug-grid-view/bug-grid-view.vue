<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugGridViewBase from './bug-grid-view-base.vue';

import view_grid from '@widgets/bug/main-grid/main-grid.vue';
import view_searchform from '@widgets/bug/default-searchform/default-searchform.vue';
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
export default class BugGridView extends BugGridViewBase {

}
</script>