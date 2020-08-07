<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CaseTestOptionViewBase from './case-test-option-view-base.vue';

import view_form from '@widgets/case/main-test-task-form/main-test-task-form.vue';
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
export default class CaseTestOptionView extends CaseTestOptionViewBase {

}
</script>