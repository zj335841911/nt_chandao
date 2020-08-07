<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ActionHistoryListViewBase from './action-history-list-view-base.vue';

import view_history from '@widgets/history/default-list/default-list.vue';
import view_list from '@widgets/action/classify-by-type-list/classify-by-type-list.vue';
@Component({
    components: {
        view_history, 
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class ActionHistoryListView extends ActionHistoryListViewBase {

}
</script>