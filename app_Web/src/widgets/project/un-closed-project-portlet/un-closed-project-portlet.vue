<template src="./un-closed-project-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UnClosedProjectBase } from './un-closed-project-portlet-base';
 

/**
 * db_projectunclosedportlet部件
 *
 * @export
 * @class UnClosedProject
 * @extends {UnClosedProjectBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class UnClosedProject extends UnClosedProjectBase { }
</script>
