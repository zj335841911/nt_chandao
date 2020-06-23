<template src="./story-spec-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StorySpecBase } from './story-spec-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StorySpec
 * @extends {StorySpecBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class StorySpec extends StorySpecBase { }
</script>
