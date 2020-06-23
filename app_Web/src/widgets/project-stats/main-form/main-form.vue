<template src="./main-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainBase } from './main-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Main
 * @extends {MainBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main extends MainBase { }
</script>
<style lang='less'>
@import './main-form.less';
</style>
