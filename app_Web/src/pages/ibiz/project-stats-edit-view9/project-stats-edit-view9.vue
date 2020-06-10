<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectStatsEditView9Base from './project-stats-edit-view9-base.vue';

import view_form from '@widgets/project-stats/main-form/main-form.vue';
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
export default class ProjectStatsEditView9 extends ProjectStatsEditView9Base {

}
</script>