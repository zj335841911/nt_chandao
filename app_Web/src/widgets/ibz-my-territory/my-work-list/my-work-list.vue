<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import MyWorkBase from './my-work-list-base.vue';

import layout_list_itempanel from '@widgets/ibz-my-territory/my-work2-panel/my-work2-panel.vue';
 
@Component({
    components: {
        layout_list_itempanel,
         
    }
})
export default class MyWork extends MyWorkBase {

}
</script>