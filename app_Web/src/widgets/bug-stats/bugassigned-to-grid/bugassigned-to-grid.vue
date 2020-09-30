<template src="./bugassigned-to-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugassignedToGridBase } from './bugassigned-to-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class BugassignedToGrid
 * @extends {BugassignedToGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BugassignedToGrid extends BugassignedToGridBase { }
</script>
