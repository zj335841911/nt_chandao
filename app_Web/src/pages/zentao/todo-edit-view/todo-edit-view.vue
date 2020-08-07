<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TodoEditViewBase from './todo-edit-view-base.vue';

import view_form from '@widgets/todo/edit-form-form/edit-form-form.vue';
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
export default class TodoEditView extends TodoEditViewBase {

}
</script>