<template src="./storyspec-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryspecBase } from './storyspec-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class Storyspec
 * @extends {StoryspecBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Storyspec extends StoryspecBase { }
</script>
