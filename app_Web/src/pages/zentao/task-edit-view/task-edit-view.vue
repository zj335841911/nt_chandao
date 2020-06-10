<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskEditViewBase from './task-edit-view-base.vue';

import view_form from '@widgets/task/main-form/main-form.vue';
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
export default class TaskEditView extends TaskEditViewBase {

}
</script>