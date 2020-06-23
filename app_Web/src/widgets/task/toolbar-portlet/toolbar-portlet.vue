<template src="./toolbar-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ToolbarBase } from './toolbar-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class Toolbar
 * @extends {ToolbarBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Toolbar extends ToolbarBase { }
</script>
