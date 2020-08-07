<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskTodoEditViewBase from './task-todo-edit-view-base.vue';

import view_form from '@widgets/task/pending-submission-form/pending-submission-form.vue';
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
export default class TaskTodoEditView extends TaskTodoEditViewBase {

}
</script>