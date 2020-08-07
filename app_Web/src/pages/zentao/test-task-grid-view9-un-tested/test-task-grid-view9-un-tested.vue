<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskGridView9_UnTestedBase from './test-task-grid-view9-un-tested-base.vue';

import view_grid from '@widgets/test-task/main2-grid/main2-grid.vue';
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
export default class TestTaskGridView9_UnTested extends TestTaskGridView9_UnTestedBase {

}
</script>