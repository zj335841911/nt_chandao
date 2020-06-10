<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import CompanyDeptUserTreeExpViewBase from './company-dept-user-tree-exp-view-base.vue';

import view_treeexpbar from '@widgets/company/dept-user-tree-exp-viewtreeexpbar-treeexpbar/dept-user-tree-exp-viewtreeexpbar-treeexpbar.vue';
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
export default class CompanyDeptUserTreeExpView extends CompanyDeptUserTreeExpViewBase {

}
</script>