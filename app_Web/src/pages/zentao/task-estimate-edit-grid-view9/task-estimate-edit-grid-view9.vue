<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskEstimateEditGridView9Base from './task-estimate-edit-grid-view9-base.vue';

import view_grid from '@widgets/task-estimate/main-edit-grid/main-edit-grid.vue';
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
export default class TaskEstimateEditGridView9 extends TaskEstimateEditGridView9Base {

}
</script>