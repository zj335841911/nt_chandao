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
 * @extends {TaskKanBanPANELBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TaskKanBanPANEL extends TaskKanBanPANELBase { }
</script>
