<template src="./tree-main-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TreeMainGridBase } from './tree-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TreeMainGrid
 * @extends {TreeMainGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TreeMainGrid extends TreeMainGridBase { }
</script>
