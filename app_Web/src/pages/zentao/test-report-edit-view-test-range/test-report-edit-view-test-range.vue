<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestReportEditView_TestRangeBase from './test-report-edit-view-test-range-base.vue';

import view_form from '@widgets/test-report/test-range-form/test-range-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class TestReportEditView_TestRange extends TestReportEditView_TestRangeBase {

}
</script>