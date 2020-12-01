<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyReceivedBase from './my-received-mobmdctrl-base.vue';

import layout_mdctrl_itempanel from '@widgets/ibz-monthly/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_mdctrl_itempanel,
         
    }
})
export default class MyReceived extends MyReceivedBase {

}
</script>