<template src="./product-line-treeview.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductLineTreeBase } from './product-line-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ProductLineTree
 * @extends {ProductLineTreeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductLineTree extends ProductLineTreeBase { }
</script>
