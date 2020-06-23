<template src="./main-info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainInfoBase } from './main-info-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class MainInfo
 * @extends {MainInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainInfo extends MainInfoBase { }
</script>
