<template src="./steps-info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StepsInfoPortletBase } from './steps-info-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class StepsInfo
 * @extends {StepsInfoPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class StepsInfoPortlet extends StepsInfoPortletBase { }
</script>
