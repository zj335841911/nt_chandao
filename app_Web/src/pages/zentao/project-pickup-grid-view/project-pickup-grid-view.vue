<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectPickupGridViewBase from './project-pickup-grid-view-base.vue';

import view_grid from '@widgets/project/main-grid/main-grid.vue';
import view_searchform from '@widgets/project/default-searchform/default-searchform.vue';
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectPickupGridView extends ProjectPickupGridViewBase {

}
</script>