<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseCurTestTaskGridViewBase from './case-cur-test-task-grid-view-base.vue';

import view_grid from '@widgets/case/test-main-grid-grid/test-main-grid-grid.vue';
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
export default class CaseCurTestTaskGridView extends CaseCurTestTaskGridViewBase {

}
</script>