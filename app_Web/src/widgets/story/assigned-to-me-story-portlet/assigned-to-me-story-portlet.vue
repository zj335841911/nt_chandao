<template src="./assigned-to-me-story-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedToMeStoryBase } from './assigned-to-me-story-portlet-base';
 

/**
 * db_assignedtomestoryportlet部件
 *
 * @export
 * @class AssignedToMeStory
 * @extends {AssignedToMeStoryBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class AssignedToMeStory extends AssignedToMeStoryBase { }
</script>
