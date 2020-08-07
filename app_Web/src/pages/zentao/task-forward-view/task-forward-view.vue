<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskForwardViewBase from './task-forward-view-base.vue';

import view_form from '@widgets/task/forward-form/forward-form.vue';
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
export default class TaskForwardView extends TaskForwardViewBase {

}
</script>