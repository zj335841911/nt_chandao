<template src="./main-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainBase } from './main-grid-base';
 

/**
 * grid部件
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
