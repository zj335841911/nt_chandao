<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryMPickupViewBase from './story-mpickup-view-base.vue';

import view_pickupviewpanel from '@widgets/story/mpickup-viewpickupviewpanel-pickupviewpanel/mpickup-viewpickupviewpanel-pickupviewpanel.vue';
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
export default class StoryMPickupView extends StoryMPickupViewBase {

}
</script>