<template src="./main-detail-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDetailBase } from './main-detail-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class MainDetail
 * @extends {MainDetailBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainDetail extends MainDetailBase { }
</script>
