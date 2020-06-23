<template src="./task-kan-ban-panel.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskKanBanBase } from './task-kan-ban-panel-base';
 

/**
 * itemlayoutpanel部件
 *
 * @export
 * @class TaskKanBan
 * @extends {TaskKanBanBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TaskKanBan extends TaskKanBanBase { }
</script>
