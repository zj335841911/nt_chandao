<script lang='ts'>
import { Component } from 'vue-property-decorator';
import TaskFavoriteMobMDViewBase from './task-favorite-mob-mdview-base.vue';

import view_mdctrl from '@widgets/task/favorite-mob-mobmdctrl/favorite-mob-mobmdctrl.vue';
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
export default class TaskFavoriteMobMDView extends TaskFavoriteMobMDViewBase {

}
</script>