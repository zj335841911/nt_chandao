<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskEditView_commitTestBase from './test-task-edit-view-commit-test-base.vue';

import view_form from '@widgets/test-task/build-submit-form/build-submit-form.vue';
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
export default class TestTaskEditView_commitTest extends TestTaskEditView_commitTestBase {

}
</script>