<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskEstimateGridView9Base from './task-estimate-grid-view9-base.vue';

import view_grid from '@widgets/ibztask-estimate/main-grid/main-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskEstimateGridView9 extends TaskEstimateGridView9Base {

}
</script>