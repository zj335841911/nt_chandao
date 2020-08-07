<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import IbzMyTerritoryListView9Base from './ibz-my-territory-list-view9-base.vue';

import view_list from '@widgets/ibz-my-territory/my-work-list/my-work-list.vue';
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
export default class IbzMyTerritoryListView9 extends IbzMyTerritoryListView9Base {

}
</script>