<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestReportEditViewBase from './test-report-edit-view-base.vue';

import view_form from '@widgets/test-report/main-form/main-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class TestReportEditView extends TestReportEditViewBase {

}
</script>