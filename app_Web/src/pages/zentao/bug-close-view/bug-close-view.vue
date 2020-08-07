<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugCloseViewBase from './bug-close-view-base.vue';

import view_form from '@widgets/bug/close-form/close-form.vue';
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
export default class BugCloseView extends BugCloseViewBase {

}
</script>