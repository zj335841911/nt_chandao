<script lang='ts'>
import { Component } from 'vue-property-decorator';
import FavoriteMOBBase from './favorite-mob-list-base.vue';

import layout_dashboard_sysportlet4_list_itempanel from '@widgets/task/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_dashboard_sysportlet4_list_itempanel,
         
    }
})
export default class FavoriteMOB extends FavoriteMOBBase {

}
</script>