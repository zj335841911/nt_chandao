<template src="./main2-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main2Base } from './main2-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Main2
 * @extends {Main2Base}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main2 extends Main2Base { }
</script>
<style lang='less'>
@import './main2-form.less';
</style>
