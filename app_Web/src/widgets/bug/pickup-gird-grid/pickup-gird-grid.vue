<template src="./pickup-gird-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PickupGirdBase } from './pickup-gird-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class PickupGird
 * @extends {PickupGirdBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class PickupGird extends PickupGirdBase { }
</script>
