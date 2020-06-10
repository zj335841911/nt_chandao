<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import DeptPickupViewBase from './dept-pickup-view-base.vue';

import view_pickupviewpanel from '@widgets/dept/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';
@Component({
    components: {
        view_pickupviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class DeptPickupView extends DeptPickupViewBase {

}
</script>