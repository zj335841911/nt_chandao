<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskTeamGridView9Base from './task-team-grid-view9-base.vue';

import view_grid from '@widgets/ibztask-team/main-edit-row-grid/main-edit-row-grid.vue';
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
export default class TaskTeamGridView9 extends TaskTeamGridView9Base {

}
</script>