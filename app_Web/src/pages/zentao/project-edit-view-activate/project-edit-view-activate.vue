<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectEditView_ActivateBase from './project-edit-view-activate-base.vue';

import view_form from '@widgets/project/activate-form/activate-form.vue';
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
export default class ProjectEditView_Activate extends ProjectEditView_ActivateBase {

}
</script>