<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskTeamGridView9_EditBase from './task-team-grid-view9-edit-base.vue';

import view_grid from '@widgets/ibztask-team/main-edit-grid/main-edit-grid.vue';
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
export default class TaskTeamGridView9_Edit extends TaskTeamGridView9_EditBase {

}
</script>