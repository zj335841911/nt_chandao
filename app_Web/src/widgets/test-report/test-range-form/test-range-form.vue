<template src="./test-range-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestRangeBase } from './test-range-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TestRange
 * @extends {TestRangeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestRange extends TestRangeBase { }
</script>
