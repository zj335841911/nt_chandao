<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectEditView_PutoffBase from './project-edit-view-putoff-base.vue';

import view_form from '@widgets/project/putoff-form/putoff-form.vue';
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
export default class ProjectEditView_Putoff extends ProjectEditView_PutoffBase {

}
</script>