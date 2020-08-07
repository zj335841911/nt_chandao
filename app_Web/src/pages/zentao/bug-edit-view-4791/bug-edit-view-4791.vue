<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugEditView_4791Base from './bug-edit-view-4791-base.vue';

import view_form from '@widgets/bug/build-bug-new-form/build-bug-new-form.vue';
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
export default class BugEditView_4791 extends BugEditView_4791Base {

}
</script>