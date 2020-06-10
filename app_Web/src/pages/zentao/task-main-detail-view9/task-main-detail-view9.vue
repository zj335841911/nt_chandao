<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainDetailView9Base from './task-main-detail-view9-base.vue';

import view_form from '@widgets/task/main-detail-form/main-detail-form.vue';
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
export default class TaskMainDetailView9 extends TaskMainDetailView9Base {

}
</script>