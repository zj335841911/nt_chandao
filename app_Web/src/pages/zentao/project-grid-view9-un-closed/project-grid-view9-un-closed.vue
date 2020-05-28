<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectGridView9_UnClosedBase from './project-grid-view9-un-closed-base.vue';

import view_grid from '@widgets/project/main-grid/main-grid.vue';
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
export default class ProjectGridView9_UnClosed extends ProjectGridView9_UnClosedBase {

}
</script>