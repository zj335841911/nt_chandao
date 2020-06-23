<template src="./group-trends-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GroupTrendsBase } from './group-trends-list-base';
 

/**
 * list部件
 *
 * @export
 * @class GroupTrends
 * @extends {GroupTrendsBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class GroupTrends extends GroupTrendsBase { }
</script>
