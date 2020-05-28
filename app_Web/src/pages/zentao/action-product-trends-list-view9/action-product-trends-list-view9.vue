<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ActionProductTrendsListView9Base from './action-product-trends-list-view9-base.vue';

import view_list from '@widgets/action/trends-list/trends-list.vue';
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
export default class ActionProductTrendsListView9 extends ActionProductTrendsListView9Base {

}
</script>