<template src="./action-bar-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionBarBase } from './action-bar-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class ActionBar
 * @extends {ActionBarBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ActionBar extends ActionBarBase { }
</script>
