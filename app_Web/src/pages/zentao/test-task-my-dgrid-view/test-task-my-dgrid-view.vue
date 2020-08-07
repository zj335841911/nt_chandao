<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskMyDGridViewBase from './test-task-my-dgrid-view-base.vue';

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
export default class TestTaskMyDGridView extends TestTaskMyDGridViewBase {

}
</script>