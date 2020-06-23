<template src="./assigned-to-me-bug-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedToMeBugBase } from './assigned-to-me-bug-portlet-base';
 

/**
 * db_assigntomebugportlet1部件
 *
 * @export
 * @class AssignedToMeBug
 * @extends {AssignedToMeBugBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class AssignedToMeBug extends AssignedToMeBugBase { }
</script>
