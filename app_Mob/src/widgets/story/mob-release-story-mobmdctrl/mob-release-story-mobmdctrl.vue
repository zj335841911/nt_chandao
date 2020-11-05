<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MOB_Release_StoryBase from './mob-release-story-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/story/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MOB_Release_Story extends MOB_Release_StoryBase {

}
</script>