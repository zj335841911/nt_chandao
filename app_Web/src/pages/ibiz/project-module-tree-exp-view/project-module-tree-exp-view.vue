<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectModuleTreeExpViewBase from './project-module-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/project-module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';
@Component({
    components: {
        view_treeexpbar, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectModuleTreeExpView extends ProjectModuleTreeExpViewBase {

}
</script>