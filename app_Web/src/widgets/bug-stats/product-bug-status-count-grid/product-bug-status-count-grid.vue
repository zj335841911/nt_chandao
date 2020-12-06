<template src="./product-bug-status-count-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugStatusCountGridBase } from './product-bug-status-count-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductBugStatusCountGrid
 * @extends {ProductBugStatusCountGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductBugStatusCountGrid extends ProductBugStatusCountGridBase {}
</script>
