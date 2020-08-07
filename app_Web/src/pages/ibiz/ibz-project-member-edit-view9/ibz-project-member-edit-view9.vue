<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import IbzProjectMemberEditView9Base from './ibz-project-member-edit-view9-base.vue';

import view_form from '@widgets/ibz-project-member/main-form/main-form.vue';
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
export default class IbzProjectMemberEditView9 extends IbzProjectMemberEditView9Base {

}
</script>