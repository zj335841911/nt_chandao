<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectMainMyGridViewBase from './project-main-my-grid-view-base.vue';

import view_grid from '@widgets/project/main-my-grid/main-my-grid.vue';
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
export default class ProjectMainMyGridView extends ProjectMainMyGridViewBase {

}
</script>