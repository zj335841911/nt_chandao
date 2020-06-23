<template src="./task-kan-ban-kanban.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskKanBanBase } from './task-kan-ban-kanban-base';
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
@VueLifeCycleProcessing()
export default class TaskKanBan extends TaskKanBanBase { }
</script>
