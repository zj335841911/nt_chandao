<template src="./exp-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpBase } from './exp-list-base';
 

/**
 * listexpbar_list部件
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
