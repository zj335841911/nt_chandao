<template src="./test-sidebar-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSidebarListBase } from './test-sidebar-list-base';
 

/**
 * list部件
 *
 * @export
 * @class TestSidebar
 * @extends {TestSidebarListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestSidebarList extends TestSidebarListBase { }
</script>
