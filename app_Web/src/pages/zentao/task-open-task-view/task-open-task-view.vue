<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskOpenTaskViewBase from './task-open-task-view-base.vue';

import view_form from '@widgets/task/start-form-form/start-form-form.vue';
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
export default class TaskOpenTaskView extends TaskOpenTaskViewBase {

}
</script>