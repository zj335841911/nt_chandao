<template src="./get-roadmap-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapBase } from './get-roadmap-list-base';
 

/**
 * list2部件
 *
 * @export
 * @class GetRoadmap
 * @extends {GetRoadmapBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class GetRoadmap extends GetRoadmapBase { }
</script>
