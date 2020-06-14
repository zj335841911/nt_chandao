<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskSubTaskNewViewBase from './task-sub-task-new-view-base.vue';

import view_grid from '@widgets/sub-task/sub-task-new-grid/sub-task-new-grid.vue';
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
export default class TaskSubTaskNewView extends TaskSubTaskNewViewBase {

}
</script>