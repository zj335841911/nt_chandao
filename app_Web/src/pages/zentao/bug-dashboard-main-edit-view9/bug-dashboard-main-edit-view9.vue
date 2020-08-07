<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugDashboardMainEditView9Base from './bug-dashboard-main-edit-view9-base.vue';

import view_form from '@widgets/bug/dashboard-main-form/dashboard-main-form.vue';
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
export default class BugDashboardMainEditView9 extends BugDashboardMainEditView9Base {

}
</script>