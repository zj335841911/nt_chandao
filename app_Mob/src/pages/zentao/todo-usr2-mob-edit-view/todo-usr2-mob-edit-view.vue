<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TodoUsr2MobEditViewBase from './todo-usr2-mob-edit-view-base.vue';

import view_form from '@widgets/todo/zt-todo-form/zt-todo-form.vue';
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
export default class TodoUsr2MobEditView extends TodoUsr2MobEditViewBase {

}
</script>