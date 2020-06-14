<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainEditViewBase from './task-main-edit-view-base.vue';

import view_form from '@widgets/task/main-edit-form/main-edit-form.vue';
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
export default class TaskMainEditView extends TaskMainEditViewBase {

}
</script>