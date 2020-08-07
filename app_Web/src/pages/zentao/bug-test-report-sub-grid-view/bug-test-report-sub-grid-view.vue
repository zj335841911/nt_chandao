<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import BugTestReportSubGridViewBase from './bug-test-report-sub-grid-view-base.vue';

import view_grid from '@widgets/bug/main-report-sub-grid/main-report-sub-grid.vue';
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
export default class BugTestReportSubGridView extends BugTestReportSubGridViewBase {

}
</script>