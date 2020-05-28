<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectDashboardInfoViewBase from './project-dashboard-info-view-base.vue';

import view_form from '@widgets/project/dash-board-info-form/dash-board-info-form.vue';
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
export default class ProjectDashboardInfoView extends ProjectDashboardInfoViewBase {

}
</script>