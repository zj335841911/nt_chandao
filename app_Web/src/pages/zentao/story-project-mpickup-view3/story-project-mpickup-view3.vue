<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import StoryProjectMPickupView3Base from './story-project-mpickup-view3-base.vue';

import view_pickupviewpanel from '@widgets/story/project-mpickup-view3pickupviewpanel-pickupviewpanel/project-mpickup-view3pickupviewpanel-pickupviewpanel.vue';
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
export default class StoryProjectMPickupView3 extends StoryProjectMPickupView3Base {

}
</script>