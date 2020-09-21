<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyWorkBase from './my-work-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/ibz-my-territory/my-work2-panel/my-work2-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MyWork extends MyWorkBase {

}
</script>