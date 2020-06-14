<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductLeftSidebarListViewBase from './product-left-sidebar-list-view-base.vue';

import view_list from '@widgets/product/sidebar-list/sidebar-list.vue';
@Component({
    components: {
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
export default class ProductLeftSidebarListView extends ProductLeftSidebarListViewBase {

}
</script>