<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestReportGridViewBase from './test-report-grid-view-base.vue';

import view_grid from '@widgets/test-report/main-grid/main-grid.vue';
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
export default class TestReportGridView extends TestReportGridViewBase {

}
</script>