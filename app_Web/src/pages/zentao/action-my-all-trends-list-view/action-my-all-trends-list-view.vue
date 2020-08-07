<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ActionMyAllTrendsListViewBase from './action-my-all-trends-list-view-base.vue';

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
export default class ActionMyAllTrendsListView extends ActionMyAllTrendsListViewBase {

}
</script>