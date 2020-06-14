<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainGridView9_ChildBase from './task-main-grid-view9-child-base.vue';

import view_grid from '@widgets/task/main2-grid/main2-grid.vue';
@Component({
    components: {
        view_grid, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class TaskMainGridView9_Child extends TaskMainGridView9_ChildBase {

}
</script>