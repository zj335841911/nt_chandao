<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugMPickupView2Base from './bug-mpickup-view2-base.vue';

import view_pickupviewpanel from '@widgets/bug/mpickup-view2pickupviewpanel-pickupviewpanel/mpickup-view2pickupviewpanel-pickupviewpanel.vue';
@Component({
    components: {
        view_pickupviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class BugMPickupView2 extends BugMPickupView2Base {

}
</script>