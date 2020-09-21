<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryLinkStoryMobPickupMDViewBase from './story-link-story-mob-pickup-mdview-base.vue';

import view_mdctrl from '@widgets/story/mob-mobmdctrl/mob-mobmdctrl.vue';
@Component({
    components: {
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StoryLinkStoryMobPickupMDView extends StoryLinkStoryMobPickupMDViewBase {

}
</script>