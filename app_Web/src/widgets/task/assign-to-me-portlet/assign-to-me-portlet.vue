<template src="./assign-to-me-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignToMeBase } from './assign-to-me-portlet-base';
 

/**
 * db_assignedtometaskportlet部件
 *
 * @export
 * @class AssignToMe
 * @extends {AssignToMeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class AssignToMe extends AssignToMeBase { }
</script>
