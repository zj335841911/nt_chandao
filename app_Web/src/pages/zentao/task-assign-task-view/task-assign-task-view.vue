<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskAssignTaskViewBase from './task-assign-task-view-base.vue';

import view_form from '@widgets/task/assign-form-form/assign-form-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskAssignTaskView extends TaskAssignTaskViewBase {

}
</script>