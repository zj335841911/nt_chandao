<template src="./exp-treeview.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpBase } from './exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class Exp
 * @extends {ExpBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Exp extends ExpBase { }
</script>
