<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskPauseTaskViewBase from './task-pause-task-view-base.vue';

import view_form from '@widgets/task/close-pause-cancel-form-form/close-pause-cancel-form-form.vue';
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
export default class TaskPauseTaskView extends TaskPauseTaskViewBase {

}
</script>