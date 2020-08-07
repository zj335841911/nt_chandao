<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectGridViewBase from './project-grid-view-base.vue';

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
export default class ProjectGridView extends ProjectGridViewBase {

}
</script>