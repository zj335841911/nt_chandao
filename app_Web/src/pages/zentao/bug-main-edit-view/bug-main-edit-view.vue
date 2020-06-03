<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugMainEditViewBase from './bug-main-edit-view-base.vue';

import view_form from '@widgets/bug/dashboard-main-edit-form/dashboard-main-edit-form.vue';
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
export default class BugMainEditView extends BugMainEditViewBase {

}
</script>