<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TodoDescEditView9Base from './todo-desc-edit-view9-base.vue';

import view_form from '@widgets/todo/dashboard-main-form/dashboard-main-form.vue';
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
export default class TodoDescEditView9 extends TodoDescEditView9Base {

}
</script>