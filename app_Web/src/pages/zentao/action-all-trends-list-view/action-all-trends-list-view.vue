<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ActionAllTrendsListViewBase from './action-all-trends-list-view-base.vue';

import view_list from '@widgets/action/group-trends-list/group-trends-list.vue';
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
export default class ActionAllTrendsListView extends ActionAllTrendsListViewBase {

}
</script>