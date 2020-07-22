<template src="./my-work-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyWorkListBase } from './my-work-list-base';
 

/**
 * list部件
 *
 * @export
 * @class MyWorkList
 * @extends {MyWorkListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MyWorkList extends MyWorkListBase { }
</script>
