<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskWorkInfoEditView9Base from './task-work-info-edit-view9-base.vue';

import view_form from '@widgets/task/work-info-form-form/work-info-form-form.vue';
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
export default class TaskWorkInfoEditView9 extends TaskWorkInfoEditView9Base {

}
</script>