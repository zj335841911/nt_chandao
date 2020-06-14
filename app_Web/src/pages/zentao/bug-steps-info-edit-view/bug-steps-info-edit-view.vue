<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugStepsInfoEditViewBase from './bug-steps-info-edit-view-base.vue';

import view_form from '@widgets/bug/steps-info-form/steps-info-form.vue';
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
export default class BugStepsInfoEditView extends BugStepsInfoEditViewBase {

}
</script>