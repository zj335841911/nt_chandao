<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TodoBaseEditView9Base from './todo-base-edit-view9-base.vue';

import view_form from '@widgets/todo/dashboard-basic-form/dashboard-basic-form.vue';
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
export default class TodoBaseEditView9 extends TodoBaseEditView9Base {

}
</script>