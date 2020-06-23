<template src="./batch-new-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BatchNewBase } from './batch-new-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class BatchNew
 * @extends {BatchNewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BatchNew extends BatchNewBase { }
</script>
