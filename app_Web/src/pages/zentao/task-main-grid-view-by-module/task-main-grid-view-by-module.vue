<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainGridView_ByModuleBase from './task-main-grid-view-by-module-base.vue';

import view_grid from '@widgets/task/main-grid/main-grid.vue';
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
export default class TaskMainGridView_ByModule extends TaskMainGridView_ByModuleBase {

}
</script>