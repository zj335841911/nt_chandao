<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskEstimateOptionViewBase from './task-estimate-option-view-base.vue';

import view_form from '@widgets/task-estimate/main-form/main-form.vue';
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
export default class TaskEstimateOptionView extends TaskEstimateOptionViewBase {

}
</script>