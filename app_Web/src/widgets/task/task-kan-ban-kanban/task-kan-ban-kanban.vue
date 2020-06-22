<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import TaskKanBanBase from './task-kan-ban-kanban-base.vue';
import layout_itemlayoutpanel from '@widgets/task/task-kan-ban-panel/task-kan-ban-panel.vue';
 

/**
 * kanban部件
 *
 * @export
 * @class TaskKanBan
 * @extends {TaskKanBanBase}
 */
@Component({
    components: {
        layout_itemlayoutpanel,
         
    }
})
export default class TaskKanBan extends TaskKanBanBase { }
</script>