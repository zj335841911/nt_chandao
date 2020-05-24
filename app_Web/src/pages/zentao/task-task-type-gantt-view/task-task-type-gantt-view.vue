<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskTaskTypeGanttViewBase from './task-task-type-gantt-view-base.vue';

import view_gantt from '@widgets/task/type-gantt-gantt/type-gantt-gantt.vue';
@Component({
    components: {
        view_gantt, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskTaskTypeGanttView extends TaskTaskTypeGanttViewBase {

}
</script>