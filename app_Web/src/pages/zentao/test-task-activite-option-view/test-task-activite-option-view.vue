<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskActiviteOptionViewBase from './test-task-activite-option-view-base.vue';

import view_form from '@widgets/test-task/activite-form/activite-form.vue';
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
export default class TestTaskActiviteOptionView extends TestTaskActiviteOptionViewBase {

}
</script>