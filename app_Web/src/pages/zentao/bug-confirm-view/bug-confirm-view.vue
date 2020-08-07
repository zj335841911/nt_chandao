<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugConfirmViewBase from './bug-confirm-view-base.vue';

import view_form from '@widgets/bug/confirm-form/confirm-form.vue';
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
export default class BugConfirmView extends BugConfirmViewBase {

}
</script>