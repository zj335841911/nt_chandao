<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskKanbanViewBase from './task-kanban-view-base.vue';

import view_kanban from '@widgets/task/task-kan-ban-kanban/task-kan-ban-kanban.vue';
@Component({
    components: {
        view_kanban, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskKanbanView extends TaskKanbanViewBase {

}
</script>