<template src="./to-test-test-task-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ToTestTestTaskBase } from './to-test-test-task-portlet-base';
 

/**
 * db_sysportlet1部件
 *
 * @export
 * @class ToTestTestTask
 * @extends {ToTestTestTaskBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ToTestTestTask extends ToTestTestTaskBase { }
</script>
