<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskPivotTableViewBase from './task-pivot-table-view-base.vue';

import view_grid from '@widgets/task/pivot-table-grid/pivot-table-grid.vue';
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
export default class TaskPivotTableView extends TaskPivotTableViewBase {

}
</script>