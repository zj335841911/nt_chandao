<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugResolveViewBase from './bug-resolve-view-base.vue';

import view_form from '@widgets/bug/resolve-form/resolve-form.vue';
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
export default class BugResolveView extends BugResolveViewBase {

}
</script>