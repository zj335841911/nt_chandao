<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskAssMobMDViewBase from './task-ass-mob-mdview-base.vue';

import view_mdctrl from '@widgets/task/ass-mob-mobmdctrl/ass-mob-mobmdctrl.vue';
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
export default class TaskAssMobMDView extends TaskAssMobMDViewBase {

}
</script>