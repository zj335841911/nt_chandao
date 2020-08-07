<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestTaskBlockOptionViewBase from './test-task-block-option-view-base.vue';

import view_form from '@widgets/test-task/block-form/block-form.vue';
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
export default class TestTaskBlockOptionView extends TestTaskBlockOptionViewBase {

}
</script>