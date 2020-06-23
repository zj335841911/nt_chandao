<template src="./test-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestBase } from './test-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Test
 * @extends {TestBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Test extends TestBase { }
</script>
