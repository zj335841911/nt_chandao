<template src="./case-exp-treeview.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseExpBase } from './case-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class CaseExp
 * @extends {CaseExpBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class CaseExp extends CaseExpBase { }
</script>
