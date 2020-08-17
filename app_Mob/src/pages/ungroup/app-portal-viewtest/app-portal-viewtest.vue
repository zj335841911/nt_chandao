<script lang='ts'>
import { Component } from 'vue-property-decorator';
import AppPortalViewtestBase from './app-portal-viewtest-base.vue';

import view_dashboard from '@widgets/app/app-portal-viewtest-db-dashboard/app-portal-viewtest-db-dashboard.vue';
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
export default class AppPortalViewtest extends AppPortalViewtestBase {

}
</script>