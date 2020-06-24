<template src="./assigned-to-me-case-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedToMeCasePortletBase } from './assigned-to-me-case-portlet-base';
 

/**
 * db_assigntomecaseportlet1部件
 *
 * @export
 * @class AssignedToMeCasePortlet
 * @extends {AssignedToMeCasePortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class AssignedToMeCasePortlet extends AssignedToMeCasePortletBase { }
</script>
