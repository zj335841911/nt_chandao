<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectEditView_SuspendBase from './project-edit-view-suspend-base.vue';

import view_form from '@widgets/project/suspend-nclose-form/suspend-nclose-form.vue';
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
export default class ProjectEditView_Suspend extends ProjectEditView_SuspendBase {

}
</script>