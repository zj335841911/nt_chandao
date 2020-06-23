<template src="./main-release-sub-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_ReleaseSubBase } from './main-release-sub-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_ReleaseSub
 * @extends {Main_ReleaseSubBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_ReleaseSub extends Main_ReleaseSubBase { }
</script>
