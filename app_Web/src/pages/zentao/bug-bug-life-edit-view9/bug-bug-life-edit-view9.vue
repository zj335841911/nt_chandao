<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugBugLifeEditView9Base from './bug-bug-life-edit-view9-base.vue';

import view_form from '@widgets/bug/dashboard-bug-life-form/dashboard-bug-life-form.vue';
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
export default class BugBugLifeEditView9 extends BugBugLifeEditView9Base {

}
</script>