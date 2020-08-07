<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TodoDashboardViewBase from './todo-dashboard-view-base.vue';

import view_dashboard from '@widgets/todo/main-dashboard/main-dashboard.vue';
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
export default class TodoDashboardView extends TodoDashboardViewBase {

}
</script>