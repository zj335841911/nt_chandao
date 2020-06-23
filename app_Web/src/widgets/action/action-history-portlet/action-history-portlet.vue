<template src="./action-history-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionHistoryBase } from './action-history-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class ActionHistory
 * @extends {ActionHistoryBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ActionHistory extends ActionHistoryBase { }
</script>
