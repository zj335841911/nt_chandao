<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import ActionProjectTrendsListView9Base from './action-project-trends-list-view9-base.vue';

import view_list from '@widgets/action/trends-list/trends-list.vue';
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
export default class ActionProjectTrendsListView9 extends ActionProjectTrendsListView9Base {

}
</script>