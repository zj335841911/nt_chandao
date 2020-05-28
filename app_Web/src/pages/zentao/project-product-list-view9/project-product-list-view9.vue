<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProjectProductListView9Base from './project-product-list-view9-base.vue';

import view_list from '@widgets/project-product/default-list/default-list.vue';
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
export default class ProjectProductListView9 extends ProjectProductListView9Base {

}
</script>