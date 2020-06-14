<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskGridView9_AssignedToMeBase from './task-grid-view9-assigned-to-me-base.vue';

import view_grid from '@widgets/task/main2-grid/main2-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class TaskGridView9_AssignedToMe extends TaskGridView9_AssignedToMeBase {

}
</script>