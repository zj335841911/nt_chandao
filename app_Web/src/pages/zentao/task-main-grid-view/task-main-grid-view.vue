<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainGridViewBase from './task-main-grid-view-base.vue';

import view_grid from '@widgets/task/main-grid/main-grid.vue';
import view_searchform from '@widgets/task/default-searchform/default-searchform.vue';
@Component({
    components: {
        view_grid, 
        view_searchform, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TaskMainGridView extends TaskMainGridViewBase {

}
</script>