<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectTeamMainGridView_EditRowBase from './project-team-main-grid-view-edit-row-base.vue';

import view_grid from '@widgets/project-team/main-edit-row-grid/main-edit-row-grid.vue';
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
export default class ProjectTeamMainGridView_EditRow extends ProjectTeamMainGridView_EditRowBase {

}
</script>