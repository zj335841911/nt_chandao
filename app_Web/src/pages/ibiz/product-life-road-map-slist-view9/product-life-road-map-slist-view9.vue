<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ProductLifeRoadMapSListView9Base from './product-life-road-map-slist-view9-base.vue';

import view_list2 from '@widgets/product-life/get-roadmap-s-list/get-roadmap-s-list.vue';
import view_list from '@widgets/product-life/get-roadmap-year-s-list/get-roadmap-year-s-list.vue';
@Component({
    components: {
        view_list2, 
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ProductLifeRoadMapSListView9 extends ProductLifeRoadMapSListView9Base {

}
</script>