<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskGridViewBase from './test-task-grid-view-base.vue';

import view_grid from '@widgets/test-task/main-grid/main-grid.vue';
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
export default class TestTaskGridView extends TestTaskGridViewBase {

}
</script>