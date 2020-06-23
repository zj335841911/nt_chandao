<template src="./dash-borad-info-view-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashBoradInfoViewBase } from './dash-borad-info-view-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class DashBoradInfoView
 * @extends {DashBoradInfoViewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DashBoradInfoView extends DashBoradInfoViewBase { }
</script>
