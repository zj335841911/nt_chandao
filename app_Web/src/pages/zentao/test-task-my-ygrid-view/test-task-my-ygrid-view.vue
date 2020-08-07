<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskMyYGridViewBase from './test-task-my-ygrid-view-base.vue';

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
export default class TestTaskMyYGridView extends TestTaskMyYGridViewBase {

}
</script>