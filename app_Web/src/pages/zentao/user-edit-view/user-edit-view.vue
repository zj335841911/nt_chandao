<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import UserEditViewBase from './user-edit-view-base.vue';

import view_form from '@widgets/user/main-form/main-form.vue';
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
export default class UserEditView extends UserEditViewBase {

}
</script>