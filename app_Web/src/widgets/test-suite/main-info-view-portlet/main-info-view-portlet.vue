<template src="./main-info-view-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainInfoViewBase } from './main-info-view-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class MainInfoView
 * @extends {MainInfoViewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainInfoView extends MainInfoViewBase { }
</script>
