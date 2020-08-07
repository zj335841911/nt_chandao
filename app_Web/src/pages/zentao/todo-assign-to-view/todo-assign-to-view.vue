<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TodoAssignToViewBase from './todo-assign-to-view-base.vue';

import view_form from '@widgets/todo/assignto-form-form/assignto-form-form.vue';
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
export default class TodoAssignToView extends TodoAssignToViewBase {

}
</script>