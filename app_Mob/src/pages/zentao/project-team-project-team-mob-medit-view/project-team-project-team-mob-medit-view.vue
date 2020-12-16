<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProjectTeamProjectTeamMobMEditViewBase from './project-team-project-team-mob-medit-view-base.vue';

import view_meditviewpanel from '@widgets/project-team/project-team-multieditviewpanel/project-team-multieditviewpanel.vue';
@Component({
    components: {
        view_meditviewpanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectTeamProjectTeamMobMEditView extends ProjectTeamProjectTeamMobMEditViewBase {

}
</script>