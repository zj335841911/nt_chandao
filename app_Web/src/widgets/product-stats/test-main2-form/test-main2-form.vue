<template src="./test-main2-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestMain2Base } from './test-main2-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TestMain2
 * @extends {TestMain2Base}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestMain2 extends TestMain2Base { }
</script>
<style lang='less'>
@import './test-main2-form.less';
</style>
