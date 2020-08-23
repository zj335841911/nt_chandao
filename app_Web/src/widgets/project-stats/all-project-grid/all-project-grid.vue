<template src="./all-project-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AllProjectGridBase } from './all-project-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class AllProjectGrid
 * @extends {AllProjectGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class AllProjectGrid extends AllProjectGridBase { }
</script>
