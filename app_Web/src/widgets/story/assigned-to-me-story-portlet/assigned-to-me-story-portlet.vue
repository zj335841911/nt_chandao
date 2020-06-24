<template src="./assigned-to-me-story-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedToMeStoryPortletBase } from './assigned-to-me-story-portlet-base';
 

/**
 * db_assignedtomestoryportlet部件
 *
 * @export
 * @class AssignedToMeStory
 * @extends {AssignedToMeStoryPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class AssignedToMeStoryPortlet extends AssignedToMeStoryPortletBase { }
</script>
