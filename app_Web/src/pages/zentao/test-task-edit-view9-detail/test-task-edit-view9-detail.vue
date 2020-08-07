<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskEditView9_DetailBase from './test-task-edit-view9-detail-base.vue';

import view_form from '@widgets/test-task/main-detail-form/main-detail-form.vue';
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
export default class TestTaskEditView9_Detail extends TestTaskEditView9_DetailBase {

}
</script>