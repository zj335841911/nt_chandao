<template src="./stats-info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StatsInfoPortletBase } from './stats-info-portlet-base';
 

/**
 * dashboard_sysportlet7部件
 *
 * @export
 * @class StatsInfoPortlet
 * @extends {StatsInfoPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class StatsInfoPortlet extends StatsInfoPortletBase { }
</script>
