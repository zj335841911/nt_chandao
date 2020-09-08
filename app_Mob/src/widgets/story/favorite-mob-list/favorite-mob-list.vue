<script lang='ts'>
import { Component } from 'vue-property-decorator';
import FavoriteMOBBase from './favorite-mob-list-base.vue';

import layout_dashboard_sysportlet5_list_itempanel from '@widgets/story/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_dashboard_sysportlet5_list_itempanel,
         
    }
})
export default class FavoriteMOB extends FavoriteMOBBase {

}
</script>