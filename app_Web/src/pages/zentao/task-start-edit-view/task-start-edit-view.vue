<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskStartEditViewBase from './task-start-edit-view-base.vue';

import view_form from '@widgets/task/start-form-form/start-form-form.vue';
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
export default class TaskStartEditView extends TaskStartEditViewBase {

}
</script>