<template src="./trends-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TrendsBase } from './trends-list-base';
 

/**
 * list部件
 *
 * @export
 * @class Trends
 * @extends {TrendsBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Trends extends TrendsBase { }
</script>
