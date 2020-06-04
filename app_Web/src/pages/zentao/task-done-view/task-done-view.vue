<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskDoneViewBase from './task-done-view-base.vue';

import view_form from '@widgets/task/complete-form-form/complete-form-form.vue';
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
export default class TaskDoneView extends TaskDoneViewBase {

}
</script>