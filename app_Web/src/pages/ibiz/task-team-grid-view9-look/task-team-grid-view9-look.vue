<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskTeamGridView9_LookBase from './task-team-grid-view9-look-base.vue';

import view_grid from '@widgets/task-team/main-grid/main-grid.vue';
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
export default class TaskTeamGridView9_Look extends TaskTeamGridView9_LookBase {

}
</script>