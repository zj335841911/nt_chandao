<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskEditView9_InfoBase from './test-task-edit-view9-info-base.vue';

import view_form from '@widgets/test-task/main-info-form/main-info-form.vue';
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
export default class TestTaskEditView9_Info extends TestTaskEditView9_InfoBase {

}
</script>