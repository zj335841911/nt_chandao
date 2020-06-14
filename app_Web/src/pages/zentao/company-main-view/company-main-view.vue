<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CompanyMainViewBase from './company-main-view-base.vue';

import view_dashboard from '@widgets/company/main-dashboard/main-dashboard.vue';
@Component({
    components: {
        view_dashboard, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class CompanyMainView extends CompanyMainViewBase {

}
</script>