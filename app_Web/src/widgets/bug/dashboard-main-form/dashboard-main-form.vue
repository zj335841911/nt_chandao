<template src="./dashboard-main-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardMainBase } from './dashboard-main-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashboardMain
 * @extends {DashboardMainBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DashboardMain extends DashboardMainBase { }
</script>
