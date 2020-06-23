<template src="./test-exp-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestExpBase } from './test-exp-list-base';
 

/**
 * listexpbar_list部件
 *
 * @export
 * @class TestExp
 * @extends {TestExpBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestExp extends TestExpBase { }
</script>
