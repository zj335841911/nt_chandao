<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectLeftSidebarListViewBase from './project-left-sidebar-list-view-base.vue';

import view_list from '@widgets/project/sidebar-list/sidebar-list.vue';
@Component({
    components: {
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectLeftSidebarListView extends ProjectLeftSidebarListViewBase {

}
</script>