<template src="./base-info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BaseInfoBase } from './base-info-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class BaseInfo
 * @extends {BaseInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BaseInfo extends BaseInfoBase { }
</script>
