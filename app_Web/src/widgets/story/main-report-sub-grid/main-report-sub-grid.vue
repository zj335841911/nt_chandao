<template src="./main-report-sub-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_ReportSubBase } from './main-report-sub-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_ReportSub
 * @extends {Main_ReportSubBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_ReportSub extends Main_ReportSubBase { }
</script>
