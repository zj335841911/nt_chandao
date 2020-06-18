<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseCurTestTaskGridViewBase from './case-cur-test-task-grid-view-base.vue';

import view_grid from '@widgets/case/main-grid-grid/main-grid-grid.vue';
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
export default class CaseCurTestTaskGridView extends CaseCurTestTaskGridViewBase {

}
</script>