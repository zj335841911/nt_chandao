<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskWorkHoursViewBase from './task-work-hours-view-base.vue';

import view_form from '@widgets/task/task-estimate-form/task-estimate-form.vue';
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
export default class TaskWorkHoursView extends TaskWorkHoursViewBase {

}
</script>