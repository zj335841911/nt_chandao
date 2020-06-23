<template src="./sidebar-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SidebarBase } from './sidebar-list-base';
 

/**
 * list部件
 *
 * @export
 * @class Sidebar
 * @extends {SidebarBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Sidebar extends SidebarBase { }
</script>
