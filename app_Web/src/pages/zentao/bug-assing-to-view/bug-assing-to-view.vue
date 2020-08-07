<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugAssingToViewBase from './bug-assing-to-view-base.vue';

import view_form from '@widgets/bug/assign-to-form/assign-to-form.vue';
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
export default class BugAssingToView extends BugAssingToViewBase {

}
</script>