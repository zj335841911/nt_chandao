<template src="./dashboard-info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardInfoBase } from './dashboard-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashboardInfo
 * @extends {DashboardInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DashboardInfo extends DashboardInfoBase { }
</script>
