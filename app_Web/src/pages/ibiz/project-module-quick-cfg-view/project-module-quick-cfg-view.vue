<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectModuleQuickCfgViewBase from './project-module-quick-cfg-view-base.vue';

import view_form from '@widgets/project-module/main-form/main-form.vue';
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
export default class ProjectModuleQuickCfgView extends ProjectModuleQuickCfgViewBase {

}
</script>