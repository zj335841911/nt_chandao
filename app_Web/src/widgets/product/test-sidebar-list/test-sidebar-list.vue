<template src="./test-sidebar-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSidebarBase } from './test-sidebar-list-base';
 

/**
 * list部件
 *
 * @export
 * @class TestSidebar
 * @extends {TestSidebarBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestSidebar extends TestSidebarBase { }
</script>
