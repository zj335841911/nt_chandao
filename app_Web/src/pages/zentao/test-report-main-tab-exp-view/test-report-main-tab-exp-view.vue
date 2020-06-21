<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestReportMainTabExpViewBase from './test-report-main-tab-exp-view-base.vue';

import view_tabexppanel from '@widgets/test-report/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class TestReportMainTabExpView extends TestReportMainTabExpViewBase {

}
</script>