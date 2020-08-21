<script lang='ts'>
import { Component } from 'vue-property-decorator';
import BugPlanMobMDView9Base from './bug-plan-mob-mdview9-base.vue';

import view_mdctrl from '@widgets/bug/mob-mobmdctrl/mob-mobmdctrl.vue';
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
export default class BugPlanMobMDView9 extends BugPlanMobMDView9Base {

}
</script>