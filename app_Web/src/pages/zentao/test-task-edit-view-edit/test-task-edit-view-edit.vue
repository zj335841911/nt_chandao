<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskEditView_EditBase from './test-task-edit-view-edit-base.vue';

import view_form from '@widgets/test-task/main-edit-form/main-edit-form.vue';
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
export default class TestTaskEditView_Edit extends TestTaskEditView_EditBase {

}
</script>