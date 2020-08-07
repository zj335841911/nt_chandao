<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskStartOptionViewBase from './test-task-start-option-view-base.vue';

import view_form from '@widgets/test-task/start-form/start-form.vue';
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
export default class TestTaskStartOptionView extends TestTaskStartOptionViewBase {

}
</script>