<template src="./welcome-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WelcomePortletBase } from './welcome-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class WelcomePortlet
 * @extends {WelcomePortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WelcomePortlet extends WelcomePortletBase { }
</script>
