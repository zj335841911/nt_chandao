<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TestPortalViewBase from './test-portal-view-base.vue';

import view_dashboard from '@widgets/app/test-portal-view-db-dashboard/test-portal-view-db-dashboard.vue';
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
export default class TestPortalView extends TestPortalViewBase {

}
</script>