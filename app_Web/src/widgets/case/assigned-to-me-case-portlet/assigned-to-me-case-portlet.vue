<template src="./assigned-to-me-case-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedToMeCaseBase } from './assigned-to-me-case-portlet-base';
 

/**
 * db_assigntomecaseportlet1部件
 *
 * @export
 * @class AssignedToMeCase
 * @extends {AssignedToMeCaseBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class AssignedToMeCase extends AssignedToMeCaseBase { }
</script>
