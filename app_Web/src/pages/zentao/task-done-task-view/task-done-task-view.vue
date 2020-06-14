<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskDoneTaskViewBase from './task-done-task-view-base.vue';

import view_form from '@widgets/task/complete-form-form/complete-form-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class TaskDoneTaskView extends TaskDoneTaskViewBase {

}
</script>