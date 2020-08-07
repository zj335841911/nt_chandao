<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMPickupView3Base from './story-mpickup-view3-base.vue';

import view_pickupviewpanel from '@widgets/story/mpickup-view3pickupviewpanel-pickupviewpanel/mpickup-view3pickupviewpanel-pickupviewpanel.vue';
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
export default class StoryMPickupView3 extends StoryMPickupView3Base {

}
</script>