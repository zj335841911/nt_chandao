<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import IbzMyTerritoryTabExpViewBase from './ibz-my-territory-tab-exp-view-base.vue';

import view_tabexppanel from '@widgets/ibz-my-territory/tab-exp-viewtabexppanel-tabexppanel/tab-exp-viewtabexppanel-tabexppanel.vue';
@Component({
    components: {
        view_tabexppanel, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzMyTerritoryTabExpView extends IbzMyTerritoryTabExpViewBase {

}
</script>