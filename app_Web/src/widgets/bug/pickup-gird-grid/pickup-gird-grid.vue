<template src="./pickup-gird-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PickupGirdGridBase } from './pickup-gird-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class PickupGird
 * @extends {PickupGirdGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class PickupGirdGrid extends PickupGirdGridBase { }
</script>
