<template src="./pickup-grid-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PickupGridBase } from './pickup-grid-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class PickupGrid
 * @extends {PickupGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class PickupGrid extends PickupGridBase { }
</script>
