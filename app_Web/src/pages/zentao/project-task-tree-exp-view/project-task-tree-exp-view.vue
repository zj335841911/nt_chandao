<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectTaskTreeExpViewBase from './project-task-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/project/task-tree-exp-viewtreeexpbar-treeexpbar/task-tree-exp-viewtreeexpbar-treeexpbar.vue';
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
export default class ProjectTaskTreeExpView extends ProjectTaskTreeExpViewBase {

}
</script>