<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectProductPlanListView9Base from './project-product-plan-list-view9-base.vue';

import view_list from '@widgets/project-product/plan-list/plan-list.vue';
@Component({
    components: {
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProjectProductPlanListView9 extends ProjectProductPlanListView9Base {

}
</script>