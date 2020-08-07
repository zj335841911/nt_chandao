<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectPortalViewBase from './project-portal-view-base.vue';

import view_dashboard from '@widgets/app/project-portal-view-db-dashboard/project-portal-view-db-dashboard.vue';
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectPortalView extends ProjectPortalViewBase {

}
</script>