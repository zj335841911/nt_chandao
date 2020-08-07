<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectMainView_EditBase from './project-main-view-edit-base.vue';

import view_form from '@widgets/project/main-edit-form/main-edit-form.vue';
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
export default class ProjectMainView_Edit extends ProjectMainView_EditBase {

}
</script>