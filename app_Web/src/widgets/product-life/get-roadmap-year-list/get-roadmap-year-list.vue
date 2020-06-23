<template src="./get-roadmap-year-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapYearBase } from './get-roadmap-year-list-base';
 

/**
 * list部件
 *
 * @export
 * @class GetRoadmapYear
 * @extends {GetRoadmapYearBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class GetRoadmapYear extends GetRoadmapYearBase { }
</script>
