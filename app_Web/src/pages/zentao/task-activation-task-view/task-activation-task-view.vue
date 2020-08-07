<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskActivationTaskViewBase from './task-activation-task-view-base.vue';

import view_form from '@widgets/task/activation-form/activation-form.vue';
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
export default class TaskActivationTaskView extends TaskActivationTaskViewBase {

}
</script>