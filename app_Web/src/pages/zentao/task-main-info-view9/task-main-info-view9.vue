<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskMainInfoView9Base from './task-main-info-view9-base.vue';

import view_form from '@widgets/task/main-info-form/main-info-form.vue';
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
export default class TaskMainInfoView9 extends TaskMainInfoView9Base {

}
</script>