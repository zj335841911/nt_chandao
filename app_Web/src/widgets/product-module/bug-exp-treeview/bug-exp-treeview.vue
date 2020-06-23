<template src="./bug-exp-treeview.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugExpBase } from './bug-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class BugExp
 * @extends {BugExpBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BugExp extends BugExpBase { }
</script>
