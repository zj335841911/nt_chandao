<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugAssMoreMobMDViewBase from './bug-ass-more-mob-mdview-base.vue';

import view_mdctrl from '@widgets/bug/mob-my-mobmdctrl/mob-my-mobmdctrl.vue';
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
export default class BugAssMoreMobMDView extends BugAssMoreMobMDViewBase {

}
</script>