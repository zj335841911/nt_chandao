<template src="./task-kan-ban-panel.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskKanBanPANELBase } from './task-kan-ban-panel-base';
 

/**
 * itemlayoutpanel部件
 *
 * @export
 * @class TaskKanBan
 * @extends {TaskKanBanPanelBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TaskKanBanPanel extends TaskKanBanPANELBase { }
</script>
