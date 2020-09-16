<script lang='ts'>
import { Component } from 'vue-property-decorator';
import MyWorkBase from './my-work-calendar-base.vue';

import layout_tasklayoutpanel from '@widgets/task/mob-panel/mob-panel.vue';
import layout_buglayoutpanel from '@widgets/bug/mob-panel/mob-panel.vue';
 
@Component({
    components: {
        layout_tasklayoutpanel,
        layout_buglayoutpanel,
         
    }
})
export default class MyWork extends MyWorkBase {

}
</script>