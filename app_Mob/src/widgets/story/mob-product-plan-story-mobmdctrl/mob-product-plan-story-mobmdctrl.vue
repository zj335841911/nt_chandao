<script lang='ts'>
import { Component } from 'vue-property-decorator';
import Mob_ProductPlan_StoryBase from './mob-product-plan-story-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/story/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class Mob_ProductPlan_Story extends Mob_ProductPlan_StoryBase {

}
</script>